'use client';

import { X, User, Check, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface LoanRecordCardProps {
  id: string;
  profileName: string;
  programName: string;
  requiredSteps: string[];
  createdAt: string;
  onRemove: (id: string) => void;
  onOpenDetails?: (id: string) => void;
}

export function LoanRecordCard({ 
  id, 
  profileName, 
  programName, 
  requiredSteps, 
  createdAt, 
  onRemove,
  onOpenDetails
}: LoanRecordCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Card className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 relative" onClick={() => onOpenDetails?.(id)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          {/* Profile Section */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <p className="font-medium text-slate-900 text-sm">{profileName}</p>
              <p className="text-xs text-slate-500">{formatDate(createdAt)}</p>
            </div>
          </div>

          {/* Program Section */}
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-white border-blue-300 text-blue-700">
              {programName}
            </Badge>
          </div>

          {/* Next Step */}
          <div className="flex items-center gap-2 flex-1">
            <Check className="w-4 h-4 text-slate-500" />
            <span className="text-xs text-slate-600">
              Next Step: {requiredSteps[0]}
            </span>
          </div>

          {/* Status */}
          <div className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-xs text-green-600 font-medium">Active</span>
          </div>
        </div>

        {/* Remove Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={(e) => { e.stopPropagation(); onRemove(id); }}
          className="w-6 h-6 p-0 hover:bg-red-100 hover:text-red-600 ml-2"
          data-testid={`remove-loan-record-${id}`}
        >
          <X className="w-3 h-3" />
        </Button>
      </div>
    </Card>
  );
}