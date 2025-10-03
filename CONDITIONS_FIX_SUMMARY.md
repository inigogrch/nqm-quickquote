# Conditions Upload Fix Summary

## Problem
When clicking "Run Conditions AI", the app showed the error:
> "No documents uploaded. Please upload documents for conditions before running AI."

Even though documents were being successfully uploaded to S3, the state wasn't being tracked properly.

## Root Cause
The uploaded files were being mutated directly on the `condition` object prop (line 117-120), which doesn't persist in React state. When "Run Conditions AI" was clicked, it checked the original `conditions` prop which didn't have the uploaded files.

## Solution Implemented

### 1. Added State Management for Uploaded Files
```typescript
const [uploadedFilesByCondition, setUploadedFilesByCondition] = useState<Record<number, Array<UploadedFile>>>({});
```

This tracks uploaded files by condition ID in component state.

### 2. Created Upload Callback
```typescript
const handleFilesUploaded = (conditionId: number, files: Array<UploadedFile>) => {
  setUploadedFilesByCondition(prev => ({
    ...prev,
    [conditionId]: [...(prev[conditionId] || []), ...files]
  }));
};
```

### 3. Updated Upload Dialog
- Added `onFilesUploaded` callback prop
- Calls the callback instead of mutating the prop directly
- Files are now properly saved to state

### 4. Updated Run Conditions Logic
Now reads from `uploadedFilesByCondition` state instead of condition props:

```typescript
conditions.forEach(condition => {
  const files = uploadedFilesByCondition[condition.id];  // ← Now reads from state!
  if (files && files.length > 0) {
    files.forEach(file => {
      s3PdfPaths.push({
        bucket: file.s3Bucket,
        key: file.s3Key
      });
    });
  }
});
```

### 5. Added Uploaded Files Display
Similar to how minimum required docs show uploaded files:

```typescript
{/* Display uploaded file names */}
{uploadedFiles && uploadedFiles.length > 0 && (
  <div className="px-4 pb-4 pt-0 space-y-1 border-t border-slate-100 mt-2">
    {uploadedFiles.map((file) => (
      <div key={file.id} className="...">
        <FileText className="w-3 h-3 text-slate-400" />
        <span>{file.originalName}</span>
        <span>{(file.fileSize / 1024 / 1024).toFixed(1)} MB</span>
      </div>
    ))}
  </div>
)}
```

## What Now Works

✅ **Upload Documents**: Click upload icon on any condition → upload PDFs to S3
✅ **View Uploaded Files**: Uploaded files are displayed under each condition with name and size
✅ **Run Conditions AI**: Button properly detects uploaded files and triggers the API
✅ **State Persistence**: Uploaded files persist in component state until page refresh
✅ **Real S3 Paths**: All S3 paths are real - nothing is hardcoded

## Testing Flow

1. Go to Agents page
2. Find any condition in the list
3. Click the upload icon
4. Upload one or more PDF files
5. Files appear under the condition with names and sizes
6. Click "Run Conditions AI"
7. API is triggered with real S3 paths
8. Results are polled and displayed (from real S3 JSON output)

## Files Modified

- `components/submission/ConditionsSection.tsx`: 
  - Added state management for uploaded files
  - Added callback handler
  - Updated run conditions logic
  - Added uploaded files display UI
  - Updated dialog to use callback pattern

## No Breaking Changes

- All existing functionality preserved
- Props interface unchanged for external consumers
- Environment variables remain the same

