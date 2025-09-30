'use client';

import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { X, AlertCircle } from 'lucide-react';
import { LoanProgram } from '@/lib/types';

interface IneligibleTableProps {
  programs?: LoanProgram[];
}

const ineligiblePrograms = [
  {
    id: 'prog-d',
    name: 'Sit Amet Jumbo',
    failedConstraint: 'Max CLTV 80%',
    whyNot: ['Max CLTV 80% exceeded by 2.3%', 'Insufficient reserves'],
    cite: 'Section 12.3 — Bank Statement Income'
  },
  {
    id: 'prog-e',
    name: 'Consectetur Elite',
    failedConstraint: 'Min FICO 720',
    whyNot: ['Credit score below minimum'],
    cite: 'Section 8.1 — Credit Requirements'
  },
  {
    id: 'prog-f',
    name: 'Adipiscing Premium',
    failedConstraint: 'Property Type',
    whyNot: ['Property type not supported', 'Location restrictions'],
    cite: 'Section 15.2 — Property Guidelines'
  }
];

export function IneligibleTable({ programs = [] }: IneligibleTableProps) {
  // Use API data if available, otherwise fall back to placeholder data
  const displayPrograms = programs.length > 0 ? programs.map(program => {
    if (program.failures && program.failures.length > 0) {
      // Extract ALL failed requirements (not just the first one)
      const failedConstraints = program.failures.map(failure => failure.requirement);
      
      // Extract all failure messages
      const failureMessages = program.failures.map(failure => failure.message);
      
      // Create a comprehensive citation from all failures
      const citation = program.failures.map(failure => 
        `${failure.requirement}: ${failure.expected}`
      ).join(' | ');
      
      return {
        id: program.id,
        name: program.name,
        failedConstraints: failedConstraints, // Array of all failed requirements
        whyNot: failureMessages,
        cite: citation
      };
    } else {
      return {
        id: program.id,
        name: program.name,
        failedConstraints: ['Eligibility Requirements'], // Keep as array for consistency
        whyNot: ['Failed one or more eligibility requirements'],
        cite: 'Program Guidelines'
      };
    }
  }) : ineligiblePrograms.map(program => ({
    ...program,
    failedConstraints: [program.failedConstraint] // Convert single constraint to array
  }));
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Program Name</TableHead>
            <TableHead>Failed Constraint</TableHead>
            <TableHead>Why Not</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayPrograms.map((program) => (
            <TableRow 
              key={program.id}
              className="hover:bg-red-50/30 transition-colors"
              data-testid={`ineligible-program-${program.id}`}
            >
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  <X className="w-4 h-4 text-bad" />
                  <span data-placeholder="true">
                    {program.name}
                    {/* TODO: replace with live program service */}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {program.failedConstraints.map((constraint, index) => (
                    <Badge 
                      key={index}
                      variant="outline" 
                      className="bg-bad/10 text-bad border-bad/20" 
                      data-placeholder="true"
                    >
                      {constraint}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {program.whyNot.map((reason, index) => (
                    <Badge 
                      key={index}
                      variant="outline" 
                      className="bg-bad/5 text-bad border-bad/20 text-xs"
                      data-placeholder="true"
                    >
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {reason}
                      {/* TODO: replace with live rule engine */}
                    </Badge>
                  ))}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}