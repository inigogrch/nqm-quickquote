'use client';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink, Settings } from 'lucide-react';
import { DocumentsFolder } from '../../components/submission/DocumentsFolder';
import { PackageComposer } from '../../components/submission/PackageComposer';
import { UploaderDialog } from '../../components/dialogs/UploaderDialog';
import { ExplainDrawer } from '../../components/drawers/ExplainDrawer';
import { useAppStore } from '../../lib/store';
import { PLACEHOLDER_PROGRAM } from '../../lib/fixtures';
import { toast } from 'sonner';

export default function Docs() {
  const navigate = useNavigate();
  const [uploaderOpen, setUploaderOpen] = useState(false);
  const [explainOpen, setExplainOpen] = useState(false);
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);
  const { addTimelineEvent, selectedProgramId, loanPrograms } = useAppStore();
  
  // Get the selected program name
  const selectedProgram = selectedProgramId 
    ? loanPrograms.find(p => p.id === selectedProgramId)
    : null;

  const handleDocumentClick = (docId: string) => {
    setSelectedDocId(docId);
    setUploaderOpen(true);
  };

  const handleAddToPackage = (docId: string) => {
    toast.success('Document added to package');
  };

  const handleSubmit = () => {
    // Add timeline events
    const now = new Date().toISOString();
    
    addTimelineEvent({
      id: `timeline_${Date.now()}_1`,
      timestamp: now,
      event: "Package generated",
      description: "Loan package assembled and validated",
      status: "completed"
    });
    
    addTimelineEvent({
      id: `timeline_${Date.now()}_2`,
      timestamp: now,
      event: "Queued to Encompass",
      description: "Package queued for LOS submission",
      status: "completed"
    });
    
    addTimelineEvent({
      id: `timeline_${Date.now()}_3`,
      timestamp: now,
      event: "Email sent",
      description: "Confirmation email sent to borrower",
      status: "completed"
    });

    toast.success('Package submitted successfully!');
    navigate('/summary');
  };

  const handleDownloadPDF = () => {
    toast.info('PDF download feature coming soon');
  };

  const handleDownloadZIP = () => {
    toast.info('ZIP download feature coming soon');
  };

  const handleChangeProgram = () => {
    navigate('/programs');
  };

  const handleOpenGuideline = () => {
    setExplainOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Sticky Header */}
      <Card className="sticky top-0 z-30 bg-[#FFFFFFCC] mr-[0px] ml-[0px] my-[0px] pt-[0px] pr-[0px] pb-[16px] pl-[0px] font-normal opacity-100 text-[#020817] backdrop-blur-sm border-b border-slate-200">
        <div className="space-y-4 mx-[15px] my-[5px] bg-[#00000000] mt-[15px] mr-[15px] mb-[0px] ml-[15px] pt-[0px] pr-[0px] pb-[0px] pl-[0px] font-normal opacity-100 text-[#020817]">
          {/* Page Title */}
          <h1 className="text-2xl font-semibold text-slate-900">Submission</h1>
          
          {/* Program Chip */}
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="px-3 py-1">
              Program: {selectedProgram?.name || PLACEHOLDER_PROGRAM}
            </Badge>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleOpenGuideline}
              className="text-brand hover:text-brand-600"
              data-testid="guideline-button"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Guideline
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleChangeProgram}
              className="text-slate-600 hover:text-slate-900"
              data-testid="change-program-button"
            >
              <Settings className="w-4 h-4 mr-1" />
              Change
            </Button>
          </div>
          
          {/* Subtext */}
          <p className="text-sm text-slate-600" data-placeholder="true">
            Checklist auto-tailored to your program. Minimum docs are required to submit; Likely Conditions are optional.
            {/* TODO: replace with live program service */}
          </p>
        </div>
      </Card>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Documents Folder */}
        <Card className="p-6">
          <DocumentsFolder
            onAddToPackage={handleAddToPackage}
            onDocumentClick={handleDocumentClick}
          />
        </Card>

        {/* Right Column - Package Composer */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <PackageComposer
            onSubmit={handleSubmit}
            onDownloadPDF={handleDownloadPDF}
            onDownloadZIP={handleDownloadZIP}
          />
        </div>
      </div>

      {/* Dialogs */}
      <UploaderDialog
        isOpen={uploaderOpen}
        onClose={() => setUploaderOpen(false)}
        documentId={selectedDocId}
      />
      
        <ExplainDrawer
          isOpen={explainOpen}
          onClose={() => setExplainOpen(false)}
          selectedProgramId={selectedProgramId}
        />
    </div>
  );
}