'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { LoanDetails } from '@/lib/types';
import { motion, AnimatePresence } from 'framer-motion';

interface ImproveAccuracyAccordionProps {
  isOpen: boolean;
  onToggle: (open: boolean) => void;
  data: LoanDetails;
  onChange: (updates: Partial<LoanDetails>) => void;
}

export function ImproveAccuracyAccordion({ 
  isOpen, 
  onToggle, 
  data, 
  onChange 
}: ImproveAccuracyAccordionProps) {
  const handleInputChange = (field: keyof LoanDetails, value: string | number) => {
    onChange({ [field]: value });
  };

  return (
    <Card className="border-brand/20 bg-brand/5">
      <Button
        variant="ghost"
        onClick={() => onToggle(!isOpen)}
        data-testid="improve-accuracy-toggle"
        className="w-full justify-between p-6 h-auto hover:bg-brand/10"
      >
        <div className="text-left">
          <h3 className="font-medium text-slate-900">Improve Accuracy</h3>
          <p className="text-sm text-slate-600 mt-1">
            Add 4–6 items to tighten your price
          </p>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-slate-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-500" />
        )}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-brand/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* Occupancy */}
                <div className="space-y-2">
                  <Label htmlFor="occupancy" className="text-sm font-medium">
                    Occupancy
                  </Label>
                  <Select 
                    value={data.occupancyType}
                    onValueChange={(value) => handleInputChange('occupancyType', value)}
                  >
                    <SelectTrigger data-testid="occupancy-select" data-placeholder="true">
                      <SelectValue placeholder="Select occupancy" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Primary Residence">Primary Residence</SelectItem>
                      <SelectItem value="Second Home">Second Home</SelectItem>
                      <SelectItem value="Investment Property">Investment Property</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Property Type */}
                <div className="space-y-2">
                  <Label htmlFor="propertyType" className="text-sm font-medium">
                    Property Type
                  </Label>
                  <Select 
                    value={data.propertyType}
                    onValueChange={(value) => handleInputChange('propertyType', value)}
                  >
                    <SelectTrigger data-testid="property-type-select" data-placeholder="true">
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Single Family Residence">Single Family Residence</SelectItem>
                      <SelectItem value="Condominium">Condominium</SelectItem>
                      <SelectItem value="Townhouse">Townhouse</SelectItem>
                      <SelectItem value="Multi-Family">Multi-Family</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Income Doc Type */}
                <div className="space-y-2">
                  <Label htmlFor="incomeDocType" className="text-sm font-medium">
                    Income Doc Type
                  </Label>
                  <Select defaultValue="bank-statement">
                    <SelectTrigger data-testid="income-doc-select" data-placeholder="true">
                      <SelectValue placeholder="Select doc type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bank-statement">Bank Statement</SelectItem>
                      <SelectItem value="tax-returns">Tax Returns</SelectItem>
                      <SelectItem value="p&l">P&L Statement</SelectItem>
                      <SelectItem value="asset-depletion">Asset Depletion</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* DTI/DSCR */}
                <div className="space-y-2">
                  <Label htmlFor="dti" className="text-sm font-medium">
                    DTI/DSCR
                  </Label>
                  <Input
                    id="dti"
                    type="number"
                    value={data.debtToIncome || ''}
                    onChange={(e) => handleInputChange('debtToIncome', parseFloat(e.target.value) || 0)}
                    placeholder="43.2"
                    data-testid="dti-input"
                    data-placeholder="true"
                    step="0.1"
                    className="text-right"
                  />
                </div>

                {/* Reserves */}
                <div className="space-y-2">
                  <Label htmlFor="reserves" className="text-sm font-medium">
                    Reserves (months)
                  </Label>
                  <Input
                    id="reserves"
                    type="number"
                    placeholder="6"
                    data-testid="reserves-input"
                    data-placeholder="true"
                    min="0"
                    className="text-right"
                  />
                </div>

                {/* Subordinate Amount */}
                <div className="space-y-2">
                  <Label htmlFor="subordinate" className="text-sm font-medium">
                    Subordinate Amount
                  </Label>
                  <Input
                    id="subordinate"
                    type="text"
                    placeholder="$0"
                    data-testid="subordinate-input"
                    data-placeholder="true"
                    className="text-right"
                  />
                </div>

                {/* Escrow */}
                <div className="space-y-2">
                  <Label htmlFor="escrow" className="text-sm font-medium">
                    Escrow
                  </Label>
                  <Select defaultValue="yes">
                    <SelectTrigger data-testid="escrow-select" data-placeholder="true">
                      <SelectValue placeholder="Select escrow" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Citizenship */}
                <div className="space-y-2">
                  <Label htmlFor="citizenship" className="text-sm font-medium">
                    Citizenship
                  </Label>
                  <Select defaultValue="us-citizen">
                    <SelectTrigger data-testid="citizenship-select" data-placeholder="true">
                      <SelectValue placeholder="Select citizenship" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us-citizen">US Citizen</SelectItem>
                      <SelectItem value="permanent-resident">Permanent Resident</SelectItem>
                      <SelectItem value="non-permanent-resident">Non-Permanent Resident</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* ITIN */}
                <div className="space-y-2">
                  <Label htmlFor="itin" className="text-sm font-medium">
                    ITIN
                  </Label>
                  <Select defaultValue="no">
                    <SelectTrigger data-testid="itin-select" data-placeholder="true">
                      <SelectValue placeholder="Select ITIN" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Purpose */}
                <div className="space-y-2">
                  <Label htmlFor="purpose" className="text-sm font-medium">
                    Purpose
                  </Label>
                  <Select 
                    value={data.loanPurpose}
                    onValueChange={(value) => handleInputChange('loanPurpose', value)}
                  >
                    <SelectTrigger data-testid="purpose-select" data-placeholder="true">
                      <SelectValue placeholder="Select purpose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Purchase">Purchase</SelectItem>
                      <SelectItem value="Refinance">Refinance</SelectItem>
                      <SelectItem value="Cash-Out Refinance">Cash-Out Refinance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Loan Type */}
                <div className="space-y-2">
                  <Label htmlFor="loanType" className="text-sm font-medium">
                    Loan Type
                  </Label>
                  <Select defaultValue="non-qm">
                    <SelectTrigger data-testid="loan-type-select" data-placeholder="true">
                      <SelectValue placeholder="Select loan type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="non-qm">Non-QM</SelectItem>
                      <SelectItem value="jumbo">Jumbo</SelectItem>
                      <SelectItem value="dscr">DSCR</SelectItem>
                      <SelectItem value="asset-depletion">Asset Depletion</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}