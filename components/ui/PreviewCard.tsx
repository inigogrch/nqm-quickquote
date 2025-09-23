'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { LoanDetails } from '../../lib/types';
import { PLACEHOLDER_TEXT } from '../../lib/fixtures';
import { Calculator, TrendingUp, Home, User } from 'lucide-react';

interface PreviewCardProps {
  loanData: LoanDetails;
  hasImprovedAccuracy: boolean;
}

export function PreviewCard({ loanData, hasImprovedAccuracy }: PreviewCardProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  return (
    <Card className="sticky top-6">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Calculator className="w-5 h-5 text-brand" />
          <CardTitle className="text-lg">Loan Preview</CardTitle>
        </div>
        <CardDescription>
          {hasImprovedAccuracy ? 'Enhanced accuracy mode' : 'Basic calculation'}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Borrower Info */}
        {loanData.borrowerName && (
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-slate-500" />
            <span className="text-sm font-medium">{loanData.borrowerName}</span>
          </div>
        )}

        <Separator />

        {/* Key Metrics */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-600">Loan Amount</span>
            <span className="font-medium">{formatCurrency(loanData.loanAmount)}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-600">Property Value</span>
            <span className="font-medium">{formatCurrency(loanData.propertyValue)}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-600">LTV Ratio</span>
            <Badge variant="outline" className="text-xs">
              {formatPercentage(loanData.loanToValue)}
            </Badge>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-600">Credit Score</span>
            <Badge 
              variant="outline" 
              className={`text-xs ${
                loanData.creditScore >= 740 ? 'bg-ok/10 text-ok border-ok/20' :
                loanData.creditScore >= 680 ? 'bg-warn/10 text-warn border-warn/20' :
                'bg-bad/10 text-bad border-bad/20'
              }`}
            >
              {loanData.creditScore}
            </Badge>
          </div>
        </div>

        <Separator />

        {/* Property Details */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-2">
            <Home className="w-4 h-4 text-slate-500" />
            <span className="text-sm font-medium">Property</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-600">Type</span>
            <span className="text-sm font-medium">{loanData.propertyType || 'Not specified'}</span>
          </div>
          
          {loanData.occupancyType && (
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">Occupancy</span>
              <span className="text-sm font-medium">{loanData.occupancyType}</span>
            </div>
          )}
          
          {loanData.loanPurpose && (
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">Purpose</span>
              <span className="text-sm font-medium">{loanData.loanPurpose}</span>
            </div>
          )}
        </div>

        {/* Enhanced Fields */}
        {hasImprovedAccuracy && loanData.debtToIncome > 0 && (
          <>
            <Separator />
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-slate-500" />
                <span className="text-sm font-medium">Enhanced Details</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Debt-to-Income</span>
                <Badge variant="outline" className="text-xs">
                  {formatPercentage(loanData.debtToIncome)}
                </Badge>
              </div>
            </div>
          </>
        )}

        {/* Accuracy Indicator */}
        <div className="pt-3 border-t border-slate-200">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-500">Accuracy Level</span>
            <Badge 
              variant="outline" 
              className={`text-xs ${
                hasImprovedAccuracy 
                  ? 'bg-brand/10 text-brand border-brand/20' 
                  : 'bg-slate-100 text-slate-600 border-slate-200'
              }`}
            >
              {hasImprovedAccuracy ? 'Enhanced' : 'Basic'}
            </Badge>
          </div>
          <p className="text-xs text-slate-500 mt-1" data-placeholder="true">
            {hasImprovedAccuracy 
              ? 'More accurate program matching with additional details'
              : 'Basic matching with minimal information'
            }
            {/* TODO: replace with live accuracy service */}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}