'use client';

import { useState } from 'react';
import { FileText, Upload, CheckCircle, AlertCircle, Clock, Info, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { PLACEHOLDER_CHECKLIST } from '../../lib/fixtures';
import { useAppStore } from '../../lib/store';
import { extractDocumentStatusesForProgram, DocumentStatus } from '../../src/lib/api';

interface Document {
  id: string;
  name: string;
  type: string;
  status: string;
  category: string;
  whyRequired?: string;
  citation?: string;
}

interface DocumentsFolderProps {
  onAddToPackage: (docId: string) => void;
  onDocumentClick: (docId: string) => void;
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed':
      return <CheckCircle className="w-4 h-4 text-ok" />;
    case 'in_progress':
      return <Clock className="w-4 h-4 text-warn animate-spin" />;
    case 'failed':
      return <AlertCircle className="w-4 h-4 text-bad" />;
    default:
      return <FileText className="w-4 h-4 text-slate-400" />;
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'completed':
    case 'ai-verified':
      return <Badge className="bg-ok text-white">AI-Verified</Badge>;
    case 'in_progress':
    case 'uploaded':
      return <Badge className="bg-warn text-white">Uploaded</Badge>;
    case 'failed':
      return <Badge className="bg-bad text-white">Needs Attention</Badge>;
    case 'pending':
    default:
      return <Badge variant="outline">Pending</Badge>;
  }
};

// Mock documents based on checklist
const generateDocuments = (showAll: boolean): Document[] => {
  const minimumDocs = PLACEHOLDER_CHECKLIST.minimum.map((name, index) => ({
    id: `min_${index}`,
    name,
    type: 'required',
    status: index < 2 ? 'completed' : index < 4 ? 'in_progress' : 'pending',
    category: 'minimum',
    whyRequired: `Required for loan submission - Guideline ${index + 1}.1`,
    citation: `Section ${index + 1}.1 - Minimum Documentation Requirements`
  }));

  const likelyDocs = PLACEHOLDER_CHECKLIST.likely.map((name, index) => ({
    id: `likely_${index}`,
    name,
    type: 'conditional',
    status: index === 0 ? 'completed' : 'pending',
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
const DocumentUploadDialog = ({ document, isOpen, onClose }: { 
  document: Document; 
  isOpen: boolean; 
  onClose: () => void; 
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

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

  const handleUpload = () => {
    // Simulate upload process
    console.log('Uploading files:', uploadedFiles);
    // Here you would typically send files to your backend
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Upload {document.name}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Document Info */}
          <div className="p-3 bg-slate-50 rounded-lg">
            <p className="text-sm text-slate-600 mb-1">Document Type:</p>
            <p className="font-medium">{document.name}</p>
            {document.whyRequired && (
              <>
                <p className="text-sm text-slate-600 mt-2 mb-1">Why Required:</p>
                <p className="text-sm">{document.whyRequired}</p>
              </>
            )}
          </div>

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
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-slate-500" />
                    <span className="text-sm">{file.name}</span>
                    <span className="text-xs text-slate-500">
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
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={handleUpload}
              disabled={uploadedFiles.length === 0}
              className="flex-1"
            >
              Upload {uploadedFiles.length > 0 && `(${uploadedFiles.length})`}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export function DocumentsFolder({ onAddToPackage, onDocumentClick }: DocumentsFolderProps) {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  
  // Get the selected program and API response from store
  const { selectedProgramId, eligibilityApiResponse, loanPrograms } = useAppStore();
  
  // Generate documents from API response
  const getDocumentsFromApi = (): Document[] => {
    if (!selectedProgramId || !eligibilityApiResponse) {
      // Fallback to placeholder data if no API data available
      return generateDocuments(showAllCategories);
    }
    
    // Find the selected program to get the original API key
    const selectedProgram = loanPrograms.find(p => p.id === selectedProgramId);
    const apiKeyToUse = selectedProgram?.originalApiKey || selectedProgramId;
    
    console.log('🔍 Document extraction debug:', {
      selectedProgramId,
      selectedProgram: selectedProgram?.name,
      originalApiKey: selectedProgram?.originalApiKey,
      apiKeyToUse,
      hasApiResponse: !!eligibilityApiResponse
    });
    
    const documentStatuses = extractDocumentStatusesForProgram(eligibilityApiResponse, apiKeyToUse);
    
    console.log('📄 Extracted document statuses:', documentStatuses);
    
    return documentStatuses.map((docStatus, index) => ({
      id: docStatus.id,
      name: docStatus.name,
      type: 'required',
      status: docStatus.status,
      category: 'minimum', // For now, treat all API docs as minimum
      whyRequired: `Required document for ${selectedProgramId} program`,
      citation: `Program requirement for ${docStatus.field}`
    }));
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
  const minimumDocs = documents.filter(doc => doc.category === 'minimum');
  const likelyDocs = documents.filter(doc => doc.category === 'likely');
  const additionalDocs = documents.filter(doc => doc.category === 'additional');

  const handleUploadClick = (doc: Document) => {
    setSelectedDocument(doc);
    setUploadDialogOpen(true);
    onDocumentClick(doc.id);
  };

  const DocumentRow = ({ doc }: { doc: Document }) => (
    <div
      key={doc.id}
      className="flex items-center gap-4 p-4 border border-slate-200 rounded-lg hover:bg-slate-50/50 transition-colors"
      data-testid={`document-${doc.id}`}
    >
      <div className="flex-shrink-0">
        {getStatusIcon(doc.status)}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-medium text-slate-900" data-placeholder="true">
            {doc.name}
            {/* TODO: replace with live document service */}
          </h4>
          <Tooltip>
            <TooltipTrigger>
              <Info className="w-3 h-3 text-slate-400" />
            </TooltipTrigger>
            <TooltipContent>
              <div className="text-xs max-w-xs space-y-1" data-placeholder="true">
                <p><strong>Why required:</strong> {doc.whyRequired}</p>
                <p><strong>Citation:</strong> {doc.citation}</p>
                {/* TODO: replace with live guidelines service */}
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {getStatusBadge(doc.status)}
        <Button
          size="sm"
          variant="outline"
          onClick={() => onAddToPackage(doc.id)}
          disabled={doc.status === 'pending' || doc.status === 'failed'}
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
    <div className="space-y-6">
      {/* Show All Categories Toggle */}
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

          {/* Likely Conditions */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-900">Likely Conditions</h3>
            <div className="space-y-3">
              {likelyDocs.map(doc => <DocumentRow key={doc.id} doc={doc} />)}
            </div>
          </div>

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
          document={selectedDocument}
          isOpen={uploadDialogOpen}
          onClose={() => {
            setUploadDialogOpen(false);
            setSelectedDocument(null);
          }}
        />
      )}
    </div>
  );
}