"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PackageCards } from "../../components/summary/PackageCards";
import { BSACard } from "../../components/summary/BSACard";
import { ShareModal } from "../../components/modals/ShareModal";
import { TimelineDrawer } from "../../components/drawers/TimelineDrawer";
import { Share2, Clock, Download } from "lucide-react";
import { useAppStore } from "../../lib/store";
import { toast } from "sonner";
import supabase from "../../lib/supabase";

interface Loan {
  id: string;
  created_at: string;
  documents: any[];
  loanDetails: any;
  programName: string;
  requiredSteps: string[];
}

export default function Summary() {
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [timelineOpen, setTimelineOpen] = useState(false);
  const [loan, setLoan] = useState<Loan | null>(null);
  const [loading, setLoading] = useState(false);
  const { loanPackage, addTimelineEvent, currentLoanId } = useAppStore();

  // fetch loan from supabase using currentLoanId
  useEffect(() => {
    const fetchLoanFromSupabase = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("loans")
        .select("*")
        .eq("id", currentLoanId)
        .single();
      if (error) {
        console.error("Error fetching loan from supabase:", error);
      } else {
        console.log("Loan fetched from supabase:", data);
        setLoan(data);
      }
      setLoading(false);
    };

    fetchLoanFromSupabase();
  }, []);

  const handleDownload = () => {
    // Simulate package download
    addTimelineEvent({
      id: `timeline_${Date.now()}`,
      timestamp: new Date().toISOString(),
      event: "Package Downloaded",
      description: "Pre-submission package downloaded by user",
      status: "completed",
    });
    toast.success("Package download started");
  };

  const handleShare = () => {
    setShareModalOpen(true);
  };

  if (loading) {
    return (
      <div className="w-full h-full bg-neutral-300 animate-pulse"></div>
    )
  }

  if (!loan && !loading) {
    return (
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 text-center">
          <h2 className="text-xl font-semibold text-slate-900 mb-2">
            No Package Generated
          </h2>
          <p className="text-slate-600">
            Please complete the agent processing steps to generate a summary
            package.
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">

      {/* Header */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-semibold text-slate-900">
                Pre-Submission Package
              </h1>
              <Badge className="bg-ok text-white">Ready</Badge>
            </div>
            <p className="text-slate-600" data-placeholder="true">
              Package ID: {loan.id} • Generated{" "}
              {new Date(loan.created_at).toLocaleDateString()}
              {/* TODO: replace with live package service */}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={() => setTimelineOpen(true)}
              data-testid="timeline-button"
            >
              <Clock className="w-4 h-4 mr-2" />
              Timeline
            </Button>
            <Button
              variant="outline"
              onClick={handleDownload}
              data-testid="download-button"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button
              onClick={handleShare}
              data-testid="share-button"
              className="bg-brand hover:bg-brand-600"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </Card>

      {/* Package Details */}
      <PackageCards loan={loan} />

      {/* BSA */}
      <BSACard hideDetailsButton={false} />

      {/* Modals */}
      <ShareModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
      />

      <TimelineDrawer
        isOpen={timelineOpen}
        onClose={() => setTimelineOpen(false)}
      />
    </div>
  );
}
