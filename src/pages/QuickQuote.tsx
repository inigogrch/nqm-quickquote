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

export default function QuickQuote() {
  const navigate = useNavigate();
  const { setLoanDetails, setIsMinimumLane } = useAppStore();
  const [formData, setFormData] = useState<LoanDetails>(PLACEHOLDER_LOAN_DETAILS);
  const [showImproveAccuracy, setShowImproveAccuracy] = useState(false);
  const [isMinimalComplete, setIsMinimalComplete] = useState(true); // Start with placeholder data

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

  const handleSeePrograms = () => {
    setLoanDetails(formData);
    setIsMinimumLane(!showImproveAccuracy);
    navigate('/programs');
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
                  disabled={!isMinimalComplete}
                  data-testid="see-programs-button"
                  className="bg-brand hover:bg-brand-600"
                >
                  See Programs
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