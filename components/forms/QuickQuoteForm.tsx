'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LoanDetails } from '@/lib/types';
import { PLACEHOLDER_NUMBER } from '@/lib/fixtures';

interface QuickQuoteFormProps {
  data: LoanDetails;
  onChange: (updates: Partial<LoanDetails>) => void;
}

export function QuickQuoteForm({ data, onChange }: QuickQuoteFormProps) {
  const handleInputChange = (field: keyof LoanDetails, value: string | number) => {
    onChange({ [field]: value });
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
          value={data.propertyType.includes('CA') ? 'CA' : ''}
          onValueChange={(value) => handleInputChange('propertyType', `${value} Property`)}
        >
          <SelectTrigger data-testid="state-select" data-placeholder="true">
            <SelectValue placeholder="Select state" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="CA">California</SelectItem>
            <SelectItem value="TX">Texas</SelectItem>
            <SelectItem value="FL">Florida</SelectItem>
            <SelectItem value="NY">New York</SelectItem>
            <SelectItem value="WA">Washington</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-xs text-slate-500">
          Property location state
          {/* TODO: replace with live location service */}
        </p>
      </div>

      {/* County */}
      <div className="space-y-2">
        <Label htmlFor="county" className="text-sm font-medium">
          County *
        </Label>
        <Select defaultValue="lorem">
          <SelectTrigger data-testid="county-select" data-placeholder="true">
            <SelectValue placeholder="Select county" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="lorem">Lorem County</SelectItem>
            <SelectItem value="ipsum">Ipsum County</SelectItem>
            <SelectItem value="dolor">Dolor County</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-xs text-slate-500">
          Property location county
          {/* TODO: replace with live location service */}
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