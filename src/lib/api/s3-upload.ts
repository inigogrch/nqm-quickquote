// S3 Upload Service for Document Management

import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { AWS_CONFIG, isS3Configured } from "../config/credentials";

// Initialize S3 Client
let s3Client: S3Client | null = null;

function getS3Client(): S3Client {
  if (!s3Client && isS3Configured()) {
    s3Client = new S3Client({
      region: AWS_CONFIG.REGION,
      credentials: {
        accessKeyId: AWS_CONFIG.ACCESS_KEY_ID,
        secretAccessKey: AWS_CONFIG.SECRET_ACCESS_KEY,
      },
    });
  }

  if (!s3Client) {
    throw new Error(
      "S3 credentials not configured. Please set credentials in src/lib/config/credentials.ts"
    );
  }

  return s3Client;
}

export interface UploadedFileMetadata {
  id: string;
  originalName: string;
  fileName: string;
  fileSize: number;
  fileType: string;
  uploadedAt: string;
  s3Key: string;
  s3Bucket: string;
  url?: string;
}

/**
 * Upload a file to S3
 * @param file - The file to upload
 * @param documentId - Document type ID (e.g., "1003", "credit_report")
 * @param programId - Loan program ID
 * @param loanId - Optional loan ID for organization
 */
export async function uploadFileToS3(
  file: File,
  documentId: string,
  programId: string,
  loanId?: string
): Promise<UploadedFileMetadata> {
  try {
    const timestamp = Date.now();
    const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");

    // Create S3 key with organized structure
    const basePath = loanId ? `loans/${loanId}` : "documents";
    const s3Key = `${basePath}/${programId}/${documentId}/${timestamp}_${sanitizedFileName}`;

    console.log("📤 Uploading to S3:", {
      bucket: AWS_CONFIG.BUCKET,
      key: s3Key,
      size: file.size,
      type: file.type,
    });

    const client = getS3Client();

    // Convert File to ArrayBuffer for upload
    const fileBuffer = await file.arrayBuffer();

    const command = new PutObjectCommand({
      Bucket: AWS_CONFIG.BUCKET,
      Key: s3Key,
      Body: new Uint8Array(fileBuffer),
      ContentType: file.type,
      Metadata: {
        originalName: file.name,
        documentId: documentId,
        programId: programId,
        uploadedAt: new Date().toISOString(),
      },
    });

    await client.send(command);

    const fileMetadata: UploadedFileMetadata = {
      id: `file_${timestamp}`,
      originalName: file.name,
      fileName: sanitizedFileName,
      fileSize: file.size,
      fileType: file.type,
      uploadedAt: new Date().toISOString(),
      s3Key: s3Key,
      s3Bucket: AWS_CONFIG.BUCKET,
      url: `https://${AWS_CONFIG.BUCKET}.s3.${AWS_CONFIG.REGION}.amazonaws.com/${s3Key}`,
    };

    console.log('✅ Upload successful:', fileMetadata);
    
    return fileMetadata;
  } catch (error) {
    console.error("❌ S3 upload failed:", error);
    throw new Error(
      `Failed to upload ${file.name}: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

/**
 * Upload multiple files to S3
 */
export async function uploadFilesToS3(
  files: File[],
  documentId: string,
  programId: string,
  loanId?: string
): Promise<UploadedFileMetadata[]> {
  const uploadPromises = files.map((file) =>
    uploadFileToS3(file, documentId, programId, loanId)
  );

  return Promise.all(uploadPromises);
}

// Re-export for convenience
export { isS3Configured };
