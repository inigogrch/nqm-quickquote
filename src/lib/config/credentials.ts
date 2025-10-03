/**
 * 🔑 ENVIRONMENT VARIABLES SETUP:
 *
 * For Vercel deployment:
 * 1. Go to your Vercel project settings
 * 2. Navigate to "Environment Variables"
 * 3. Add each VITE_* variable with your values
 * 
 * Required Environment Variables:
 * ================================
 * AWS S3 (for document uploads & reading results):
 * - VITE_AWS_ACCESS_KEY_ID: Your S3 access key
 * - VITE_AWS_SECRET_ACCESS_KEY: Your S3 secret key  
 * - VITE_AWS_S3_BUCKET: Your S3 bucket name (e.g., 'quick-quote-demo')
 * - VITE_AWS_REGION: Your S3 region (default: 'us-east-1')
 * 
 * Rack Stack API (for conditions check & document classification):
 * - VITE_RACK_STACK_USERNAME: Airflow username (default: 'airflow')
 * - VITE_RACK_STACK_PASSWORD: Airflow password
 * - VITE_RACK_STACK_OUTPUT_BUCKET: S3 bucket for API results
 *   → Can be the SAME as VITE_AWS_S3_BUCKET (recommended for simplicity)
 *   → Results will be written to: {bucket}/{prefix}conditions_*.json
 * 
 * Optional Environment Variables:
 * ================================
 * - VITE_RACK_STACK_OUTPUT_PREFIX: Path prefix for results (default: 'results/')
 * - VITE_RACK_STACK_API_URL: Override Airflow endpoint
 * - VITE_SUPABASE_URL: Your Supabase URL
 * - VITE_SUPABASE_ANON_KEY: Your Supabase anon key
 * - VITE_ENHANCED_RAG_API_URL: Enhanced RAG API endpoint
 * - VITE_ELIGIBILITY_ENGINE_BASE_URL: Eligibility engine endpoint
 */

// ==========================================
// 🔑 AWS S3 CONFIGURATION - LOADED FROM ENV VARS
// ==========================================
export const AWS_CONFIG = {
  ACCESS_KEY_ID: import.meta.env.VITE_AWS_ACCESS_KEY_ID || '',
  SECRET_ACCESS_KEY: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY || '',
  BUCKET: import.meta.env.VITE_AWS_S3_BUCKET || 'quick-quote-demo',
  REGION: import.meta.env.VITE_AWS_REGION || 'us-east-1',
};

// ==========================================
// 🔑 RACK STACK API CONFIGURATION
// ==========================================
// NOTE: OUTPUT_BUCKET can be the SAME as AWS_CONFIG.BUCKET
// Documents are uploaded to: s3://{AWS_CONFIG.BUCKET}/documents/...
// Results are written to: s3://{OUTPUT_BUCKET}/{OUTPUT_PREFIX}conditions_*.json
// Using the same bucket is recommended for simplicity
export const RACK_STACK_CONFIG = {
  API_URL: import.meta.env.VITE_RACK_STACK_API_URL || 'https://uat-airflow-llm.cybersoftbpo.ai/api/v1/dags/rack_stack/dagRuns',
  USERNAME: import.meta.env.VITE_RACK_STACK_USERNAME || 'airflow',
  PASSWORD: import.meta.env.VITE_RACK_STACK_PASSWORD || 'jXe4wZgMUsJrWSUwaLHJuFTWnfsMp5DQDC+',
  OUTPUT_BUCKET: import.meta.env.VITE_RACK_STACK_OUTPUT_BUCKET || '',
  OUTPUT_PREFIX: import.meta.env.VITE_RACK_STACK_OUTPUT_PREFIX || 'results/',
};

// ==========================================
// 🔑 SUPABASE CONFIGURATION
// ==========================================
export const SUPABASE_CONFIG = {
  URL: import.meta.env.VITE_SUPABASE_URL || '',
  ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY || '',
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
  const bucketsMatch = AWS_CONFIG.BUCKET === RACK_STACK_CONFIG.OUTPUT_BUCKET;
  const bucketsConfigured = !!(AWS_CONFIG.BUCKET && RACK_STACK_CONFIG.OUTPUT_BUCKET);
  
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
      outputPrefix: RACK_STACK_CONFIG.OUTPUT_PREFIX,
    },
    bucketSetup: bucketsConfigured 
      ? (bucketsMatch 
          ? `✅ Using same bucket: ${AWS_CONFIG.BUCKET}` 
          : `⚠️  Different buckets - S3: ${AWS_CONFIG.BUCKET} / Output: ${RACK_STACK_CONFIG.OUTPUT_BUCKET}`)
      : '⏳ Buckets not yet configured',
  };
}

// Log configuration status on import (helpful for debugging)
console.log('📋 Configuration Status:', getConfigurationStatus());

