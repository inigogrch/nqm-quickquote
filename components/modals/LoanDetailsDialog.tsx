"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { getLoanByIdFromLocal, LocalLoanFullRecord } from "@/lib/local-db";

interface LoanDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  loanId: string | null;
}

export function LoanDetailsDialog({
  open,
  onOpenChange,
  loanId,
}: LoanDetailsDialogProps) {
  const [record, setRecord] = useState<LocalLoanFullRecord | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open || !loanId) return;
    setLoading(true);
    setError(null);
    getLoanByIdFromLocal(loanId)
      .then((data) => setRecord(data))
      .catch((e) => setError(String(e)))
      .finally(() => setLoading(false));
  }, [open, loanId]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Loan Details</DialogTitle>
        </DialogHeader>
        {loading && <div className="text-sm text-slate-600">Loading...</div>}
        {error && <div className="text-sm text-red-600">{error}</div>}
        {record && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Borrower</p>
                <p className="text-base font-medium text-slate-900">
                  {record.profileName}
                </p>
              </div>
              <Badge variant="outline">{record.programName}</Badge>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-slate-500">Created</p>
                <p className="text-slate-900">{formatDate(record.createdAt)}</p>
              </div>
              <div>
                <p className="text-slate-500">Next Step</p>
                <p className="text-slate-900">
                  {record.requiredSteps?.[0] ?? "—"}
                </p>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-4">
              <h4 className="text-sm font-semibold text-slate-900 mb-3">
                Scenario
              </h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-slate-500">Loan Amount</p>
                  <p className="text-slate-900">
                    {record.loanDetails.loanAmount.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </p>
                </div>
                <div>
                  <p className="text-slate-500">Property Value</p>
                  <p className="text-slate-900">
                    {record.loanDetails.propertyValue.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </p>
                </div>
                <div>
                  <p className="text-slate-500">LTV</p>
                  <p className="text-slate-900">
                    {record.loanDetails.loanToValue}%
                  </p>
                </div>
                <div>
                  <p className="text-slate-500">FICO</p>
                  <p className="text-slate-900">
                    {record.loanDetails.creditScore}
                  </p>
                </div>
                <div>
                  <p className="text-slate-500">Property Type</p>
                  <p className="text-slate-900">
                    {record.loanDetails.propertyType}
                  </p>
                </div>
                <div>
                  <p className="text-slate-500">Occupancy</p>
                  <p className="text-slate-900">
                    {record.loanDetails.occupancyType}
                  </p>
                </div>
                <div>
                  <p className="text-slate-500">Purpose</p>
                  <p className="text-slate-900">
                    {record.loanDetails.loanPurpose}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-4">
              <h4 className="text-sm font-semibold text-slate-900 mb-2">
                Required Steps
              </h4>
              <div className="flex flex-wrap gap-2">
                {record.requiredSteps?.map((s, idx) => (
                  <Badge key={idx} variant="secondary">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
