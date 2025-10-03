'use client';

import { useState } from 'react';
import { AlertCircle, CheckCircle, XCircle, Clock, Sparkles, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { toast } from 'sonner';
import { useAppStore } from '../../lib/store';
import { triggerConditionsCheck, pollForConditionsResults, type ProcessedCondition } from '../../src/lib/api/conditions';

interface Condition {
  id: number;
  name: string;
  category: string;
  description: string;
}

interface ConditionsSectionProps {
  conditions: Condition[];
  onRunConditions?: () => Promise<void>;
}

interface ConditionResultProps {
  condition: Condition;
  result?: ProcessedCondition;
}

const ConditionResultRow = ({ condition, result }: ConditionResultProps) => {
  const [isAnalysisOpen, setIsAnalysisOpen] = useState(false);
  const [isReasoningOpen, setIsReasoningOpen] = useState(false);

  if (!result) {
    return null;
  }

  const isFulfilled = result.document_status === 'fulfilled';

  return (
    <>
      <div className="border border-slate-200 rounded-lg bg-white p-4">
        <div className="flex items-center gap-3">
          {/* Left Section: Main Condition Info */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="flex-shrink-0">
              {isFulfilled ? (
                <CheckCircle className="w-5 h-5 text-ok" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500" />
              )}
            </div>

            <Badge variant="outline" className="text-xs bg-slate-100 text-slate-700 flex-shrink-0">
              #{condition.id}
            </Badge>
            
            <h4 className="font-medium text-slate-900 flex-shrink-0">{result.title}</h4>

            <Badge variant="outline" className="text-xs flex-shrink-0">
              {result.category}
            </Badge>
            
            <Badge 
              className={isFulfilled 
                ? 'bg-ok/10 text-ok border-ok/20' 
                : 'bg-red-50 text-red-700 border-red-200'
              }
              variant="outline"
            >
              {isFulfilled ? 'Fulfilled' : 'Not Fulfilled'}
            </Badge>

            {/* Document Reference - Inline */}
            {result.result_document_id && (
              <span className="text-xs text-slate-500 ml-2">
                Document: {result.result_document_id}
              </span>
            )}
          </div>

          {/* Right Section: Action Buttons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setIsAnalysisOpen(true)}
              className="h-8 text-xs"
            >
              <FileText className="w-3 h-3 mr-1" />
              Analysis
            </Button>

            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setIsReasoningOpen(true)}
              className="h-8 text-xs"
            >
              <FileText className="w-3 h-3 mr-1" />
              Reasoning
            </Button>
          </div>
        </div>
      </div>

      {/* Analysis Dialog */}
      <Dialog open={isAnalysisOpen} onOpenChange={setIsAnalysisOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Analysis - Condition #{condition.id}</DialogTitle>
            <DialogDescription>
              {result.title}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
              {result.document_analysis}
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Reasoning Dialog */}
      <Dialog open={isReasoningOpen} onOpenChange={setIsReasoningOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Reasoning - Condition #{condition.id}</DialogTitle>
            <DialogDescription>
              {result.title}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">
              {result.document_analysis_thinking}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const ConditionRow = ({ condition }: { condition: Condition }) => (
  <div className="flex items-start gap-4 p-4 border border-slate-200 rounded-lg hover:bg-slate-50/50 transition-colors">
    <div className="flex-shrink-0 mt-0.5">
      <AlertCircle className="w-5 h-5 text-amber-500" />
    </div>

    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2 mb-1">
        <Badge variant="outline" className="text-xs bg-slate-100 text-slate-700">
          #{condition.id}
        </Badge>
        <h4 className="font-medium text-slate-900">{condition.name}</h4>
        <Tooltip>
          <TooltipTrigger>
            <AlertCircle className="w-3 h-3 text-slate-400" />
          </TooltipTrigger>
          <TooltipContent>
            <div className="text-xs max-w-xs">
              <p>{condition.description}</p>
            </div>
          </TooltipContent>
        </Tooltip>
      </div>
      
      <Badge variant="outline" className="text-xs">
        {condition.category}
      </Badge>
    </div>
  </div>
);

export function ConditionsSection({ conditions, onRunConditions }: ConditionsSectionProps) {
  const {
    conditionsStatus,
    conditionsResults,
    conditionsError,
    setConditionsStatus,
    setConditionsResults,
    setConditionsError,
  } = useAppStore();

  const handleRunConditions = async () => {
    if (onRunConditions) {
      await onRunConditions();
      return;
    }

    // Default implementation using hardcoded data
    setConditionsStatus('running');
    setConditionsError(null);
    toast.info('Starting conditions check...');

    try {
      // Prepare request data
      const conditionRequests = conditions.map(c => ({
        id: c.id,
        name: c.name,
        data: {
          Title: c.name,
          Category: c.category,
          Description: c.description,
        },
      }));

      const s3PdfPaths = [
        { bucket: 'quick-quote-demo', key: 'mock/Wiring Instructions - demo.pdf' },
        { bucket: 'quick-quote-demo', key: 'mock/Certified Report Delivery Confirmation - demo.pdf' },
        { bucket: 'quick-quote-demo', key: 'mock/Full Access Letter - demo.pdf' },
      ];

      // Trigger the API
      const triggerResult = await triggerConditionsCheck(conditionRequests, s3PdfPaths);

      if (!triggerResult.success || !triggerResult.output_destination) {
        throw new Error(triggerResult.message || 'Failed to trigger conditions check');
      }

      toast.info('Conditions check in progress... Please wait.');

      // Poll for results
      const pollResult = await pollForConditionsResults(triggerResult.output_destination);

      if (!pollResult.success || !pollResult.data) {
        throw new Error(pollResult.message || 'Failed to get conditions results');
      }

      setConditionsResults(pollResult.data);
      setConditionsStatus('completed');
      toast.success('Conditions check completed!');
    } catch (error) {
      console.error('Conditions check error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setConditionsError(errorMessage);
      setConditionsStatus('failed');
      toast.error(`Conditions check failed: ${errorMessage}`);
    }
  };

  if (conditions.length === 0) {
    return null;
  }

  const hasResults = conditionsStatus === 'completed' && conditionsResults;
  const isRunning = conditionsStatus === 'running';
  const hasFailed = conditionsStatus === 'failed';

  // Calculate fulfilled/not fulfilled counts from results
  const fulfilledCount = hasResults 
    ? conditionsResults.processed_conditions.filter((c: ProcessedCondition) => c.document_status === 'fulfilled').length 
    : 0;
  const notFulfilledCount = hasResults 
    ? conditionsResults.processed_conditions.filter((c: ProcessedCondition) => c.document_status === 'not fulfilled').length 
    : 0;

  return (
    <TooltipProvider>
      <div className="space-y-6">
        {/* Header with Run Button */}
        <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-slate-900">Conditions</h3>
            {!hasResults && (
          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
            {conditions.length} New
          </Badge>
            )}
            {hasResults && (
              <>
                <Badge className="bg-ok text-white">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {fulfilledCount} Fulfilled
                </Badge>
                {notFulfilledCount > 0 && (
                  <Badge className="bg-red-500 text-white">
                    <XCircle className="w-3 h-3 mr-1" />
                    {notFulfilledCount} Not Fulfilled
                  </Badge>
                )}
              </>
            )}
            {isRunning && (
              <Badge className="bg-brand text-white">
                <Clock className="w-3 h-3 mr-1 animate-spin" />
                Running
              </Badge>
            )}
          </div>

          <Button
            onClick={handleRunConditions}
            disabled={isRunning}
            size="sm"
            className="bg-brand hover:bg-brand-600 text-white"
          >
            {isRunning ? (
              <>
                <Clock className="w-4 h-4 mr-2 animate-spin" />
                Running AI...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Run Conditions AI
              </>
            )}
          </Button>
        </div>

        {/* Error Message */}
        {hasFailed && conditionsError && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center gap-2">
              <XCircle className="w-4 h-4 text-red-600" />
              <p className="text-sm text-red-700">{conditionsError}</p>
            </div>
          </div>
        )}

        {/* Results or Conditions List */}
        <div className="space-y-3">
          {hasResults ? (
            // Show results with status
            conditionsResults.processed_conditions.map((result: ProcessedCondition) => {
              const condition = conditions.find(c => c.id === result.condition_id);
              return condition ? (
                <ConditionResultRow key={result.condition_id} condition={condition} result={result} />
              ) : null;
            })
          ) : (
            // Show initial conditions
            conditions.map(condition => <ConditionRow key={condition.id} condition={condition} />)
          )}
        </div>
      </div>
    </TooltipProvider>
  );
}
