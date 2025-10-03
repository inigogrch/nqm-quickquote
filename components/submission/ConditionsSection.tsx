'use client';

import { useState } from 'react';
import { AlertCircle, CheckCircle, XCircle, Clock, Sparkles, FileText, Upload, X, Plus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { toast } from 'sonner';
import { useAppStore } from '../../lib/store';
import { triggerConditionsCheck, pollForConditionsResults, type ProcessedCondition } from '../../src/lib/api/conditions';
import { uploadFilesToS3, isS3Configured } from '../../src/lib/api/s3-upload';

interface Condition {
  id: number;
  name: string;
  category: string;
  description: string;
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
}

interface ConditionsSectionProps {
  conditions: Condition[];
  onRunConditions?: () => Promise<void>;
}

interface ConditionResultProps {
  condition: Condition;
  result?: ProcessedCondition;
  onUploadClick: (condition: Condition) => void;
}

// Document Upload Dialog Component for Conditions
const ConditionUploadDialog = ({ 
  condition, 
  isOpen, 
  onClose,
  onFilesUploaded
}: { 
  condition: Condition; 
  isOpen: boolean; 
  onClose: () => void;
  onFilesUploaded: (conditionId: number, files: Array<{
    id: string;
    originalName: string;
    fileName: string;
    fileSize: number;
    fileType: string;
    uploadedAt: string;
    s3Key: string;
    s3Bucket: string;
    url?: string;
  }>) => void;
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const { selectedProgramId, addTimelineEvent } = useAppStore();

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
      // Upload files to S3
      const uploadedFileMetadata = await uploadFilesToS3(
        uploadedFiles,
        `condition_${condition.id}`,
        selectedProgramId
      );

      // Call the callback to update parent state
      onFilesUploaded(condition.id, uploadedFileMetadata);

      // Add timeline event
      addTimelineEvent({
        id: `timeline_${Date.now()}`,
        timestamp: new Date().toISOString(),
        event: 'Condition Document Uploaded',
        description: `${uploadedFiles.length} file(s) uploaded for ${condition.name}`,
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
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Upload Document for {condition.name}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Condition Info */}
          <div className="p-3 bg-slate-50 rounded-lg">
            <p className="text-sm text-slate-600 mb-1">Condition:</p>
            <p className="font-medium">{condition.name}</p>
            {condition.description && (
              <>
                <p className="text-sm text-slate-600 mt-2 mb-1">Description:</p>
                <p className="text-sm">{condition.description}</p>
              </>
            )}
            <Badge variant="outline" className="text-xs mt-2">
              {condition.category}
            </Badge>
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
              id="condition-file-upload"
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => document.getElementById('condition-file-upload')?.click()}
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
                <div key={index} className="grid grid-cols-[20px_1fr_auto_auto] gap-2 items-center p-2 bg-slate-50 rounded">
                  <FileText className="w-4 h-4 text-slate-500" />
                  <p className="text-sm truncate overflow-hidden text-ellipsis whitespace-nowrap min-w-0" title={file.name}>
                    {file.name}
                  </p>
                  <span className="text-xs text-slate-500 whitespace-nowrap">
                    ({(file.size / 1024 / 1024).toFixed(1)} MB)
                  </span>
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

const ConditionResultRow = ({ condition, result, onUploadClick }: ConditionResultProps) => {
  const [isAnalysisOpen, setIsAnalysisOpen] = useState(false);
  const [isReasoningOpen, setIsReasoningOpen] = useState(false);

  if (!result) {
    return null;
  }

  const isFulfilled = result.document_status === 'fulfilled';

  return (
    <>
      <div className="border border-slate-200 rounded-lg bg-white p-4">
        <div className="flex items-center gap-3">
          {/* Left Section: Main Condition Info */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="flex-shrink-0">
              {isFulfilled ? (
                <CheckCircle className="w-5 h-5 text-ok" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500" />
              )}
            </div>

            <Badge variant="outline" className="text-xs bg-slate-100 text-slate-700 flex-shrink-0">
              #{condition.id}
            </Badge>
            
            <h4 className="font-medium text-slate-900 flex-shrink-0">{result.title}</h4>
            
            <Badge 
              className={isFulfilled 
                ? 'bg-ok/10 text-ok border-ok/20' 
                : 'bg-red-50 text-red-700 border-red-200'
              }
              variant="outline"
            >
              {isFulfilled ? 'Fulfilled' : 'Not Fulfilled'}
            </Badge>

            {/* Document Reference - Inline */}
            {result.result_document_id && (
              <span className="text-xs text-slate-500 ml-2">
                Document: {result.result_document_id}
              </span>
            )}

            {/* Show uploaded files count if any */}
            {condition.uploadedFiles && condition.uploadedFiles.length > 0 && (
              <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                {condition.uploadedFiles.length} file(s) uploaded
              </Badge>
            )}
          </div>

          {/* Right Section: Action Buttons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Badge variant="outline" className="text-xs">
              {result.category}
            </Badge>

            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setIsAnalysisOpen(true)}
              className="h-8 text-xs"
            >
              <FileText className="w-3 h-3 mr-1" />
              Analysis
            </Button>

            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setIsReasoningOpen(true)}
              className="h-8 text-xs"
            >
              <FileText className="w-3 h-3 mr-1" />
              Reasoning
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => onUploadClick(condition)}
              className="h-8"
              title="Upload document"
            >
              <Upload className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </div>

      {/* Analysis Dialog */}
      <Dialog open={isAnalysisOpen} onOpenChange={setIsAnalysisOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Analysis - Condition #{condition.id}</DialogTitle>
            <DialogDescription>
              {result.title}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
              {result.document_analysis}
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Reasoning Dialog */}
      <Dialog open={isReasoningOpen} onOpenChange={setIsReasoningOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Reasoning - Condition #{condition.id}</DialogTitle>
            <DialogDescription>
              {result.title}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">
              {result.document_analysis_thinking}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const ConditionRow = ({ condition, onUploadClick, uploadedFiles }: { 
  condition: Condition; 
  onUploadClick: (condition: Condition) => void;
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
}) => (
  <div className="border border-slate-200 rounded-lg hover:bg-slate-50/50 transition-colors">
    <div className="flex items-center gap-4 p-4">
      <div className="flex-shrink-0">
        <AlertCircle className="w-5 h-5 text-amber-500" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs bg-slate-100 text-slate-700">
            #{condition.id}
          </Badge>
          <h4 className="font-medium text-slate-900">{condition.name}</h4>
          <Tooltip>
            <TooltipTrigger>
              <AlertCircle className="w-3 h-3 text-slate-400" />
            </TooltipTrigger>
            <TooltipContent>
              <div className="text-xs max-w-xs">
                <p>{condition.description}</p>
              </div>
            </TooltipContent>
          </Tooltip>
          
          {/* Show uploaded files count if any */}
          {uploadedFiles && uploadedFiles.length > 0 && (
            <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
              {uploadedFiles.length} file(s) uploaded
            </Badge>
          )}
        </div>
      </div>

      {/* Right section with category badge and upload button */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <Badge variant="outline" className="text-xs">
          {condition.category}
        </Badge>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onUploadClick(condition)}
          title="Upload document"
        >
          <Upload className="w-3 h-3" />
        </Button>
      </div>
    </div>
    
    {/* Display uploaded file names */}
    {uploadedFiles && uploadedFiles.length > 0 && (
      <div className="px-4 pb-4 pt-0 space-y-1 border-t border-slate-100 mt-2">
        {uploadedFiles.map((file) => (
          <div key={file.id} className="grid grid-cols-[16px_1fr_auto] gap-2 items-center text-xs text-slate-600 py-1">
            <FileText className="w-3 h-3 text-slate-400" />
            <span className="truncate overflow-hidden text-ellipsis whitespace-nowrap min-w-0" title={file.originalName}>
              {file.originalName}
            </span>
            <span className="text-slate-400 text-xs whitespace-nowrap">
              {(file.fileSize / 1024 / 1024).toFixed(1)} MB
            </span>
          </div>
        ))}
      </div>
    )}
  </div>
);

export function ConditionsSection({ conditions, onRunConditions }: ConditionsSectionProps) {
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [selectedCondition, setSelectedCondition] = useState<Condition | null>(null);
  // Track uploaded files per condition ID
  const [uploadedFilesByCondition, setUploadedFilesByCondition] = useState<Record<number, Array<{
    id: string;
    originalName: string;
    fileName: string;
    fileSize: number;
    fileType: string;
    uploadedAt: string;
    s3Key: string;
    s3Bucket: string;
    url?: string;
  }>>>({});

  const {
    conditionsStatus,
    conditionsResults,
    conditionsError,
    setConditionsStatus,
    setConditionsResults,
    setConditionsError,
  } = useAppStore();

  const handleUploadClick = (condition: Condition) => {
    setSelectedCondition(condition);
    setUploadDialogOpen(true);
  };

  const handleFilesUploaded = (conditionId: number, files: Array<{
    id: string;
    originalName: string;
    fileName: string;
    fileSize: number;
    fileType: string;
    uploadedAt: string;
    s3Key: string;
    s3Bucket: string;
    url?: string;
  }>) => {
    setUploadedFilesByCondition(prev => ({
      ...prev,
      [conditionId]: [...(prev[conditionId] || []), ...files]
    }));
  };

  const handleRunConditions = async () => {
    if (onRunConditions) {
      await onRunConditions();
      return;
    }

    // Default implementation using actual uploaded files
    setConditionsStatus('running');
    setConditionsError(null);
    toast.info('Starting conditions check...');

    try {
      // Prepare request data
      const conditionRequests = conditions.map(c => ({
        id: c.id,
        name: c.name,
        data: {
          Title: c.name,
          Category: c.category,
          Description: c.description,
        },
      }));

      // Collect all uploaded PDFs from uploadedFilesByCondition state
      const s3PdfPaths: Array<{ bucket: string; key: string }> = [];
      
      conditions.forEach(condition => {
        const files = uploadedFilesByCondition[condition.id];
        if (files && files.length > 0) {
          files.forEach(file => {
            s3PdfPaths.push({
              bucket: file.s3Bucket,
              key: file.s3Key
            });
          });
        }
      });

      // Validate that we have uploaded files
      if (s3PdfPaths.length === 0) {
        toast.error('No documents uploaded. Please upload documents for conditions before running AI.');
        setConditionsStatus('idle');
        return;
      }

      console.log('📄 Using uploaded documents for conditions check:', s3PdfPaths);

      // Trigger the API
      const triggerResult = await triggerConditionsCheck(conditionRequests, s3PdfPaths);

      if (!triggerResult.success || !triggerResult.output_destination) {
        throw new Error(triggerResult.message || 'Failed to trigger conditions check');
      }

      toast.info('Conditions check in progress... Please wait.');

      // Poll for results
      const pollResult = await pollForConditionsResults(triggerResult.output_destination);

      if (!pollResult.success || !pollResult.data) {
        throw new Error(pollResult.message || 'Failed to get conditions results');
      }

      setConditionsResults(pollResult.data);
      setConditionsStatus('completed');
      toast.success('Conditions check completed!');
    } catch (error) {
      console.error('Conditions check error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setConditionsError(errorMessage);
      setConditionsStatus('failed');
      toast.error(`Conditions check failed: ${errorMessage}`);
    }
  };

  if (conditions.length === 0) {
    return null;
  }

  const hasResults = conditionsStatus === 'completed' && conditionsResults;
  const isRunning = conditionsStatus === 'running';
  const hasFailed = conditionsStatus === 'failed';

  // Calculate fulfilled/not fulfilled counts from results
  const fulfilledCount = hasResults 
    ? conditionsResults.processed_conditions.filter((c: ProcessedCondition) => c.document_status === 'fulfilled').length 
    : 0;
  const notFulfilledCount = hasResults 
    ? conditionsResults.processed_conditions.filter((c: ProcessedCondition) => c.document_status === 'not fulfilled').length 
    : 0;

  return (
    <TooltipProvider>
      <div className="space-y-6">
        {/* Header with Run Button */}
        <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-slate-900">Conditions</h3>
            {!hasResults && (
          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
            {conditions.length} New
          </Badge>
            )}
            {hasResults && (
              <>
                <Badge className="bg-ok text-white">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {fulfilledCount} Fulfilled
                </Badge>
                {notFulfilledCount > 0 && (
                  <Badge className="bg-red-500 text-white">
                    <XCircle className="w-3 h-3 mr-1" />
                    {notFulfilledCount} Not Fulfilled
                  </Badge>
                )}
              </>
            )}
            {isRunning && (
              <Badge className="bg-brand text-white">
                <Clock className="w-3 h-3 mr-1 animate-spin" />
                Running
              </Badge>
            )}
          </div>

          <Button
            onClick={handleRunConditions}
            disabled={isRunning}
            size="sm"
            className="bg-brand hover:bg-brand-600 text-white"
          >
            {isRunning ? (
              <>
                <Clock className="w-4 h-4 mr-2 animate-spin" />
                Running AI...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Run Conditions AI
              </>
            )}
          </Button>
        </div>

        {/* Error Message */}
        {hasFailed && conditionsError && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center gap-2">
              <XCircle className="w-4 h-4 text-red-600" />
              <p className="text-sm text-red-700">{conditionsError}</p>
            </div>
          </div>
        )}

        {/* Results or Conditions List */}
        <div className="space-y-3">
          {hasResults ? (
            // Show results with status
            conditionsResults.processed_conditions.map((result: ProcessedCondition) => {
              const condition = conditions.find(c => c.id === result.condition_id);
              return condition ? (
                <ConditionResultRow 
                  key={result.condition_id} 
                  condition={condition} 
                  result={result} 
                  onUploadClick={handleUploadClick}
                />
              ) : null;
            })
          ) : (
            // Show initial conditions
            conditions.map(condition => (
              <ConditionRow 
                key={condition.id} 
                condition={condition} 
                onUploadClick={handleUploadClick}
                uploadedFiles={uploadedFilesByCondition[condition.id]}
              />
            ))
          )}
        </div>

        {/* Upload Dialog */}
        {selectedCondition && (
          <ConditionUploadDialog
            condition={selectedCondition}
            isOpen={uploadDialogOpen}
            onClose={() => {
              setUploadDialogOpen(false);
              setSelectedCondition(null);
            }}
            onFilesUploaded={handleFilesUploaded}
          />
        )}
      </div>
    </TooltipProvider>
  );
}
