'use client';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { AgentStep } from '../../lib/types';
import { useAppStore } from '../../lib/store';
import { PLACEHOLDER_TEXT } from '../../lib/fixtures';
import { toast } from 'sonner';

interface PreSubmissionTabProps {
  steps: AgentStep[];
}

const conditionsToTrack = [
  { id: 'lox', label: 'LOX for large deposit', status: 'pending' },
  { id: 'entity', label: 'Entity docs (LLC)', status: 'completed' },
  { id: 'hoi', label: 'Updated HOI binder', status: 'pending' },
  { id: 'appraisal', label: 'Appraisal (when ordered)', status: 'not_applicable' },
  { id: 'voe', label: 'VOE alternative', status: 'pending' }
];

export function PreSubmissionTab({ steps }: PreSubmissionTabProps) {
  const navigate = useNavigate();
  const [conditions, setConditions] = useState(conditionsToTrack);
  const { addTimelineEvent } = useAppStore();

  const toggleCondition = (conditionId: string) => {
    setConditions(prev => prev.map(condition => 
      condition.id === conditionId 
        ? { ...condition, status: condition.status === 'completed' ? 'pending' : 'completed' }
        : condition
    ));
  };

  const handleGeneratePackage = () => {
    // Add timeline events
    addTimelineEvent({
      id: `timeline_${Date.now()}`,
      timestamp: new Date().toISOString(),
      event: 'Pre-Submission Package Generated',
      description: 'Automated package assembly completed successfully',
      status: 'completed'
    });

    addTimelineEvent({
      id: `timeline_${Date.now() + 1}`,
      timestamp: new Date().toISOString(),
      event: 'Queued to Encompass',
      description: 'Loan package queued for LOS submission',
      status: 'in_progress'
    });

    toast.success('Pre-submission package generated successfully');
    
    // Navigate to summary
    setTimeout(() => {
      navigate('/summary');
    }, 1000);
  };

  const getConditionBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-ok text-white">Complete</Badge>;
      case 'pending':
        return <Badge variant="outline" className="border-warn text-warn">Pending</Badge>;
      case 'not_applicable':
        return <Badge variant="outline" className="border-slate-300 text-slate-500">N/A</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* AI Summary */}
      <Card className="p-6 bg-gradient-to-br from-brand/5 to-brand/10 border-brand/20">
        <h3 className="font-semibold text-slate-900 mb-3">AI Summary</h3>
        <div className="space-y-3">
          <p className="text-slate-700" data-placeholder="true">
            <strong>Program:</strong> Lorem Program A
            {/* TODO: replace with live program service */}
          </p>
          <p className="text-slate-700" data-placeholder="true">
            <strong>Key reasons:</strong> FICO 777, LTV 77.7%, DSCR 1.23
            {/* TODO: replace with live analysis service */}
          </p>
          <p className="text-slate-700" data-placeholder="true">
            <strong>Open risks:</strong> LOX required for large deposit
            {/* TODO: replace with live risk service */}
          </p>
          <div className="pt-2">
            <Badge variant="outline" className="bg-brand/10 text-brand border-brand/20">
              Confidence: 85.3%
            </Badge>
          </div>
        </div>
      </Card>

      {/* Conditions to Track */}
      <Card className="p-6">
        <h3 className="font-semibold text-slate-900 mb-4">Conditions to Track</h3>
        <div className="space-y-4">
          {conditions.map((condition) => (
            <div key={condition.id} className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
              <div className="flex items-center gap-3">
                <Switch
                  id={condition.id}
                  checked={condition.status === 'completed'}
                  onCheckedChange={() => toggleCondition(condition.id)}
                  disabled={condition.status === 'not_applicable'}
                  data-testid={`condition-${condition.id}`}
                />
                <Label 
                  htmlFor={condition.id} 
                  className="font-medium cursor-pointer"
                  data-placeholder="true"
                >
                  {condition.label}
                  {/* TODO: replace with live conditions service */}
                </Label>
              </div>
              {getConditionBadge(condition.status)}
            </div>
          ))}
        </div>
      </Card>

      {/* Processing Steps */}
      <Card className="p-6">
        <h3 className="font-semibold text-slate-900 mb-4">Processing Steps</h3>
        <div className="space-y-3">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
              <span className="text-sm font-medium text-slate-500 w-6">
                {index + 1}.
              </span>
              <div className="flex-1">
                <h4 className="font-medium text-slate-900" data-placeholder="true">
                  {step.name}
                  {/* TODO: replace with live agent service */}
                </h4>
                <p className="text-sm text-slate-600" data-placeholder="true">
                  {step.findings.length > 0 ? step.findings[0] : 'Preparing for execution'}
                  {/* TODO: replace with live agent service */}
                </p>
              </div>
              <Badge 
                variant="outline" 
                className={
                  step.status === 'completed' ? 'bg-ok/10 text-ok border-ok/20' :
                  step.status === 'in_progress' ? 'bg-brand/10 text-brand border-brand/20' :
                  'border-slate-300 text-slate-500'
                }
              >
                {step.status.replace('_', ' ')}
              </Badge>
            </div>
          ))}
        </div>
      </Card>

      {/* Generate Package Action */}
      <div className="flex justify-center pt-6 border-t border-slate-200">
        <Button
          onClick={handleGeneratePackage}
          size="lg"
          data-testid="generate-package-button"
          className="bg-brand hover:bg-brand-600 px-8"
        >
          Generate Package
        </Button>
      </div>
    </div>
  );
}