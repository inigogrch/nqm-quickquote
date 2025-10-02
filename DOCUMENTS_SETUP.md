# 📄 Documents Upload & AI Verification Setup Guide

## ✅ Implementation Status

### Completed Features:
- ✅ Document upload to S3
- ✅ Accurate status icons (Pending, Uploaded, AI-Verified, Processing, Failed)
- ✅ Uploaded document names displayed under document titles
- ✅ File size and download links for uploaded documents
- ✅ "Run AI Verification" button connected to Rack Stack API
- ✅ Processing only "Uploaded" status documents
- ✅ Full API response logging to console
- ✅ Timeline event tracking
- ✅ Error handling and user feedback via toast notifications

## 🔑 Step 1: Configure Your Credentials

Open the file: `src/lib/config/credentials.ts`

### Required Configuration:

```typescript
// AWS S3 Configuration
export const AWS_CONFIG = {
  ACCESS_KEY_ID: 'YOUR_S3_WEBHUB_ACCESS_KEY',      // 👈 INPUT HERE
  SECRET_ACCESS_KEY: 'YOUR_S3_WEBHUB_SECRET_KEY',  // 👈 INPUT HERE
  BUCKET: 'your-bucket-name',                       // 👈 INPUT HERE
  REGION: 'us-east-1',                             // Change if different
};

// Rack Stack API Configuration (Already configured for UAT)
export const RACK_STACK_CONFIG = {
  API_URL: 'https://uat-airflow-llm.cybersoftbpo.ai/api/v1/dags/rack_stack/dagRuns', // ✅ Set
  USERNAME: 'airflow',                              // ✅ Set
  PASSWORD: 'jXe4wZgMUsJrWSUwaLHJuFTWnfsMp5DQDC+',  // ✅ Set
  OUTPUT_BUCKET: 'your-output-bucket-name',         // 👈 INPUT HERE
  OUTPUT_PREFIX: 'results/',                        // Folder for results
};
```

## 📊 How It Works

### Upload Flow:
1. User clicks upload icon (📤) on a document row
2. Upload dialog opens with drag-and-drop support
3. User selects PDF/JPEG/PNG/TIFF files (max 10MB each)
4. Files are uploaded directly to S3 bucket
5. Document status changes to **"Uploaded"** (orange badge)
6. File names appear under the document title with file size
7. Download link available if S3 URL is accessible

### AI Verification Flow:
1. User clicks **"Run AI Verification"** button (top right, teal)
2. System finds all documents with "Uploaded" status
3. For each document:
   - Status changes to **"Processing"** (blue badge with spinner)
   - First uploaded file sent to Rack Stack API
   - Rack Stack processes: PDF flattening → OCR → Classification
   - Full API response logged to console
   - On success: Status changes to **"AI-Verified"** (green badge)
   - On failure: Status reverts to **"Uploaded"**

### Status Icons & Badges:

| Status | Icon | Badge | Description |
|--------|------|-------|-------------|
| Pending | 📄 (gray) | Pending (outline) | No files uploaded |
| Processing | 🕒 (blue, spinning) | Processing (blue) | Upload or AI verification in progress |
| Uploaded | ⚠️ (orange) | Uploaded (orange) | Files uploaded, awaiting AI verification |
| AI-Verified | ✅ (green) | AI-Verified (green) | Successfully processed by Rack Stack |
| Failed | ❌ (red) | Needs Attention (red) | Upload or verification failed |

## 📁 S3 Folder Structure

Files are uploaded to:
```
s3://your-bucket/documents/{programId}/{documentId}/{timestamp}_{filename}
```

Example:
```
s3://nqm-documents/documents/conventional_30_year/credit_report/1704067200000_credit_report.pdf
```

## 🔍 Observing Rack Stack API Output

When you click "Run AI Verification", the full API response is logged to the browser console:

```javascript
═══════════════════════════════════════
📋 RACK STACK API RESPONSE (FULL PAYLOAD)
Request Details:
  - Document ID: credit_report
  - S3 Bucket: nqm-documents
  - S3 Key: documents/conventional_30_year/credit_report/1704067200000_credit_report.pdf
  - Output Destination: s3://output-bucket/results/credit_report_1704067200000.json

API Response:
{
  "dag_run_id": "rack_stack__2024-01-01T12:00:00+00:00",
  "conf": {...},
  ...
}
═══════════════════════════════════════
```

### What to Look For:
- **dag_run_id**: Unique identifier for the Airflow job
- **state**: Job state (queued, running, success, failed)
- **conf**: Configuration sent to the API
- Full response includes all metadata

### Output Results:
The Rack Stack output is saved to S3 at:
```
s3://your-output-bucket/results/{documentId}_{timestamp}.json
```

The output contains:
- PDF processing status
- OCR extracted text (first 2 pages)
- Document classification with confidence score
- Processing metadata

## 🧪 Testing the Implementation

### Test 1: Upload Documents
1. Navigate to Documents page (`/docs`)
2. Click the upload icon (📤) next to any document
3. Upload a PDF file
4. Verify:
   - Success toast appears
   - Status badge changes to "Uploaded" (orange)
   - File name appears under document title
   - File size is displayed

### Test 2: Run AI Verification
1. Ensure at least one document has "Uploaded" status
2. Click "Run AI Verification" button (top right)
3. Open browser console (F12)
4. Verify:
   - Processing toast appears
   - Document status changes to "Processing" (blue, spinner)
   - Console shows full Rack Stack API response
   - On success, status changes to "AI-Verified" (green)
   - Success toast appears

### Test 3: Configuration Warnings
1. Leave credentials empty in `credentials.ts`
2. Navigate to Documents page
3. Verify:
   - Warning banner appears at top
   - Upload and verification buttons are disabled or show errors

## 🛠️ Troubleshooting

### S3 Upload Fails
- **Error**: "S3 credentials not configured"
  - **Fix**: Set `ACCESS_KEY_ID`, `SECRET_ACCESS_KEY`, and `BUCKET` in `src/lib/config/credentials.ts`

- **Error**: "Access Denied" or 403
  - **Fix**: Verify S3 bucket policy allows your access key to `PutObject`
  - Check bucket CORS settings if uploading from browser

### Rack Stack API Fails
- **Error**: "Rack Stack API credentials not configured"
  - **Fix**: Set `OUTPUT_BUCKET` in `src/lib/config/credentials.ts`

- **Error**: "API request failed: 401"
  - **Fix**: Verify username/password are correct in credentials file

- **Error**: "API request failed: 404"
  - **Fix**: Check API URL is correct

### Console Logging
- All API responses are logged with decorative boxes for easy reading
- Look for these markers in console:
  - `🚀 Triggering Rack Stack API` - Request sent
  - `✅ Rack Stack job triggered` - Success
  - `❌ Rack Stack API error` - Failure
  - Full payload in bordered boxes

## 📦 Required NPM Packages

Already installed:
- `@aws-sdk/client-s3` - S3 upload functionality
- `sonner` - Toast notifications

## 🚀 Next Steps (Future Enhancements)

- [ ] Poll Rack Stack API to track job progress
- [ ] Display OCR extracted text in document preview
- [ ] Show classification results in UI
- [ ] Support for document versioning
- [ ] Batch upload multiple documents at once
- [ ] Progress bars for large file uploads
- [ ] Document preview before upload
- [ ] Integration with document package composer

## 📝 Important Notes

### Production Considerations:
1. **Remove Console Logging**: All Rack Stack console logs are marked with `// TODO: REMOVE THIS CONSOLE LOGGING IN PRODUCTION`
2. **Security**: Consider using presigned URLs instead of direct S3 credentials in production
3. **Error Handling**: Add more robust retry logic for network failures
4. **Rate Limiting**: Implement rate limiting for API calls

### Current Limitations:
- Only processes first uploaded file per document
- No progress tracking for long-running Rack Stack jobs
- No retry mechanism for failed verifications
- Console-only output observation (no UI display yet)

## 🎯 Definition of Done - Checklist

- ✅ Upload documents and save files to S3
- ✅ Status components are accurate (icons and badges match document state)
- ✅ Uploaded document titles display under document name with file size
- ✅ API service connected to Rack Stack endpoint
- ✅ Run AI Verification button triggers Rack Stack for "Uploaded" documents
- ✅ Output payload observable in console (with decorative logging)
- ✅ Configuration file for credentials clearly documented

## 📞 Support

If you encounter issues:
1. Check browser console for detailed error messages
2. Verify all credentials are set in `src/lib/config/credentials.ts`
3. Test S3 access with AWS CLI: `aws s3 ls s3://your-bucket/`
4. Test Rack Stack API with curl (see API documentation)

---

**Last Updated**: January 2025  
**Status**: ✅ Ready for Testing

