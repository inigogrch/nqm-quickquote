/**
 * 🔑 ENVIRONMENT VARIABLES SETUP:

 * For Vercel deployment:
 * 1. Go to your Vercel project settings
 * 2. Navigate to "Environment Variables"
 * 3. Add each VITE_* variable with your values
 * 
 * Required Environment Variables:
 * - VITE_AWS_ACCESS_KEY_ID: Your S3 webhub access key
 * - VITE_AWS_SECRET_ACCESS_KEY: Your S3 webhub secret key
 * - VITE_AWS_S3_BUCKET: Your S3 bucket name
 * - VITE_AWS_REGION: Your S3 region (default: us-east-1)
 * - VITE_RACK_STACK_OUTPUT_BUCKET: Output bucket for Rack Stack results
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
export const RACK_STACK_CONFIG = {
  API_URL: import.meta.env.VITE_RACK_STACK_API_URL || 'https://uat-airflow-llm.cybersoftbpo.ai/api/v1/dags/rack_stack/dagRuns',
  USERNAME: import.meta.env.VITE_RACK_STACK_USERNAME || 'airflow',
  PASSWORD: import.meta.env.VITE_RACK_STACK_PASSWORD || 'jXe4wZgMUsJrWSUwaLHJuFTWnfsMp5DQDC+',
  OUTPUT_BUCKET: import.meta.env.VITE_RACK_STACK_OUTPUT_BUCKET || '',
  OUTPUT_PREFIX: import.meta.env.VITE_RACK_STACK_OUTPUT_PREFIX || 'results/',
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

