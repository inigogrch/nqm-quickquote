'use client';

import { Badge } from '@/components/ui/badge';
import { LoanDetails } from '@/lib/types';

interface ScenarioChipsProps {
  loanDetails: LoanDetails;
}

export function ScenarioChips({ loanDetails }: ScenarioChipsProps) {
  return (
    <div className="flex gap-2 flex-wrap" data-placeholder="true">
      <Badge variant="outline" className="px-3 py-1">
        Amount: {loanDetails.loanAmount.toLocaleString()}
        {/* TODO: replace with live loan service */}
      </Badge>
      <Badge variant="outline" className="px-3 py-1">
        LTV: {loanDetails.loanToValue}%
        {/* TODO: replace with live loan service */}
      </Badge>
      <Badge variant="outline" className="px-3 py-1">
        FICO: {loanDetails.creditScore}
        {/* TODO: replace with live loan service */}
      </Badge>
      <Badge variant="outline" className="px-3 py-1">
        {loanDetails.propertyType.includes('CA') ? 'CA' : 'State'} / Lorem County
        {/* TODO: replace with live location service */}
      </Badge>
      {loanDetails.occupancyType && (
        <Badge variant="outline" className="px-3 py-1">
          {loanDetails.occupancyType}
        </Badge>
      )}
      {loanDetails.loanPurpose && (
        <Badge variant="outline" className="px-3 py-1">
          {loanDetails.loanPurpose}
        </Badge>
      )}
    </div>
  );
}