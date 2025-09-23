'use client';

import { FileText, Upload, CheckCircle, AlertCircle, Clock, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Document } from '@/lib/types';

interface DocumentListProps {
  documents: Document[];
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
      return <Badge className="bg-ok text-white">AI-Verified</Badge>;
    case 'in_progress':
      return <Badge className="bg-warn text-white">Uploaded</Badge>;
    case 'failed':
      return <Badge className="bg-bad text-white">Needs Attention</Badge>;
    default:
      return <Badge variant="outline">Pending</Badge>;
  }
};

const getDocumentWhy = (docType: string) => {
  const whyMap: Record<string, string> = {
    'application': 'Required for all loan applications',
    'financial': 'Income and asset verification',
    'title': 'Property ownership and liens',
    'credit': 'Credit history and score verification',
    'certification': 'Borrower attestations and disclosures'
  };
  return whyMap[docType] || 'Required document';
};

export function DocumentList({ documents, onDocumentClick }: DocumentListProps) {
  return (
    <div className="space-y-3">
      {documents.map((doc) => (
        <div
          key={doc.id}
          className="flex items-center gap-4 p-4 border border-slate-200 rounded-lg hover:bg-slate-50/50 transition-colors"
          data-testid={`document-${doc.id}`}
        >
          {/* Icon */}
          <div className="flex-shrink-0">
            {getStatusIcon(doc.status)}
          </div>

          {/* Document Info */}
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
                  <p className="text-xs max-w-xs" data-placeholder="true">
                    Guideline snippet: {getDocumentWhy(doc.type)}
                    {/* TODO: replace with live guidelines service */}
                  </p>
                </TooltipContent>
              </Tooltip>
            </div>
            <p className="text-sm text-slate-600" data-placeholder="true">
              {getDocumentWhy(doc.type)}
              {/* TODO: replace with live document service */}
            </p>
          </div>

          {/* Status */}
          <div className="flex items-center gap-3">
            {getStatusBadge(doc.status)}
            <Button
              size="sm"
              variant="outline"
              onClick={() => onDocumentClick(doc.id)}
              data-testid={`upload-${doc.id}`}
              className="flex items-center gap-2"
            >
              <Upload className="w-3 h-3" />
              {doc.status === 'pending' ? 'Upload' : 'View'}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}