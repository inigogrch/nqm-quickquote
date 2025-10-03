// S3 Upload Service for Document Management
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { AWS_CONFIG, isS3Configured } from '../config/credentials';

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
      'S3 credentials not configured. Please set credentials in src/lib/config/credentials.ts'
    );
  }
  
  return s3Client;
}

export async function getSignedUrlFromS3(path: string, hourInSeconds: number) {
    console.log('s3-url', path, hourInSeconds);

    if (!path) throw new Error("Path is required");
    const s3Client = getS3Client();

    const body = {
      Bucket: AWS_CONFIG.BUCKET,
      Key: path,
      ResponseContentDisposition: "inline", // Ensure content is displayed in-browser
      ResponseContentType: "application/pdf", // Ensure content is displayed in-browser
    };

    const command = new GetObjectCommand(body);

    const url = await getSignedUrl(s3Client, command, { expiresIn: hourInSeconds ?? 900 }); // 900 seconds = 15 minutes

    return { url };
}
