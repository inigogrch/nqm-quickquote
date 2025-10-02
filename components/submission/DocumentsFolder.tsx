'use client';

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Upload, CheckCircle, AlertCircle, Clock, Info, Plus, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { toast } from 'sonner';
import { PLACEHOLDER_CHECKLIST } from '../../lib/fixtures';
import { useAppStore } from '../../lib/store';
import { extractDocumentStatusesForProgram, DocumentStatus } from '../../src/lib/api';
import { uploadFilesToS3, isS3Configured } from '../../src/lib/api/s3-upload';
import { triggerRackStackProcessing, isRackStackConfigured, pollForResults } from '../../src/lib/api/rack-stack';

interface Document {
  id: string;
  name: string;
  type: string;
  status: string;
  category: string;
  whyRequired?: string;
  citation?: string;
  apiRequirement?: string | null;
  apiMessage?: string | null;
  apiFieldName?: string | null;
  apiFieldValue?: boolean | null | string;
  uploadedFiles?: Array<{
    id: string;
    originalName: string;
    fileName: string;
    fileSize: number;
    fileType: string;
    uploadedAt: string;
    s3Key: string;
    s3Bucket: string;
    url?: string;
  }>;
  rackStackJobId?: string;
  outputDestination?: string;
  classificationCategory?: string;
  classificationConfidence?: number;
}

interface DocumentsFolderProps {
  onAddToPackage: (docId: string, docName: string, category: 'minimum' | 'likely') => void;
  onDocumentClick: (docId: string) => void;
}

// Accurate status icons based on actual document state
const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed':
    case 'ai-verified':
      return <CheckCircle className="w-5 h-5 text-ok" />;
    case 'in_progress':
      return <Clock className="w-5 h-5 text-blue-500 animate-spin" />;
    case 'uploaded':
      return <AlertCircle className="w-5 h-5 text-warn" />;
    case 'failed':
      return <AlertCircle className="w-5 h-5 text-bad" />;
    case 'pending':
    default:
      return <FileText className="w-5 h-5 text-slate-400" />;
  }
};

// Accurate status badges
const getStatusBadge = (status: string) => {
  switch (status) {
    case 'completed':
    case 'ai-verified':
      return <Badge className="bg-ok text-white hover:bg-ok/90">AI-Verified</Badge>;
    case 'in_progress':
      return <Badge className="bg-blue-500 text-white hover:bg-blue-600">Running</Badge>;
    case 'uploaded':
      return <Badge className="bg-warn text-white hover:bg-warn/90">Uploaded</Badge>;
    case 'failed':
      return <Badge className="bg-bad text-white hover:bg-bad/90">Needs Attention</Badge>;
    case 'pending':
    default:
      return <Badge variant="outline" className="text-slate-600">Pending</Badge>;
  }
};

// Mock documents based on checklist
const generateDocuments = (showAll: boolean): Document[] => {
  const minimumDocs = PLACEHOLDER_CHECKLIST.minimum.map((name, index) => ({
    id: `min_${index}`,
    name,
    type: 'required',
    status: index < 2 ? 'ai-verified' : index < 4 ? 'uploaded' : 'pending',
    category: 'minimum',
    whyRequired: `Required for loan submission - Guideline ${index + 1}.1`,
    citation: `Section ${index + 1}.1 - Minimum Documentation Requirements`
  }));

  const likelyDocs = PLACEHOLDER_CHECKLIST.likely.map((name, index) => ({
    id: `likely_${index}`,
    name,
    type: 'conditional',
    status: index === 0 ? 'ai-verified' : 'pending',
    category: 'likely',
    whyRequired: `May be requested during underwriting - Guideline ${index + 5}.2`,
    citation: `Section ${index + 5}.2 - Conditional Documentation`
  }));

  if (showAll) {
    const additionalDocs = [
      { id: 'add_1', name: 'Property Survey', type: 'property', status: 'pending', category: 'additional' },
      { id: 'add_2', name: 'HOA Documents', type: 'property', status: 'pending', category: 'additional' }
    ].map(doc => ({
      ...doc,
      whyRequired: 'Additional documentation for specific loan types',
      citation: 'Section 7.1 - Additional Requirements'
    }));
    return [...minimumDocs, ...likelyDocs, ...additionalDocs];
  }

  return [...minimumDocs, ...likelyDocs];
};

// Document Upload Dialog Component
const DocumentUploadDialog = ({ selectedDocument, isOpen, onClose }: { 
  selectedDocument: Document; 
  isOpen: boolean; 
  onClose: () => void; 
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const { selectedProgramId, updateDocument, addTimelineEvent } = useAppStore();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const files = Array.from(e.dataTransfer.files);
      setUploadedFiles(prev => [...prev, ...files]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setUploadedFiles(prev => [...prev, ...files]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    if (uploadedFiles.length === 0) {
      toast.error('Please select files to upload');
      return;
    }

    if (!selectedProgramId) {
      toast.error('No program selected');
      return;
    }

    if (!isS3Configured()) {
      toast.error('S3 not configured. Please set credentials in src/lib/config/credentials.ts');
      return;
    }

    setIsUploading(true);

    try {
      // Upload working correctly - debug removed

      // Update status to in_progress
      updateDocument(selectedDocument.id, {
        status: 'in_progress' as any
      });

      // Upload files to S3
      const uploadedFileMetadata = await uploadFilesToS3(
        uploadedFiles,
        selectedDocument.id,
        selectedProgramId
      );

      // Update document with uploaded file metadata and new status
      const updatedFiles = [
        ...(selectedDocument.uploadedFiles || []),
        ...uploadedFileMetadata
      ];

      // Document update working correctly - debug removed

      updateDocument(selectedDocument.id, {
        status: 'uploaded' as any,
        uploadedFiles: updatedFiles as any
      });

      // Add timeline event
      addTimelineEvent({
        id: `timeline_${Date.now()}`,
        timestamp: new Date().toISOString(),
        event: 'Document Uploaded',
        description: `${uploadedFiles.length} file(s) uploaded for ${selectedDocument.name}`,
        status: 'completed'
      });

      toast.success(`Successfully uploaded ${uploadedFiles.length} file(s) to S3`);
      
      // Clear the selected files
      setUploadedFiles([]);
      
      // Close the dialog
      onClose();
    } catch (error) {
      console.error('Upload error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to upload files');
      
      // Revert status
      updateDocument(selectedDocument.id, {
        status: (selectedDocument.uploadedFiles && selectedDocument.uploadedFiles.length > 0) ? 'uploaded' as any : 'pending' as any
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Upload {selectedDocument.name}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Document Info */}
          <div className="p-3 bg-slate-50 rounded-lg">
            <p className="text-sm text-slate-600 mb-1">Document Type:</p>
            <p className="font-medium">{selectedDocument.name}</p>
            {selectedDocument.whyRequired && (
              <>
                <p className="text-sm text-slate-600 mt-2 mb-1">Why Required:</p>
                <p className="text-sm">{selectedDocument.whyRequired}</p>
              </>
            )}
          </div>

          {/* Configuration Warning */}
          {!isS3Configured() && (
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-800 font-medium">⚠️ S3 Not Configured</p>
              <p className="text-xs text-amber-700 mt-1">
                Please set your S3 credentials in <code className="bg-amber-100 px-1 py-0.5 rounded">src/lib/config/credentials.ts</code>
              </p>
            </div>
          )}

          {/* Upload Area */}
          <div
            className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
              dragActive 
                ? 'border-blue-400 bg-blue-50' 
                : 'border-slate-300 hover:border-slate-400'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-sm text-slate-600 mb-2">
              Drag and drop files here, or click to browse
            </p>
            <p className="text-xs text-slate-500 mb-3">
              Supported formats: PDF, JPEG, PNG, TIFF (Max 10MB each)
            </p>
            <input
              type="file"
              multiple
              accept=".pdf,.jpg,.jpeg,.png,.tiff,.tif"
              onChange={handleFileInput}
              className="hidden"
              id="file-upload"
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => document.getElementById('file-upload')?.click()}
              disabled={!isS3Configured()}
            >
              Browse Files
            </Button>
          </div>

          {/* Uploaded Files List */}
          {uploadedFiles.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Selected Files:</h4>
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-slate-50 rounded">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <FileText className="w-4 h-4 text-slate-500 flex-shrink-0" />
                    <span className="text-sm truncate">{file.name}</span>
                    <span className="text-xs text-slate-500 flex-shrink-0">
                      ({(file.size / 1024 / 1024).toFixed(1)} MB)
                    </span>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFile(index)}
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </div>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isUploading}
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={handleUpload}
              disabled={uploadedFiles.length === 0 || isUploading || !isS3Configured()}
              className="flex-1"
            >
              {isUploading ? (
                <>
                  <Clock className="w-3 h-3 mr-2 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>Upload {uploadedFiles.length > 0 && `(${uploadedFiles.length})`}</>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export function DocumentsFolder({ onAddToPackage, onDocumentClick }: DocumentsFolderProps) {
  const navigate = useNavigate();
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  const [isRunningVerification, setIsRunningVerification] = useState(false);
  const [initializedProgramId, setInitializedProgramId] = useState<string | null>(null);
  
  // Get the selected program and API response from store
  const { 
    selectedProgramId, 
    eligibilityApiResponse, 
    loanPrograms, 
    documents: storeDocuments, 
    updateDocument, 
    setDocuments, 
    addTimelineEvent,
    addToPackage,
    packageDocuments 
  } = useAppStore();
  
  // Generate documents from API response, merging with existing store documents
  const getDocumentsFromApi = (): Document[] => {
    if (!selectedProgramId || !eligibilityApiResponse) {
      // Fallback to placeholder data if no API data available
      return generateDocuments(showAllCategories);
    }
    
    // Find the selected program to get the original API key and program name
    const selectedProgram = loanPrograms.find(p => p.id === selectedProgramId);
    const apiKeyToUse = selectedProgram?.originalApiKey || selectedProgramId;
    const programName = selectedProgram?.name || selectedProgramId;
    
    const documentStatuses = extractDocumentStatusesForProgram(eligibilityApiResponse, apiKeyToUse);
    
    console.log('📄 Extracted document statuses:', documentStatuses);
    
    // Get the program data to access missing_fields, passed, and failed information
    const programData = eligibilityApiResponse.detailed_results?.program_results?.[apiKeyToUse];
    
    console.log('📋 Program data for documents:', {
      programName,
      apiKeyToUse,
      hasProgramData: !!programData,
      missingFieldsCount: programData?.missing_fields?.length || 0,
      passedCount: programData?.passed?.length || 0,
      failedCount: programData?.failed?.length || 0
    });
    
    // Map API document statuses to Document objects, merging with store data
    return documentStatuses.map((docStatus) => {
      // Check if this document already exists in the store (with uploaded files)
      const existingDoc = storeDocuments.find(d => d.id === docStatus.id);
      
      // Find corresponding information from API - check missing_fields, passed, and failed arrays
      const missingFieldInfo = programData?.missing_fields?.find(
        (field: any) => field.field === docStatus.field
      );
      
      // Also check passed and failed arrays for document-related requirements
      const passedInfo = programData?.passed?.find(
        (req: any) => {
          // Check if the requirement mentions this document field
          const actualValue = req.actual;
          if (typeof actualValue === 'object' && actualValue !== null) {
            return docStatus.field in actualValue;
          }
          return false;
        }
      );
      
      const failedInfo = programData?.failed?.find(
        (req: any) => {
          // Check if the requirement mentions this document field
          const actualValue = req.actual;
          if (typeof actualValue === 'object' && actualValue !== null) {
            return docStatus.field in actualValue;
          }
          return false;
        }
      );
      
      // Priority: use failedInfo, then missingFieldInfo, then passedInfo
      const apiInfo = failedInfo || missingFieldInfo || passedInfo;
      
      // Extract the actual field value from the API response
      let fieldValue: boolean | null | string = null;
      if (passedInfo?.actual && typeof passedInfo.actual === 'object') {
        fieldValue = passedInfo.actual[docStatus.field];
      } else if (failedInfo?.actual && typeof failedInfo.actual === 'object') {
        fieldValue = failedInfo.actual[docStatus.field];
      } else if (missingFieldInfo) {
        fieldValue = null; // Missing field means it's not provided
      }
      
      console.log(`📄 Document "${docStatus.name}" (${docStatus.field}):`, {
        hasMissingFieldInfo: !!missingFieldInfo,
        hasPassedInfo: !!passedInfo,
        hasFailedInfo: !!failedInfo,
        selectedInfo: apiInfo ? 'found' : 'not found',
        requirement: apiInfo?.requirement,
        message: apiInfo?.message,
        fieldValue: fieldValue
      });
      
      // If document has uploaded files, prioritize the uploaded/ai-verified status
      const finalStatus = existingDoc?.uploadedFiles && existingDoc.uploadedFiles.length > 0
        ? (existingDoc.status || 'uploaded') // Keep the store status if files are uploaded
        : docStatus.status; // Otherwise use API status
      
      return {
        id: docStatus.id,
        name: docStatus.name,
        type: 'required',
        status: finalStatus,
        category: 'minimum',
        whyRequired: `Required for ${programName} loan program`,
        citation: 'Minimum Documentation Requirements',
        apiRequirement: apiInfo?.requirement || null,
        apiMessage: apiInfo?.message || null,
        apiFieldName: docStatus.field,
        apiFieldValue: fieldValue,
        uploadedFiles: existingDoc?.uploadedFiles || [],
        rackStackJobId: existingDoc?.rackStackJobId
      };
    });
  };
  
  const [notNeededDocs] = useState<Document[]>([
    {
      id: 'not_1',
      name: 'Gift Letter',
      type: 'financial',
      status: 'not_needed',
      category: 'not_needed',
      whyRequired: 'No gift funds identified in application',
      citation: 'Section 4.3 - Gift Documentation'
    }
  ]);

  const documents = getDocumentsFromApi();
  
  // Initialize documents in store when program changes (only once per program)
  useEffect(() => {
    if (selectedProgramId && selectedProgramId !== initializedProgramId && documents.length > 0) {
      console.log('🔄 Initializing documents for program:', selectedProgramId);
      // Convert to proper Document type for store
      const docsForStore = documents.map(doc => ({
        id: doc.id,
        name: doc.name,
        type: doc.type,
        status: doc.status as any,
        required: true,
        category: doc.category as any,
        uploadedFiles: doc.uploadedFiles,
        rackStackJobId: doc.rackStackJobId
      }));
      setDocuments(docsForStore as any);
      setInitializedProgramId(selectedProgramId);
    }
  }, [selectedProgramId]); // Only run when program changes
  
  const minimumDocs = documents.filter(doc => doc.category === 'minimum');
  const likelyDocs = documents.filter(doc => doc.category === 'likely');
  const additionalDocs = documents.filter(doc => doc.category === 'additional');

  const handleUploadClick = (doc: Document) => {
    setSelectedDocument(doc);
    setUploadDialogOpen(true);
    onDocumentClick(doc.id);
  };

  // Handle "Run AI Verification" button click
  const handleRunAIVerification = async () => {
    // Find all documents with "uploaded" status (not yet AI-verified)
    const docsToVerify = documents.filter(
      doc => doc.status === 'uploaded' && doc.uploadedFiles && doc.uploadedFiles.length > 0
    );

    if (docsToVerify.length === 0) {
      toast.info('No uploaded documents to verify');
      return;
    }

    if (!isRackStackConfigured()) {
      toast.error('Rack Stack API not configured. Please set credentials in src/lib/config/credentials.ts');
      return;
    }

    setIsRunningVerification(true);
    toast.info(`Starting AI verification for ${docsToVerify.length} document(s)...`);

    let successCount = 0;
    let failCount = 0;

    // Process documents sequentially to avoid overwhelming the system
    for (const doc of docsToVerify) {
      // Get the first uploaded file for this document
      const firstFile = doc.uploadedFiles![0];

      try {
        // Step 1: Update document status to in_progress
        updateDocument(doc.id, {
          status: 'in_progress' as any
        });

        // Step 2: Trigger Rack Stack processing
        const triggerResult = await triggerRackStackProcessing(
          firstFile.s3Bucket,
          firstFile.s3Key,
          doc.id
        );

        if (!triggerResult.success) {
          throw new Error(triggerResult.message || 'Failed to trigger processing');
        }

        // Store job ID and output destination
        updateDocument(doc.id, {
          rackStackJobId: triggerResult.dag_run_id as any,
          outputDestination: triggerResult.output_destination as any
        });

        // Add timeline event for job start
        addTimelineEvent({
          id: `timeline_${Date.now()}`,
          timestamp: new Date().toISOString(),
          event: 'AI Verification Started',
          description: `Processing started for ${doc.name} (Job ID: ${triggerResult.dag_run_id})`,
          status: 'completed'
        });

        toast.info(`Processing ${doc.name}... This may take up to 90 seconds.`);

        // Step 3: Poll for results (will take ~1 minute)
        const pollResult = await pollForResults(triggerResult.output_destination!);

        if (pollResult.status === 'ai-verified') {
          // Success! Update document with verification details
          updateDocument(doc.id, {
            status: 'ai-verified' as any,
            classificationCategory: pollResult.category as any,
            classificationConfidence: pollResult.confidence as any
          });

          // Add success timeline event
          addTimelineEvent({
            id: `timeline_${Date.now()}`,
            timestamp: new Date().toISOString(),
            event: 'AI Verification Completed',
            description: `${doc.name} verified as ${pollResult.category} (${(pollResult.confidence! * 100).toFixed(1)}% confidence)`,
            status: 'completed'
          });

          toast.success(pollResult.message || `${doc.name} verified successfully!`);
          successCount++;
        } else {
          // Failed verification
          updateDocument(doc.id, {
            status: 'failed' as any,
            classificationCategory: pollResult.category as any,
            classificationConfidence: pollResult.confidence as any
          });

          // Add failure timeline event
          addTimelineEvent({
            id: `timeline_${Date.now()}`,
            timestamp: new Date().toISOString(),
            event: 'AI Verification Failed',
            description: `${doc.name}: ${pollResult.message}`,
            status: 'failed'
          });

          toast.error(`${doc.name}: ${pollResult.message}`);
          failCount++;
        }
      } catch (error) {
        console.error(`Failed to verify ${doc.name}:`, error);
        
        // Revert to uploaded status
        updateDocument(doc.id, {
          status: 'uploaded' as any
        });

        toast.error(`Failed to process ${doc.name}: ${error instanceof Error ? error.message : 'Unknown error'}`);
        failCount++;
      }
    }

    setIsRunningVerification(false);

    if (successCount > 0) {
      toast.success(`Successfully verified ${successCount} document(s)!`);
    }
    if (failCount > 0) {
      toast.error(`${failCount} document(s) failed verification`);
    }
  };

  const DocumentRow = ({ doc }: { doc: Document }) => (
    <div
      key={doc.id}
      className="flex items-start gap-4 p-4 border border-slate-200 rounded-lg hover:bg-slate-50/50 transition-colors"
      data-testid={`document-${doc.id}`}
    >
      <div className="flex-shrink-0 mt-0.5">
        {getStatusIcon(doc.status)}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-medium text-slate-900">
            {doc.name}
          </h4>
          <Tooltip>
            <TooltipTrigger>
              <Info className="w-3 h-3 text-slate-400" />
            </TooltipTrigger>
            <TooltipContent>
              <div className="text-xs max-w-xs space-y-2">
                <div>
                  <p><strong>Why required:</strong> {doc.whyRequired}</p>
                </div>
                <div>
                  <p><strong>Citation:</strong> {doc.citation}</p>
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
        
        {/* Display uploaded file names */}
        {doc.uploadedFiles && doc.uploadedFiles.length > 0 && (
          <div className="mt-2 space-y-1">
            {doc.uploadedFiles.map((file) => (
              <div key={file.id} className="flex items-center gap-2 text-xs text-slate-600">
                <FileText className="w-3 h-3 text-slate-400" />
                <span className="truncate max-w-xs">{file.originalName}</span>
                <span className="text-slate-400">
                  ({(file.fileSize / 1024 / 1024).toFixed(1)} MB)
                </span>
                {file.url && (
                  <a 
                    href={file.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700"
                    title="View document"
                  >
                    <Download className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Show Rack Stack Job ID if available */}
        {doc.rackStackJobId && (
          <div className="mt-1 text-xs text-slate-500">
            Job ID: {doc.rackStackJobId}
          </div>
        )}

        {/* Show classification results if available */}
        {doc.classificationCategory && doc.classificationConfidence && (
          <div className="mt-2 text-xs text-slate-600">
            <span className="font-medium">Classification:</span> {doc.classificationCategory} 
            <span className="text-slate-500 ml-1">
              ({(doc.classificationConfidence * 100).toFixed(1)}% confidence)
            </span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-3">
        {getStatusBadge(doc.status)}
        <Button
          size="sm"
          variant="outline"
          onClick={() => {
            // Check if document is already in package
            const alreadyInPackage = packageDocuments.some(pkgDoc => pkgDoc.id === doc.id);
            
            if (alreadyInPackage) {
              toast.info(`${doc.name} is already in the package`);
              return;
            }
            
            // Determine category based on document's category
            const category = doc.category === 'likely' ? 'likely' : 'minimum';
            
            // Add to package in global store
            addToPackage({
              id: doc.id,
              name: doc.name,
              category: category as 'minimum' | 'likely',
              verified: doc.status === 'ai-verified' || doc.status === 'uploaded',
              timestamp: new Date().toISOString()
            });
            
            // Call parent handler for timeline event
            onAddToPackage(doc.id, doc.name, category as 'minimum' | 'likely');
          }}
          disabled={doc.status === 'pending' || doc.status === 'failed' || doc.status === 'in_progress'}
          data-testid={`add-${doc.id}`}
          className="flex items-center gap-2"
        >
          <Plus className="w-3 h-3" />
          Add →
        </Button>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => handleUploadClick(doc)}
          data-testid={`upload-${doc.id}`}
          title="Upload document (PDF, JPEG, PNG, TIFF)"
        >
          <Upload className="w-3 h-3" />
        </Button>
      </div>
    </div>
  );

  return (
    <TooltipProvider>
      <div className="space-y-6">
        {/* Header with Run AI Verification button */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Switch
              id="show-all"
              checked={showAllCategories}
              onCheckedChange={setShowAllCategories}
              data-testid="show-all-toggle"
            />
            <Label htmlFor="show-all" className="text-sm text-slate-600">
              Show all categories
            </Label>
          </div>

          <Button 
            onClick={handleRunAIVerification}
            disabled={isRunningVerification || !isRackStackConfigured()}
            className="bg-teal-500 hover:bg-teal-600 text-white"
          >
            {isRunningVerification ? (
              <>
                <Clock className="w-4 h-4 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              'Run AI Verification'
            )}
          </Button>
        </div>

        {/* Configuration Status Warnings */}
        {(!isS3Configured() || !isRackStackConfigured()) && (
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm font-medium text-amber-800 mb-2">⚠️ Configuration Required</p>
            <ul className="text-xs text-amber-700 space-y-1 list-disc list-inside">
              {!isS3Configured() && (
                <li>S3 credentials not configured - uploads will fail</li>
              )}
              {!isRackStackConfigured() && (
                <li>Rack Stack API not configured - AI verification will fail</li>
              )}
            </ul>
            <p className="text-xs text-amber-700 mt-2">
              Please configure credentials in <code className="bg-amber-100 px-1 py-0.5 rounded">src/lib/config/credentials.ts</code>
            </p>
          </div>
        )}

        <Tabs defaultValue="available" className="space-y-4">
          <TabsList>
            <TabsTrigger value="available">Available Documents</TabsTrigger>
            <TabsTrigger value="not-needed">Not Needed</TabsTrigger>
          </TabsList>

          <TabsContent value="available" className="space-y-6">
            {/* Minimum Documents */}
            <div className="space-y-4">
              <h3 className="font-semibold text-slate-900">Minimum for Submit</h3>
              <div className="space-y-3">
                {minimumDocs.map(doc => <DocumentRow key={doc.id} doc={doc} />)}
              </div>
            </div>

            {/* Likely Conditions Documents */}
            {likelyDocs.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-semibold text-slate-900">Likely Conditions</h3>
                <div className="space-y-3">
                  {likelyDocs.map(doc => <DocumentRow key={doc.id} doc={doc} />)}
                </div>
              </div>
            )}

            {/* Additional Categories (if showing all) */}
            {showAllCategories && additionalDocs.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-semibold text-slate-900">Additional Documents</h3>
                <div className="space-y-3">
                  {additionalDocs.map(doc => <DocumentRow key={doc.id} doc={doc} />)}
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="not-needed" className="space-y-4">
            <div className="space-y-4">
              <h3 className="font-semibold text-slate-900">Not Needed (Parking Lot)</h3>
              <div className="space-y-3">
                {notNeededDocs.map(doc => <DocumentRow key={doc.id} doc={doc} />)}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Upload Dialog */}
        {selectedDocument && (
          <DocumentUploadDialog
            selectedDocument={selectedDocument}
            isOpen={uploadDialogOpen}
            onClose={() => {
              setUploadDialogOpen(false);
              setSelectedDocument(null);
            }}
          />
        )}
      </div>
    </TooltipProvider>
  );
}
