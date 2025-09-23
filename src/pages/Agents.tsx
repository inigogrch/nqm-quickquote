'use client';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { VerificationTab } from '../../components/agents/VerificationTab';
import { PreSubmissionTab } from '../../components/agents/PreSubmissionTab';
import { useAppStore } from '../../lib/store';

export default function Agents() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('verification');
  const { agentSteps } = useAppStore();

  const verificationSteps = agentSteps.filter(step => step.type === 'verification');
  const preSubmissionSteps = agentSteps.filter(step => step.type === 'pre_submission');

  const handleBack = () => {
    navigate('/docs');
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Agent Processing
            </h2>
            <p className="text-slate-600">
              Document verification and pre-submission review in progress
            </p>
          </div>
          <Button
            variant="outline"
            onClick={handleBack}
            data-testid="agents-back-button"
          >
            Back to Documents
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="verification" data-testid="verification-tab">
              Verification Agent
              {verificationSteps.filter(s => s.hitlRequired).length > 0 && (
                <span className="ml-2 w-2 h-2 bg-warn rounded-full animate-pulse" />
              )}
            </TabsTrigger>
            <TabsTrigger value="pre-submission" data-testid="pre-submission-tab">
              Pre-Submission Review
            </TabsTrigger>
          </TabsList>

          <TabsContent value="verification" className="space-y-6">
            <VerificationTab steps={verificationSteps} />
          </TabsContent>

          <TabsContent value="pre-submission" className="space-y-6">
            <PreSubmissionTab steps={preSubmissionSteps} />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}