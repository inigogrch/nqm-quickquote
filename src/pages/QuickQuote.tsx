'use client';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuickQuoteForm } from '../../components/forms/QuickQuoteForm';
import { ImproveAccuracyAccordion } from '../../components/forms/ImproveAccuracyAccordion';
import { PreviewCard } from '../../components/ui/PreviewCard';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useAppStore } from '../../lib/store';
import { LoanDetails } from '../../lib/types';
import { PLACEHOLDER_LOAN_DETAILS } from '../../lib/fixtures';
import { fetchProgramEligibility, transformApiResponseToFrontend } from '../lib/api';
import { toast } from 'sonner';

export default function QuickQuote() {
  const navigate = useNavigate();
  const { 
    setLoanDetails, 
    setIsMinimumLane,
    setEligibilityApiResponse,
    setLoanPrograms,
    setIneligiblePrograms,
    setEligibilityRules
  } = useAppStore();
  const [formData, setFormData] = useState<LoanDetails>(PLACEHOLDER_LOAN_DETAILS);
  const [showImproveAccuracy, setShowImproveAccuracy] = useState(false);
  const [isMinimalComplete, setIsMinimalComplete] = useState(true); // Start with placeholder data
  const [isLoading, setIsLoading] = useState(false);

  const handleFormChange = (updates: Partial<LoanDetails>) => {
    const newData = { ...formData, ...updates };
    setFormData(newData);
    
    // Check if minimal fields are complete
    const minimalComplete = !!(
      newData.loanAmount &&
      newData.loanToValue &&
      newData.propertyType &&
      newData.creditScore
    );
    setIsMinimalComplete(minimalComplete);
  };

  const handleSeePrograms = async () => {
    if (!isMinimalComplete) {
      toast.error('Please complete all required fields');
      return;
    }

    setIsLoading(true);
    
    try {
      // Store loan details first
      setLoanDetails(formData);
      setIsMinimumLane(!showImproveAccuracy);
      
      // Show loading toast
      const loadingToast = toast.loading('Analyzing loan eligibility...');
      
      // Call Neo4j eligibility engine API
      console.log('🚀 Calling eligibility engine with form data:', formData);
      const apiResponse = await fetchProgramEligibility(formData);
      
      // Save the raw API response to store
      setEligibilityApiResponse(apiResponse);
      
      // Transform API response to frontend format
      const transformedData = transformApiResponseToFrontend(apiResponse);
      
      // Update store with transformed data
      setLoanPrograms(transformedData.eligible);
      setIneligiblePrograms(transformedData.ineligible);
      setEligibilityRules(transformedData.ruleHits);
      
      // Log the results for debugging
      console.log('✅ Eligibility API Response:', apiResponse);
      console.log('📊 Summary:', {
        status: apiResponse.status,
        totalPrograms: apiResponse.detailed_results?.evaluation_summary?.total_programs_evaluated,
        eligible: transformedData.eligible.length,
        ineligible: transformedData.ineligible.length,
        ruleHits: transformedData.ruleHits.length
      });
      
      console.log('✅ Eligible Programs saved to store:', transformedData.eligible);
      console.log('❌ Ineligible Programs saved to store:', transformedData.ineligible);
      
      // Dismiss loading toast and show success
      toast.dismiss(loadingToast);
      toast.success(`Analysis complete! Found ${transformedData.eligible.length} eligible programs`);
      
      // Navigate to programs page - it will now use the API data from store
      navigate('/programs');
      
    } catch (error) {
      console.error('❌ Error in handleSeePrograms:', error);
      toast.error('Failed to analyze eligibility. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      borrowerName: '',
      loanAmount: 0,
      propertyValue: 0,
      creditScore: 0,
      loanToValue: 0,
      debtToIncome: 0,
      propertyType: '',
      occupancyType: '',
      loanPurpose: ''
    });
    setShowImproveAccuracy(false);
    setIsMinimalComplete(false);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-2">
                  Loan Scenario Details
                </h2>
                <p className="text-slate-600">
                  Enter the basic loan information to see available programs
                </p>
              </div>

              <QuickQuoteForm 
                data={formData}
                onChange={handleFormChange}
              />

              <ImproveAccuracyAccordion
                isOpen={showImproveAccuracy}
                onToggle={setShowImproveAccuracy}
                data={formData}
                onChange={handleFormChange}
              />

              <div className="flex gap-4 pt-6 border-t border-slate-200">
                <Button
                  onClick={handleSeePrograms}
                  disabled={!isMinimalComplete || isLoading}
                  data-testid="see-programs-button"
                  className="bg-brand hover:bg-brand-600"
                >
                  {isLoading ? 'Analyzing...' : 'See Programs'}
                </Button>
                <Button
                  variant="outline"
                  onClick={handleReset}
                  data-testid="reset-button"
                >
                  Reset
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Preview Sidebar */}
        <div className="lg:col-span-1">
          {isMinimalComplete && (
            <PreviewCard 
              loanData={formData}
              hasImprovedAccuracy={showImproveAccuracy}
            />
          )}
        </div>
      </div>
    </div>
  );
}