// Rack Stack API Service - PDF Processing, OCR, and Document Classification

import { RACK_STACK_CONFIG, isRackStackConfigured } from '../config/credentials';

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
): Promise<{ success: boolean; dag_run_id?: string; message?: string; response?: any }> {
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

