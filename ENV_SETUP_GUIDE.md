# Environment Variables Setup Guide

## 📋 Typical Production Setup

For a production deployment where conditions results go to the **same S3 bucket** as document uploads:

```bash
# AWS S3 Configuration (uploads & results)
VITE_AWS_ACCESS_KEY_ID=AKIA...
VITE_AWS_SECRET_ACCESS_KEY=xxxxx...
VITE_AWS_S3_BUCKET=quick-quote-demo
VITE_AWS_REGION=us-east-1

# Rack Stack API (conditions check)
VITE_RACK_STACK_USERNAME=airflow
VITE_RACK_STACK_PASSWORD=xxxxx...
VITE_RACK_STACK_OUTPUT_BUCKET=quick-quote-demo  # ← Same as S3 bucket
VITE_RACK_STACK_OUTPUT_PREFIX=results/          # Optional, defaults to 'results/'

# Supabase (optional)
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=xxxxx...
```

## 🗂️ How Files Are Organized

With the above configuration, your S3 bucket structure will be:

```
s3://quick-quote-demo/
  ├── documents/                      # ← PDFs uploaded by users
  │   └── {programId}/
  │       └── condition_{conditionId}/
  │           └── {timestamp}_document.pdf
  │
  └── results/                        # ← JSON results from Airflow
      └── conditions_{timestamp}.json
```

## ✅ What This Means

1. **Document Upload**: Users upload PDFs → saved to `s3://quick-quote-demo/documents/...`
2. **Conditions API**: Triggered with those S3 paths → Airflow processes them
3. **Results**: Airflow writes JSON to `s3://quick-quote-demo/results/conditions_*.json`
4. **Frontend Polling**: Reads JSON from S3 (NOT hardcoded!) and displays results

## 🔍 Verification

After setting environment variables, check your browser console. You should see:

```javascript
📋 Configuration Status: {
  s3: {
    configured: true,
    bucket: '✅ quick-quote-demo',
    ...
  },
  rackStack: {
    configured: true,
    outputBucket: '✅ quick-quote-demo',
    outputPrefix: 'results/',
    ...
  },
  bucketSetup: '✅ Using same bucket: quick-quote-demo'
}
```

## 💡 Alternative Setup (Separate Buckets)

If you need to use **different buckets** for uploads vs results:

```bash
VITE_AWS_S3_BUCKET=upload-bucket           # For document uploads
VITE_RACK_STACK_OUTPUT_BUCKET=results-bucket  # For API results
```

The console will show:
```
⚠️ Different buckets - S3: upload-bucket / Output: results-bucket
```

This is supported but requires your AWS credentials to have access to both buckets.

## 🚫 Common Issues

### Issue: "File not found in S3"
**Solution**: The Airflow DAG is still processing. Polling continues automatically every 10 seconds until results are ready.

### Issue: "S3 credentials not configured"
**Solution**: Make sure all `VITE_AWS_*` variables are set and restart your dev server.

### Issue: "Rack Stack not configured"
**Solution**: Set `VITE_RACK_STACK_OUTPUT_BUCKET` - it's required even if it's the same as your S3 bucket.

## 📝 Code References

- **Configuration**: `src/lib/config/credentials.ts`
- **Conditions API**: `src/lib/api/conditions.ts`
- **Upload Logic**: `components/submission/ConditionsSection.tsx` (lines 90-143)
- **Results Polling**: `src/lib/api/conditions.ts` (lines 159-205)

All paths are **real S3 paths** - nothing is hardcoded! 🎉

