'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LoanDetails } from '../../lib/types';
import { PLACEHOLDER_NUMBER } from '../../lib/fixtures';
import { US_STATES, getCountiesByState } from '../../lib/location-data';

interface QuickQuoteFormProps {
  data: LoanDetails;
  onChange: (updates: Partial<LoanDetails>) => void;
}

export function QuickQuoteForm({ data, onChange }: QuickQuoteFormProps) {
  const handleInputChange = (field: keyof LoanDetails, value: string | number) => {
    onChange({ [field]: value });
  };
  
  const handleStateChange = (stateCode: string) => {
    // Reset county when state changes
    onChange({ state: stateCode, county: '' });
  };

  const formatCurrency = (value: number) => {
    return value ? value.toLocaleString() : '';
  };

  const parseCurrency = (value: string) => {
    return parseInt(value.replace(/[^0-9]/g, '')) || 0;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* First Lien Amount */}
      <div className="space-y-2">
        <Label htmlFor="loanAmount" className="text-sm font-medium">
          First Lien Amount *
        </Label>
        <Input
          id="loanAmount"
          type="text"
          value={formatCurrency(data.loanAmount)}
          onChange={(e) => handleInputChange('loanAmount', parseCurrency(e.target.value))}
          placeholder="1,234,567"
          data-testid="loan-amount-input"
          data-placeholder="true"
          className="text-right"
        />
        <p className="text-xs text-slate-500">
          Enter the loan amount you're seeking
          {/* TODO: replace with live validation service */}
        </p>
      </div>

      {/* LTV */}
      <div className="space-y-2">
        <Label htmlFor="ltv" className="text-sm font-medium">
          LTV *
        </Label>
        <Input
          id="ltv"
          type="number"
          value={data.loanToValue || ''}
          onChange={(e) => handleInputChange('loanToValue', parseFloat(e.target.value) || 0)}
          placeholder="77.7"
          data-testid="ltv-input"
          data-placeholder="true"
          min="0"
          max="100"
          step="0.1"
          className="text-right"
        />
        <p className="text-xs text-slate-500">
          Loan-to-value ratio (typical range 0-100%)
        </p>
      </div>

      {/* State */}
      <div className="space-y-2">
        <Label htmlFor="state" className="text-sm font-medium">
          State *
        </Label>
        <Select 
          value={data.state || ''}
          onValueChange={handleStateChange}
        >
          <SelectTrigger data-testid="state-select">
            <SelectValue placeholder="Select state" />
          </SelectTrigger>
          <SelectContent className="max-h-[300px]">
            {US_STATES.map((state) => (
              <SelectItem key={state.code} value={state.code}>
                {state.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-xs text-slate-500">
          Property location state
        </p>
      </div>

      {/* County */}
      <div className="space-y-2">
        <Label htmlFor="county" className="text-sm font-medium">
          County *
        </Label>
        <Select 
          value={data.county || ''}
          onValueChange={(value) => handleInputChange('county', value)}
          disabled={!data.state}
        >
          <SelectTrigger data-testid="county-select">
            <SelectValue placeholder={data.state ? "Select county" : "Select state first"} />
          </SelectTrigger>
          <SelectContent className="max-h-[300px]">
            {data.state && getCountiesByState(data.state).map((county) => (
              <SelectItem key={county} value={county}>
                {county}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-xs text-slate-500">
          Property location county
        </p>
      </div>

      {/* FICO */}
      <div className="space-y-2 md:col-span-2">
        <Label htmlFor="fico" className="text-sm font-medium">
          FICO Score *
        </Label>
        <Input
          id="fico"
          type="number"
          value={data.creditScore || ''}
          onChange={(e) => handleInputChange('creditScore', parseInt(e.target.value) || 0)}
          placeholder="777"
          data-testid="fico-input"
          data-placeholder="true"
          min="300"
          max="850"
          className="text-right md:w-48"
        />
        <p className="text-xs text-slate-500">
          Credit score (typical range 300-850)
        </p>
      </div>
    </div>
  );
}