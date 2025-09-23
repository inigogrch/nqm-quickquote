'use client';

import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useAppStore } from '../../lib/store';
import { PLACEHOLDER_TEXT } from '../../lib/fixtures';
import { Info, ExternalLink } from 'lucide-react';

interface ExplainDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProgramId: string | null;
}

export function ExplainDrawer({ isOpen, onClose, selectedProgramId }: ExplainDrawerProps) {
  const { eligibilityRules, loanPrograms } = useAppStore();
  
  const selectedProgram = selectedProgramId 
    ? loanPrograms.find(p => p.id === selectedProgramId)
    : null;

  const relevantRules = eligibilityRules.slice(0, 5);

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

                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full justify-start text-xs"
                    data-testid={`view-guideline-${rule.id}`}
                  >
                    <ExternalLink className="w-3 h-3 mr-2" />
                    View Full Guideline
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <Separator />

          {/* Human-Readable Summary */}
          <div className="space-y-3">
            <h3 className="font-medium text-slate-900">Summary</h3>
            <Card className="p-4">
              <p className="text-sm text-slate-600" data-placeholder="true">
                {PLACEHOLDER_TEXT}
                {/* TODO: replace with live explainability service */}
              </p>
            </Card>
          </div>

          {/* Key Factors */}
          <div className="space-y-3">
            <h3 className="font-medium text-slate-900">Key Factors</h3>
            <div className="space-y-2">
              <Badge variant="outline" className="text-xs" data-placeholder="true">
                FICO Score: 777 (Excellent)
                {/* TODO: replace with live analysis service */}
              </Badge>
              <Badge variant="outline" className="text-xs" data-placeholder="true">
                LTV: 77.7% (Acceptable)
                {/* TODO: replace with live analysis service */}
              </Badge>
              <Badge variant="outline" className="text-xs" data-placeholder="true">
                Property Type: SFR (Preferred)
                {/* TODO: replace with live analysis service */}
              </Badge>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}