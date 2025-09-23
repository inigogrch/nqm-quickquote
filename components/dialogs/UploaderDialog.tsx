'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useAppStore } from '../../lib/store';
import { Upload, FileText, CheckCircle, AlertCircle, X } from 'lucide-react';
import { toast } from 'sonner';

interface UploaderDialogProps {
  isOpen: boolean;
  onClose: () => void;
  documentId: string | null;
}

export function UploaderDialog({ isOpen, onClose, documentId }: UploaderDialogProps) {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const { documents, updateDocument, addTimelineEvent } = useAppStore();

  const currentDocument = documentId ? documents.find(doc => doc.id === documentId) : null;

  const handleFileUpload = async (files: FileList | null) => {
    if (!files || files.length === 0 || !currentDocument) return;

    setIsUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const uploadInterval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(uploadInterval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    // Simulate upload completion
    setTimeout(() => {
      const fileNames = Array.from(files).map(file => file.name);
      setUploadedFiles(prev => [...prev, ...fileNames]);
      
      // Update document status
      updateDocument(currentDocument.id, {
        status: 'completed',
        uploadedFiles: [...(currentDocument.uploadedFiles || []), ...fileNames]
      });

      // Add timeline event
      addTimelineEvent({
        id: `timeline_${Date.now()}`,
        timestamp: new Date().toISOString(),
        event: 'Document Uploaded',
        description: `${fileNames.join(', ')} uploaded for ${currentDocument.name}`,
        status: 'completed'
      });

      setIsUploading(false);
      setUploadProgress(0);
      toast.success(`${fileNames.length} file(s) uploaded successfully`);
    }, 2000);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    handleFileUpload(files);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFileUpload(e.target.files);
  };

  const removeFile = (fileName: string) => {
    setUploadedFiles(prev => prev.filter(name => name !== fileName));
    if (currentDocument) {
      const updatedFiles = (currentDocument.uploadedFiles || []).filter(name => name !== fileName);
      updateDocument(currentDocument.id, {
        uploadedFiles: updatedFiles,
        status: updatedFiles.length > 0 ? 'completed' : 'pending'
      });
    }
  };

  if (!currentDocument) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-brand" />
            Upload Document
          </DialogTitle>
          <DialogDescription data-placeholder="true">
            {currentDocument.name}
            {/* TODO: replace with live document service */}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Document Info */}
          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
            <div>
              <p className="font-medium text-slate-900" data-placeholder="true">
                {currentDocument.name}
                {/* TODO: replace with live document service */}
              </p>
              <p className="text-sm text-slate-600" data-placeholder="true">
                {currentDocument.description || 'Required document'}
                {/* TODO: replace with live document service */}
              </p>
            </div>
            <Badge 
              variant="outline"
              className={
                currentDocument.status === 'completed' ? 'bg-ok/10 text-ok border-ok/20' :
                currentDocument.status === 'in_progress' ? 'bg-brand/10 text-brand border-brand/20' :
                'border-slate-300 text-slate-500'
              }
            >
              {currentDocument.status.replace('_', ' ')}
            </Badge>
          </div>

          {/* Upload Area */}
          <div
            className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-brand/50 transition-colors cursor-pointer"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => document.getElementById('file-input')?.click()}
          >
            <Upload className="w-8 h-8 text-slate-400 mx-auto mb-3" />
            <p className="text-slate-600 mb-2">
              Drag and drop files here, or click to browse
            </p>
            <p className="text-sm text-slate-500">
              Supports PDF, DOC, DOCX, JPG, PNG files
            </p>
            <input
              id="file-input"
              type="file"
              multiple
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              onChange={handleFileInputChange}
              className="hidden"
              data-testid="file-input"
            />
          </div>

          {/* Upload Progress */}
          {isUploading && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Uploading...</span>
                <span className="text-sm text-slate-600">{uploadProgress}%</span>
              </div>
              <Progress value={uploadProgress} className="h-2" />
            </div>
          )}

          {/* Uploaded Files */}
          {uploadedFiles.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-medium text-slate-900">Uploaded Files</p>
              <div className="space-y-2">
                {uploadedFiles.map((fileName, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-ok/5 border border-ok/20 rounded-lg">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-ok" />
                      <span className="text-sm text-slate-700">{fileName}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(fileName)}
                      data-testid={`remove-file-${index}`}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1"
              data-testid="cancel-upload"
            >
              Cancel
            </Button>
            <Button
              onClick={onClose}
              disabled={uploadedFiles.length === 0}
              className="flex-1 bg-brand hover:bg-brand-600"
              data-testid="done-upload"
            >
              Done
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}