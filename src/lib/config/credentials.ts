/**
 * ====================================
 * CREDENTIALS CONFIGURATION
 * ====================================
 * 
 * 🔑 INPUT YOUR CREDENTIALS HERE:
 * 
 * 1. AWS S3 Credentials (S3 Webhub):
 *    - AWS_ACCESS_KEY_ID: Your S3 webhub access key
 *    - AWS_SECRET_ACCESS_KEY: Your S3 webhub secret key
 *    - AWS_S3_BUCKET: Your S3 bucket name for document storage
 *    - AWS_S3_REGION: Your S3 region (default: us-east-1)
 * 
 * 2. Rack Stack API Credentials (Airflow):
 *    - RACK_STACK_API_URL: Already set to UAT environment
 *    - RACK_STACK_USERNAME: Already set to "airflow"
 *    - RACK_STACK_PASSWORD: Already set
 * 
 * 3. Output Configuration:
 *    - RACK_STACK_OUTPUT_BUCKET: Bucket where Rack Stack saves results
 *    - RACK_STACK_OUTPUT_PREFIX: Folder prefix for results
 */

// ==========================================
// 🔑 AWS S3 CONFIGURATION - INPUT YOUR CREDENTIALS HERE
// ==========================================
export const AWS_CONFIG = {
  ACCESS_KEY_ID: '', // 👈 INPUT YOUR S3 WEBHUB ACCESS KEY HERE
  SECRET_ACCESS_KEY: '', // 👈 INPUT YOUR S3 WEBHUB SECRET KEY HERE
  BUCKET: '', // 👈 INPUT YOUR S3 BUCKET NAME HERE (e.g., 'nqm-documents')
  REGION: 'us-east-1', // Change if needed
};

// ==========================================
// 🔑 RACK STACK API CONFIGURATION
// ==========================================
export const RACK_STACK_CONFIG = {
  API_URL: 'https://uat-airflow-llm.cybersoftbpo.ai/api/v1/dags/rack_stack/dagRuns',
  USERNAME: 'airflow',
  PASSWORD: 'jXe4wZgMUsJrWSUwaLHJuFTWnfsMp5DQDC+',
  OUTPUT_BUCKET: '', // 👈 INPUT OUTPUT BUCKET NAME HERE (e.g., 'nqm-rack-stack-results')
  OUTPUT_PREFIX: 'results/', // Folder structure in output bucket
};

// ==========================================
// VALIDATION FUNCTIONS
// ==========================================

export function isS3Configured(): boolean {
  return !!(
    AWS_CONFIG.ACCESS_KEY_ID &&
    AWS_CONFIG.SECRET_ACCESS_KEY &&
    AWS_CONFIG.BUCKET
  );
}

export function isRackStackConfigured(): boolean {
  return !!(
    RACK_STACK_CONFIG.API_URL &&
    RACK_STACK_CONFIG.USERNAME &&
    RACK_STACK_CONFIG.PASSWORD &&
    RACK_STACK_CONFIG.OUTPUT_BUCKET
  );
}

export function getConfigurationStatus() {
  return {
    s3: {
      configured: isS3Configured(),
      accessKey: AWS_CONFIG.ACCESS_KEY_ID ? '✅ Set' : '❌ Missing',
      secretKey: AWS_CONFIG.SECRET_ACCESS_KEY ? '✅ Set' : '❌ Missing',
      bucket: AWS_CONFIG.BUCKET ? `✅ ${AWS_CONFIG.BUCKET}` : '❌ Missing',
      region: AWS_CONFIG.REGION,
    },
    rackStack: {
      configured: isRackStackConfigured(),
      apiUrl: RACK_STACK_CONFIG.API_URL ? '✅ Set' : '❌ Missing',
      credentials: (RACK_STACK_CONFIG.USERNAME && RACK_STACK_CONFIG.PASSWORD) ? '✅ Set' : '❌ Missing',
      outputBucket: RACK_STACK_CONFIG.OUTPUT_BUCKET ? `✅ ${RACK_STACK_CONFIG.OUTPUT_BUCKET}` : '❌ Missing',
    },
  };
}

// Log configuration status on import (helpful for debugging)
console.log('📋 Configuration Status:', getConfigurationStatus());

