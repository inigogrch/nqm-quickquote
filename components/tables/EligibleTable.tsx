'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TrendingUp, FileText, Target } from 'lucide-react';
import { PLACEHOLDER_PERCENT, PLACEHOLDER_NUMBER } from '../../lib/fixtures';
import { LoanProgram } from '../../lib/types';

interface EligibleTableProps {
  onSelectProgram: (programId: string) => void;
  isMinimumLane: boolean;
  programs?: LoanProgram[];
}

const eligiblePrograms = [
  {
    id: 'prog-a',
    name: 'Lorem Program A',
    rateLow: 6.99,
    rateHigh: 7.49,
    maxLTV: 80,
    minFICO: 660,
    minReserves: 6,
    points: 1.25,
    docsCount: 5,
    confidence: 85.3
  },
  {
    id: 'prog-b', 
    name: 'Ipsum DSCR Plus',
    rateLow: 7.25,
    rateHigh: 7.75,
    maxLTV: 75,
    minFICO: 680,
    minReserves: 12,
    points: 1.5,
    docsCount: 7,
    confidence: 77.7
  },
  {
    id: 'prog-c',
    name: 'Dolor Bank Statement',
    rateLow: 7.50,
    rateHigh: 8.00,
    maxLTV: 80,
    minFICO: 640,
    minReserves: 3,
    points: 2.0,
    docsCount: 6,
    confidence: 72.1
  }
];

export function EligibleTable({ onSelectProgram, isMinimumLane, programs = [] }: EligibleTableProps) {
  // Extract requirements data from API response using contains matching
  const extractRequirementValue = (requirements: any[], searchTerm: string): string => {
    if (!requirements || requirements.length === 0) return 'N/A';
    
    // Debug logging
    console.log(`Searching for: "${searchTerm}" in requirements:`, requirements);
    
    // First, try to find a requirement that contains the exact search term with "Max" prefix
    // This handles cases like "Max LTV", "Max FICO", "Max Loan", etc.
    let requirement = requirements.find(req => 
      req.requirement && req.requirement.toLowerCase().includes(`max ${searchTerm.toLowerCase()}`)
    );
    
    console.log(`Found with "max ${searchTerm.toLowerCase()}":`, requirement);
    
    // If not found, fall back to any requirement that contains the search term
    if (!requirement) {
      requirement = requirements.find(req => 
        req.requirement && req.requirement.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log(`Found with "${searchTerm.toLowerCase()}":`, requirement);
    }
    
    if (!requirement) {
      console.log(`No requirement found for: ${searchTerm}`);
      return 'N/A';
    }
    
    // Normalize the value formatting
    const expected = requirement.expected;
    console.log(`Extracted expected value:`, expected);
    
    // Format loan amounts (numbers without $ sign)
    if (searchTerm.toLowerCase().includes('loan') && typeof expected === 'number') {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(expected);
    }
    
    // Extract numeric values for LTV and FICO
    if (searchTerm.toLowerCase().includes('ltv')) {
      // Extract all percentages from strings like "Max LTV Purchase: ≤ 75%" or "70% NOO/Business Full Doc, Asset Utilization or DSCR; 75% Ful..."
      const matches = expected.toString().match(/(\d+(?:\.\d+)?)%/g);
      
      if (matches && matches.length > 0) {
        // Extract numeric values and find the highest
        const percentages = matches.map(match => parseFloat(match.replace('%', '')));
        const highestPercentage = Math.max(...percentages);
        const result = `${highestPercentage}%`;
        console.log(`LTV extraction - found percentages: ${percentages}, using highest: ${result}`);
        return result;
      } else {
        // Fallback to original logic if no percentages found
        const match = expected.toString().match(/(\d+(?:\.\d+)?)%/);
        const result = match ? `${match[1]}%` : expected.toString();
        console.log(`LTV extraction result (fallback):`, result);
        return result;
      }
    }
    
    if (searchTerm.toLowerCase().includes('fico')) {
      // Extract number from strings like ">= 700" or "FICO >= 700"
      const match = expected.toString().match(/(\d+)/);
      return match ? match[1] : expected.toString();
    }
    
    // Return as-is for other values
    return expected.toString();
  };

  // Use API data if available, otherwise fall back to placeholder data
  const displayPrograms = programs.length > 0 ? programs.map(program => {
    // Determine rate display based on subprograms
    let rateDisplay = '-';
    if (program.rateRange?.hasSubprograms) {
      if (program.rateRange.min === program.rateRange.max) {
        rateDisplay = `${program.rateRange.min}%`;
      } else {
        rateDisplay = `${program.rateRange.min}% - ${program.rateRange.max}%`;
      }
    }
    
    // Debug: Log the entire program object to see its structure
    console.log(`Program ${program.name} full object:`, program);
    
    // Combine passed, failed, and missing requirements to search through all
    const allRequirements = [
      ...(program.passedRequirements || []),
      ...(program.failures || []),
      ...(program.missing_fields || [])
    ];
    
    console.log(`All requirements for ${program.name}:`, allRequirements);

    return {
      id: program.id,
      name: program.name,
      rateDisplay: rateDisplay,
      maxLTV: extractRequirementValue(allRequirements, 'ltv'),
      minFICO: extractRequirementValue(allRequirements, 'fico'),
      minLoanAmount: extractRequirementValue(allRequirements, 'min loan'),
      confidence: isMinimumLane ? 75.0 : 85.0
    };
  }) : eligiblePrograms.map(program => ({
    ...program,
    rateDisplay: `${program.rateLow}% - ${program.rateHigh}%`,
    confidence: isMinimumLane ? program.confidence - 10 : program.confidence
  }));

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Program Name</TableHead>
            <TableHead className="text-center">
              <div className="flex items-center justify-center gap-1">
                <TrendingUp className="w-4 h-4" />
                Rate Range
              </div>
            </TableHead>
            <TableHead className="text-center">Max LTV</TableHead>
            <TableHead className="text-center">Min FICO</TableHead>
            <TableHead className="text-center">Min Loan Amount</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayPrograms.map((program) => (
            <TableRow 
              key={program.id}
              className="hover:bg-slate-50/50 transition-colors"
              data-testid={`eligible-program-${program.id}`}
            >
              <TableCell className="font-medium">
                <div data-placeholder="true">
                  {program.name}
                  {/* TODO: replace with live program service */}
                </div>
              </TableCell>
              <TableCell className="text-center">
                <Badge variant="outline" className="bg-brand/5 text-brand border-brand/20" data-placeholder="true">
                  {program.rateDisplay}
                  {/* Rate from qualified subprograms or "-" if none */}
                </Badge>
              </TableCell>
              <TableCell className="text-center" data-placeholder="true">
                {program.maxLTV}
                {/* Max LTV from API (already includes % sign) */}
              </TableCell>
              <TableCell className="text-center" data-placeholder="true">
                {program.minFICO}
                {/* Min FICO from API */}
              </TableCell>
              <TableCell className="text-center" data-placeholder="true">
                {program.minLoanAmount}
                {/* Min loan amount from API - formatted as currency */}
              </TableCell>
              <TableCell>
                <Button
                  size="sm"
                  onClick={() => onSelectProgram(program.id)}
                  data-testid={`select-program-${program.id}`}
                  className="bg-brand hover:bg-brand-600"
                >
                  Select Program
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}