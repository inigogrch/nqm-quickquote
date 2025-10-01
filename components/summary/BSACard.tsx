"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Banknote,
  CircleDollarSign,
  ChartNoAxesCombined,
  CreditCard,
  Scale,
  TrendingDown,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { PLACEHOLDER_BSA_ANALYSIS_DETAILS as bsaDetails } from "../../lib/fixtures";
import DataChart from "./DataChart";
import { useState } from "react";

export function BSACard() {
  const [showContent, setShowContent] = useState(true);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between">
          <div className="flex items-center gap-2">
            <ChartNoAxesCombined className="w-5 h-5 text-brand" />
            Bank Statement Analysis
          </div>
          <button
            className="p-1.5 rounded-md text-base text-white bg-brand"
            onClick={() => setShowContent(!showContent)}
          >
            {showContent ? "Hide details" : "Show details"}
          </button>
        </CardTitle>
        <CardDescription>
          This service automates the extraction of transaction data from bank
          statements for income verification. It identifies and categorizes
          income streams to generate dynamic income calculations. The service
          aims to support the assessment of borrowers' business income and
          reduce manual effort in loan processing.
        </CardDescription>
      </CardHeader>

      <CardContent className={showContent ? "" : "hidden"}>
        <div className="flex flex-col gap-4">
          {/* TOTAL RESULTS */}
          <div className="flex flex-row justify-between">
            <div className="flex flex-col items-center gap-2 ">
              <Scale className="w-6 h-6 text-[#C53030]" />
              <p className="font-medium">Debt Coverage Ratio</p>
              <p className="text-[#C53030] font-semibold text-2xl">-10.24</p>
            </div>

            <div className="flex flex-col items-center gap-2 ">
              <CreditCard className="w-6 h-6 text-[#005F8F]" />
              <p className="font-medium">Total Loan Payments</p>
              <p className="text-[#005F8F] font-semibold text-2xl">$5,466.96</p>
            </div>

            <div className="flex flex-col items-center gap-2 ">
              <Banknote className="w-6 h-6 text-[#2F855A]" />
              <p className="font-medium">Total Revenue</p>
              <p className="text-[#2F855A] font-semibold text-2xl">
                $2,520,517.75
              </p>
            </div>

            <div className="flex flex-col items-center gap-2 ">
              <TrendingDown className="w-6 h-6 text-[#C53030]" />
              <p className="font-medium">Total Expense</p>
              <p className="text-[#C53030] font-semibold text-2xl">
                $2,960,078.89
              </p>
            </div>

            <div className="flex flex-col items-center gap-2 ">
              <CircleDollarSign className="w-6 h-6 text-[#0D3363]" />
              <p className="font-medium">Total Loan Proceeds</p>
              <p className="text-[#0D3363] font-semibold text-2xl">
                $34,000.00
              </p>
            </div>
          </div>

          <Separator />

          {/* ANALYSIS RESULTS */}
          <div className="flex flex-col gap-2">
            <p className="font-medium">Analysis Details</p>
            <table className="min-w-full border border-border rounded-lg overflow-hidden text-sm bg-white dark:bg-card shadow-sm">
              <thead className="bg-muted/50 dark:bg-muted/30">
                <tr>
                  <th className="px-3 py-2 border-b border-border font-semibold text-left">
                    Year
                  </th>
                  <th className="px-3 py-2 border-b border-border font-semibold text-left">
                    Month
                  </th>
                  <th className="px-3 py-2 border-b border-border font-semibold text-right">
                    Opening Balance
                  </th>
                  <th className="px-3 py-2 border-b border-border font-semibold text-right">
                    Ending Balance
                  </th>
                  <th className="px-3 py-2 border-b border-border font-semibold text-right">
                    Gross Deposits
                  </th>
                  <th className="px-3 py-2 border-b border-border font-semibold text-right">
                    Montly Net Deposits
                  </th>
                  <th className="px-3 py-2 border-b border-border font-semibold text-right">
                    Total Exclusions
                  </th>
                  <th className="px-3 py-2 border-b border-border font-semibold text-right">
                    Total large deposits to be sourced
                  </th>
                  <th className="px-3 py-2 border-b border-border font-semibold text-right">
                    # NSFs
                  </th>
                </tr>
              </thead>
              <tbody>
                {bsaDetails.map((detail, idx) => (
                  <tr
                    key={detail.id}
                    className={
                      idx % 2 === 0
                        ? "bg-white dark:bg-card"
                        : "bg-muted/20 dark:bg-muted/10"
                    }
                  >
                    <td className="px-3 py-2 border-b border-border">
                      {detail.year}
                    </td>
                    <td className="px-3 py-2 border-b border-border">
                      {detail.month}
                    </td>
                    <td className="px-3 py-2 border-b border-border text-right">
                      {detail.openingBalance.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </td>
                    <td className="px-3 py-2 border-b border-border text-right">
                      {detail.endingBalance.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </td>
                    <td className="px-3 py-2 border-b border-border text-right">
                      {detail.grossDeposits.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </td>
                    <td className="px-3 py-2 border-b border-border text-right">
                      {detail.monthlyNetDeposits < 0
                        ? `(${Math.abs(
                            detail.monthlyNetDeposits
                          ).toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })})`
                        : detail.monthlyNetDeposits.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                    </td>
                    <td className="px-3 py-2 border-b border-border text-right">
                      {detail.totalExclusions.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </td>
                    <td className="px-3 py-2 border-b border-border text-right">
                      {detail.totalLargeDepositsToBeSourced}
                    </td>
                    <td className="px-3 py-2 border-b border-border text-right">
                      {detail.nsfs}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={2} className="px-3 py-2 border text-center">
                    Total
                  </td>
                  <td colSpan={2}></td>
                  <td className="px-3 py-2 border text-right">
                    {bsaDetails
                      .reduce((acc, detail) => acc + detail.grossDeposits, 0)
                      .toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                  </td>
                  <td className="px-3 py-2 border text-right">
                    {bsaDetails
                      .reduce(
                        (acc, detail) => acc + detail.monthlyNetDeposits,
                        0
                      )
                      .toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                  </td>
                  <td className="px-3 py-2 border text-right">
                    {bsaDetails
                      .reduce((acc, detail) => acc + detail.totalExclusions, 0)
                      .toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                  </td>
                  <td className="px-3 py-2 border text-right">0</td>
                  <td className="px-3 py-2 border text-right">0</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <Separator />

          {/* CHARTS */}
          <div className="flex flex-row">
            <DataChart data={bsaDetails.reverse()} chartType="Line" />
            <DataChart data={bsaDetails.reverse()} chartType="Doughnut" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}