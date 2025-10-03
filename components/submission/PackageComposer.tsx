'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
import { X, Download, Send, Clock } from 'lucide-react';
import { PLACEHOLDER_PROGRAM } from '../../lib/fixtures';
import { useAppStore } from '../../lib/store';

interface PackageDocument {
  id: string;
  name: string;
  category: 'minimum' | 'likely';
  verified: boolean;
  timestamp: string;
}

interface PackageComposerProps {
  onSubmit: () => void;
  onDownloadPDF: () => void;
  onDownloadZIP: () => void;
}

export function PackageComposer({ onSubmit, onDownloadPDF, onDownloadZIP }: PackageComposerProps) {
  const [isVerifying, setIsVerifying] = useState(false);
  
  const { 
    selectedProgramId, 
    loanPrograms, 
    packageDocuments, 
    updatePackageDocument, 
    removeFromPackage,
    setShowConditions
  } = useAppStore();
  
  // Get the selected program name
  const selectedProgram = selectedProgramId 
    ? loanPrograms.find(p => p.id === selectedProgramId)
    : null;
  
  const programName = selectedProgram?.name || PLACEHOLDER_PROGRAM;
  
  // Use package documents from global store (starts empty)
  const packageDocs = packageDocuments;

  // Hardcoded total counts
  const totalMinimumDocs = 5;
  const totalLikelyDocs = 0; // Will be made dynamic later

  const minimumDocs = packageDocs.filter(doc => doc.category === 'minimum');
  const likelyDocs = packageDocs.filter(doc => doc.category === 'likely');
  
  const minimumCompleted = minimumDocs.filter(doc => doc.verified).length;
  const likelyCompleted = likelyDocs.filter(doc => doc.verified).length;
  
  const minimumProgress = (minimumCompleted / totalMinimumDocs) * 100;
  const likelyProgress = totalLikelyDocs > 0 ? (likelyCompleted / totalLikelyDocs) * 100 : 0;
  
  // Button is enabled only when all 5 minimum documents are included in the package
  const canSubmit = minimumDocs.length === totalMinimumDocs && minimumDocs.every(doc => doc.verified);

  const handleDocumentToggle = (docId: string, checked: boolean) => {
    updatePackageDocument(docId, { verified: checked });
  };

  const handleRemoveDocument = (docId: string) => {
    removeFromPackage(docId);
  };

  const handleVerifyPackage = async () => {
    setIsVerifying(true);
    
    // Wait 10 seconds
    await new Promise(resolve => setTimeout(resolve, 10000));
    
    // Show conditions pane
    setShowConditions(true);
    setIsVerifying(false);
  };

  return (
    <Card className="p-6 h-fit">
      {/* Header */}
      <div className="space-y-4 mb-6">
        <h3 className="text-lg font-semibold text-slate-900">
          {programName} Package
        </h3>
        
        {/* Progress Chips */}
        <div className="flex gap-4">
          <div className="space-y-2">
            <Badge variant="outline" className="text-xs">
              Minimum for Submit {minimumCompleted}/{totalMinimumDocs}
            </Badge>
            <Progress value={minimumProgress} className="h-1 w-32" />
          </div>
          <div className="space-y-2">
            <Badge variant="outline" className="text-xs">
              Conditions {likelyCompleted}/{totalLikelyDocs}
            </Badge>
            <Progress value={likelyProgress} className="h-1 w-32" />
          </div>
        </div>
      </div>

      {/* Document List */}
      <div className="space-y-3 mb-6 max-h-96 overflow-y-auto">
        {packageDocs.length === 0 ? (
          <div className="text-center py-8 text-slate-500">
            <p className="text-sm">No documents added to package yet</p>
            <p className="text-xs mt-1">Use &quot;+ Add →&quot; to add documents from the left</p>
          </div>
        ) : (
          packageDocs.map((doc, index) => (
            <div
              key={doc.id}
              className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg bg-slate-50/50"
              data-testid={`package-doc-${doc.id}`}
            >
              <button
                onClick={() => handleRemoveDocument(doc.id)}
                className="text-red-600 hover:text-red-700 cursor-pointer"
                title="Remove from package"
                data-testid={`remove-${doc.id}`}
              >
                <X className="w-4 h-4" />
              </button>
              
              <Checkbox
                checked={doc.verified}
                onCheckedChange={(checked) => handleDocumentToggle(doc.id, !!checked)}
                data-testid={`checkbox-${doc.id}`}
              />
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-900 truncate">
                  {doc.name}
                </p>
              </div>
              
              <Badge 
                className={doc.category === 'minimum' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'}
                variant="outline"
              >
                {doc.category === 'minimum' ? 'Min' : 'Likely'}
              </Badge>
            </div>
          ))
        )}
      </div>

      {/* Footer Actions */}
      <div className="space-y-3 pt-4 border-t border-slate-200">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onDownloadPDF}
            className="flex-1"
            data-testid="download-pdf"
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={onDownloadZIP}
            className="flex-1"
            data-testid="download-zip"
          >
            <Download className="w-4 h-4 mr-2" />
            Download ZIP
          </Button>
        </div>
        
        <Button
          onClick={handleVerifyPackage}
          disabled={!canSubmit || isVerifying}
          className="w-full bg-brand hover:bg-brand-600"
          data-testid="submit-package"
        >
          {isVerifying ? (
            <>
              <Clock className="w-4 h-4 mr-2 animate-spin" />
              Verifying...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Verify Package
            </>
          )}
        </Button>
        
        {!canSubmit && (
          <p className="text-xs text-slate-500 text-center" data-placeholder="true">
            {minimumDocs.length < totalMinimumDocs 
              ? `Add all ${totalMinimumDocs} minimum documents to verify (${minimumDocs.length}/${totalMinimumDocs} added)`
              : 'All minimum documents must be verified to submit'
            }
            {/* TODO: replace with live validation service */}
          </p>
        )}
      </div>
    </Card>
  );
}