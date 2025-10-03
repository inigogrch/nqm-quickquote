// Conditions Check API - check_condition_v2 DAG

import { RACK_STACK_CONFIG, isRackStackConfigured } from '../config/credentials';
import { readJsonFromS3 } from './s3-upload';

/**
 * Conditions API Types
 */
export interface ConditionRequest {
  id: number;
  name: string;
  data: {
    Title: string;
    Category: string;
    Description: string;
  };
}

export interface S3PdfPath {
  bucket: string;
  key: string;
}

export interface CheckConditionsRequest {
  conf: {
    conditions: Array<{ condition: ConditionRequest }>;
    s3_pdf_paths: S3PdfPath[];
    output_destination: string;
  };
}

export interface ProcessedCondition {
  result_document_id: string;
  condition_id: number;
  title: string;
  description: string;
  category: string;
  is_relevant: string;
  document_status: 'fulfilled' | 'not fulfilled';
  document_analysis: string;
  document_analysis_thinking: string;
}

export interface CheckConditionsResponse {
  workflow_info: {
    dag_id: string;
    processing_timestamp: string;
    dag_run_id: string;
    task_instance_id: string;
    input_pdf_paths: S3PdfPath[];
    output_destination: string;
  };
  processed_conditions: ProcessedCondition[];
  processing_status: string;
  workflow_version: string;
}

/**
 * Trigger check_condition_v2 workflow
 * @param conditions - Array of conditions to check
 * @param s3PdfPaths - Array of S3 PDF paths to analyze
 * @param outputBucket - S3 bucket for results (defaults to RACK_STACK_CONFIG.OUTPUT_BUCKET)
 * @param outputPrefix - S3 prefix for results (defaults to RACK_STACK_CONFIG.OUTPUT_PREFIX)
 */
export async function triggerConditionsCheck(
  conditions: ConditionRequest[],
  s3PdfPaths: S3PdfPath[],
  outputBucket?: string,
  outputPrefix?: string
): Promise<{ success: boolean; dag_run_id?: string; message?: string; output_destination?: string }> {
  try {
    if (!isRackStackConfigured()) {
      throw new Error('Rack Stack API credentials not configured in src/lib/config/credentials.ts');
    }

    // Use environment variables if not provided
    const bucket = outputBucket || RACK_STACK_CONFIG.OUTPUT_BUCKET;
    const prefix = outputPrefix || RACK_STACK_CONFIG.OUTPUT_PREFIX;

    // Generate output destination
    const timestamp = Date.now();
    const outputDestination = `${bucket}/${prefix}conditions_${timestamp}.json`;
    
    const requestPayload: CheckConditionsRequest = {
      conf: {
        conditions: conditions.map(c => ({ condition: c })),
        s3_pdf_paths: s3PdfPaths,
        output_destination: outputDestination,
      },
    };

    console.log('🚀 Triggering Conditions Check API:', {
      endpoint: 'https://uat-airflow-llm.cybersoftbpo.ai/api/v1/dags/check_condition_v2/dagRuns',
      outputBucket: bucket,
      outputPrefix: prefix,
      outputDestination: outputDestination,
      conditionsCount: conditions.length,
      pdfsCount: s3PdfPaths.length,
      payload: requestPayload,
    });

    // Create Basic Auth header
    const authHeader = `Basic ${btoa(`${RACK_STACK_CONFIG.USERNAME}:${RACK_STACK_CONFIG.PASSWORD}`)}`;

    const response = await fetch(
      'https://uat-airflow-llm.cybersoftbpo.ai/api/v1/dags/check_condition_v2/dagRuns',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': authHeader,
        },
        body: JSON.stringify(requestPayload),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API request failed: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const result = await response.json();
    
    console.log('✅ Conditions check job triggered:', result);
    
    console.group('═══════════════════════════════════════');
    console.group('📋 CONDITIONS CHECK API RESPONSE');
    console.log('Request Details:');
    console.log('  - Conditions Count:', conditions.length);
    console.log('  - PDFs Count:', s3PdfPaths.length);
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
      message: 'Conditions check job started successfully',
    };

  } catch (error) {
    console.error('❌ Conditions Check API error:', error);
    
    console.group('═══════════════════════════════════════');
    console.group('❌ CONDITIONS CHECK API ERROR');
    console.error('Error Details:', error);
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
 * Poll for conditions check results indefinitely (no timeout)
 * @param outputDestination - S3 path where results will be saved (without s3:// prefix)
 * @param maxAttempts - Maximum number of polling attempts (default: Infinity - polls indefinitely)
 * @param intervalMs - Interval between attempts in milliseconds (default: 10000 = 10 seconds)
 */
export async function pollForConditionsResults(
  outputDestination: string,
  maxAttempts: number = Infinity,
  intervalMs: number = 10000
): Promise<{ success: boolean; data?: CheckConditionsResponse; message?: string }> {
  console.log('🔄 Starting polling for conditions results (no timeout):', {
    outputDestination,
    intervalMs,
    note: 'Will poll indefinitely until result is available'
  });

  let attempt = 1;
  while (true) {
    try {
      console.log(`🔍 Polling attempt ${attempt}...`);
      
      const result = await readJsonFromS3(`s3://${outputDestination}`);
      
      if (result !== null) {
        console.log('✅ Conditions results found:', result);
        
        if (result.processing_status === 'completed') {
          return {
            success: true,
            data: result as CheckConditionsResponse,
            message: 'Conditions check completed successfully'
          };
        } else {
          return {
            success: false,
            message: `Processing status: ${result.processing_status}`
          };
        }
      }
      
      console.log(`⏳ Result not ready, waiting ${intervalMs / 1000} seconds before retry...`);
      await new Promise(resolve => setTimeout(resolve, intervalMs));
      attempt++;
      
    } catch (error) {
      console.error(`❌ Error during polling attempt ${attempt}:`, error);
      
      await new Promise(resolve => setTimeout(resolve, intervalMs));
      attempt++;
    }
  }
}

