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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { FileText, Upload, X } from 'lucide-react'

export default function QuickQuote() {
  const navigate = useNavigate();
  const { 
    setLoanDetails, 
    setIsMinimumLane,
    setEligibilityApiResponse,
    setLoanPrograms,
    setIneligiblePrograms,
    setEligibilityRules,
    addTimelineEvent
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
      
      // Add timeline event for Loan Scenario Details completion
      addTimelineEvent({
        id: `timeline_${Date.now()}`,
        timestamp: new Date().toISOString(),
        event: 'Loan Scenario Details',
        description: 'Loan scenario details completed and programs analyzed',
        status: 'completed'
      });
      
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

  /* FNMA */
  // #region FNMA
  const [uploadFNMAOpen, setUploadFNMAOpen] = useState(false)

  const FNMAUploadDialog = ({
    isOpen,
    onClose,
  }: {
    isOpen: boolean
    onClose: () => void
  }) => {
    const ACCEPTED_FILE_TYPES = ['.xml']

    const [dragActive, setDragActive] = useState(false)
    const [uploadedFile, setUploadedFile] = useState<File | null>(null)
    const [loading, setLoading] = useState(false)

    // compute file size (KB if MB > 1, else MB) every time uploadedFile changes
    const fileSize = uploadedFile
      ? uploadedFile.size > 1024 * 1024
        ? `${(uploadedFile.size / 1024 / 1024).toFixed(2)} MB`
        : `${(uploadedFile.size / 1024).toFixed(2)} KB`
      : '0 KB'

    const handleDrag = (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()

      if (e.type === 'dragenter' || e.type === 'dragover') {
        setDragActive(true)
      } else if (e.type === 'dragleave') {
        setDragActive(false)
      }
    }

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setDragActive(false)

      if (
        e.dataTransfer.files &&
        e.dataTransfer.files[0] &&
        ACCEPTED_FILE_TYPES.includes(
          `.${e.dataTransfer.files[0].name.split('.').pop()}`
        )
      ) {
        setUploadedFile(e.dataTransfer.files[0])
      }
    }

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (
        e.target.files &&
        e.target.files[0] &&
        ACCEPTED_FILE_TYPES.includes(
          `.${e.target.files[0].name.split('.').pop()}`
        )
      ) {
        setUploadedFile(e.target.files[0])
      }
    }

    const removeFile = () => {
      setUploadedFile(null)
    }

    const handleUpload = async () => {
      if (!uploadedFile) {
        toast.error('Please select a file to upload')
        return
      }

      setLoading(true)

      try {
        // Hit converter API (send file as base64 in JSON body)
        /**
         * curl -X POST "{{BASE_URL}}/api/v1/encompass/converter/loans?token={{ACCESS_TOKEN}}" \
          -H "Content-Type: application/json" \
          -d '{
            "filename": "example.xml",
            "file_base64": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48cm9vdD48aGVsbG8+V29ybGQ8L2hlbGxvPjwvcm9vdD4="
          }'
         */
        const reader = new FileReader()
        reader.readAsDataURL(uploadedFile)
        reader.onload = async () => {
          const base64String = (reader.result as string).split(',')[1] // Remove data:*/*;base64, part

          const response = await fetch(
            `${
              import.meta.env.VITE_ESFUSE_BASE_URL
            }/api/v1/encompass/converter/loans?token=${
              import.meta.env.VITE_ESFUSE_ACCESS_TOKEN
            }`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                filename: uploadedFile.name,
                file_base64: base64String,
              }),
            }
          )

          if (!response.ok) {
            throw new Error(
              `API Error: ${response.status} ${response.statusText}`
            )
          }

          const data = await response.json()
          console.log('✅ FNMA Converter API Response:', data)
          if (data.status !== 'success' || !data.loan_data) {
            throw new Error('Invalid response from converter API')
          }

          // Process and map the returned loan_data to form fields
          const loanData = data.loan_data
          const mappedData: Partial<LoanDetails> = {
            borrowerName: loanData.borrower_name || '',
            loanAmount: loanData.loan_amount || 0,
            propertyValue: loanData.property_value || 0,
            creditScore: loanData.credit_score || 0,
            loanToValue: loanData.loan_to_value || 0,
            debtToIncome: loanData.debt_to_income || 0,
            propertyType: loanData.property_type || '',
            occupancyType: loanData.occupancy_type || '',
            loanPurpose: loanData.loan_purpose || '',
          }

          setFormData((prev) => ({ ...prev, ...mappedData }))
          setIsMinimalComplete(true)
          toast.success('FNMA file processed successfully! Form updated.')
          onClose()
          setUploadedFile(null)
        }
        reader.onerror = (error) => {
          throw error
        }
      } catch (error) {
        console.error('Error processing FNMA file:', error)
        toast.error('Failed to process FNMA file. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Upload FNMA File</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {/* Upload Area */}
            <div
              className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                dragActive
                  ? 'border-blue-400 bg-blue-50'
                  : 'border-slate-300 hover:border-slate-400'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <p className="text-sm text-slate-600 mb-2">
                Drag and drop file here, or click to browse
              </p>
              <p className="text-xs text-slate-500 mb-3">
                Supported formats: XML (Max 10MB each)
              </p>
              <input
                type="file"
                multiple
                accept={ACCEPTED_FILE_TYPES.join(',')}
                onChange={handleFileInput}
                className="hidden"
                id="file-upload"
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => document.getElementById('file-upload')?.click()}
              >
                Browse File
              </Button>
            </div>

            {/* Uploaded File */}
            {uploadedFile && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Selected File:</h4>

                <div className="flex items-center justify-between p-2 bg-slate-50 rounded">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-slate-500" />
                    <span className="text-sm">{uploadedFile.name}</span>
                    <span className="text-sm">({fileSize})</span>
                  </div>

                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={removeFile}
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-2 pt-4">
              {loading ? (
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand mx-auto"></div>
              ) : (
                <>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="button"
                    onClick={handleUpload}
                    disabled={!uploadedFile}
                    className="flex-1"
                  >
                    Upload
                  </Button>
                </>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }
  // #endregion FNMA

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6">
            <div className="space-y-6">
              <div>
                <div className="flex w-full items-center justify-between mb-2">
                  <h2 className="text-xl font-semibold text-slate-900">
                    Loan Scenario Details
                  </h2>

                  <Button
                    onClick={() => setUploadFNMAOpen(true)}
                    size="sm"
                    variant="outline"
                    data-testid="fill-fnma-button"
                    className="border-brand hover:border-brand-600 text-brand hover:text-brand-600"
                  >
                    Fill up with FNMA
                  </Button>
                </div>
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

      {/* Upload Dialog */}
      <FNMAUploadDialog
        isOpen={uploadFNMAOpen}
        onClose={() => setUploadFNMAOpen(false)}
      />
    </div>
  );
}