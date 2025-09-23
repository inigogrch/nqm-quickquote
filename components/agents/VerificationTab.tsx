'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { AgentStep } from '../../lib/types';
import { useAppStore } from '../../lib/store';
import { PLACEHOLDER_TEXT } from '../../lib/fixtures';
import { AlertTriangle, CheckCircle, Clock, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

interface VerificationTabProps {
  steps: AgentStep[];
}

export function VerificationTab({ steps }: VerificationTabProps) {
  const [hitlResponses, setHitlResponses] = useState<Record<string, string>>({});
  const { updateAgentStep, addTimelineEvent } = useAppStore();

  const handleHitlResponse = (stepId: string, response: string) => {
    setHitlResponses(prev => ({ ...prev, [stepId]: response }));
  };

  const submitHitlResponse = (stepId: string) => {
    const response = hitlResponses[stepId];
    if (!response?.trim()) {
      toast.error('Please provide a response');
      return;
    }

    // Update the step
    updateAgentStep(stepId, {
      status: 'completed',
      hitlRequired: false,
      findings: [...(steps.find(s => s.id === stepId)?.findings || []), response]
    });

    // Add timeline event
    addTimelineEvent({
      id: `timeline_${Date.now()}`,
      timestamp: new Date().toISOString(),
      event: 'Human Input Provided',
      description: `Response provided for verification step: ${response.substring(0, 50)}...`,
      status: 'completed'
    });

    toast.success('Response submitted successfully');
    
    // Clear the response
    setHitlResponses(prev => {
      const newResponses = { ...prev };
      delete newResponses[stepId];
      return newResponses;
    });
  };

  const getStepIcon = (step: AgentStep) => {
    if (step.hitlRequired) {
      return <AlertTriangle className="w-4 h-4 text-warn" />;
    }
    if (step.status === 'completed') {
      return <CheckCircle className="w-4 h-4 text-ok" />;
    }
    return <Clock className="w-4 h-4 text-brand" />;
  };

  const getStepBadge = (step: AgentStep) => {
    if (step.hitlRequired) {
      return <Badge className="bg-warn text-white">Needs Review</Badge>;
    }
    if (step.status === 'completed') {
      return <Badge className="bg-ok text-white">Complete</Badge>;
    }
    if (step.status === 'in_progress') {
      return <Badge className="bg-brand text-white">Processing</Badge>;
    }
    return <Badge variant="outline">Pending</Badge>;
  };

  return (
    <div className="space-y-6">
      {/* Overview */}
      <Card className="p-6 bg-gradient-to-br from-slate-50 to-slate-100/50">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Document Verification</h3>
            <p className="text-sm text-slate-600">AI-powered document analysis and validation</p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-ok">
              {steps.filter(s => s.status === 'completed').length}
            </div>
            <div className="text-sm text-slate-600">Completed</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-warn">
              {steps.filter(s => s.hitlRequired).length}
            </div>
            <div className="text-sm text-slate-600">Need Review</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-brand">
              {steps.filter(s => s.status === 'in_progress').length}
            </div>
            <div className="text-sm text-slate-600">Processing</div>
          </div>
        </div>
      </Card>

      {/* Verification Steps */}
      <div className="space-y-4">
        {steps.map((step) => (
          <Card key={step.id} className="p-6">
            <div className="space-y-4">
              {/* Step Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {getStepIcon(step)}
                  <div>
                    <h4 className="font-medium text-slate-900" data-placeholder="true">
                      {step.name}
                      {/* TODO: replace with live agent service */}
                    </h4>
                    <p className="text-sm text-slate-600" data-placeholder="true">
                      {step.description || 'Automated document verification'}
                      {/* TODO: replace with live agent service */}
                    </p>
                  </div>
                </div>
                {getStepBadge(step)}
              </div>

              {/* Findings */}
              {step.findings.length > 0 && (
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Findings</Label>
                  <div className="space-y-2">
                    {step.findings.map((finding, index) => (
                      <div key={index} className="p-3 bg-slate-50 rounded-lg">
                        <p className="text-sm text-slate-700" data-placeholder="true">
                          {finding}
                          {/* TODO: replace with live agent service */}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Human in the Loop Interface */}
              {step.hitlRequired && (
                <div className="space-y-4 p-4 bg-warn/5 border border-warn/20 rounded-lg">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-warn" />
                    <Label className="font-medium text-warn">Human Review Required</Label>
                  </div>
                  
                  <p className="text-sm text-slate-700" data-placeholder="true">
                    {step.hitlQuestion || 'Please review the findings above and provide guidance.'}
                    {/* TODO: replace with live agent service */}
                  </p>

                  <div className="space-y-2">
                    <Label htmlFor={`hitl-${step.id}`}>Your Response</Label>
                    <Textarea
                      id={`hitl-${step.id}`}
                      value={hitlResponses[step.id] || ''}
                      onChange={(e) => handleHitlResponse(step.id, e.target.value)}
                      placeholder="Provide your guidance or clarification..."
                      className="min-h-[100px]"
                      data-testid={`hitl-response-${step.id}`}
                    />
                  </div>

                  <Button
                    onClick={() => submitHitlResponse(step.id)}
                    disabled={!hitlResponses[step.id]?.trim()}
                    data-testid={`submit-hitl-${step.id}`}
                    className="bg-warn hover:bg-warn/90"
                  >
                    Submit Response
                  </Button>
                </div>
              )}

              {/* Processing Indicator */}
              {step.status === 'in_progress' && !step.hitlRequired && (
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="w-4 h-4 border-2 border-brand border-t-transparent rounded-full animate-spin" />
                  <span>Processing...</span>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Summary */}
      {steps.every(s => s.status === 'completed' && !s.hitlRequired) && (
        <Card className="p-6 bg-gradient-to-br from-ok/5 to-ok/10 border-ok/20">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-ok" />
            <div>
              <h3 className="font-semibold text-slate-900">Verification Complete</h3>
              <p className="text-sm text-slate-600">
                All documents have been successfully verified. Ready for pre-submission review.
              </p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}