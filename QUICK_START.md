# 🚀 Quick Start - Documents Upload & AI Verification

## ⚡ 3-Step Setup

### 1️⃣ Input Your Credentials
Open: `src/lib/config/credentials.ts`

```typescript
export const AWS_CONFIG = {
  ACCESS_KEY_ID: 'YOUR_KEY_HERE',       // 👈 S3 Webhub Access Key
  SECRET_ACCESS_KEY: 'YOUR_SECRET_HERE', // 👈 S3 Webhub Secret Key
  BUCKET: 'your-bucket-name',           // 👈 S3 Bucket Name
  REGION: 'us-east-1',
};

export const RACK_STACK_CONFIG = {
  // Already configured ✅
  API_URL: 'https://uat-airflow-llm.cybersoftbpo.ai/api/v1/dags/rack_stack/dagRuns',
  USERNAME: 'airflow',
  PASSWORD: 'jXe4wZgMUsJrWSUwaLHJuFTWnfsMp5DQDC+',
  
  OUTPUT_BUCKET: 'your-output-bucket',  // 👈 Where Rack Stack saves results
  OUTPUT_PREFIX: 'results/',
};
```

### 2️⃣ Start Your App
```bash
npm run dev
```

### 3️⃣ Test It Out
1. Go to Documents page
2. Click upload icon (📤) on any document
3. Select a PDF file → Upload
4. Click **"Run AI Verification"** (top right, teal button)
5. Open browser console (F12) to see full API response

## 📊 Visual Guide

### Document Status Flow
```
┌─────────────┐
│   Pending   │  (gray file icon + outline badge)
│   📄 No file │
└──────┬──────┘
       │ User uploads file
       ↓
┌─────────────┐
│  Uploaded   │  (orange warning icon + orange badge)
│ ⚠️ File.pdf │  ← File name shows here
│   (2.5 MB)  │
└──────┬──────┘
       │ Click "Run AI Verification"
       ↓
┌─────────────┐
│ Processing  │  (blue spinning clock + blue badge)
│ 🕒 File.pdf │
└──────┬──────┘
       │ Rack Stack completes
       ↓
┌─────────────┐
│AI-Verified  │  (green checkmark + green badge)
│ ✅ File.pdf │
│  Job: abc123│
└─────────────┘
```

## 🎯 What You'll See

### In The UI:
- **Upload Icon** (📤): Click to upload files
- **Status Badge**: Color-coded (Pending/Uploaded/AI-Verified/Processing)
- **File Names**: Display under document title after upload
- **File Size**: Shows next to file name
- **Download Link**: If S3 URL is accessible
- **Job ID**: Rack Stack job ID after verification

### In The Console:
```
═══════════════════════════════════════
📋 RACK STACK API RESPONSE (FULL PAYLOAD)
Request Details:
  - Document ID: credit_report
  - S3 Bucket: nqm-documents
  - S3 Key: documents/.../credit_report.pdf
  - Output Destination: s3://output-bucket/results/...

API Response:
{
  "dag_run_id": "rack_stack__2024-01-01...",
  "state": "queued",
  "conf": { ... },
  ...full response...
}
═══════════════════════════════════════
```

## ⚠️ Configuration Warnings

If not configured, you'll see warning banners:
- **S3 not configured** → Can't upload files
- **Rack Stack not configured** → Can't run AI verification

## 📁 Files Created/Modified

### New Files:
- `src/lib/config/credentials.ts` - **👈 CONFIGURE THIS FIRST**
- `src/lib/api/s3-upload.ts` - S3 upload service
- `src/lib/api/rack-stack.ts` - Rack Stack API integration
- `DOCUMENTS_SETUP.md` - Full documentation
- `QUICK_START.md` - This file

### Modified Files:
- `lib/types.ts` - Added uploadedFiles tracking
- `components/submission/DocumentsFolder.tsx` - Full implementation
- `src/App.tsx` - Added Toaster component

## 🔥 Hot Tips

1. **Console is Your Friend**: All API responses logged there with nice formatting
2. **TODO Comments**: Search for `TODO: REMOVE` to find console logs to remove in production
3. **Test Mode**: If credentials aren't set, warnings appear but app won't crash
4. **Batch Processing**: "Run AI Verification" processes ALL uploaded documents at once

## 🐛 Quick Troubleshooting

| Issue | Solution |
|-------|----------|
| Upload button disabled | Check S3 credentials in `credentials.ts` |
| "Run AI Verification" disabled | Check Rack Stack OUTPUT_BUCKET in `credentials.ts` |
| No console output | Open browser DevTools (F12) → Console tab |
| 403 Forbidden | Check S3 bucket permissions |
| 401 Unauthorized | Check Rack Stack credentials |

## 📞 Where Everything Lives

- **Credentials**: `src/lib/config/credentials.ts`
- **S3 Upload**: `src/lib/api/s3-upload.ts`
- **Rack Stack**: `src/lib/api/rack-stack.ts`
- **UI Component**: `components/submission/DocumentsFolder.tsx`
- **Types**: `lib/types.ts`

---

**Ready to Go?**
1. Configure credentials ✅
2. Run `npm run dev` ✅
3. Test upload & verification ✅

See `DOCUMENTS_SETUP.md` for full details!

