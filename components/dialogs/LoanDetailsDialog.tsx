'use client';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, User, Home, Wallet, CreditCard, FileText } from 'lucide-react';
import { useAppStore } from '../../lib/store';
import { BSACard } from '../summary/BSACard';
import { useState } from 'react';

export interface LoanDetailsData {
  borrowerName: string;
  creditScore: number;
  debtToIncome: number;
  has_credit_report: boolean;
  has_initial_1003: boolean;
  loanAmount: number;
  loanPurpose: string;
  loanToValue: number;
  occupancyType: string;
  propertyType: string;
  propertyValue: number;
}

export interface LoanRecordData {
  id: string;
  program_name: string;
  required_steps: string[];
  created_at?: string;
  loan_details: LoanDetailsData;
}

interface LoanDetailsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  loan: LoanRecordData | null;
}

function formatCurrency(value: number) {
  try {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
  } catch {
    return `$${Number(value || 0).toLocaleString('en-US')}`;
  }
}

function formatPercent(value: number) {
  if (value === null || value === undefined) return '—';
  return `${Number(value).toFixed(1)}%`;
}

export function LoanDetailsDialog({ isOpen, onClose, loan }: LoanDetailsDialogProps) {
  if (!loan) return null;

  const d = loan.loan_details;
  const { documents } = useAppStore();
  const [activeTab, setActiveTab] = useState('details');
  const [isUploaderOpen, setIsUploaderOpen] = useState(false);
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90vw] max-w-5xl p-1 h-[95dvh] overflow-y-auto overflow-x-hidden flex flex-col">
        <div className="bg-brand px-6 py-5 text-white max-h-[80px] sticky top-0">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-white">
              <User className="w-5 h-5 opacity-90" />
              {d.borrowerName}
            </DialogTitle>
            <DialogDescription className="text-white/80">
              Program: {loan.program_name}
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="px-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} defaultValue="details">
            <TabsList>
              <TabsTrigger value="details">Loan Details</TabsTrigger>
              <TabsTrigger value="files">Loan Files</TabsTrigger>
              <TabsTrigger value="bsa">BSA</TabsTrigger>
            </TabsList>

            <TabsContent value="details">
              <div className="p-2 space-y-6">
                {/* Key stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="rounded-lg border bg-white p-4">
                    <div className="text-xs text-slate-500">Loan Amount</div>
                    <div className="text-lg font-semibold text-slate-900">{formatCurrency(d.loanAmount)}</div>
                  </div>
                  <div className="rounded-lg border bg-white p-4">
                    <div className="text-xs text-slate-500">Property Value</div>
                    <div className="text-lg font-semibold text-slate-900">{formatCurrency(d.propertyValue)}</div>
                  </div>
                  <div className="rounded-lg border bg-white p-4">
                    <div className="text-xs text-slate-500">LTV</div>
                    <div className="text-lg font-semibold text-slate-900">{formatPercent(d.loanToValue)}</div>
                  </div>
                </div>

                <Separator />

                {/* Details grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex flex-col items-start gap-1.5 rounded-lg border p-3">
                      <div className="flex items-center gap-2 text-slate-600"><CreditCard className="w-4 h-4" /> Credit Score</div>
                      <div className="font-medium text-slate-900">{d.creditScore}</div>
                    </div>
                    <div className="flex flex-col items-start gap-1.5 rounded-lg border p-3">
                      <div className="flex items-center gap-2 text-slate-600"><Wallet className="w-4 h-4" /> Debt-to-Income</div>
                      <div className="font-medium text-slate-900">{formatPercent(d.debtToIncome)}</div>
                    </div>
                    <div className="flex flex-col items-start gap-1.5 rounded-lg border p-3">
                      <div className="flex items-center gap-2 text-slate-600"><Home className="w-4 h-4" /> Occupancy</div>
                      <div className="font-medium text-slate-900">{d.occupancyType}</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-col items-start gap-1.5 rounded-lg border p-3">
                      <div className="text-slate-600">Property Type</div>
                      <div className="font-medium text-slate-900">{d.propertyType}</div>
                    </div>
                    <div className="flex flex-col items-start gap-1.5 rounded-lg border p-3">
                      <div className="text-slate-600">Loan Purpose</div>
                      <div className="font-medium text-slate-900">{d.loanPurpose}</div>
                    </div>
                    <div className="flex flex-col items-start gap-1.5 rounded-lg border p-3">
                      <div className="text-slate-600">Program</div>
                      <div className="font-medium text-slate-900">{loan.program_name}</div>
                    </div>
                  </div>
                </div>

                {/* Flags */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center justify-between rounded-lg border p-3">
                    <span className="text-slate-600">Credit Report</span>
                    {d.has_credit_report ? (
                      <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 gap-1"><CheckCircle2 className="w-4 h-4" /> Present</Badge>
                    ) : (
                      <Badge variant="outline" className="text-rose-700 border-rose-200 gap-1"><XCircle className="w-4 h-4" /> Missing</Badge>
                    )}
                  </div>
                  <div className="flex items-center justify-between rounded-lg border p-3">
                    <span className="text-slate-600">Initial 1003</span>
                    {d.has_initial_1003 ? (
                      <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 gap-1"><CheckCircle2 className="w-4 h-4" /> Present</Badge>
                    ) : (
                      <Badge variant="outline" className="text-rose-700 border-rose-200 gap-1"><XCircle className="w-4 h-4" /> Missing</Badge>
                    )}
                  </div>
                </div>

                {/* Required steps */}
                <div>
                  <div className="text-sm font-medium text-slate-900 mb-2">Required Steps</div>
                  <div className="flex flex-row gap-2 w-fit">
                    {loan.required_steps?.map((step, i) => (
                      <div key={i} className="flex flex-row items-center gap-2 rounded-md border p-2 bg-slate-50">
                        <CheckCircle2 className="w-4 h-4 text-brand" />
                        <span className="text-slate-700 text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="files">
              <div className="space-y-4">
                <div className="text-sm font-medium text-slate-900">Loan Files</div>
                <div className="space-y-2">
                  {documents.map((doc: any) => (
                    <div key={doc.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border">
                      <div className="flex items-center gap-3">
                        <FileText className="w-4 h-4 text-slate-500" />
                        <div>
                          <div className="text-sm font-medium text-slate-900">{doc.name}</div>
                          <div className="text-xs text-slate-500">{doc.description || 'Required document'}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className={
                          doc.status === 'completed' ? 'bg-ok/10 text-ok border-ok/20' :
                          doc.status === 'in_progress' ? 'bg-brand/10 text-brand border-brand/20' :
                          'border-slate-300 text-slate-500'
                        }>
                          {String(doc.status).replace('_', ' ')}
                        </Badge>
                        <Button size="sm" className="bg-brand hover:bg-brand-600" >
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="bsa">
              <div className="p-4">
                <BSACard hideDetailsButton={true} />
              </div>
            </TabsContent>
          </Tabs>
        </div>

      </DialogContent>
    </Dialog>
  );
}

export default LoanDetailsDialog;


