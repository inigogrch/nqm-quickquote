'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TrendingUp, FileText, Target } from 'lucide-react';
import { PLACEHOLDER_PERCENT, PLACEHOLDER_NUMBER } from '@/lib/fixtures';

interface EligibleTableProps {
  onSelectProgram: (programId: string) => void;
  isMinimumLane: boolean;
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

export function EligibleTable({ onSelectProgram, isMinimumLane }: EligibleTableProps) {
  // Adjust confidence based on lane type
  const adjustedPrograms = eligiblePrograms.map(program => ({
    ...program,
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
            <TableHead className="text-center">Min Reserves</TableHead>
            <TableHead className="text-center">Est. Points</TableHead>
            <TableHead className="text-center">
              <div className="flex items-center justify-center gap-1">
                <FileText className="w-4 h-4" />
                Docs
              </div>
            </TableHead>
            <TableHead className="text-center">
              <div className="flex items-center justify-center gap-1">
                <Target className="w-4 h-4" />
                Confidence
              </div>
            </TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {adjustedPrograms.map((program) => (
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
                  {program.rateLow}% - {program.rateHigh}%
                  {/* TODO: replace with live pricing service */}
                </Badge>
              </TableCell>
              <TableCell className="text-center" data-placeholder="true">
                {program.maxLTV}%
                {/* TODO: replace with live program service */}
              </TableCell>
              <TableCell className="text-center" data-placeholder="true">
                {program.minFICO}
                {/* TODO: replace with live program service */}
              </TableCell>
              <TableCell className="text-center" data-placeholder="true">
                {program.minReserves} mo
                {/* TODO: replace with live program service */}
              </TableCell>
              <TableCell className="text-center" data-placeholder="true">
                {program.points}
                {/* TODO: replace with live pricing service */}
              </TableCell>
              <TableCell className="text-center">
                <Badge variant="outline" data-placeholder="true">
                  {program.docsCount}
                  {/* TODO: replace with live docs service */}
                </Badge>
              </TableCell>
              <TableCell className="text-center">
                <Badge 
                  variant="outline" 
                  className={`${
                    program.confidence >= 80 
                      ? 'bg-ok/10 text-ok border-ok/20'
                      : program.confidence >= 70
                      ? 'bg-warn/10 text-warn border-warn/20'
                      : 'bg-slate/10 text-slate-600 border-slate/20'
                  }`}
                  data-placeholder="true"
                >
                  {program.confidence.toFixed(1)}%
                  {/* TODO: replace with live confidence service */}
                </Badge>
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