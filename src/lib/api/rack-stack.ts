// Rack Stack API Service - PDF Processing, OCR, and Document Classification

import { RACK_STACK_CONFIG, isRackStackConfigured } from '../config/credentials';
import { readJsonFromS3 } from './s3-upload';

export interface RackStackRequest {
  bucket_name: string;
  object_name: string;
  output_destination: string;
}

export interface RackStackResponse {
  document_info: {
    input_bucket_name: string;
    input_object_name: string;
    output_destination: string;
    processing_timestamp: string;
    dag_run_id: string;
    task_instance_id: string;
  };
  pdf_processing: {
    flattened: boolean;
    size_bytes: number;
  };
  ocr_extraction: {
    pages_processed: string;
    text_length: number;
    text_preview: string;
    full_text: string;
  };
  classification: {
    category: string;
    confidence: number;
  };
  processing_status: string;
  workflow_version: string;
  output_info: {
    saved_to_s3: boolean;
    s3_bucket: string;
    s3_key: string;
    file_size_bytes: number;
    upload_timestamp: string;
  };
}

export interface RackStackJobStatus {
  dag_run_id: string;
  state: 'queued' | 'running' | 'success' | 'failed';
  execution_date: string;
  conf: Record<string, any>;
}

export interface ProcessingResult {
  success: boolean;
  status: 'ai-verified' | 'failed' | 'in_progress';
  confidence?: number;
  category?: string;
  categoryId?: string;
  processing_status?: string;
  message?: string;
  fullResult?: RackStackResponse;
  failureReason?: 'low_confidence' | 'category_mismatch' | 'both';
}

/**
 * Extract category ID from classification category string
 * Example: "349_Borrowers_Authorization" -> "349"
 */
function extractCategoryId(category: string): string | null {
  const match = category.match(/^(\d+)_/);
  return match ? match[1] : null;
}

/**
 * Poll S3 for processing results with timeout
 * @param outputDestination - S3 URI where results will be saved
 * @param expectedDocumentId - Expected document ID to validate against (e.g., "349", "502")
 * @param maxAttempts - Maximum number of polling attempts (default: 9 for ~90 seconds)
 * @param intervalMs - Interval between attempts in milliseconds (default: 10000 = 10 seconds)
 */
export async function pollForResults(
  outputDestination: string,
  expectedDocumentId?: string,
  maxAttempts: number = 9,
  intervalMs: number = 10000
): Promise<ProcessingResult> {
  console.log('🔄 Starting polling for results:', {
    outputDestination,
    expectedDocumentId,
    maxAttempts,
    intervalMs,
    totalWaitTime: `${(maxAttempts * intervalMs) / 1000} seconds`
  });

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      console.log(`🔍 Polling attempt ${attempt}/${maxAttempts}...`);
      
      const result = await readJsonFromS3(outputDestination);
      
      if (result !== null) {
        // Result found! Validate it
        console.log('✅ Processing result found:', result);
        
        const { classification, processing_status } = result;
        
        // Check if processing completed successfully
        if (processing_status === 'completed') {
          const confidence = classification?.confidence || 0;
          const category = classification?.category || 'Unknown';
          const categoryId = extractCategoryId(category);
          
          // Round confidence to 2 decimal places
          const roundedConfidence = Math.round(confidence * 100) / 100;
          
          // Check confidence threshold (95% = 0.95)
          const hasLowConfidence = confidence < 0.95;
          
          // Check category match if expectedDocumentId is provided
          const hasCategoryMismatch = expectedDocumentId && categoryId !== expectedDocumentId;
          
          // Determine if verification passed
          const verificationPassed = !hasLowConfidence && !hasCategoryMismatch;
          
          if (verificationPassed) {
            return {
              success: true,
              status: 'ai-verified',
              confidence: roundedConfidence,
              category,
              categoryId: categoryId || undefined,
              processing_status,
              message: `Document classified as ${category} with ${(roundedConfidence * 100).toFixed(0)}% confidence`,
              fullResult: result
            };
          } else {
            // Determine failure reason
            let failureReason: 'low_confidence' | 'category_mismatch' | 'both';
            let message: string;
            
            if (hasLowConfidence && hasCategoryMismatch) {
              failureReason = 'both';
              message = `Low confidence: ${(roundedConfidence * 100).toFixed(0)}% (required: 95%) AND category mismatch: expected ${expectedDocumentId}, got ${categoryId}`;
            } else if (hasLowConfidence) {
              failureReason = 'low_confidence';
              message = `Low confidence: ${(roundedConfidence * 100).toFixed(0)}% (required: 95%)`;
            } else {
              failureReason = 'category_mismatch';
              message = `Category mismatch: expected ${expectedDocumentId}, got ${categoryId}`;
            }
            
            return {
              success: false,
              status: 'failed',
              confidence: roundedConfidence,
              category,
              categoryId: categoryId || undefined,
              processing_status,
              message,
              failureReason,
              fullResult: result
            };
          }
        } else {
          // Processing completed but not successfully
          return {
            success: false,
            status: 'failed',
            processing_status,
            message: `Processing status: ${processing_status}`
          };
        }
      }
      
      // Result not found yet, wait before next attempt
      if (attempt < maxAttempts) {
        console.log(`⏳ Result not ready, waiting ${intervalMs / 1000} seconds before retry...`);
        await new Promise(resolve => setTimeout(resolve, intervalMs));
      }
      
    } catch (error) {
      console.error(`❌ Error during polling attempt ${attempt}:`, error);
      
      // If it's the last attempt, return failure
      if (attempt === maxAttempts) {
        return {
          success: false,
          status: 'failed',
          message: `Polling failed: ${error instanceof Error ? error.message : 'Unknown error'}`
        };
      }
      
      // Otherwise, wait and retry
      await new Promise(resolve => setTimeout(resolve, intervalMs));
    }
  }
  
  // Timeout - processing took too long
  return {
    success: false,
    status: 'failed',
    message: `Processing timeout: Result not available after ${(maxAttempts * intervalMs) / 1000} seconds`
  };
}

/**
 * Trigger Rack Stack processing for a document
 * @param s3Bucket - S3 bucket containing the document
 * @param s3Key - S3 key path to the document
 * @param documentId - Document type identifier
 */
export async function triggerRackStackProcessing(
  s3Bucket: string,
  s3Key: string,
  documentId: string
): Promise<{ success: boolean; dag_run_id?: string; message?: string; response?: any; output_destination?: string }> {
  try {
    if (!isRackStackConfigured()) {
      throw new Error('Rack Stack API credentials not configured in src/lib/config/credentials.ts');
    }

    const outputDestination = `s3://${RACK_STACK_CONFIG.OUTPUT_BUCKET}/${RACK_STACK_CONFIG.OUTPUT_PREFIX}${documentId}_${Date.now()}.json`;
    
    const requestPayload: { conf: RackStackRequest } = {
      conf: {
        bucket_name: s3Bucket,
        object_name: s3Key,
        output_destination: outputDestination,
      },
    };

    console.log('🚀 Triggering Rack Stack API:', {
      endpoint: RACK_STACK_CONFIG.API_URL,
      payload: requestPayload,
    });

    // Create Basic Auth header
    const authHeader = `Basic ${btoa(`${RACK_STACK_CONFIG.USERNAME}:${RACK_STACK_CONFIG.PASSWORD}`)}`;

    const response = await fetch(RACK_STACK_CONFIG.API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader,
      },
      body: JSON.stringify(requestPayload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API request failed: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const result = await response.json();
    
    console.log('✅ Rack Stack job triggered:', result);
    
    // TODO: REMOVE THIS CONSOLE LOGGING IN PRODUCTION
    // This is for observation during development to see the full AWS S3 processing
    console.group('═══════════════════════════════════════');
    console.group('📋 RACK STACK API RESPONSE (FULL PAYLOAD)');
    console.log('Request Details:');
    console.log('  - Document ID:', documentId);
    console.log('  - S3 Bucket:', s3Bucket);
    console.log('  - S3 Key:', s3Key);
    console.log('  - Output Destination:', outputDestination);
    console.log('\nAPI Response:');
    console.log(JSON.stringify(result, null, 2));
    console.groupEnd();
    console.log('═══════════════════════════════════════');
    console.groupEnd();

    return {
      success: true,
      dag_run_id: result.dag_run_id,
      output_destination: outputDestination,
      message: 'Document processing job started successfully',
      response: result, // Return full response for observation
    };

  } catch (error) {
    console.error('❌ Rack Stack API error:', error);
    
    // TODO: REMOVE THIS CONSOLE LOGGING IN PRODUCTION
    console.group('═══════════════════════════════════════');
    console.group('❌ RACK STACK API ERROR');
    console.error('Error Details:', error);
    console.error('Document ID:', documentId);
    console.error('S3 Bucket:', s3Bucket);
    console.error('S3 Key:', s3Key);
    console.groupEnd();
    console.log('═══════════════════════════════════════');
    console.groupEnd();
    
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

/**
 * Trigger Rack Stack for multiple documents
 */
export async function triggerRackStackBatch(
  documents: Array<{ s3Bucket: string; s3Key: string; documentId: string }>
): Promise<Array<{ documentId: string; success: boolean; dag_run_id?: string; error?: string }>> {
  const results = await Promise.allSettled(
    documents.map(async (doc) => {
      const result = await triggerRackStackProcessing(doc.s3Bucket, doc.s3Key, doc.documentId);
      return {
        documentId: doc.documentId,
        success: result.success,
        dag_run_id: result.dag_run_id,
        error: result.message,
      };
    })
  );

  return results.map((result, index) => {
    if (result.status === 'fulfilled') {
      return result.value;
    } else {
      return {
        documentId: documents[index].documentId,
        success: false,
        error: result.reason?.message || 'Processing failed',
      };
    }
  });
}

// Re-export for convenience
export { isRackStackConfigured };

