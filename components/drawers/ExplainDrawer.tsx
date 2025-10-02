'use client';

import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useAppStore } from '../../lib/store';
import { Info } from 'lucide-react';

interface ExplainDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProgramId: string | null;
}

export function ExplainDrawer({ isOpen, onClose, selectedProgramId }: ExplainDrawerProps) {
  const { eligibilityRules, loanPrograms, loanDetails } = useAppStore();
  
  const selectedProgram = selectedProgramId 
    ? loanPrograms.find(p => p.id === selectedProgramId)
    : null;

  // Show all rules from the API response, sorted by result (pass first, then fail)
  const relevantRules = [...eligibilityRules].sort((a, b) => {
    if (a.result === 'pass' && b.result !== 'pass') return -1;
    if (a.result !== 'pass' && b.result === 'pass') return 1;
    return 0;
  });

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-96 sm:max-w-96 overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Info className="w-5 h-5 text-brand" />
            Explainability
          </SheetTitle>
        </SheetHeader>

        <div className="space-y-6 mt-6">
          {/* Selected Program Context */}
          {selectedProgram && (
            <Card className="p-4 bg-brand/5 border-brand/20">
              <h3 className="font-medium text-slate-900 mb-2">Selected Program</h3>
              <p className="text-sm text-slate-700" data-placeholder="true">
                {selectedProgram.name}
                {/* TODO: replace with live program service */}
              </p>
              <Badge variant="outline" className="mt-2 text-xs">
                Rate: {selectedProgram.rate}%
              </Badge>
            </Card>
          )}

          {/* Rules Analysis */}
          <div className="space-y-4">
            <h3 className="font-medium text-slate-900">Rules Fired</h3>
            {relevantRules.map((rule) => (
              <Card key={rule.id} className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs" data-placeholder="true">
                      {rule.ruleId}
                      {/* TODO: replace with live rule engine */}
                    </Badge>
                    <Badge 
                      className={
                        rule.result === 'pass' ? 'bg-ok text-white' :
                        rule.result === 'fail' ? 'bg-bad text-white' :
                        'bg-warn text-white'
                      }
                    >
                      {rule.result}
                    </Badge>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-slate-900 mb-1">Description</h4>
                    <p className="text-sm text-slate-600" data-placeholder="true">
                      {rule.description}
                      {/* TODO: replace with live rule engine */}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-slate-900 mb-1">Citation</h4>
                    <p className="text-xs text-slate-500" data-placeholder="true">
                      {rule.citation}
                      {/* TODO: replace with live guidelines service */}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Separator />

          {/* Human-Readable Summary */}
          <div className="space-y-3">
            <h3 className="font-medium text-slate-900">Summary</h3>
            <Card className="p-4">
              <p className="text-sm text-slate-600">
                {(() => {
                  const passedRules = relevantRules.filter(r => r.result === 'pass').length;
                  const failedRules = relevantRules.filter(r => r.result === 'fail').length;
                  const totalRules = relevantRules.length;
                  
                  if (totalRules === 0) {
                    return 'No rules have been evaluated yet. Please complete the loan scenario and see programs first.';
                  }
                  
                  const passRate = ((passedRules / totalRules) * 100).toFixed(0);
                  
                  return `Your loan scenario has been evaluated against ${totalRules} eligibility requirements. ${passedRules} requirements passed and ${failedRules} requirements failed. Overall pass rate: ${passRate}%. ${
                    failedRules === 0 
                      ? 'This is an excellent scenario with high approval likelihood.'
                      : failedRules <= 3
                      ? 'Some requirements were not met, but eligible programs are still available.'
                      : 'Multiple requirements were not met. Consider adjusting loan parameters for more options.'
                  }`;
                })()}
              </p>
            </Card>
          </div>

          {/* Key Factors */}
          <div className="space-y-3">
            <h3 className="font-medium text-slate-900">Key Factors</h3>
            <div className="space-y-2">
              {loanDetails?.creditScore && (
                <Badge variant="outline" className="text-xs">
                  FICO Score: {loanDetails.creditScore} {
                    loanDetails.creditScore >= 740 ? '(Excellent)' :
                    loanDetails.creditScore >= 670 ? '(Good)' :
                    loanDetails.creditScore >= 580 ? '(Fair)' : '(Poor)'
                  }
                </Badge>
              )}
              {loanDetails?.loanToValue && (
                <Badge variant="outline" className="text-xs">
                  LTV: {loanDetails.loanToValue}% {
                    loanDetails.loanToValue <= 80 ? '(Acceptable)' :
                    loanDetails.loanToValue <= 90 ? '(High)' : '(Very High)'
                  }
                </Badge>
              )}
              {loanDetails?.propertyType && (
                <Badge variant="outline" className="text-xs">
                  Property Type: {loanDetails.propertyType}
                </Badge>
              )}
              {loanDetails?.debtToIncome && (
                <Badge variant="outline" className="text-xs">
                  DTI: {loanDetails.debtToIncome}%
                </Badge>
              )}
              {loanDetails?.occupancyType && (
                <Badge variant="outline" className="text-xs">
                  Occupancy: {loanDetails.occupancyType}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}