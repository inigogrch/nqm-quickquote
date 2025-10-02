'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useAppStore } from '../../lib/store';
import { PLACEHOLDER_TEXT } from '../../lib/fixtures';
import { FileText, Download, Eye, CheckCircle, AlertTriangle } from 'lucide-react';

export function PackageCards() {
  const { loanPackage, loanDetails, documents } = useAppStore();

  if (!loanPackage || !loanDetails) {
    return (
      <Card className="p-8 text-center">
        <p className="text-slate-600">No package data available</p>
      </Card>
    );
  }

  const completedDocs = documents.filter(doc => doc.status === 'completed');
  const pendingDocs = documents.filter(doc => doc.status === 'pending');

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Loan Summary Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-brand" />
            Loan Summary
          </CardTitle>
          <CardDescription>Key loan details and program selection</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-slate-600">Loan Amount</p>
              <p className="font-semibold">{formatCurrency(loanDetails.loanAmount)}</p>
            </div>
            <div>
              <p className="text-sm text-slate-600">Property Value</p>
              <p className="font-semibold">{formatCurrency(loanDetails.propertyValue)}</p>
            </div>
            <div>
              <p className="text-sm text-slate-600">LTV Ratio</p>
              <p className="font-semibold">{loanDetails.loanToValue.toFixed(1)}%</p>
            </div>
            <div>
              <p className="text-sm text-slate-600">Credit Score</p>
              <p className="font-semibold">{loanDetails.creditScore}</p>
            </div>
          </div>

          <Separator />

          <div>
            <p className="text-sm text-slate-600 mb-2">Selected Program</p>
            <div className="flex items-center justify-between">
              <p className="font-semibold" data-placeholder="true">
                {loanPackage.selectedProgram}
                {/* TODO: replace with live program service */}
              </p>
              <Badge className="bg-brand text-white">
                {loanPackage.rate}% Rate
              </Badge>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1">
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Document Status Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-ok" />
            Document Status
          </CardTitle>
          <CardDescription>Verification and compliance status</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-ok/5 rounded-lg border border-ok/20">
              <div className="text-2xl font-bold text-ok">{completedDocs.length}</div>
              <div className="text-sm text-slate-600">Verified</div>
            </div>
            <div className="text-center p-3 bg-warn/5 rounded-lg border border-warn/20">
              <div className="text-2xl font-bold text-warn">{pendingDocs.length}</div>
              <div className="text-sm text-slate-600">Pending</div>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <p className="text-sm font-medium text-slate-900">Recent Verifications</p>
            {completedDocs.slice(0, 3).map((doc) => (
              <div key={doc.id} className="flex items-center justify-between py-1">
                <span className="text-sm text-slate-600" data-placeholder="true">
                  {doc.name}
                  {/* TODO: replace with live document service */}
                </span>
                <CheckCircle className="w-4 h-4 text-ok" />
              </div>
            ))}
          </div>

          {pendingDocs.length > 0 && (
            <>
              <Separator />
              <div className="space-y-2">
                <p className="text-sm font-medium text-slate-900 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-warn" />
                  Outstanding Items
                </p>
                {pendingDocs.slice(0, 2).map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between py-1">
                    <span className="text-sm text-slate-600" data-placeholder="true">
                      {doc.name}
                      {/* TODO: replace with live document service */}
                    </span>
                    <Badge variant="outline" className="text-xs border-warn text-warn">
                      Pending
                    </Badge>
                  </div>
                ))}
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* TODO: COMPLIANCE CHECK - TEMPORARILY HIDDEN - WILL BE RE-ENABLED LATER */}
      {/* Uncomment this section when ready to show Compliance Check again */}
      {/*
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-ok" />
            Compliance Check
          </CardTitle>
          <CardDescription>Regulatory and guideline compliance</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600">QM Compliance</span>
              <Badge className="bg-ok text-white text-xs">Verified</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600">TRID Requirements</span>
              <Badge className="bg-ok text-white text-xs">Compliant</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600">Investor Guidelines</span>
              <Badge className="bg-ok text-white text-xs">Approved</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600">Risk Assessment</span>
              <Badge className="bg-brand text-white text-xs">Low Risk</Badge>
            </div>
          </div>

          <Separator />

          <div>
            <p className="text-sm font-medium text-slate-900 mb-2">Confidence Score</p>
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-slate-200 rounded-full h-2">
                <div 
                  className="bg-ok h-2 rounded-full transition-all duration-500" 
                  style={{ width: '85%' }}
                />
              </div>
              <span className="text-sm font-semibold text-ok">85%</span>
            </div>
            <p className="text-xs text-slate-500 mt-1" data-placeholder="true">
              High confidence in loan approval
            </p>
          </div>
        </CardContent>
      </Card>
      */}

      {/* TODO: NEXT STEPS - TEMPORARILY HIDDEN - WILL BE RE-ENABLED LATER */}
      {/* Uncomment this section when ready to show Next Steps again */}
      {/*
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-brand" />
            Next Steps
          </CardTitle>
          <CardDescription>Recommended actions for submission</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
              <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs text-white font-semibold">1</span>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">Upload Documents</p>
                <p className="text-xs text-slate-600" data-placeholder="true">
                  Upload and organize all required loan documentation
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
              <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs text-white font-semibold">2</span>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">Review Package</p>
                <p className="text-xs text-slate-600" data-placeholder="true">
                  Final review of all documents and loan details
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
              <div className="w-6 h-6 bg-slate-300 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs text-slate-600 font-semibold">3</span>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-600">Handover to LGX</p>
                <p className="text-xs text-slate-500" data-placeholder="true">
                  LGX system will handle automated LOS submission and processing
                </p>
              </div>
            </div>
          </div>

          <Button className="w-full bg-brand hover:bg-brand-600">
            Continue to Next Step
          </Button>
        </CardContent>
      </Card>
      */}
    </div>
  );
}