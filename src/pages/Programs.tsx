"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScenarioChips } from "../../components/ui/ScenarioChips";
import { EligibleTable } from "../../components/tables/EligibleTable";
import { IneligibleTable } from "../../components/tables/IneligibleTable";
import { ExplainDrawer } from "../../components/drawers/ExplainDrawer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAppStore } from "../../lib/store";
import { saveLoanDetailsToLocal } from "../lib/local-db";

export default function Programs() {
  const navigate = useNavigate();
  const [isExplainOpen, setIsExplainOpen] = useState(false);
  const [localSelectedProgramId, setLocalSelectedProgramId] = useState<
    string | null
  >(null);
  const {
    loanDetails,
    isMinimumLane,
    addLoanRecord,
    loanPrograms,
    ineligiblePrograms,
    eligibilityApiResponse,
    setSelectedProgramId,
  } = useAppStore();

  const handleSelectProgram = async (programId: string) => {
    // Store the selected program ID in the global store
    setSelectedProgramId(programId);

    // Find the selected program from the API data
    const selectedProgram = loanPrograms.find(
      (program) => program.id === programId
    );

    // Add loan record when program is selected
    addLoanRecord({
      profileName: loanDetails?.borrowerName || "Unknown Borrower",
      programName: selectedProgram?.name || "Selected Program",
      requiredSteps: ["Upload Docs", "Income Verification", "Credit Check"], // TODO: Get from API later
    });

    // Save loan details to local database
    await saveLoanDetailsToLocal({
      loanDetails,
      profileName: loanDetails?.borrowerName || "Unknown Borrower",
      programName: selectedProgram?.name || "Selected Program",
      requiredSteps: ["Upload Docs", "Income Verification", "Credit Check"], // TODO: Get from API later});
    });

    navigate("/docs");
  };

  const handleEditScenario = () => {
    navigate("/quickquote");
  };

  if (!loanDetails) {
    navigate("/quickquote");
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Scenario Summary */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Loan Programs
            </h2>
            <ScenarioChips loanDetails={loanDetails} />
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={handleEditScenario}
              data-testid="edit-scenario-button"
            >
              Edit Scenario
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsExplainOpen(!isExplainOpen)}
              data-testid="explain-toggle"
              className={isExplainOpen ? "bg-brand/10 text-brand" : ""}
            >
              Explain
            </Button>
          </div>
        </div>
      </Card>

      <div className="flex gap-6">
        {/* Tables */}
        <div
          className={`flex-1 space-y-6 transition-all duration-300 ${
            isExplainOpen ? "mr-96" : ""
          }`}
        >
          {/* Eligible Programs */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Eligible Programs
              </h3>
              <div className="text-sm text-slate-500">
                {isMinimumLane ? "Minimum Lane" : "Full Lane"} • Ranked by rate
              </div>
            </div>
            <EligibleTable
              onSelectProgram={handleSelectProgram}
              isMinimumLane={isMinimumLane}
              programs={loanPrograms}
            />
          </Card>

          {/* Ineligible Programs */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">
              Ineligible Programs
            </h3>
            <IneligibleTable programs={ineligiblePrograms} />
          </Card>
        </div>

        {/* Explain Drawer */}
        <ExplainDrawer
          isOpen={isExplainOpen}
          onClose={() => setIsExplainOpen(false)}
          selectedProgramId={localSelectedProgramId}
        />
      </div>
    </div>
  );
}
