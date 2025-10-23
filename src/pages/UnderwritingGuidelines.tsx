import React from "react";
import { Badge } from "@/components/ui/badge";
import { BookOpen, FileText } from "lucide-react";

const UnderwritingGuidelines = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="h-10 w-10 text-primary" />
            <h1 className="text-5xl font-bold tracking-tight">
              NQM Underwriting Guidelines
            </h1>
          </div>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <Badge variant="outline" className="gap-1">
              <FileText className="h-3 w-3" />
              Effective 10/06/2025
            </Badge>
          </div>
        </div>

        {/* Table of Contents - Sticky */}
        <nav className="bg-card border rounded-lg p-6 mb-12 sticky top-4 z-10 shadow-sm">
          <h2 className="text-xl font-bold mb-4">📋 Table of Contents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-1">
              <a
                href="#introduction"
                className="block text-blue-600 hover:text-blue-800 hover:underline"
              >
                → Introduction
              </a>
              <a
                href="#guidelines-and-programs"
                className="block text-blue-600 hover:text-blue-800 hover:underline"
              >
                → Guidelines and Programs
              </a>
              <a
                href="#non-qm-programs"
                className="block text-blue-600 hover:text-blue-800 hover:underline"
              >
                → Non-QM Programs
              </a>
              <a
                href="#dscr-programs"
                className="block text-blue-600 hover:text-blue-800 hover:underline"
              >
                → DSCR Programs
              </a>
            </div>
            <div className="space-y-1">
              <a
                href="#general-underwriting"
                className="block text-blue-600 hover:text-blue-800 hover:underline"
              >
                → General Underwriting Requirements
              </a>
              <a
                href="#property-considerations"
                className="block text-blue-600 hover:text-blue-800 hover:underline"
              >
                → Property Considerations
              </a>
            </div>
          </div>
        </nav>

        {/* CONTENT GOES HERE - Just copy paste from PDF and add IDs */}

        {/* Example Section */}
        <section id="introduction" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold border-b-2 border-gray-200 pb-4 mb-6">
            Introduction
          </h2>

          <div className="prose prose-sm max-w-none space-y-6">
            <p className="text-sm leading-relaxed">
              NQM Funding, LLC ("NQM Funding or NQMF") is a licensed mortgage
              lender. Our Corporate headquarters are located at 4800 North
              Federal Highway, Building E, Suite 200 in Boca Raton, FL 33431.
            </p>

            <p className="text-sm leading-relaxed">
              The business we generate is primarily through relationships with
              lenders, brokers, real estate agents, and builders. We promote
              customer relationships and have elected to recruit and hire a team
              of mortgage professionals with existing relationships and are
              seeking to work for a company with a strong back-end support
              system and experienced operations and secondary market acumen.
            </p>

            <div id="fair-lending-statement" className="scroll-mt-20">
              <h3 className="text-xl font-semibold mb-3">
                Fair Lending Statement
              </h3>
              <p className="text-sm leading-relaxed mb-3">
                NQM Funding believes making a loan to a borrower is more than
                just a business transaction. NQM Funding, LLC wants to make
                loans that are good for the borrower as well as compliant with
                the housing industry laws and regulations.
              </p>
              <p className="text-sm font-semibold mb-2">
                Steps taken to ensure compliance with responsible lending
                practices include but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm mb-4">
                <li>
                  Spot checks during Production which may occur at any time.
                </li>
                <li>
                  Validation during the closing process regarding correct
                  disclosures, LE, fees, etc. to comply with RESPA requirements.
                </li>
                <li>
                  HMDA reporting is completed as required and reviewed
                  periodically throughout the year to ensure no negative or
                  predatory trends are emerging.
                </li>
              </ul>
            </div>

            <div id="responsible-lending-statement" className="scroll-mt-20">
              <h3 className="text-xl font-semibold mb-3">
                Responsible Lending Statement
              </h3>
              <p className="text-sm leading-relaxed mb-3">
                The primary focus of our lending program is the borrower's
                ability to repay the mortgage obligation. Loans originated or
                purchased by NQMF should be affordable to the borrower in his or
                her pursuit of homeownership.
              </p>
              <p className="text-sm leading-relaxed mb-3">
                Under the general Ability-to-Repay (ATR) standard, lenders must
                make a reasonable, good-faith determination that the consumer
                has a reasonable ability to repay the loan. Lenders must verify
                information using third-party records that provide reliable
                evidence of income or assets.
              </p>
              <p className="text-sm font-semibold mb-2">
                If a loan is subject to the ATR rules under the Truth in Lending
                Act ("TILA"), lenders must consider eight underwriting factors
                to comply:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm mb-4">
                <li>
                  Current or expected income or assets (other than the value of
                  the property that secures the loan) that the consumer will
                  rely on to repay the loan.
                </li>
                <li>
                  Current employment status (if you rely on employment income
                  when assessing the consumer's ability to repay)
                </li>
                <li>Monthly mortgage payment for this loan.</li>
                <li>
                  Monthly payment on any simultaneous loans secured by the same
                  property.
                </li>
                <li>
                  Monthly payments for property taxes and insurance that you
                  require the consumer to buy, and certain other costs related
                  to the property such as homeowner's association fees or ground
                  rent.
                </li>
                <li>Debts, alimony, and child support obligations</li>
                <li>Monthly debt-to-income ratio or residual income</li>
                <li>Credit history</li>
              </ul>
              <p className="text-sm leading-relaxed mb-3">
                NQM Funding, LLC will not purchase a loan subject to the ATR
                requirement under TILA unless it meets the requirements of the
                rule. Certain loans may be exempt from TILA or otherwise exempt
                from the ATR rule. In those cases, though NQM Funding, LLC may
                choose to purchase a loan that does not adhere to the formal
                requirements of the ATR rule. NQM Funding, LLC, will only
                purchase loans that the applicant appears able to afford based
                on application of prudent underwriting standards.
              </p>
            </div>

            <div id="zero-tolerance-fraud" className="scroll-mt-20">
              <h3 className="text-xl font-semibold mb-3">
                Zero Tolerance – Fraud
              </h3>

              {/* Only use red color box for critical warning */}
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                <p className="text-sm text-red-900 font-semibold">
                  ⚠️ NQM Funding practices a zero-tolerance policy of any
                  predatory lending, loan fraud and/or misrepresentation.
                </p>
              </div>

              <p className="text-sm leading-relaxed mb-3">
                All employees, independent contractors, brokers and lender
                partners of NQM Funding are fully responsible for the content
                and quality of each application and all data on those
                applications taken and submitted to NQM Funding.
              </p>
              <p className="text-sm leading-relaxed mb-3">
                The price paid by those who participate in or are impacted by
                loan fraud is even more costly, impacting borrowers, family
                members, neighborhoods, and the nation's overall economy. If a
                borrower cannot legitimately qualify for a loan or afford a
                particular property, it is a disservice to encourage or enable
                them to buy a property they cannot afford and may lose to
                foreclosure. Closing a loan for a borrower, without verifying
                they can afford it, is considered predatory lending.
              </p>
              <p className="text-sm font-semibold mb-2">
                Potential consequences that may be incurred by an employee or
                company found or suspected of being a participant in a
                fraudulent loan transaction include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm mb-4">
                <li>Criminal prosecution including time in jail.</li>
                <li>Loss of License(s).</li>
                <li>
                  Loss of lender access due to industry exchange of information
                  between lenders, mortgage insurance companies including
                  submission of information to investors (Fannie Mae/Freddie
                  Mac), police agencies, and state licensing agencies.
                </li>
                <li>
                  Loss of approval status and potential civil action by NQM
                  Funding, LLC.
                </li>
                <li>
                  Civil action by applicant/borrower or other parties to the
                  transaction.
                </li>
              </ul>
              <p className="text-sm leading-relaxed mb-3">
                NQM Funding, LLC will not tolerate loan fraud. NQM Funding
                stands behind the quality of its loan production and expects our
                lending partners and employees to do the same.
              </p>
              <p className="text-sm leading-relaxed">
                We perform pre-funding, post-funding file reviews, and data
                integrity reverification to ensure the loan meets quality
                standards.
              </p>
            </div>
          </div>
        </section>

        {/* Add more sections following the same pattern... */}
        <section id="guidelines-and-programs" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold border-b-2 border-gray-200 pb-4 mb-6">
            Guidelines and Programs
          </h2>

          <div id="guidelines" className="scroll-mt-20 mb-8">
            <h3 className="text-xl font-semibold mb-3">Guidelines</h3>
            <p className="text-sm leading-relaxed mb-3">
              These NQM Funding, LLC Underwriting Guidelines ("the Guidelines")
              coupled with each of the Program Matrices for the Programs listed
              below ("Matrix or Matrices"), provide the comprehensive
              requirements for NQM Lending, LLC to close or purchase a loan.
            </p>
            <p className="text-sm leading-relaxed font-semibold">
              Where these Guidelines are silent, defer to FNMA Guidelines.
            </p>
          </div>

          <div id="non-qm-programs-overview" className="scroll-mt-20 mb-8">
            <h3 className="text-xl font-semibold mb-3">Non-QM Programs</h3>
            <ul className="list-disc pl-6 space-y-2 text-sm mb-4">
              <li>Flex Supreme</li>
              <li>Flex Select (including Express - DU)</li>
              <li>Super Jumbo</li>
              <li>Select ITIN</li>
              <li>Foreign National</li>
              <li>Second Lien Select</li>
            </ul>
          </div>

          <div id="dscr-programs-overview" className="scroll-mt-20 mb-8">
            <h3 className="text-xl font-semibold mb-3">DSCR Programs</h3>
            <ul className="list-disc pl-6 space-y-2 text-sm mb-4">
              <li>DSCR Supreme</li>
              <li>Investor DSCR</li>
              <li>Investor DSCR No-Ratio</li>
              <li>
                Multi & Mixed (Mixed-Use 2-8 Units and Residential 5-10 Units)
              </li>
            </ul>

            <p className="text-sm font-semibold mb-2">Foreign Nationals:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>
                Foreign Nationals are eligible for DSCR (excluding Multi &
                Mixed) under the Foreign National Program
              </li>
              <li>
                For Multi & Mixed-Use properties see the Multi & Mixed Program
              </li>
            </ul>
          </div>
        </section>

        <section id="non-qm-programs" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold border-b-2 border-gray-200 pb-4 mb-6">
            Non-QM Programs
          </h2>

          {/* Flex Supreme */}
          <div id="flex-supreme-overview" className="scroll-mt-20 mb-12">
            <h3 className="text-2xl font-semibold mb-4">
              Flex Supreme Overview
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              The Flex Supreme Program is designed for the most qualified
              borrowers from an income and credit standpoint, with less complex
              transactions. Refer to the Flex Supreme Matrix for specific
              program requirements.
            </p>

            <div
              id="flex-supreme-general-requirements"
              className="scroll-mt-20 mb-8"
            >
              <h4 className="text-xl font-semibold mb-3">
                Flex Supreme - General Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Exceptions
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Ineligible
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Product Type
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-4 space-y-1">
                          <li>30 Year Fixed Fully Amortizing</li>
                          <li>
                            40 Year Fixed I/O (10 year I/O period, and remaining
                            term fully amortizing)
                          </li>
                          <li>
                            5/6 & 7/6 SOFR ARMs - Fully Amortizing only, qualify
                            at higher of fully indexed
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Interest Only
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Minimum 700 credit score and Max 75% LTV. First Time
                        Homebuyers are ineligible
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Loan Amounts
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Minimum $100,000 and Max $3,000,000
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        2-1 Buydown
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Ineligible
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Occupancy
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Primary Residence, Second Homes, and Investment
                        Properties
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Loan Purpose
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Purchase, Rate & Term Refinance, and Cash Out Refinance
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Cash-Out
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-4 space-y-1">
                          <li>
                            Minimum of 6 (six) months seasoning from most recent
                            transaction
                          </li>
                          <li>≤70 LTV: Unlimited and &gt;70 LTV: $500,000</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Interested Party Contributions
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-2">
                          <strong>Primary Residence and Second Homes:</strong>
                        </p>
                        <ul className="list-disc pl-4 space-y-1 mb-2">
                          <li>≤ 75% LTV = 9%</li>
                          <li>&gt; 75% = 6%</li>
                        </ul>
                        <p className="mb-2">
                          <strong>Investment Properties:</strong>
                        </p>
                        <ul className="list-disc pl-4 space-y-1">
                          <li>Max 6%</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Ineligible Transactions
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-4 space-y-1">
                          <li>
                            Non-Occupant co-borrowers on Second Home and
                            Investment Properties
                          </li>
                          <li>
                            Refinances of properties listed for sale in the
                            previous 6 months (based on the application date)
                          </li>
                          <li>Escrow Holdbacks</li>
                          <li>Community Land Trusts</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Subordinate Financing
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Permitted on Primary Residence and Second Homes
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Escrow Waivers
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-2">
                          Waiver of escrows is eligible as follows:
                        </p>
                        <ul className="list-disc pl-4 space-y-1">
                          <li>Primary Residence and Second Homes only</li>
                          <li>Loan must be non-HPML</li>
                          <li>Housing History: 0x30x12 is required</li>
                          <li>
                            Flood Insurance premiums for properties located in
                            zones A or V must be escrowed. Note that it is
                            permissible to waive taxes and insurance escrows in
                            these instances when the above requirements are met
                            and the loan is priced with an escrow waiver. In
                            addition, elective flood policies are not required
                            to be escrowed.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Prepayment Penalty
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Required when permitted for Investment Properties. Refer
                        to the "Business Purpose Licensing & PPP Restrictions"
                        PDF in the Documents Tab in the Client Portal.
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Age of Loan Documentation
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-4 space-y-1">
                          <li>Credit: 120 days</li>
                          <li>Income and Assets: 90 days</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Borrower Eligibility */}
            <div
              id="flex-supreme-borrower-eligibility"
              className="scroll-mt-20 mt-8"
            >
              <h4 className="text-lg font-semibold mb-4">
                Borrower Eligibility
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-4">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Eligible
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-4 space-y-1">
                          <li>U.S. Citizens</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Ineligible
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-4 space-y-1">
                          <li>ITINs</li>
                          <li>Permanent Resident Aliens</li>
                          <li>DACA</li>
                          <li>Non-Permanent Resident (U.S. credit only)</li>
                          <li>Foreign Nationals</li>
                          <li>Non-Occupant Co-Borrowers</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-4">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Non-Occupant Co-Borrower
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-4 space-y-1">
                          <li>Eligible for Primary Residence only</li>
                          <li>Max Total DTI 50%</li>
                          <li>Max 65% DTI for occupying borrower</li>
                          <li>Cash Out is ineligible</li>
                          <li>Non-occupant co-borrower must be a relative</li>
                          <li>
                            Rate & Term Refinance (non-occupant co-borrower must
                            be on current loan)
                          </li>
                          <li>Max Loan Amount $1,000,000</li>
                          <li>1-Unit Primary Residence only</li>
                          <li>0x30x24 rental history</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        First Time Homebuyer (FTHB)
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-4 space-y-1">
                          <li>Max Loan Amount $1,000,000</li>
                          <li>1-Unit Primary Residence only</li>
                          <li>0x30x24 rental history</li>
                          <li>Max DTI &le; 50%</li>
                          <li>Minimum 7-years seasoning for credit events</li>
                          <li>Interest Only is ineligible</li>
                          <li>
                            At least 1 borrower must have a 24 month rental
                            history
                          </li>
                          <li>
                            When at least one borrower has owned a residential
                            property in the prior 3 years, the FTHB requirements
                            do not apply
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Credit Requirements */}
            <div
              id="flex-supreme-credit-requirements"
              className="scroll-mt-20 mt-8"
            >
              <h4 className="text-lg font-semibold mb-4">
                Credit Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Credit Score
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-4 space-y-1">
                          <li>Minimum credit score of 680 is required</li>
                          <li>
                            A minimum of 2 credit scores is required (Refer to
                            Tradelines)
                          </li>
                          <li>
                            The Representative Credit Score is based on the
                            primary wage earners credit score qualify as
                            follows:
                            <ul className="list-circle pl-6 mt-1">
                              <li>
                                Highest middle of 3 credit scores or lower of 2
                                credit scores When qualifying income is equal
                                for all borrowers on the loan, the highest
                                representative score will be used.
                              </li>
                            </ul>
                          </li>
                          <li>
                            Additional borrowers must have a minimum 600 score.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Tradelines
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-2">
                          When the primary borrower does not have 3 credit
                          scores, the following minimum tradelines are required:
                        </p>
                        <ul className="list-disc pl-4 space-y-1">
                          <li>2 open and reporting trades for 24 months; or</li>
                          <li>3 open and reporting trades for 12 months; or</li>
                          <li>
                            24-months mortgage rating reporting on credit report
                          </li>
                        </ul>
                        <p className="mt-2 italic">
                          Spouses may combine trades.
                        </p>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Housing History
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-4 space-y-1">
                          <li>0x30x12</li>
                          <li>First Time Homebuyer 0x30x24</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Credit/Housing Events
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-2">
                          Borrowers with prior significant derogatory credit
                          events must meet the following criteria:
                        </p>
                        <ul className="list-disc pl-4 space-y-1">
                          <li>
                            All borrowers must have reestablished acceptable
                            credit verified after the credit event
                          </li>
                          <li>
                            Borrowers with unrelated multiple significant credit
                            events are ineligible
                          </li>
                          <li>Minimum 4 years seasoning required</li>
                          <li>
                            First time homebuyer &ge; 7 years seasoning required
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* DTI and Residual Requirements */}
            <div id="flex-supreme-dti-residual" className="scroll-mt-20 mt-8">
              <h4 className="text-lg font-semibold mb-4">
                DTI and Residual Income Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Max DTI
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Max 50%
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Residual Income
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-4 space-y-1">
                          <li>
                            Applies to HPML loans or when the DTI &gt; 43% on
                            Primary Residence and Second Homes only
                          </li>
                          <li>
                            Defined as Gross Monthly Income less Total Monthly
                            Obligations
                          </li>
                          <li>
                            Requirement based on # in household:
                            <ul className="list-circle pl-6 mt-1">
                              <li>1 person = $1,500</li>
                              <li>2 people = $2,500</li>
                              <li>
                                Add $150 per additional household member
                                (related or unrelated)
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Flex Supreme - Income Requirements */}
            <div
              id="flex-supreme-income-requirements"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Flex Supreme - Income Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Self-Employment
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Borrowers must have a minimum of 2 years in the current
                        business
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h5 className="font-semibold text-md mb-3 mt-6">
                Full Doc - Income Requirements
              </h5>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Wage Earners
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        30 days of paystubs reflecting YTD earnings, 1 or 2
                        years W-2 or an electronic verification of employment,
                        W-2 transcripts when electronic VOE not provided, and a
                        fully executed and signed IRS Form-4506C.
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Self-Employment
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        1 or 2 years of personal and business tax returns
                        (including K-1s), YTD P&L, Tax Transcripts, 2 months of
                        most recent personal or business bank statements to
                        support the income on the P&L.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Rental Income
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-3">
                          <span className="font-medium">
                            Rental Income on Tax Returns:
                          </span>
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>
                            When tax returns are used to qualify, an average of
                            2 years of rental income will be used unless the
                            income is declining in which case the most recent
                            year's income will be used for qualifying
                          </li>
                          <li>
                            Cash flow Analysis of Schedule E should be completed
                          </li>
                        </ul>
                        <p className="mb-3">
                          <span className="font-medium">
                            Rental Income NOT on Tax Returns:
                          </span>
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>
                            Evidence of borrower's ownership of the property
                          </li>
                          <li>
                            For a refinance and/or to document rental income on
                            other REOs:
                            <ul className="list-circle pl-6 mt-1 space-y-1">
                              <li>Lease agreement</li>
                              <li>
                                Two months of bank statements demonstrating
                                receipt of rental income.
                              </li>
                              <li>
                                Evidence the rental amount is at market rate,
                                which can be documented via a 1007 or through an
                                online source.
                              </li>
                              <li>
                                75% of the rental amount on the lease is used
                                for qualifying.
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <p className="mb-3">
                          <span className="font-medium">
                            Rental Income from a Departing Residence:
                          </span>
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>
                            75% of the rental amount on the lease if used for
                            qualifying.
                          </li>
                          <li>
                            Evidence the rental amount is at market rate, which
                            can be documented through an online source or a
                            1007.
                          </li>
                        </ul>
                        <p className="mb-3">
                          <span className="font-medium">
                            Short Term Gross Rental Income:
                          </span>
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            12-month look back on rents received using bank
                            statements; or
                          </li>
                          <li>Third party rental statements</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h5 className="font-semibold text-md mb-3 mt-6">
                Alt Doc - Income Requirements
              </h5>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Personal Bank Statements
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            12 or 24 months of personal and 2 months of business
                            bank statements
                          </li>
                          <li>
                            Qualifying income is determined by the total
                            eligible deposits from the 12 or 24 months of
                            personal statements divided by the number of
                            statements
                          </li>
                          <li>
                            Evidence within 30 days of the Note date that the
                            business is active and operating with a minimum 2
                            year operating history
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Business/Co-Mingled Bank Statements
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            12 or 24 months of business bank statements.
                            Qualifying income is determined by ONE of the
                            following analysis methods:
                            <ul className="list-circle pl-6 mt-1 space-y-1">
                              <li>Fixed Expense Ratio (50%); OR</li>
                              <li>
                                Expense ratio provided by a third party (CPA/EA
                                or PTIN tax preparer) min ratio of 20%, OR
                              </li>
                              <li>
                                Third party prepared Profit & Loss Statement
                                (CPA or EA) min ratio of 20%
                              </li>
                            </ul>
                          </li>
                          <li>
                            Evidence within 30 days of the Note date that the
                            business is active and operating with a minimum 2
                            year operating history
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        IRS Form 1099
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Borrowers receiving 1099 income are eligible if they
                            are individuals paid via 1099 but are not business
                            owners of the entity issuing the 1099; and meet the
                            required 2 most recent consecutive full years of
                            employment with the same employer(s)
                          </li>
                          <li>1 or 2 Years' 1099</li>
                          <li>Fixed Expense Ratio of 10%</li>
                          <li>
                            YTD documentation to support continued receipt of
                            income from each employer or NQMF VOE (or similar
                            form) when 1099 is &gt; 90 days from the Note date
                          </li>
                          <li>Ineligible for Investment Properties</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Asset Utilization (Standalone only)
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Qualified Assets must be seasoned for 3 months
                          </li>
                          <li>Cash Out: follow LTV limits per the matrix</li>
                          <li>Max LTV must be reduced by 10%</li>
                          <li>
                            Monthly Income Calculation:
                            <ul className="list-circle pl-6 mt-1 space-y-1">
                              <li>
                                When the DTI without asset utilization is &le;
                                60%:
                                <ul className="list-square pl-6 mt-1">
                                  <li>
                                    Monthly Income Calculation = Net Qualified
                                    Assets / 36 Months
                                  </li>
                                </ul>
                              </li>
                              <li>
                                When the DTI without Asset Utilization is &gt;
                                60% or when the borrower's entire income is
                                comprised of income from assets:
                                <ul className="list-square pl-6 mt-1">
                                  <li>
                                    Monthly Income Calculation = Net Qualified
                                    Assets / 60 Months
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            Ineligible Assets:
                            <ul className="list-circle pl-6 mt-1 space-y-1">
                              <li>Business assets</li>
                              <li>Unseasoned Foreign Assets</li>
                              <li>
                                Privately traded or restricted / non-vested
                                stocks
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Flex Supreme - Asset and Reserve Requirements */}
            <div
              id="flex-supreme-asset-reserve-requirements"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Flex Supreme - Asset and Reserve Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Assets
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Large Deposits: &gt; 50% of gross income must be
                        documented for purchases.
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Reserves
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>&le; $500,000 = 3 months PITIA</li>
                          <li>&gt; $500,000 to $1,500,000 = 6 months PITIA</li>
                          <li>
                            &gt; $1,500,000 to $2,500,000 = 9 months PITIA
                          </li>
                          <li>
                            &gt; $2,500,000 to $3,000,000 = 12 months PITIA
                          </li>
                          <li>
                            Cash Out proceeds may be used to satisfy reserves.
                          </li>
                          <li>
                            When asset utilization is the sole source of income,
                            reserves are not required.
                          </li>
                          <li>
                            All reserves must be deposited in a U.S. Financial
                            Institution.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Gift Funds
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Permitted on 1-unit properties only, provided
                            borrower meets the minimum contribution:
                            <ul className="list-circle pl-6 mt-1 space-y-1">
                              <li>5% primary</li>
                              <li>10% Second Home and Investment Properties</li>
                            </ul>
                          </li>
                          <li>
                            Gift funds may be used for down payment and closing
                            costs:
                            <ul className="list-circle pl-6 mt-1 space-y-1">
                              <li>
                                100% gift funds may be used for down payment and
                                closing costs on a Primary Residence or Second
                                Home when the LTV is &le; 80%.
                              </li>
                              <li>
                                For Investment Properties, gift funds are
                                permitted after meeting the 10% minimum borrower
                                contribution regardless of LTV.
                              </li>
                            </ul>
                          </li>
                          <li>Gift funds are ineligible for reserves.</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Flex Supreme - Property Requirements */}
            <div
              id="flex-supreme-property-requirements"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Flex Supreme - Property Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Property Type
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-3">
                          <span className="font-medium">
                            Single Family, PUD, Townhome (Attached/Detached)
                          </span>
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>
                            Single Family residences with 1 or more accessory
                            dwelling units (ADU) are permitted if subject
                            property is in a municipality that allows. The
                            Appraiser must specifically confirm compliance with
                            local regulations and provide a minimum of 2 similar
                            comparables.
                          </li>
                        </ul>
                        <p className="mb-3">
                          <span className="font-medium">2-4 Units</span>
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>Max 75% LTV</li>
                          <li>Not eligible for First Time Homebuyers</li>
                          <li>Not eligible for Second Homes</li>
                          <li>
                            2-4 units with 1 ADU are eligible if permitted by
                            the local municipality. The appraiser must
                            specifically confirm compliance with local
                            regulations and provide a minimum of 2 similar
                            comparables.
                          </li>
                        </ul>
                        <p className="mb-3">
                          <span className="font-medium">Condominiums</span>
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Warrantable Condominiums: Max 75% LTV</li>
                          <li>Limited review not available.</li>
                          <li>
                            Non-Warrantable Condos and Condotels are not
                            permitted.
                          </li>
                          <li>Condominium leaseholds not permitted</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Rural Properties
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Primary Residence only</li>
                          <li>Max 70% LTV</li>
                          <li>Cash-Out is ineligible</li>
                          <li>See acreage below.</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Appraisals
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            A second appraisal required for loans &gt;
                            $2,000,000
                          </li>
                          <li>
                            Appraisal Review Product required on all loans with
                            a FNMA SSR over 2.5 except for those with a full
                            second appraisal
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Declining Markets
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Declining markets, as identified by the appraiser,
                        require a 5% LTV reduction off the matrix when the LTV
                        is &gt; 65%
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Acreage
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Max 10 acres on Primary Residence and Second Homes; 5
                        acres on Investment Properties
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* End of Flex Supreme */}

          {/* Flex Select */}
          <div id="flex-select-overview" className="scroll-mt-20 mb-12 mt-16">
            <h3 className="text-2xl font-semibold mb-4">
              Flex Select Overview
            </h3>
            <p className="text-sm leading-relaxed mb-6">
              The Flex Select Program is designed to cover the widest range of
              income documentation types, housing history, and other program
              specific options. Refer to the Flex Select Matrix for specific
              program requirements.
            </p>

            {/* Flex Select - General Requirements */}
            <div
              id="flex-select-general-requirements"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Flex Select - General Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Exceptions
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Eligible except for P&L Only and Express DU
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Product Type
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>40 Year Fixed, 30 Year Fixed, 15 Year Fixed</li>
                          <li>
                            40 Year Fixed I/O (10 year I/O period, and remaining
                            term fully amortizing)
                          </li>
                          <li>5/6 SOFR ARM, 30 Year Term – Fully Amortizing</li>
                          <li>
                            5/6 SOFR ARM I/O, 30 Year Term and 40 Year Term
                          </li>
                          <li>
                            40 Year products and terms are ineligible for
                            Manufactured Housing
                          </li>
                          <li>I/O products are ineligible for Express (DU)</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Interest Only (I/O)
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Min Credit Score: 680</li>
                          <li>Max LTV: 80%</li>
                          <li>Max DTI 50%</li>
                          <li>Ineligible on Manufactured Housing</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Loan Amounts
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Minimum: $125,000 and Max $3,500,000</li>
                          <li>
                            Loan Amounts $125,000 - $149,999 require a 5%
                            reduction in LTV
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        2-1 Buydown
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Purchase Only</li>
                          <li>Minimum Score 680</li>
                          <li>Max LTV 80%</li>
                          <li>Max DTI 50%</li>
                          <li>30 Year Fixed Only</li>
                          <li>Qualify using Note Rate</li>
                          <li>
                            Primary Residence, Second Home and Investment
                            Properties
                          </li>
                          <li>Seller or Builder Funded Only</li>
                          <li>
                            Lender Paid or 3rd Party Buydowns are eligible for
                            Correspondent Clients only
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Occupancy
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Primary Residence, Second Home, and Investment Property
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Loan Purpose
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Purchase, Rate & Term Refinance, Cash Out Refinance, and
                        Debt Consolidation
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Cash-Out
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Minimum of six (6) months seasoning from most recent
                            transaction.
                          </li>
                          <li>
                            Max cash-out (defined as cash in hand):
                            <ul className="list-circle pl-6 mt-1 space-y-1">
                              <li>If LTV &le; 60% = Unlimited</li>
                              <li>
                                If LTV &gt; 60% = Max $1,000,000 or unlimited
                                with 18 months reserves exclusive of cash back
                              </li>
                            </ul>
                          </li>
                          <li>Condos: Max 75% LTV</li>
                          <li>
                            Condotel: See Condotels below for LTV limitations.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Interested Party Contributions
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-2">
                          <span className="font-medium">
                            Primary Residence and Second Homes:
                          </span>
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mb-3">
                          <li>&le; 75% LTV = 9%</li>
                          <li>&gt; 75% = 6%</li>
                        </ul>
                        <p className="mb-2">
                          <span className="font-medium">Investment:</span>
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>6%</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Subordinate Financing
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Eligible on Primary Residence and Second Homes only
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Escrow Waivers
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-2">
                          Waiving escrows is permitted as follows:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            O/O and 2nd Homes: 680 Minimum Score up to 80% LTV
                          </li>
                          <li>
                            Investment Properties: 660 Minimum Score up to 80%
                            LTV
                          </li>
                          <li>
                            CA: with a Minimum score of 700, waiver is permitted
                            up to 90% LTV
                          </li>
                          <li>0x30x12 housing/rental history</li>
                          <li>Non-HPML loan</li>
                          <li>
                            Flood Insurance premiums for properties located in
                            zones A or V must be escrowed. Note that it is
                            permissible to waive taxes and insurance escrows in
                            these instances when the above requirements are met
                            and the loan is priced with an escrow waiver. In
                            addition, elective flood policies are not required
                            to be escrowed.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Prepayment Penalty
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            Required on Investment Properties when permitted.
                            See the "Business Purpose Licensing & PPP
                            Restrictions" PDF in the Documents Tab in the Client
                            Portal.
                          </li>
                          <li>No PPP – eligible for Correspondent only</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Age of Loan Documentation
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Credit: 120 days</li>
                          <li>Income and Assets: 90 days</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Flex Select - Borrower Eligibility */}
            <div
              id="flex-select-borrower-eligibility"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Flex Select - Borrower Eligibility
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-4">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Eligible
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>U.S. Citizens</li>
                          <li>Permanent Resident Alien</li>
                          <li>Non-Permanent Resident Alien</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Ineligible
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>ITINs</li>
                          <li>DACA</li>
                          <li>Foreign Nationals</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-4">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Non-Occupant Co-Borrower
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Primary Residence only</li>
                          <li>Max DTI Total DTI 50%</li>
                          <li>
                            No Cash-Out Refi; Rate & Term Refinance
                            (non-occupant must be on current loan)
                          </li>
                          <li>Non-occupant co-borrower must be a relative</li>
                          <li>Max Loan Amount $1,000,000</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        First Time Homebuyer (FTHB)
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Eligible to a max loan size of $1,500,000 on Primary
                        Residence, Second Homes, and Investment Properties
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Flex Select - Credit Requirements */}
            <div
              id="flex-select-credit-requirements"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Flex Select - Credit Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Credit Score
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Minimum credit score 660 is required</li>
                          <li>
                            The Representative Score is based on the primary
                            wage earners credit score, qualify as follows:
                            <ul className="list-circle pl-6 mt-1 space-y-1">
                              <li>
                                Middle of 3 credit scores or lower of 2 credit
                                scores
                              </li>
                              <li>
                                When qualifying income is equal for all
                                borrowers on the loan, the highest
                                representative score will be used.
                              </li>
                            </ul>
                          </li>
                          <li>
                            Additional borrowers must have a minimum credit
                            score of 600
                          </li>
                          <li>
                            P&L Only: all borrowers must have a minimum credit
                            score of 700
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Tradelines
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-2">
                          When the primary borrower does not have 3 credit
                          scores, the following minimum tradelines are required:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>2 open and reporting trades 24 months; or</li>
                          <li>3 open and reporting trades 12 months; or</li>
                          <li>
                            24-months mortgage rating reporting on credit report
                          </li>
                        </ul>
                        <p className="mt-2 italic">
                          Spouses may combine trades
                        </p>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Housing History
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            1x30x12 maximum delinquency permitted per the matrix
                          </li>
                          <li>
                            3x30x12 will be considered as follows:
                            <ul className="list-circle pl-6 mt-1 space-y-1">
                              <li>
                                Borrower must be 0x30 in the most recent 6
                                months
                              </li>
                              <li>LTV to be reduced by 10% from the matrix.</li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Credit and Housing Event Seasoning
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <div className="overflow-x-auto">
                          <table className="w-full border border-gray-300 text-sm mt-2">
                            <thead>
                              <tr className="bg-gray-100">
                                <th className="px-4 py-2 border border-gray-300 text-left font-semibold">
                                  BK/FC/SS/DIL/Mod
                                </th>
                                <th className="px-4 py-2 border border-gray-300 text-left font-semibold">
                                  &ge;4 Years
                                </th>
                                <th className="px-4 py-2 border border-gray-300 text-left font-semibold">
                                  &ge; 3 Years
                                </th>
                                <th className="px-4 py-2 border border-gray-300 text-left font-semibold">
                                  &ge; 2 Years
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="px-4 py-2 border border-gray-300 font-medium">
                                  Max LTV/CLTV
                                </td>
                                <td className="px-4 py-2 border border-gray-300">
                                  90%
                                </td>
                                <td className="px-4 py-2 border border-gray-300">
                                  80%
                                </td>
                                <td className="px-4 py-2 border border-gray-300">
                                  70%
                                </td>
                              </tr>
                              <tr>
                                <td className="px-4 py-2 border border-gray-300 font-medium">
                                  Max LTV Cash Out
                                </td>
                                <td className="px-4 py-2 border border-gray-300">
                                  80%
                                </td>
                                <td className="px-4 py-2 border border-gray-300">
                                  75%
                                </td>
                                <td className="px-4 py-2 border border-gray-300">
                                  70%
                                </td>
                              </tr>
                              <tr>
                                <td className="px-4 py-2 border border-gray-300 font-medium">
                                  Max Loan Amount
                                </td>
                                <td className="px-4 py-2 border border-gray-300">
                                  $3,500,000
                                </td>
                                <td className="px-4 py-2 border border-gray-300">
                                  $3,000,000
                                </td>
                                <td className="px-4 py-2 border border-gray-300">
                                  $2,000,000
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Flex Select - DTI and Residual Income Requirements */}
            <div id="flex-select-dti-residual" className="mb-8 scroll-mt-20">
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Flex Select - DTI and Residual Income Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        DTI Requirements
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Max 50%</li>
                          <li>
                            40 Year Fixed Must Qualify as a 30 Year at &le; 55%
                            DTI.
                          </li>
                          <li>
                            55% DTI (&gt;50% to 55%) with the following
                            restrictions:
                            <ul className="list-circle pl-6 mt-1 space-y-1">
                              <li>Minimum credit score 680</li>
                              <li>Max 80% LTV</li>
                              <li>0x30x12</li>
                              <li>Interest-Only is ineligible</li>
                              <li>Max loan amount $2,500,000</li>
                              <li>40 Year term is ineligible</li>
                              <li>
                                4 years seasoning for housing events required
                              </li>
                              <li>2-1 Temporary Buydowns are not permitted</li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Residual Income
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Minimum monthly residual income of $3,500 is
                            required.
                          </li>
                          <li>
                            Applies to HPML loans or when the DTI &gt; 43% on
                            Primary Residence and Second Homes only
                          </li>
                          <li>
                            Defined as Gross Monthly Income less Total Monthly
                            Obligations
                          </li>
                          <li>
                            Requirement based on # in household:
                            <ul className="list-circle pl-6 mt-1 space-y-1">
                              <li>1 person = $1,500</li>
                              <li>2 people = $2,500</li>
                              <li>
                                Add $150 per additional household member
                                (related or unrelated)
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Flex Select - Income Requirements */}
            <div id="flex-select-income" className="mb-8 scroll-mt-20">
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Flex Select - Income Requirements
              </h4>

              <h5 className="font-semibold text-md mb-3 mt-6">
                General Requirements
              </h5>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Self-Employment History
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-3">
                          Self-employment history of &gt;=2 years is required.
                          If self-employment history is &lt; 2 years:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-3">
                          <li>
                            Self-employment 18+ months with 3+years prior
                            experience in the same line of business
                          </li>
                          <li>
                            Self-employed borrowers in a licensed profession
                            (i.e., Medical, Legal, Accounting) will be
                            considered from a business that has been in
                            existence for less than two (2) years, but greater
                            than one (1) year provided the borrower meets the
                            following requirements:
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                              <li>
                                Borrower has at least three (3) years of
                                documented previous experience in the same
                                profession, or
                              </li>
                              <li>
                                Evidence of formal education in a related field
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <p className="mb-2">
                          For both options above, the following restrictions
                          apply:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Minimum credit score: 700</li>
                          <li>
                            Max LTV: 80% Primary Residence / 75% Second Home /
                            70% Investment Properties
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h5 className="font-semibold text-md mb-3 mt-6">
                Full Documentation
              </h5>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Wage Earners
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        30 days of paystubs reflecting YTD earnings, 1 or 2
                        years W-2 or an electronic verification of employment,
                        W-2 Transcripts when electronic VOE not provided, and a
                        fully executed and signed IRS Form-4506C
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Self-Employment
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        1 or 2 years of personal and business Tax Returns, YTD
                        P&L, Tax Transcripts, 2 months of most recent bank
                        statements to support the income on the P&L
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Rental Income
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-3 font-medium">
                          Rental income on the Tax Returns:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>
                            When tax returns are used to qualify, an average of
                            2 years of rental income will be used unless the
                            income is declining in which case the most recent
                            years' income will be used for qualifying
                          </li>
                          <li>
                            Cash flow Analysis of the Schedule E should be
                            completed
                          </li>
                        </ul>
                        <p className="mb-3 font-medium">
                          Rental Income NOT on Tax Returns:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>
                            Evidence of borrower's ownership of the property
                          </li>
                          <li>
                            For a refinance and/or to document rental income on
                            other REOs:
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                              <li>Lease agreement</li>
                              <li>
                                Two months of bank statements demonstrating
                                receipt of rental income.
                              </li>
                              <li>
                                Evidence the rental amount is at market rate,
                                which can be documented via a 1007 or through an
                                online source.
                              </li>
                              <li>
                                75% of the rental amount on the lease is used
                                for qualifying
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <p className="mb-3 font-medium">
                          Rental Income from a Departing Residence:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>
                            75% of the rental amount on the lease if used for
                            qualifying.
                          </li>
                          <li>
                            Evidence the rental amount is at market rate, which
                            can be documented through an online source or a
                            1007.
                          </li>
                        </ul>
                        <p className="mb-3 font-medium">
                          Short Term Gross Rental Income:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            12-month look back on rents received using bank
                            statements or
                          </li>
                          <li>Third party rental statements</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h5 className="font-semibold text-md mb-3 mt-6">
                Alt Doc - Income Requirements
              </h5>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Personal Bank Statements
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            12 or 24 months of personal and 2 months of business
                            bank statements
                          </li>
                          <li>
                            Qualifying income is determined by the total
                            eligible deposits from the 24 or 12 months of
                            personal statements divided by the number of
                            statements
                          </li>
                          <li>
                            The business bank statements must reflect business
                            activity and transfers to the personal account
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Business/Co-Mingled Bank Statements
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-3">
                          12 or 24 months of business bank statements.
                          Qualifying income is determined by ONE of the
                          following analysis methods:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Fixed Expense Ratio (50%); OR</li>
                          <li>
                            Expense ratio provided by a 3rd party (CPA/EA or
                            PTIN tax preparer), min ratio of 20%, OR
                          </li>
                          <li>
                            3rd party prepared Profit &amp; Loss Statement
                            (CPA/EA or PTIN tax preparer), min ratio of 20%
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        P&L Plus 2 Months Bank Statements
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2 mb-3">
                          <li>Max 80% LTV</li>
                          <li>
                            12 or 24 months P&L; prepared by CPA/EA or PTIN tax
                            preparer
                          </li>
                          <li>
                            CPA/EA or PTIN tax preparer must also attest to
                            having prepared the borrower's most recent tax
                            returns
                          </li>
                          <li>
                            Qualifying income is the monthly net income from the
                            P&L divided by the number of months covered by the
                            P&L.
                          </li>
                        </ul>
                        <p className="mb-3">
                          When evaluating the P&L, the expenses are expected to
                          be at least 20% of gross revenue. In the event less
                          than 20% is reflected in expenses, the net income will
                          be adjusted to reflect a 20% expense level when
                          qualifying.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Depreciation, depletion and amortization/casualty
                            losses listed on the P&L may be added back to the
                            applicant's income
                          </li>
                          <li>Minimum of 2 months business bank statements</li>
                          <li>
                            The monthly gross revenue on the P&L must be
                            supported by the bank statements
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        P&L Only
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2 mb-3">
                          <li>Exceptions are ineligible.</li>
                          <li>
                            Ineligible for borrowers with less than 2 years in
                            the current business
                          </li>
                          <li>Max Loan Amount $1,500,000</li>
                          <li>700+ credit score required for all borrowers</li>
                          <li>
                            Max LTV is the lesser of the LTV on the Program
                            Matrix or:
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                              <li>80% Primary Residence</li>
                              <li>75% Second Home and Investment Properties</li>
                            </ul>
                          </li>
                          <li>
                            12 or 24 months P&L prepared by CPA/EA or PTIN tax
                            preparer.
                          </li>
                          <li>
                            CPA/EA or PTIN tax preparer must also attest to
                            having prepared the borrower's most recent tax
                            returns.
                          </li>
                        </ul>
                        <p className="mb-3">
                          When evaluating the P&L, the expenses are expected to
                          be at least 20% of gross revenue. In the event less
                          than 20% is reflected in expenses, the net income will
                          be adjusted to reflect a 20% expense level when
                          qualifying.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Qualifying income is the monthly net income from the
                            P&L divided by the number of months covered by the
                            P&L.
                          </li>
                          <li>
                            Depreciation, depletion and amortization/casualty
                            losses listed on the P&L may be added back to the
                            applicant's income
                          </li>
                          <li>
                            Verbal verification of P&L is required on wholesale
                            transactions.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        IRS Form 1099
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>1 or 2 years IRS Form 1099</li>
                          <li>Fixed Expense Ratio of 10%</li>
                          <li>
                            YTD Documentation to support continued receipt of
                            income from same source, is required only when the
                            most recent 1099 is &gt;90 days from the note date
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        WVOE
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2 mb-3">
                          <li>Maximum loan amount $1,500,000</li>
                          <li>
                            Minimum credit score 680 for Primary Residence max
                            80% LTV; Second Home and Investment Property max 75%
                            LTV
                          </li>
                          <li>
                            0x30x12 housing history is required; borrowers
                            without a housing history are ineligible
                          </li>
                          <li>
                            Family members or related individuals may not employ
                            borrowers
                          </li>
                          <li>
                            W2s, Tax Returns, Paystubs, 4506-C are not required
                          </li>
                        </ul>
                        <p className="mb-3">
                          Written Verification of Employment (WVOE) – FNMA 1005
                          completed with the past 2 years of income/employment.
                          Form must be completed by Human Resources, Payroll, or
                          an Officer of the Company:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Two (2) most recent months of bank statements
                            supporting at least 65% of the gross wages reflected
                            in the WVOE
                          </li>
                          <li>
                            Verification of delivery and receipt of the FNMA
                            Form 1005 required
                          </li>
                          <li>
                            One-year history with the same employer with a
                            minimum of two (2) years in the same line of work.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Asset Utilization
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2 mb-3">
                          <li>
                            Qualified Assets must be seasoned for 3 months.
                          </li>
                          <li>
                            Purchase/Rate &amp; Term Refinance:
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                              <li>
                                &gt; 85% LTV permitted per the matrix when the
                                DTI is &lt;=60% without using assets for income
                              </li>
                            </ul>
                          </li>
                          <li>Cash-Out: follow LTV limits per matrix.</li>
                        </ul>
                        <p className="mb-2 font-medium">
                          Monthly Income Calculation:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            When the DTI without asset utilization is &lt;= 60%:
                            <ul className="list-disc pl-5 mt-1">
                              <li>
                                Monthly Income Calculation = Net Qualified
                                Assets / 36 Months
                              </li>
                            </ul>
                          </li>
                          <li>
                            When the DTI without Asset Utilization is &gt; 60%
                            or when the borrower's entire income is comprised of
                            income from assets:
                            <ul className="list-disc pl-5 mt-1">
                              <li>
                                Monthly Income Calculation = Net Qualified
                                Assets / 60 Months
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Flex Select - Asset and Reserve Requirements */}
            <div id="flex-select-assets" className="mb-8 scroll-mt-20">
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Flex Select - Asset and Reserve Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Assets
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>30-day asset verification required</li>
                          <li>
                            Large deposits (&gt; 50% of gross income) must be
                            documented on purchase transactions
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Reserves
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            &lt;= $500,000 = 3 months PITIA w/LTV &lt;= 80%
                          </li>
                          <li>
                            &lt;= $500,000 = 6 months PITIA w/LTV &gt; 80%
                          </li>
                          <li>&gt; $500,000 to $1,500,000 = 6 months PITIA</li>
                          <li>
                            &gt; $1,500,000 to $2,500,000 = 9 months PITIA
                          </li>
                          <li>
                            &gt; $2,500,000 to $3,500,000 = 12 months PITIA
                          </li>
                          <li>
                            Cash Out proceeds may be used to satisfy reserves
                          </li>
                          <li>
                            When Asset Utilization is the sole source of income,
                            reserves are not required
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Gift Funds
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Gift funds are eligible provided borrower meets
                            minimum contribution:
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                              <li>5% primary</li>
                              <li>10% Second Home and Investment Properties</li>
                            </ul>
                          </li>
                          <li>
                            100% Gift Funds may be used for down payment and
                            closing cost for Primary Residence and Second Home
                            when the LTV U.S. &lt;= to 80%
                          </li>
                          <li>
                            Investment Properties, gift funds are eligible after
                            meeting the minimum 10% borrower contribution
                            regardless of LTV
                          </li>
                          <li>Gift funds are ineligible for reserves</li>
                          <li>
                            Gift of Equity is eligible for Primary Residence
                            only
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Flex Select - Property Requirements */}
            <div id="flex-select-property" className="mb-8 scroll-mt-20">
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Flex Select - Property Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Single Family, PUD, Townhouse (Attached/Detached)
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Single Family residences with 1 or more accessory
                            dwelling units (ADU) are eligible if subject
                            property is in a municipality that allows.
                          </li>
                          <li>
                            The Appraiser must specifically confirm compliance
                            with local regulations and provide 2 similar
                            comparables.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        2-4 Units
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Max LTV is the lesser of the Matrix LTV 85%</li>
                          <li>
                            2-4 units with 1 ADU are eligible if subject
                            property is in a municipality that allows.
                          </li>
                          <li>
                            The Appraiser must specifically confirm compliance
                            with local regulations and provide 2 similar
                            comparables.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Condominium (Warrantable)
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Warrantable / Non-Warrantable:
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                              <li>
                                Purchase &amp; Rate &amp; Term Refinance: Max
                                85% LTV
                              </li>
                              <li>Cash Out: 75% LTV</li>
                            </ul>
                          </li>
                          <li>
                            Limited Review Established Condos Outside of Florida
                            LTV/CLTV Limits where the building has 5+ units:
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                              <li>Primary Residence 85%</li>
                              <li>Second home and Investment Property 75%</li>
                            </ul>
                          </li>
                          <li>
                            Limited Review Established Condos in Florida
                            (Warrantable) LTV/CLTV Limits:
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                              <li>Primary residence 75%/90%</li>
                              <li>
                                Second home and Investment Properties: 70%/75%
                              </li>
                            </ul>
                          </li>
                          <li>Condominium leaseholds ineligible</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Condotel
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <div className="mb-3">
                          <p className="font-medium mb-2">Primary Residence</p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>
                              Purchase or Rate &amp; Term Refinance:
                              <ul className="list-disc pl-5 mt-1">
                                <li>Lesser of Matrix LTV or Max 85% LTV</li>
                              </ul>
                            </li>
                            <li>
                              Cash-Out:
                              <ul className="list-disc pl-5 mt-1">
                                <li>Lesser of Matrix LTV or Max 75%</li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        <div className="mb-3">
                          <p className="font-medium mb-2">
                            Second Home &amp; Investment Property
                          </p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>
                              Purchase or Rate &amp; Term Refinance:
                              <ul className="list-disc pl-5 mt-1">
                                <li>
                                  700+ credit score; lesser of Matrix LTV or Max
                                  75%LTV
                                </li>
                                <li>
                                  680-699 credit score; lesser of Matrix LTV or
                                  Max 70% LTV
                                </li>
                              </ul>
                            </li>
                            <li>
                              Cash Out Refinance:
                              <ul className="list-disc pl-5 mt-1">
                                <li>
                                  700+ credit score; lesser of Matrix LTV or Max
                                  65% LTV
                                </li>
                                <li>
                                  680-699 credit score; lesser of Matrix LTV or
                                  Max 60% LTV
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Must have a full kitchen &amp; a separate bedroom.
                          </li>
                          <li>
                            Must be in a resort area or affiliated with a
                            national hotel chain
                          </li>
                          <li>Max Loan Amount $1,500,000</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Co-ops
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Eligible for the Delegated Correspondent Channel
                            ONLY
                          </li>
                          <li>
                            Correspondent Clients must use their own Closing
                            Plan Codes
                          </li>
                          <li>
                            Available in New York City - 5 Boroughs ONLY: Bronx,
                            Brooklyn, Manhattan, Queens &amp; Staten Island
                          </li>
                          <li>Max 80% LTV</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Manufactured Housing
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2 mb-3">
                          <li>
                            Eligible for the Delegated Correspondent Channel
                            ONLY
                          </li>
                          <li>
                            Correspondent Clients must use their own Closing
                            Plan Codes.
                          </li>
                        </ul>
                        <p className="font-medium mb-2">Requirements:</p>
                        <ul className="list-disc pl-5 space-y-2 mb-3">
                          <li>
                            Min 20' wide (Double-wide), min 750+ sq ft, must
                            meet "HUD Code" including being built on a permanent
                            chassis, installed on a permanent foundation, and
                            title as real estate
                          </li>
                          <li>May not be older than 15 years</li>
                          <li>
                            May not be if in need of repairs (as per the
                            appraisal) of more than 5% of the property value
                          </li>
                        </ul>
                        <p className="font-medium mb-2">
                          Eligible Transactions:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Cash Out is ineligible, Primary Residence and Second
                            Home only, minimum credit score 680, Max 80% LTV
                          </li>
                          <li>
                            Investment property and Interest Only loans are
                            ineligible
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Rural Properties
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Rural properties are eligible for Primary Residence
                            up to 80% LTV; max 20 acres
                          </li>
                          <li>
                            Second home and Investment Properties may be
                            considered when the subject has &lt;= 2 acres up to
                            a max LTV of 75%
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Appraisals
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Second appraisal required for loans &gt; $2,000,000
                          </li>
                          <li>
                            Appraisal Review Product to be ordered on all loans
                            with a FNMA SSR over 2.5, except for those with a
                            full second appraisal
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Declining Markets
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        As identified by the appraiser, require a 5% LTV
                        reduction off the matrix when &gt; 65% LTV
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Acreage
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Max 20 acres Primary Residence &amp; Second Home; max 5
                        acres Investment Properties
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Flex Select - Express (DU) Requirements */}
            <div id="flex-select-express" className="mb-8 scroll-mt-20">
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Flex Select - Express (DU) Requirements
              </h4>

              <p className="text-sm mb-4 text-muted-foreground">
                Follow Flex Select where silent in this section.
              </p>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Express (DU) Underwriting Method
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>FNMA DU only</li>
                          <li>
                            Ineligible for ITIN, P&L Only and less than 2 years
                            of self-employment history in the same business.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        DU Findings
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Eligible DU Findings – Approve/Eligible and
                            Approve/Ineligible.
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                              <li>
                                Ineligible results are only eligible for items
                                such as loan size, LTV limits, loan purpose or
                                feature.
                              </li>
                              <li>
                                DU cannot be ineligible for a credit event or
                                due to risk factors.
                              </li>
                            </ul>
                          </li>
                          <li>
                            Credit score used to qualify is the credit score
                            from the primary borrower.
                          </li>
                          <li>
                            Extenuating circumstances for derogatory credit are
                            ineligible, i.e., cannot instruct DU to disregard
                            information on credit report(s) to receive an
                            Approve/Eligible.
                          </li>
                          <li>
                            Seller negotiated criteria/variances with FNMA are
                            ineligible.
                          </li>
                          <li>
                            Non-Delegated Correspondents are responsible for
                            providing the DU Findings with the loan submission
                            and must match to the final terms of the loan.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        LTV/Score Eligibility
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        740-759 credit scores are ineligible for loans with LTV
                        &gt; 85%; follow standard program requirements
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Max Loan Amount & LTV
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Max Loan Amount = $2,000,000</li>
                          <li>
                            Max LTV = 90% LTV (minimum 760 credit score for LTVs
                            &gt; 85%)
                          </li>
                          <li>&gt; 85% LTV = Max loan amount is $1,500,000</li>
                          <li>
                            First time homebuyer max loan amount $1,500,000
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Interest-Only
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Ineligible
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Exceptions
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Ineligible
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        ITIN
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Ineligible
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Non-Occupant Co-Borrower
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Primary Residence only</li>
                          <li>
                            Purchase and Rate &amp; Term Refinance only
                            (non-occupant must be on the current mortgage for a
                            Rate &amp; Term Refinance refinance)
                          </li>
                          <li>Non-occupant co-borrower must be a relative</li>
                          <li>Max 90% LTV</li>
                          <li>
                            The occupying borrower and non-occupant co-borrower
                            ratios may be blended to a max of 50% DTI
                          </li>
                          <li>Max loan amount $1,000,000</li>
                          <li>
                            Use the primary borrower's credit score, whether it
                            be the occupant or the non-occupying co-borrower
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Credit/Housing Events
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Follow AUS except for housing history must be 0x30x12
                        and no extenuating circumstances for Bankruptcy or
                        Housing Event
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Housing History
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>0x30x12</li>
                          <li>
                            DU may waive the requirements for rental history on
                            certain DU casefiles; documentation is still
                            required to support a 0x30x12 history. It is
                            permissible to allow the waiver of canceled checks
                            for private party VORs when eligible per DU.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Income
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Max DTI: 50%</li>
                          <li>Follow program documentation requirements</li>
                          <li>Follow program DTI restrictions</li>
                          <li>
                            Transcripts required for the number of years of
                            income used to qualify on Full Doc loans
                          </li>
                          <li>P&L Only is ineligible</li>
                          <li>Self-employment &lt; 2 years is ineligible</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Reserves
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            LTVs &gt; 85%:
                            <ul className="list-disc pl-5 mt-1">
                              <li>
                                Up to $1,500,000 with 760+ credit score = 6
                                months PITIA
                              </li>
                            </ul>
                          </li>
                          <li>
                            LTV &lt;= 85%:
                            <ul className="list-disc pl-5 mt-1">
                              <li>Loans &lt;= $2,000,000 follow DU Findings</li>
                              <li>
                                Loans &gt; $2,000,000 must meet product reserve
                                requirements
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Appraisal
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Reduced Condo Reviews are ineligible.</li>
                          <li>Appraisal waivers (PIW) are ineligible.</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* End of Flex Select */}

          {/* Select ITIN */}
          <div id="select-itin-overview" className="scroll-mt-20 mb-12 mt-16">
            <h3 className="text-2xl font-semibold mb-4">
              Select ITIN Overview
            </h3>
            <p className="text-sm leading-relaxed mb-6">
              The Select ITIN Program is designed specifically for the ITIN
              borrower (including DACA) to provide financing solutions for this
              specific group of borrowers. Refer to the Select ITIN Matrix for
              specific program requirements.
            </p>

            {/* Select ITIN - General Requirements */}
            <div
              id="select-itin-general-requirements"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Select ITIN - General Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Exceptions
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Eligible
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Product Type
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            15 Year Fixed, 30 Year Fixed, Fully Amortizing
                          </li>
                          <li>
                            30 Year Fixed I/O (10 Year I/O period, and remaining
                            term fully amortizing)
                          </li>
                          <li>5/6 SOFR ARM 30 Year Term – Fully Amortizing</li>
                          <li>5/6 SOFR ARM I/O - 30 Year Term</li>
                          <li>
                            Interest Only Products listed above: Qualify off
                            fully amortizing payment.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Express (DU)
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Ineligible
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Interest Only
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Min Credit Score: 680</li>
                          <li>Max LTV: 80%</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Loan Amounts
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Minimum: $125,000 and Max $2,500,000</li>
                          <li>
                            Loan Amounts $125,000 - $149,999 require a 5%
                            reduction in LTV
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        2-1 Buydown
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Purchase Only</li>
                          <li>Full Doc and Bank Statement Only</li>
                          <li>Minimum Credit Score 680</li>
                          <li>Max LTV 80%</li>
                          <li>Max DTI 50%</li>
                          <li>30 Year Fixed Only</li>
                          <li>Qualify using Note Rate</li>
                          <li>
                            Primary Residence, Second Home and Investment
                            Properties
                          </li>
                          <li>Seller or Builder Funded Only</li>
                          <li>
                            Lender Paid or 3rd Party Buydowns are eligible for
                            Correspondent Clients only
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Occupancy
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Primary, Second Home; and Investment Property
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Loan Purpose
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Purchase, Rate & Term Refinance, and Cash Out Refinance
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Cash-Out
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Minimum of six (6) months seasoning from most recent
                            mortgage transaction.
                          </li>
                          <li>
                            Max cash-out (defined as cash in hand):
                            <ul className="list-circle pl-6 mt-1 space-y-1">
                              <li>If LTV &le; 60% = Unlimited</li>
                              <li>
                                If LTV &gt; 60% = Max $1,000,000 (Not eligible
                                with Express/DU opt for unlimited cash-out with
                                18 months additional reserves)
                              </li>
                            </ul>
                          </li>
                          <li>Condos – Max 75% LTV</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Interested Party Contributions
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-2">
                          <span className="font-medium">
                            Primary Residence and Second Homes:
                          </span>
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mb-3">
                          <li>&le; 75% LTV = 9%</li>
                          <li>&gt; 75% = 6%</li>
                        </ul>
                        <p className="mb-2">
                          <span className="font-medium">Investment:</span>
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>ALL = 6%</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Subordinate Financing
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Ineligible
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Escrow Waivers
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Ineligible
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Prepayment Penalty
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            Required on Investment Properties when permitted.
                            See the "Business Purpose Licensing & PPP
                            Restrictions" PDF in the Documents Tab in the Client
                            Portal.
                          </li>
                          <li>No PPP – Correspondent Only</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Age of Loan Documentation
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Credit: 120 days</li>
                          <li>Income and Assets: 90 days</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Select ITIN - Borrower Eligibility */}
            <div
              id="select-itin-borrower-eligibility"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Select ITIN - Borrower Eligibility
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-4">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Borrower Eligibility
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-3 font-medium">Eligible:</p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>
                            ITIN must be valid and at least 2 years consistent
                            ITIN payments reporting to the IRS is required. This
                            can be validated with the borrower's current ITIN #
                            along with a 2 year employment history
                          </li>
                          <li>
                            Multiple borrowers - one borrower must have ITIN
                          </li>
                          <li>
                            DACA is eligible with ITIN / SSN with Valid U.S.
                            driver's license along with EAD card evidencing
                            their DACA status
                          </li>
                        </ul>
                        <p className="mb-3 font-medium">Ineligible:</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Irrevocable or blind trust</li>
                          <li>Inter-Vivos Revocable Trust</li>
                          <li>Entity Vesting</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Borrower Documentation Requirements
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Government photo ID from U.S. or eligible country of
                            origin
                            <ul className="list-circle pl-6 mt-1">
                              <li>
                                Examples include Government license, passport,
                                matricular consular, etc. A Visa is not required
                                in addition to the above for an ITIN borrower
                              </li>
                            </ul>
                          </li>
                          <li>
                            ITIN card or letter from the IRS
                            <ul className="list-circle pl-6 mt-1">
                              <li>
                                ITIN is required to be assigned to the borrower
                                prior to application
                              </li>
                            </ul>
                          </li>
                          <li>
                            All documentation in the file must support the
                            borrower's ITIN number and cannot reference a
                            complete Social Security Number belonging to another
                            individual.
                          </li>
                          <li>
                            Evidence of unexpired ITIN can be accomplished as
                            follows:
                            <ul className="list-circle pl-6 mt-1 space-y-1">
                              <li>
                                Full Doc/1099 loans: Current executed
                                transcripts will validate the borrower's current
                                ITIN status
                              </li>
                            </ul>
                          </li>
                          <li>
                            Alt Doc loans: Provide one of the following:
                            <ul className="list-square pl-6 mt-1 space-y-1">
                              <li>IRS letter dated within the last 3 years</li>
                              <li>
                                Fully executed W7, including agent's signature
                              </li>
                              <li>
                                Letter from licensed tax preparer confirming
                                they have filed the borrower's most recent Tax
                                Return
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Non-Occupant Co-Borrower
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Primary Residence Only</li>
                          <li>
                            Rate & Term Refinance Refi (non-occupant co-borrower
                            must be on current loan)
                          </li>
                          <li>
                            Max Total DTI 50% (Max 65% DTI for Occupying
                            Borrower)
                          </li>
                          <li>Non-occupant co-borrower must be a relative</li>
                          <li>Max Loan Amount $1,000,000</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        First Time Homebuyer (FTHB)
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Eligible to a maximum loan size of $1,500,000 on Primary
                        Residence, Second Home and Investment Properties
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Select ITIN - Credit Requirements */}
            <div
              id="select-itin-credit-requirements"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Select ITIN - Credit Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Credit Score
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Minimum credit score 660 for primary borrower</li>
                          <li>
                            Additional borrowers must have a minimum credit
                            score of 600
                          </li>
                          <li>
                            When qualifying income is equal for all borrowers on
                            the loan, the highest representative score will be
                            used.
                          </li>
                          <li>
                            A minimum of 2 credit scores is required;
                            <ul className="list-circle pl-6 mt-1">
                              <li>
                                1 credit score is eligible when the credit
                                report has sufficient tradeline activity,
                                defined below in the Tradelines section
                              </li>
                            </ul>
                          </li>
                          <li>
                            The Representative Credit Score is based on the
                            primary borrowers' credit score; qualify as follows:
                            <ul className="list-circle pl-6 mt-1 space-y-1">
                              <li>
                                Middle of 3 credit scores or lower of 2 credit
                                scores
                              </li>
                              <li>
                                1 credit score, use as the Representative Credit
                                Score
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Tradelines
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-2">
                          When the primary borrower does not have 3 credit
                          scores, the following minimum tradelines are required:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mb-3">
                          <li>3 trades reporting for 12+ months, OR</li>
                          <li>2 trades reporting for 24+ months, OR</li>
                          <li>2 year mortgage history</li>
                        </ul>
                        <p className="italic">Spouses may combine trades.</p>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Non-Traditional Credit
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-2">
                          If the borrower is unable to meet the above
                          requirements, borrower may qualify using
                          Non-Traditional Credit as defined below:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>A minimum of 2 credit scores is required</li>
                          <li>Loan amount &le; $1,500,000</li>
                          <li>
                            The credit history must include 3 credit references
                            covering the most recent 12 months from the date of
                            application, supported with canceled checks or bank
                            statements.
                          </li>
                          <li>
                            Acceptable tradelines may be mortgage/rental
                            verification; utilities such as electricity, gas,
                            water, telephone service, television, and internet
                            service providers. If utilities are included in the
                            rental housing payment, they cannot be considered a
                            separate source of nontraditional credit.
                          </li>
                          <li>
                            It is permissible to combine trades from the credit
                            report with non-traditional credit to meet the
                            tradeline requirements.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Housing History
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        0x30x12
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Housing / Credit Events
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        4 years seasoning is required
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Select ITIN - DTI and Residual Income Requirements */}
            <div id="select-itin-dti-residual" className="mb-8 scroll-mt-20">
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Select ITIN - DTI and Residual Income Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Max DTI
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Max 50%
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Residual Income
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Requirement based on # in household</li>
                          <li>
                            Defined as Gross Monthly Income less Total Monthly
                            Obligations
                          </li>
                          <li>
                            Applies to HPML loans or when the DTI &gt; 43% on
                            Primary Residence and Second Homes only:
                            <ul className="list-circle pl-6 mt-1 space-y-1">
                              <li>1 person = $1,500</li>
                              <li>2 people = $2,500</li>
                              <li>
                                Add $150 per additional household member
                                (related or unrelated)
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Select ITIN - Income Requirements */}
            <div id="select-itin-income" className="mb-8 scroll-mt-20">
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Select ITIN - Income Requirements
              </h4>

              <h5 className="font-semibold text-md mb-3 mt-6">
                Full Doc Income Requirements
              </h5>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Wage Earners
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Fully written verification of employment signed IRS
                            Form-4506C and 1 or 2 years Tax Transcripts
                          </li>
                          <li>
                            Providing documentation with a complete Social
                            Security Number not belonging to the borrower will
                            render the file ineligible for purchase.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Self-Employment
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        1 or 2 years 1040s plus Tax Transcripts, YTD P&L, plus 2
                        months bank statements, K-1s and Schedule E for all
                        business entities prior 1-2 years if &ge;25% ownership
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Rental Income
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-3 font-medium">
                          Rental income on Tax Returns:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>
                            When tax returns are used to qualify, an average of
                            2 years of rental income will be used unless the
                            income is declining in which case the most recent
                            year's income will be used for qualifying
                          </li>
                          <li>
                            Cash flow Analysis of Schedule E should be completed
                          </li>
                        </ul>
                        <p className="mb-3 font-medium">
                          Rental Income NOT on Tax Returns:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>
                            Evidence of borrower's ownership of the property
                          </li>
                          <li>
                            For a refinance and/or to document rental income on
                            other REOs:
                          </li>
                          <li>Lease agreement</li>
                          <li>
                            Two months of bank statements demonstrating receipt
                            of rental income.
                          </li>
                          <li>
                            Evidence the rental amount is at market rate, which
                            can be documented via a 1007 or through an online
                            source
                          </li>
                          <li>
                            Primary Residence and Second Homes: May add 75% of
                            gross rent to borrowers qualifying income
                          </li>
                          <li>
                            Investment property: Income used to qualify is 75%
                            of the lesser of documented rent or market rent per
                            appraisal
                          </li>
                        </ul>
                        <p className="mb-3">
                          Rental from Departing Primary Residence is eligible
                          per Guide.
                        </p>
                        <p className="mb-3 font-medium">
                          Short Term Gross Rental Income:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            12-month look back on rents received using bank
                            statements or third party rental statements
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h5 className="font-semibold text-md mb-3 mt-6">
                Alt Doc Income Requirements
              </h5>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Personal Bank Statements
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            12 or 24 months of personal and 2 months of business
                            bank statements. The business bank statements must
                            reflect business activity and transfers to the
                            personal account
                          </li>
                          <li>
                            Qualifying income is determined by the total
                            eligible deposits from the 24 or 12 months of
                            personal statements divided by the number of
                            statements
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Business Bank Statements
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-3">
                          12 or 24 months of business bank statements.
                          Qualifying income is determined by ONE of the
                          following analysis methods:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Fixed Expense Ratio (50%); OR</li>
                          <li>
                            Expense ratio provided by a 3rd party (CPA/EA or
                            PTIN tax preparer), min ratio of 20%, OR
                          </li>
                          <li>
                            3rd party prepared Profit & Loss Statement (CPA/EA
                            or PTIN tax preparer) min ratio of 20%
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        IRS Form 1099
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>1 or 2 years 1099</li>
                          <li>Fixed Expense Ratio of 10%</li>
                          <li>
                            YTD Documentation to support continued receipt of
                            income from same source, is required only when the
                            most recent 1099 is &gt;90 days from the note date
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Asset Utilization
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            May be combined with Full Doc Income as primary
                            source of income up to 85% LTV
                          </li>
                          <li>
                            Qualified Assets must be seasoned for 3 months
                          </li>
                          <li>
                            Monthly Income Calculation:
                            <ul className="list-circle pl-6 mt-1">
                              <li>Net Qualified Assets / 60 months</li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Select ITIN - Assets and Reserve Requirements */}
            <div id="select-itin-assets" className="mb-8 scroll-mt-20">
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Select ITIN - Assets and Reserve Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Assets
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>30-day asset verification required</li>
                          <li>
                            Deposits &gt; 50% of gross income must be documented
                            on purchases
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Reserves
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>&le; $500,000 = 3 months PITIA w/LTV &le; 80%</li>
                          <li>&le; $500,000 = 6 months PITIA w/LTV &gt; 80%</li>
                          <li>&gt; $500,000 to $1,500,000 = 6 months PITIA</li>
                          <li>
                            &gt; $1,500,000 to $2,500,000 = 9 months PITIA
                          </li>
                          <li>
                            Cash Out proceeds may be used to satisfy reserves.
                          </li>
                          <li>
                            When Asset Utilization is the sole source of income,
                            reserves are not required.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Gift Funds
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Gift funds are eligible provided borrower meets
                            minimum contribution:
                            <ul className="list-circle pl-6 mt-1 space-y-1">
                              <li>5% primary</li>
                              <li>10% Second Homes</li>
                            </ul>
                          </li>
                          <li>
                            100% gift funds may be used for down payment and
                            closing costs on a Primary Residence or Second Home
                            when the LTV is &le; 75%.
                          </li>
                          <li>Gift funds are ineligible for reserves.</li>
                          <li>
                            Gift of Equity is eligible for Primary Residence
                            transactions only.
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Select ITIN - Property Requirements */}
            <div id="select-itin-property" className="mb-8 scroll-mt-20">
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Select ITIN - Property Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Property Type
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-3 font-medium">
                          Single Family, PUD or Townhouse (Attached or Detached)
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>
                            Single Family, PUD or Townhouse:
                            <ul className="list-circle pl-6 mt-1 space-y-1">
                              <li>Purchase: Max 85% LTV for Primary only</li>
                              <li>Rate & Term Refinance: Max 80% LTV</li>
                            </ul>
                          </li>
                          <li>
                            Single Family residences with 1 or more accessory
                            dwelling units (ADU) are eligible if subject
                            property is in a municipality that allows. The
                            appraiser must specifically confirm compliance with
                            local regulations and provide 2 similar comparables.
                          </li>
                        </ul>
                        <p className="mb-3 font-medium">Condominiums</p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>
                            Condos – Non-Warrantable:
                            <ul className="list-circle pl-6 mt-1">
                              <li>
                                Max LTV is the lesser of the Matrix LTV or 75%
                                LTV
                              </li>
                            </ul>
                          </li>
                          <li>
                            Purchase and Rate & Term Refinance:
                            <ul className="list-circle pl-6 mt-1 space-y-1">
                              <li>Primary Residence = Max LTV 75%</li>
                              <li>
                                Second Homes & Investment Property = Max LTV 70%
                              </li>
                            </ul>
                          </li>
                          <li>
                            Condos – Warrantable: Outside of Florida, Max 80%
                            LTV
                          </li>
                          <li>Limited Review Condos: Max 75% LTV</li>
                          <li>Condominium leaseholds are ineligible</li>
                        </ul>
                        <p className="mb-3 font-medium">2-4 Units</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>2-4 Units: Max 80% LTV</li>
                          <li>
                            2-4 units with 1 ADU are eligible if subject
                            property is in a municipality that allows. The
                            appraiser must specifically confirm compliance with
                            local regulations and provide 2 similar comparables.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Rural Properties
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Rural properties eligible for Primary Residence up
                            to 80% LTV; max 20 acres.
                          </li>
                          <li>
                            Second home and Investment Properties may be
                            considered when the subject has &le; 2 acres up to a
                            max LTV of 75%.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Appraisals
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Second appraisal required for loans &gt; $2,000,000.
                          </li>
                          <li>
                            Appraisal Review Product to be ordered on all loans
                            with a FNMA SSR over 2.5, except for those with a
                            full second appraisal.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Declining Markets
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Declining markets, as identified by the appraiser,
                        require a 5% LTV reduction off Program Matrix Max LTV
                        when &gt; 65% LTV.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Acreage
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Max 20 acres for Primary Residence & Second Home; Max 5
                        acres Investment Properties.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* End of Select ITIN */}

          {/* Super Jumbo */}
          <div id="super-jumbo-overview" className="scroll-mt-20 mb-12 mt-16">
            <h3 className="text-2xl font-semibold mb-4">
              Super Jumbo Overview
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              The Super Jumbo Program is a specialty program for high-net-worth
              borrowers with solid and stable income and credit, as well as
              considerable assets to cover down payment, closing costs and
              reserves. Refer to the Super Jumbo Matrix for specific program
              requirements.
            </p>
            <p className="text-sm leading-relaxed mb-6 font-semibold">
              All loans must be approved by the NQM Funding, LLC Credit
              Committee.
            </p>

            {/* Super Jumbo - General Requirements */}
            <div
              id="super-jumbo-general-requirements"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Super Jumbo - General Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Exceptions
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Ineligible
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Product Type
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>30 Year Fixed Fully Amortizing</li>
                          <li>
                            40 Year Fixed IO (10 year I/O period, and remaining
                            term fully amortizing)
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Interest Only
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Eligible with no additional requirements
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Loan Amounts
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Min $3,500,001 – Max $5,000,000
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        2-1 Buydown
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Ineligible
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Occupancy
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Primary Residence only
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Loan Purpose
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Purchase, Rate & Term Refinance and Cash-Out
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Cash-Out
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Max cash-out: $1,500,000</li>
                          <li>
                            Cash Out proceeds may not be used to meet reserves
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Interested Party Contributions
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">6%</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Subordinate Financing
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Ineligible
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Escrow Waivers
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Ineligible
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Prepayment Penalty
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Ineligible
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Age of Loan Documentation
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Credit: 120 days</li>
                          <li>Income and Assets: 90 days</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Super Jumbo - Borrower Eligibility */}
            <div
              id="super-jumbo-borrower-eligibility"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Super Jumbo - Borrower Eligibility
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-4">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Borrower Eligibility
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-3 font-medium">Eligible:</p>
                        <ul className="list-disc pl-5 space-y-1 mb-4">
                          <li>U.S. Citizens</li>
                          <li>Permanent Resident Aliens</li>
                          <li>
                            Non-Permanent Resident Aliens (U.S. credit only)
                          </li>
                        </ul>
                        <p className="mb-3 font-medium">Ineligible:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>ITIN</li>
                          <li>DACA</li>
                          <li>Foreign Nationals</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Non-Occupant Co-Borrower
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Ineligible
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        First Time Homebuyer (FTHB)
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Ineligible
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Super Jumbo - Credit Requirements */}
            <div
              id="super-jumbo-credit-requirements"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Super Jumbo - Credit Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Credit Score
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Minimum credit score 720 for all borrowers</li>
                          <li>
                            The Representative Score is based on the primary
                            wage earners' credit score, qualify as follows:
                            <ul className="list-circle pl-6 mt-1 space-y-1">
                              <li>
                                Middle of 3 credit scores or lower of 2 credit
                                scores
                              </li>
                              <li>
                                When qualifying income is equal for all
                                borrowers on the loan, the highest
                                representative score will be used.
                              </li>
                            </ul>
                          </li>
                          <li>
                            Tradeline requirements are not waived when the
                            Primary borrower has 3 credit scores
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Tradelines
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-2">
                          Each borrower must meet the following minimum
                          tradeline requirements:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Min 2 open & reporting 24 months; OR</li>
                          <li>3 open and reporting 12 months; OR</li>
                          <li>24-months mortgage rating reporting on credit</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Housing History
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        0x30x24
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Credit / Housing Events
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        4 years seasoning required
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Super Jumbo - DTI and Residual Income Requirements */}
            <div id="super-jumbo-dti-residual" className="mb-8 scroll-mt-20">
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Super Jumbo - DTI and Residual Income Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Max DTI
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Max 38%
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Residual Income
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Not required
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Super Jumbo - Income Requirements */}
            <div id="super-jumbo-income" className="mb-8 scroll-mt-20">
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Super Jumbo - Income Requirements
              </h4>

              <h5 className="font-semibold text-md mb-3 mt-6">
                Overall Income Requirements
              </h5>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Self-Employment
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Borrower must have 2 years in the current business
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h5 className="font-semibold text-md mb-3 mt-6">
                Full Doc - Income Requirements
              </h5>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Wage Earners
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        30 days of paystubs reflecting YTD earnings, 1 or 2
                        years W-2 or an electronic verification of employment,
                        W-2 transcripts and a fully executed and signed IRS
                        Form-4506C
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Self-Employment
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Self-Employed: 1 or 2 Years of Personal and Business Tax
                        Returns, Year to date P&L, Tax Transcripts, 2 months of
                        most recent bank statements
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Rental Income
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-3 font-medium">
                          Rental income on Tax Returns:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>
                            When tax returns are used to qualify, an average of
                            2 years of rental income will be used unless the
                            income is declining in which case the most recent
                            year's income will be used for qualifying
                          </li>
                          <li>
                            Cash flow Analysis of the Schedule E should be
                            completed.
                          </li>
                        </ul>
                        <p className="mb-3 font-medium">
                          Rental Income NOT on Tax Returns:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>
                            Evidence of borrower's ownership of the property
                          </li>
                          <li>
                            For a refinance and/or to document rental income on
                            other REOs
                          </li>
                          <li>Lease agreement</li>
                          <li>
                            Two months of bank statements demonstrating receipt
                            of rental income.
                          </li>
                          <li>
                            Evidence the rental amount is at market rate, which
                            can be documented via a 1007 or through an online
                            source
                          </li>
                          <li>
                            75% of the rental amount on the lease is used for
                            qualifying
                          </li>
                        </ul>
                        <p className="mb-3">
                          Rental from Departing Primary Residence: Eligible per
                          Guide.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h5 className="font-semibold text-md mb-3 mt-6">
                Alt Doc – Income Requirements
              </h5>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Personal Bank Statements
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            24 months of personal and 2 months of business bank
                            statements
                          </li>
                          <li>
                            Qualifying income is determined by the total
                            eligible deposits from the 24 months of personal
                            statements divided by the number of statements
                          </li>
                          <li>
                            The business bank statements must reflect business
                            activity and transfers to the personal account
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Business/Co-Mingled Bank Statements
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-3">
                          24 months of business bank statements. Qualifying
                          income is determined by ONE of the following analysis
                          methods:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Fixed Expense Ratio (50%); OR</li>
                          <li>
                            Expense Ratio provided by a 3rd party (CPA/EA or
                            PTIN tax preparer), min ratio of 20%, OR
                          </li>
                          <li>
                            3rd party prepared Profit & Loss Statement (CPA/EA
                            or PTIN tax preparer) min ratio of 20%
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Asset Utilization
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Eligible as sole source of income only</li>
                          <li>Assets must be seasoned for 3 months</li>
                          <li>
                            Monthly Income Calculation:
                            <ul className="list-circle pl-6 mt-1">
                              <li>Net Qualified Assets /84 Months</li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Super Jumbo - Asset and Reserve Requirements */}
            <div id="super-jumbo-assets" className="mb-8 scroll-mt-20">
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Super Jumbo - Asset and Reserve Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Assets
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        30-day asset verification required
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Reserves
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            &gt; $3,500,000 to $4,000,000: 12 months min PITIA
                            reserves
                          </li>
                          <li>
                            &gt; $4,000,000 to $5,000,000: 18 months min PITIA
                            reserves
                          </li>
                          <li>
                            Cash-Out proceeds may not be used to meet reserves
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Gift Funds
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Eligible after 20% minimum borrower contribution towards
                        down payment, closing costs, prepaids; and reserves must
                        be met from Borrower's own funds
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Super Jumbo - Property Requirements */}
            <div id="super-jumbo-property" className="mb-8 scroll-mt-20">
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Super Jumbo - Property Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Property Types
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-3 font-medium">
                          Single Family 1-Unit, PUD, Townhouse (Attached/
                          Detached)
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>
                            Single Family residences may have a max of 1
                            accessory dwelling unit (ADU) are permitted if
                            subject property is in a municipality that allows.
                          </li>
                          <li>
                            The Appraiser must specifically confirm compliance
                            with local regulations and provide 2 similar
                            comparables.
                          </li>
                        </ul>
                        <p className="mb-3 font-medium">
                          Condo (Warrantable/ Non-Warrantable)
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Eligible without additional restrictions</li>
                          <li>Condominium leaseholds are ineligible</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Rural Properties
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Ineligible
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Appraisal Requirements
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Two (2) Full Appraisals (interior/exterior)
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Declining Markets
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            Purchase and Rate & Term Refinance: the lesser of
                            matrix LTV or max 65%.
                          </li>
                          <li>Cash-Out: the lesser of matrix LTV or max 55%</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Acreage
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Max 2 acres
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* End of Super Jumbo */}

          {/* Second Lien Select */}
          <div
            id="second-lien-select-overview"
            className="scroll-mt-20 mb-12 mt-16"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Second Lien Select Overview
            </h3>
            <p className="text-sm leading-relaxed mb-6">
              The Second Lien Select Program is designed to cover to cover a
              range of options for the borrower who desires a closed end second
              lien loan. Refer to the Second Lien Select Matrix for specific
              program requirements.
            </p>

            {/* Second Lien Select - General Requirements */}
            <div
              id="second-lien-select-general-requirements"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Second Lien Select - General Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Exceptions
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Ineligible
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Compliance
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            Loans must comply with all applicable federal and
                            state regulations.
                          </li>
                          <li>Fully documented ATR</li>
                          <li>
                            Higher-Priced Mortgage Loans (HPML) and
                            Higher-Priced Covered Transactions (HPCT) are
                            permitted subject to complying with all applicable
                            regulatory requirements.
                          </li>
                          <li>
                            Loans that do not pass the NY Subprime test are
                            ineligible.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        High Cost Thresholds
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Loans that are considered High Cost solely due to
                            exceeding the High Cost APR Threshold, provided the
                            Section 32 Loan Disclosure was provided to the
                            Borrower(s) no later than three (3) days prior to
                            closing, will be considered.
                          </li>
                          <li>
                            Not Permitted:
                            <ul className="list-circle pl-6 mt-1 space-y-1">
                              <li>
                                When the points and fees test exceeds the 5%
                                limitation, or
                              </li>
                              <li>
                                For any loan that fails a State High Cost test
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Product Type
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        15, 20, 25 and 30 Year Fixed Terms - Fully Amortizing
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Interest Only
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Ineligible
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Loan Amounts
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Min: $125,000 – Max $500,000
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        2-1 Buydown
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Ineligible
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Occupancy
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Primary Residence and Second Home
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Loan Purpose
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Purchase, Rate & Term Refinance and Cash Out Refinance
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Cash-Out
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Cash Out with less than six (6) months seasoning is
                            eligible, provided the LTV is based off the lesser
                            of the purchase price or the appraised value.
                          </li>
                          <li>
                            For a refinance transaction paying off an existing
                            subordinate lien, if that subordinate lien was a
                            Cash Out Refinance transaction, a minimum of six (6)
                            months seasoning must elapse prior to the new
                            refinance.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Interested Party Contributions
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Ineligible
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Senior Lien Product Eligibility
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-3 font-medium">Eligible:</p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>
                            A copy of the first lien note is required to
                            evidence:
                            <ul className="list-circle pl-6 mt-1 space-y-1">
                              <li>
                                Remaining term of five (5) years at time of
                                close (60 payments left).
                              </li>
                              <li>
                                Interest Only (I/O) First Mortgage must be
                                qualified at the greater of the fully amortizing
                                P&I payment or Note rate.
                              </li>
                              <li>
                                Whether fully amortizing or interest only, the
                                remaining term must be a minimum of five (5)
                                years (60 payments left) at time of closing.
                              </li>
                              <li>
                                Financing must not permit the note holder to
                                "call" the loan due within the first five years
                                following the loan closing.
                              </li>
                            </ul>
                          </li>
                          <li>
                            On a stand-alone second, if the mortgage statement
                            or credit report has sufficient information to
                            determine the payment and the terms, a copy of the
                            first lien note is not required.
                          </li>
                          <li>
                            It is acceptable for our Borrower to have legally
                            assumed a first lien mortgage, and apply for a
                            second lien, if the first mortgage conforms to the
                            eligibility criteria.
                          </li>
                          <li>
                            For simultaneous transactions, the following is
                            required in the second lien file:
                            <ul className="list-circle pl-6 mt-1 space-y-1">
                              <li>
                                Copies of first lien note and mortgage/deed of
                                trust
                              </li>
                              <li>
                                Final Closing Disclosure for the first lien
                                transaction that correspondents with the final
                                CD for the subject second lien.
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <p className="mb-3 font-medium">Ineligible:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Negative amortization feature</li>
                          <li>Balloon feature</li>
                          <li>
                            Material modifications (loan amount, interest rate,
                            final maturity, or product structure regardless of
                            seasoning, except for loans modified under a COVID
                            related event meeting the Modifications and Covid
                            Related Forbearance section.
                          </li>
                          <li>Amortization term greater than 40 years.</li>
                          <li>Contract for Deed or Contract for Purchase.</li>
                          <li>Privately held first lien.</li>
                          <li>
                            Loans with provisions prohibiting the placement of
                            additional liens on the subject property.
                          </li>
                          <li>Loans with provisions for future advances.</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Escrow Waivers
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Follow First Lien Program requirements. Escrows are not
                        required on second liens.
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Prepayment Penalty
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Ineligible
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Age of Loan Documentation
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Credit: 120 days</li>
                          <li>Income and Assets: 90 days</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Second Lien Select - Borrower Eligibility */}
            <div
              id="second-lien-select-borrower-eligibility"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Second Lien Select - Borrower Eligibility
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-4">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Borrower Eligibility
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-3 font-medium">Eligible:</p>
                        <ul className="list-disc pl-5 space-y-1 mb-4">
                          <li>U.S. Citizens</li>
                          <li>Permanent Resident Aliens</li>
                          <li>Non-Permanent Resident Aliens</li>
                        </ul>
                        <p className="mb-3 font-medium">Ineligible:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>ITIN</li>
                          <li>DACA</li>
                          <li>Foreign National</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Non-Occupant Co-Borrower
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Ineligible on the first or second lien
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Second Lien Select - Credit Requirements */}
            <div
              id="second-lien-select-credit-requirements"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Second Lien Select - Credit Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Credit Score
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Minimum credit score 680</li>
                          <li>
                            The Representative Credit Score is based on the
                            primary borrowers' credit score; qualify as follows:
                            <ul className="list-circle pl-6 mt-1 space-y-1">
                              <li>
                                Middle of 3 credit scores or lower of 2 credit
                                scores
                              </li>
                              <li>
                                Additional borrowers must have a minimum credit
                                score of 620
                              </li>
                              <li>
                                If the qualifying income is equal for all
                                borrowers on the loan, the higher representative
                                score will be used.
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Tradelines
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            If the Primary borrower has 3 credit scores, there
                            are no further tradeline requirements.
                          </li>
                          <li>
                            Otherwise, trades must meet one of the following:
                            <ul className="list-circle pl-6 mt-1 space-y-1">
                              <li>
                                3 reporting for 12+ months + activity within
                                most recent 12 months (may be closed)
                              </li>
                              <li>
                                2 reporting for 24+ with activity within most
                                recent 12 months (may be closed)
                              </li>
                            </ul>
                          </li>
                          <li>
                            24 months mortgage history reporting on credit
                            report with a credit score
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Housing History
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        0x30x24 on all mortgages
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Credit / Housing Events
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        4 years seasoning is required
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Second Lien Select - DTI and Residual Income Requirements */}
            <div
              id="second-lien-select-dti-residual"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Second Lien Select - DTI and Residual Income Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Max DTI
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Max 50% Primary Residence</li>
                          <li>Max 43% Second home</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Residual Income
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Primary Residence and Second Home only</li>
                          <li>Requirement based on # in household</li>
                          <li>
                            Defined as Gross Monthly Income – Total Monthly
                            Obligations
                          </li>
                          <li>
                            Applies to HPML loans or when the DTI &gt; 43%:
                            <ul className="list-circle pl-6 mt-1 space-y-1">
                              <li>1 person = $1,500</li>
                              <li>2 people = $2,500</li>
                              <li>Add $150 per additional household member</li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        I/O First Mortgage Qualifying Requirements
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Interest Only (I/O) First Mortgage must be qualified at
                        the fully amortizing P&I payment
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Second Lien Select - Income Requirements */}
            <div id="second-lien-select-income" className="mb-8 scroll-mt-20">
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Second Lien Select - Income Requirements
              </h4>

              <h5 className="font-semibold text-md mb-3 mt-6">
                Full Doc - Income Requirements
              </h5>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Wage Earners
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        30 days of paystubs reflecting YTD earnings, 2 years W-2
                        or an electronic verification of employment, W-2
                        Transcripts when electronic VOE not provided, and a
                        fully executed and signed IRS Form-4506C.
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Self-Employment
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        2 Years personal and business Tax Returns, Year to date
                        P&L, IRS Form 4506, 2 most recent and consecutive bank
                        statements
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Rental Income
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-3 font-medium">
                          Rental income on Tax Returns:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>
                            When tax returns are used to qualify, an average of
                            2 years of rental income will be used unless the
                            income is declining in which case the most recent
                            year's income will be used for qualifying.
                          </li>
                          <li>
                            Cash flow Analysis of Schedule E should be completed
                          </li>
                        </ul>
                        <p className="mb-3 font-medium">
                          Rental Income NOT on Tax Returns:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Evidence of borrower's ownership of the property
                          </li>
                          <li>
                            For a refinance and/or to document rental income on
                            other REO:
                            <ul className="list-circle pl-6 mt-1 space-y-1">
                              <li>Lease agreement</li>
                              <li>
                                Two months of bank statements demonstrating
                                receipt of rental income.
                              </li>
                              <li>
                                Evidence the rental amount is at market rate,
                                which can be documented via a 1007 or through an
                                online source
                              </li>
                              <li>
                                75% of the rental amount on the lease is used
                                for qualifying
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h5 className="font-semibold text-md mb-3 mt-6">
                Alt Doc - Income Requirements
              </h5>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Personal Bank Statements
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            24 months of Personal and 2 months of business bank
                            statements.
                          </li>
                          <li>
                            Qualifying income is determined by the total
                            eligible deposits from the 24 months of personal
                            statements divided by the number of statements
                          </li>
                          <li>
                            The business bank statements must reflect business
                            activity and transfers to the personal account
                          </li>
                          <li>
                            Evidence within 30 days of the Note date that the
                            business is active and operating with a minimum 2
                            year operating history
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Business/Co-Mingled Bank Statements
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-3">
                          24 months of business bank statements. Qualifying
                          income is determined by ONE of the following analysis
                          methods:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-3">
                          <li>Fixed Expense Ratio (50%) OR</li>
                          <li>
                            Expense ratio provided by a 3rd party (CPA/EA or
                            PTIN tax preparer) min ratio of 20% OR
                          </li>
                          <li>
                            3rd party prepared Profit & Loss Statement (CPA/EA
                            or PTIN tax preparer) min ratio of 20%
                          </li>
                        </ul>
                        <p>
                          Evidence within 30 days of the Note date that the
                          business is active and operating with a minimum 2 year
                          operating history
                        </p>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        P&L Plus 2 Months Bank Statements
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            24 months P&L, prepared by CPA/EA or PTIN tax
                            preparer.
                          </li>
                          <li>
                            CPA/EA or PTIN tax preparer must also attest to
                            having prepared the borrower's most recent tax
                            returns.
                          </li>
                          <li>
                            When evaluating the P&L, the expenses are expected
                            to be at least 20% of gross revenue. In the event
                            less than 20% is reflected in expenses, the net
                            income will be adjusted to reflect a 20% expense
                            level when qualifying.
                          </li>
                          <li>
                            Minimum of 2 months business bank statements must be
                            provided.
                          </li>
                          <li>
                            Qualifying Income is calculated by determining total
                            deposits per bank statements (minus any disallowed
                            deposits) multiplied by the expense percentage and
                            divided by 24 months.
                          </li>
                          <li>
                            Evidence within 30 days of the Note date that the
                            business is active and operating with a minimum 2
                            year operating history.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        IRS Form 1099
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>1 or 2 Years 1099</li>
                          <li>Fixed Expense Ratio of 10%</li>
                          <li>
                            YTD Documentation to support continued receipt of
                            income from same source, is required only when the
                            most recent 1099 is &gt;90 days from the Note date
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Second Lien Select - Asset and Reserve Requirements */}
            <div id="second-lien-select-assets" className="mb-8 scroll-mt-20">
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Second Lien Select - Asset and Reserve Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Assets
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>30 days' asset verification required</li>
                          <li>
                            Large deposits (&gt; 50% of gross income or average
                            deposits) on a bank statement loan must be
                            documented on purchase transactions
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Reserves
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>6 months' reserves required</li>
                          <li>
                            Cash Out Refinance may be used to satisfy
                            requirement
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Gift Funds
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Gift funds are eligible provided borrower meets the
                            minimum contribution:
                            <ul className="list-circle pl-6 mt-1 space-y-1">
                              <li>5% Primary Residence</li>
                              <li>10% Second Home</li>
                            </ul>
                          </li>
                          <li>Gift funds are ineligible for reserves</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Second Lien Select - Property Requirements */}
            <div id="second-lien-select-property" className="mb-8 scroll-mt-20">
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Second Lien Select - Property Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Property Type
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-3 font-medium">
                          Single Family, PUD or Townhome (Attached or Detached)
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>
                            Single Family Residence with 1 or more accessory
                            dwelling units (ADU) are eligible if subject
                            property is in a municipality that allows and 2
                            similar comparables are provided.
                          </li>
                        </ul>
                        <p className="mb-3 font-medium">Condos</p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>Warrantable & Non-Warrantable are eligible.</li>
                          <li>
                            Non-Warrantable Condominium: reduce 5% from matrix
                            LTV.
                          </li>
                          <li>Condominium leaseholds are ineligible</li>
                        </ul>
                        <p className="mb-3 font-medium">Condotels</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Ineligible</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Rural Properties
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Ineligible
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Declining Markets
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Declining markets, as identified by the appraiser,
                        require a 5% LTV reduction off Matrix Max LTV, when
                        &gt;65% LTV
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Appraisals
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Full interior/exterior appraisal required
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Acreage
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Max 20 acres Primary Residence & Second Home; max 5
                        acres Investment Properties
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* End of Second Lien Select */}

          {/* Foreign National */}
          <div
            id="foreign-national-overview"
            className="scroll-mt-20 mb-12 mt-16"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Foreign National Overview
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              The Foreign National Program is designed to cover a range of
              income documentation types, and other program specific options for
              the Foreign National Borrower. Refer to the Foreign National
              Matrix for specific program requirements.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm mb-6">
              <li>
                Foreign Nationals are eligible for DSCR (excluding Multi &
                Mixed) under the Foreign National Program.
              </li>
              <li>
                For Multi & Mixed-Use properties see the Multi & Mixed Program.
              </li>
            </ul>

            {/* Foreign National - General Requirements */}
            <div
              id="foreign-national-general-requirements"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Foreign National - General Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Exceptions
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Eligible
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Product Type
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>30 Year Fixed, 15 Year Fixed</li>
                          <li>
                            30 Year Fixed I/O (10 year I/O period, and remaining
                            term fully amortizing).
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Interest Only
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Eligible on 30-Yr Fixed I/O
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Loan Amounts
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Min: 150,000 and Max $3,000,000
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        2-1 Buydown
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Ineligible
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Occupancy
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            Full Doc/Alt Doc: Second home (1-Unit only) and
                            Investment Properties 1-4 Units
                          </li>
                          <li>
                            DSCR: Investment properties 1-4 Units (Business
                            Purpose)
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Loan Purpose
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Purchase, Rate & Term Refinance, and Cash Out Refinance
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Cash-Out
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>&gt; 55% LTV = $1,000,000; or</li>
                          <li>&le; 55% LTV = Unlimited</li>
                          <li>Condo and 2-4 Units = Max Cash LTV 65%</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Interested Party Contributions
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-2">Second homes:</p>
                        <ul className="list-disc pl-5 space-y-1 mb-3">
                          <li>&le; 75% LTV = 9%</li>
                        </ul>
                        <p className="mb-2">Investment:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>ALL = 6%</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        ACH Payment
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Automatic Payment Authorization (ACH) Form is
                            required for all foreign national borrowers. Funds
                            must be from a U.S. Bank.
                            <ul className="list-circle pl-6 mt-1 space-y-1">
                              <li>
                                The executed ACH enrollment for payment of
                                Principal, Interest, Taxes and Insurance must be
                                provided.
                              </li>
                              <li>
                                The ACH enrollment form must include the bank
                                routing number, account number, and account
                                type. Borrowers may select a date within the
                                grace period stated on the Note.
                              </li>
                            </ul>
                          </li>
                          <li>
                            To set up the Automatic Payment Authorization (ACH),
                            a copy of the borrower's canceled check to validate
                            the bank's routing and account number and the
                            executed ACH form are required prior to or no later
                            than closing.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Subordinate Financing
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Ineligible
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Insurance Requirements
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            In addition to property and title insurance, Rent
                            Loss Insurance for the subject property is required
                            and must equal at least 6 months of PITIA.
                          </li>
                          <li>
                            Rent Loss Insurance may be waived with three
                            additional months of PITIA reserves.
                          </li>
                          <li>
                            Blanket policies covering the subject property are
                            permitted.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Escrow Waivers
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Ineligible
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Prepayment Penalty
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Required where permitted for Investment Properties.
                        Refer to the "Business Purpose Licensing & PPP
                        Restrictions" PDF in the Documents Tab in the Client
                        Portal.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Age of Loan Documentation
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Credit: 120 days</li>
                          <li>Income and Assets: 90 days</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Foreign National - Borrower Eligibility */}
            <div
              id="foreign-national-borrower-eligibility"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Foreign National - Borrower Eligibility
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Borrower Eligibility
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            A Foreign National is a non-U.S. citizen that must
                            live and work in another country and be a legal
                            resident of that same country.
                          </li>
                          <li>
                            Borrowers may not purchase property intended for use
                            as a Primary Residence.
                          </li>
                          <li>
                            If a non-U.S. Citizen is borrowing with a U.S.
                            Citizen, Foreign National documentation requirements
                            still apply
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Documentation Requirements
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            If a non-U.S. Citizen is borrowing with a U.S.
                            Citizen, Foreign National documentation requirements
                            still apply.
                          </li>
                          <li>
                            The following documentation is required:
                            <ul className="list-disc pl-5 mt-1 space-y-1">
                              <li>
                                Copy of the borrower's valid and unexpired
                                passport and:
                              </li>
                              <li>
                                Copy of the borrower's unexpired visa OR an
                                I-797 form (Notice of Action) with valid
                                extension dates and I-94 Form (Arrival/Departure
                                Record), or
                              </li>
                              <li>
                                Borrowers from countries participating in the
                                State Department's Visa Waiver Program (VWP) are
                                not required to provide a valid visa.
                                <ul className="list-disc pl-5 mt-1">
                                  <li>
                                    Participating countries can be found at
                                    https://travel.state.gov/content/travel/en/U.S.-visas/tourism-visit/visa-waiver-program.html.
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            Citizens of Canada traveling to the United States do
                            not require a nonimmigrant visa.
                          </li>
                          <li>
                            A list of nonimmigrant Visa types is located on the
                            U.S. Department of State website:
                            <ul className="list-disc pl-5 mt-1">
                              <li>
                                https://travel.state.gov/content/travel/en/U.S.-visas/visa-information-resources/all-visa-categories.html
                              </li>
                            </ul>
                          </li>
                          <li>
                            All parties (Borrower's and Seller's) involved on
                            the transaction must be screened through
                            exclusionary lists and must be cleared through
                            OFAC's SND list:
                            <ul className="list-disc pl-5 mt-1">
                              <li>http://sdnsearch.ofac.treas.gov/</li>
                            </ul>
                          </li>
                          <li>
                            Borrowers from OFAC sanctioned countries are
                            ineligible:
                            <ul className="list-disc pl-5 mt-1">
                              <li>
                                http://www.treasury.gov/resourcecenter/sanctions/Programs/Pages/Programs.aspx
                              </li>
                            </ul>
                          </li>
                          <li>
                            Individuals with Diplomatic immunity are not
                            eligible. Immunity status is listed on the reverse
                            side of the U.S. issued ID card or at:
                            <ul className="list-disc pl-5 mt-1">
                              <li>
                                https://2009-2017.state.gov/s/cpr/rls/dpl//index.htm
                              </li>
                            </ul>
                          </li>
                          <li>
                            Documents signed outside of the United States must
                            be notarized by a U.S. embassy or consular official.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Non-Occupant Co-Borrower
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Eligible when the non-occupying co-borrower is a U.S.
                        Citizen taking title to the property
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        First Time Homebuyer (FTHB)
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Eligible
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Investor Experience
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Not Required
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Power of Attorney
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Ineligible
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Foreign National - Credit Requirements */}
            <div
              id="foreign-national-credit-requirements"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Foreign National - Credit Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Credit Score
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-2 font-semibold">U.S. Credit:</p>
                        <ul className="list-disc pl-5 space-y-1 mb-3">
                          <li>
                            A U.S. credit report should be obtained for each
                            borrower with a valid Social Security Number, and is
                            not required for borrowers without a SSN. When a
                            U.S. Credit report is obtained, the minimum credit
                            score is 700.
                          </li>
                          <li>
                            The primary borrower must have a valid credit score
                            from at least 2 of the following 3 agencies:
                            Experian (credit score), Transunion (Empirica), and
                            Equifax (Beacon). Only credit scores from these
                            agencies are acceptable.
                          </li>
                          <li>
                            Select the middle credit score when 3 scores are
                            provided and the lower credit score when only 2
                            credit scores are provided.
                          </li>
                        </ul>
                        <p className="mb-2 font-semibold">Foreign Credit:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            For borrowers without a valid Social Security
                            Number, an Individual Taxpayer Identification Number
                            (ITIN) is also eligible.
                          </li>
                          <li>
                            Borrowers who do not have an SSN or ITIN may still
                            proceed using Foreign Credit.
                          </li>
                          <li>
                            The URLA should be updated with 999-99-9999 in the
                            SSN field.
                          </li>
                          <li>All other Program requirements still apply.</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Tradelines
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-2 font-semibold">
                          Qualifying with U.S. Credit:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mb-3">
                          <li>
                            Minimum: 2 open and reporting 24 months, or 3 open
                            and reporting 12 months even if 3 credit scores are
                            available.
                          </li>
                        </ul>
                        <p className="mb-2 font-semibold">
                          Qualifying Foreign Credit:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-3">
                          <li>
                            A Qualifying Foreign Credit borrower may or may not
                            have a U.S. credit report with no credit score, a
                            single credit score, or a credit score with
                            insufficient tradelines.
                          </li>
                          <li>
                            Must establish an acceptable credit history
                            demonstrating either 2 open tradelines reporting for
                            2 years with activity in the most recent 12 months
                            displaying or three open trades with a 12+ month
                            rating. in either example trades must experience no
                            derogatory payments
                          </li>
                        </ul>
                        <p className="mb-2 font-semibold">
                          Qualifying Foreign Credit Tradeline Requirements can
                          be accomplished by any of the following:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-3">
                          <li>
                            Tradelines evidenced on an international credit
                            report if a U.S. credit report cannot be produced or
                            does not reflect sufficient trades; and/or
                          </li>
                          <li>
                            Alternative tradelines consisting of two credit
                            reference letter(s) from the borrower's country of
                            origin with the following information:
                            <ul className="list-disc pl-5 mt-1 space-y-1">
                              <li>
                                State the type and length of the relationship,
                                how the accounts are held, and status of the
                                account.
                              </li>
                              <li>
                                Contact information must be provided for the
                                person signing the letter; and
                              </li>
                              <li>
                                Any translation must be signed and dated by an
                                unaffiliated certified translator. Google
                                translator is not permitted.
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            If a Primary Residence is owned free and clear but
                            taxes and insurance are paid for 12 months, that can
                            be considered one of the tradelines.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Housing History
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>0x30x12</li>
                          <li>
                            CPA Letter – Free and Clear Property Form or other
                            evidence may be used as verification.
                          </li>
                          <li>
                            Property Tax and/or Property Insurance paid in full
                            annual invoice(s) may be used to validate housing
                            expenses.
                          </li>
                          <li>
                            Taxes and insurance must be included in the DTI,
                            unless evidence is provided to support taxes and/or
                            insurance does not exist.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Credit / Housing Event
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        4 years seasoning is required
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Foreign National - DTI and Residual Income Requirements */}
            <div
              id="foreign-national-dti-residual"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Foreign National - DTI and Residual Income Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        DTI Requirements
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Max 50% for Full Doc or Asset Utilization
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Residual Income
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Required on Second Homes only</li>
                          <li>
                            Defined as Gross Monthly Income less Total Monthly
                            Obligations.
                          </li>
                          <li>Requirement based on # in household</li>
                          <li>
                            Applies to HPML loans or when the DTI &gt; 43% on
                            Second Homes only:
                            <ul className="list-disc pl-5 mt-1 space-y-1">
                              <li>1 person = $1,500</li>
                              <li>2 people = $2,500</li>
                              <li>
                                Add $150 per additional household member
                                (related or unrelated)
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Foreign National - Income Requirements */}
            <div
              id="foreign-national-income-requirements"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Foreign National - Income Requirements
              </h4>

              <h5 className="font-semibold text-md mb-3 mt-6">
                Full Doc - Income Requirements
              </h5>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Wage Earners
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            Letter from employer on company letterhead providing
                            current monthly salary and YTD earnings, OR 2
                            months' pay stubs with YTD earnings.
                          </li>
                          <li>
                            Verification of earnings for the last 2 years
                            (letter from employer or W-2 equivalent).
                          </li>
                          <li>
                            Employer to be independently verified (via
                            LexisNexis, D&B International Business Search,
                            Google, or other means of verification).
                          </li>
                          <li>
                            An unaffiliated certified translator must translate
                            all documents.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Self-Employment
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Borrowers who have been self-employed for at least 2
                            years are eligible.
                          </li>
                          <li>
                            The following items must be obtained:
                            <ul className="list-disc pl-5 mt-1 space-y-1">
                              <li>
                                Letter from a CPA providing income for the last
                                2 years and year to date earnings.
                              </li>
                              <li>
                                Self-employed business and CPA are to be
                                independently verified (via Lexis Nexis, D&B
                                international business search, google, or other
                                means of verification).
                              </li>
                            </ul>
                          </li>
                          <li>
                            An unaffiliated certified translator must translate
                            all documents.
                          </li>
                          <li>
                            Verbal verification of employment is not required.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Rental Income
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            Evidence of borrower's ownership of the property
                          </li>
                          <li>
                            For a refinance and/or to document rental income on
                            other REOs:
                            <ul className="list-disc pl-5 mt-1 space-y-1">
                              <li>Lease agreement</li>
                              <li>
                                Two months of bank statements demonstrating
                                receipt of rental income.
                              </li>
                              <li>
                                Evidence the rental amount is at market rate,
                                which can be documented via a 1007 or through an
                                online source.
                              </li>
                              <li>
                                75% of the rental amount on the lease is used
                                for qualifying.
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h5 className="font-semibold text-md mb-3 mt-6">
                Alt Doc - Income Requirements
              </h5>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Asset Utilization
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            Eligible as a sole source of income or combined with
                            other income.
                          </li>
                          <li>
                            Eligible Qualified Assets must be seasoned for a
                            minimum of three (3) months.
                          </li>
                          <li>
                            Borrowers must have the lesser of:
                            <ul className="list-disc pl-5 mt-1 space-y-1">
                              <li>1.5 times the loan balance or</li>
                              <li>
                                $1,000,000 in Qualified Assets, both of which
                                must be net of down payment, closing costs, and
                                required reserves to qualify.
                              </li>
                            </ul>
                          </li>
                          <li>
                            Monthly Income Calculation:
                            <ul className="list-disc pl-5 mt-1">
                              <li>Net Qualified Assets / 60 months</li>
                            </ul>
                          </li>
                          <li>Foreign Assets are eligible.</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Foreign National - DSCR Ratio and Rental Income Requirements */}
            <div id="foreign-national-dscr-ratio" className="mb-8 scroll-mt-20">
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Foreign National - DSCR Ratio and Rental Income Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        DSCR Ratio
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Min 1.00</li>
                          <li>Min 1.15 Short Term Rentals</li>
                          <li>
                            DSCR Ratio Calculation:
                            <ul className="list-disc pl-5 mt-1">
                              <li>
                                Short or Long Term Gross Rental Income /PITIA
                                Fully Amortizing or ITIA (for IO Loans)
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Lease and Occupancy Requirements
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            All refinance transactions require the property to
                            be leased. Vacant properties are ineligible except
                            for:
                            <ul className="list-disc pl-5 mt-1 space-y-1">
                              <li>
                                Properties leased through short term rental
                                agencies; or
                              </li>
                              <li>
                                With evidence that property has been recently
                                rehabbed and is currently listed for rent.
                              </li>
                            </ul>
                          </li>
                          <li>
                            Property cannot be occupied by the borrower(s), any
                            member of the borrower's LLC or any family member.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Short Term Rentals (STR)
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-2 font-semibold">
                          Short Term Rentals:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mb-3">
                          <li>
                            Defined as properties leased on a nightly, weekly,
                            monthly, or seasonal basis.
                          </li>
                          <li>Min DSCR &gt;= 1.15</li>
                          <li>Max LTV: Lesser of 70% or the Matrix LTV/CLTV</li>
                          <li>
                            Evidence is required from a third party vendor (such
                            as Property Guard, Vrolio or equivalent) validating
                            that the governing municipality where the subject
                            property is located allows properties to be rented
                            as STRs
                          </li>
                        </ul>
                        <p className="mb-2 font-semibold">
                          Short Term Gross Rental Income:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mb-3">
                          <li>The following options are available:</li>
                          <li>1007/1025 or</li>
                          <li>
                            Alternative Short Term Rent Analysis form developed
                            by an AMC or
                          </li>
                          <li>
                            12-month look back on rents received using bank
                            statements or third party rental statements.
                          </li>
                          <li>
                            When using the 1007/1025 or alternative Short Term
                            Rent Analysis, the market rents must account for the
                            seasonality of the subject property's rents.
                          </li>
                        </ul>
                        <p className="mb-2 font-semibold">
                          Geographic Restrictions:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            Not permitted in the five (5) New York City Boroughs
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Long Term Rentals
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-2 font-semibold">
                          Long Term Gross Rental Income:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            If using the lesser of market rents or the lease,
                            nothing further is required.
                          </li>
                          <li>
                            If using a higher lease amount, evidence of 2 months
                            of receipt is required, and the lease must be within
                            120% of the market rents.
                          </li>
                          <li>
                            If the actual rent exceeds 120% of the market rents,
                            the rents are capped at 120%.
                          </li>
                          <li>
                            If using a higher estimated market rent from the
                            1007/1025, it must be within 120% of the lease
                            amount.
                          </li>
                          <li>
                            If the estimated market rent exceeds the lease by
                            more than 120%, the estimated market rent is capped
                            at 120%
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Foreign National - Asset and Reserve Requirements */}
            <div id="foreign-national-assets" className="mb-8 scroll-mt-20">
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Foreign National - Asset and Reserve Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Assets
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            30 days asset verification required for U.S. Based
                            Accounts; 60 days for Foreign Assets
                          </li>
                          <li>
                            Funds required for downpayment and closing costs
                            must be seasoned in a U.S. depository institution
                            for 10 days prior to closing unless funds are held
                            in a foreign bank with U.S. Based FDIC insured
                            branches OR wired directly to the closing agent
                          </li>
                          <li>
                            Funds used for reserves may be held in a foreign
                            account. The value of the asset must be converted to
                            U.S. dollars and include a printout of the current
                            exchange rate
                          </li>
                          <li>
                            Large deposits (&gt; 50% of gross income) must be
                            documented on Full and Alt Doc purchases.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Reserves
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>12 months of PITIA</li>
                          <li>6-months with 5% LTV reduction.</li>
                          <li>
                            Cash Out Refinance may be used to satisfy
                            requirements
                          </li>
                          <li>
                            Reserves are not required when using Asset
                            Utilization as sole source of income.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Gift Funds
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            Permitted after meeting minimum 10% borrower
                            contribution, regardless of LTV.
                          </li>
                          <li>
                            Max loan amount of $1,000,000 when there is a gift
                          </li>
                          <li>No maximum amount of donors</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Foreign National - Property Requirements */}
            <div id="foreign-national-property" className="mb-8 scroll-mt-20">
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Foreign National - Property Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Single Family, PUD, Townhome (Attached or Detached)
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Single family residences with 1 or more accessory
                        dwelling units(ADU) are eligible if subject property is
                        in a municipality that allows. The appraiser must
                        specifically confirm compliance with local regulations
                        and provide 2 similar comparables.
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Property Types - Condominiums and 2-4 Units
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Condos: Warrantable and Non-Warrantable</li>
                          <li>
                            Condos and 2-4 Units Max LTV/CLTV:
                            <ul className="list-disc pl-5 mt-1 space-y-1">
                              <li>Purchase and Rate & Term Refinance = 70%</li>
                              <li>Cash Out = 65%</li>
                            </ul>
                          </li>
                          <li>Condominium leaseholds are ineligible</li>
                          <li>
                            2-4 Units with 1 ADU are eligible if subject
                            property is in a municipality that allows. The
                            appraiser must specifically confirm compliance with
                            local regulations and provide 2 similar comparables.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Condotels
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <div className="mb-3">
                          <p className="font-semibold mb-2">
                            Full Doc Second Home & Investment Property Purchase
                            or Rate & Term Refinance:
                          </p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Max 70% LTV</li>
                          </ul>
                        </div>
                        <div className="mb-3">
                          <p className="font-semibold mb-2">
                            Full Doc Second Home & Investment Property
                            (including Business Purpose Loans):
                          </p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Max 60% LTV</li>
                          </ul>
                        </div>
                        <div className="mb-3">
                          <p className="font-semibold mb-2">
                            DSCR Purchase or Rate & Term Refinance:
                          </p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Max 65% LTV</li>
                          </ul>
                        </div>
                        <div className="mb-3">
                          <p className="font-semibold mb-2">
                            DSCR Cash Out Refinance:
                          </p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Max 60% LTV</li>
                          </ul>
                        </div>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Max Loan Amount $1,500,000</li>
                          <li>Must have full kitchen & 1 separate bedroom.</li>
                          <li>
                            Must be in a resort area or affiliated with a
                            national hotel chain.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Multi-Family and Mixed-Use
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Refer to the DSCR Multi & Mixed Program
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Rural Properties
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Ineligible</li>
                          <li>
                            Websites such as the below will be reviewed to
                            analyze whether the property should be classified as
                            rural and subject to rural guidelines.
                            <ul className="list-disc pl-5 mt-1">
                              <li>
                                https://www.consumerfinance.gov/rural-or-underserved-tool/
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Declining Markets
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Declining markets, as identified by the appraiser,
                        require a 5% LTV reduction off Matrix Max LTV when
                        &gt;65% LTV
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Appraisals
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Full interior/exterior appraisal required</li>
                          <li>
                            Second appraisal required for loan amounts &gt; $2M
                          </li>
                          <li>
                            DSCR:
                            <ul className="list-disc pl-5 mt-1">
                              <li>
                                C3 condition rating is generally required;
                                Properties with a C4 rating must be sufficiently
                                justified to determine marketability and
                                acceptance.
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Acreage
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Max 2 acres
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* End of Foreign National */}
        </section>

        <section id="dscr-programs" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold border-b-2 border-gray-200 pb-4 mb-6">
            DSCR Programs
          </h2>

          <div className="prose prose-sm max-w-none space-y-6 mb-12">
            <p className="text-sm leading-relaxed">
              DSCR Programs are designed for investment property loans that are
              designated for business purpose only.
            </p>
          </div>

          {/* DSCR General Requirements */}
          <div id="dscr-general-requirements" className="scroll-mt-20 mb-12">
            <h3 className="text-2xl font-semibold mb-4">
              DSCR General Requirements
            </h3>
            <p className="text-sm leading-relaxed mb-6">
              The following requirements apply to all DSCR transactions.
            </p>

            <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
              <table className="w-full text-sm border-collapse">
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                      Forms and Affidavits
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          Business Purpose & Occupancy Affidavit (all borrowers
                          are required to sign to declare that the property is,
                          or will be, for commercial business or investment
                          purposes only)
                        </li>
                        <li>
                          Business Rider to the Mortgage/Deed of Trust: Applies
                          to Retail and Wholesale channel transactions only.
                        </li>
                        <li>
                          Compliance Agreement – DSCR Loans: NQMF, Compliance
                          Agreement, or Client's equivalent document will be
                          required (In which the borrower(s) agree(s) to furnish
                          the Lender and its successors and/or assigns with
                          current copies of all Lease Agreements within a
                          reasonable time upon request.)
                        </li>
                        <li>
                          1-4 Family Rider/Assignment of Rents (FNMA Form 3170)
                        </li>
                        <li>Guaranty (if applicable)</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                      Fraud and Background Check
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          A third-party fraud detection report for all borrowers
                          and/or guarantors is required.
                        </li>
                        <li>
                          Report findings must cover standard areas of quality
                          control including, but not limited to borrower
                          validation, social security number verification,
                          criminal records, and property information (subject
                          property and other real estate owned).
                        </li>
                        <li>
                          All high-level alerts on the report must be addressed.
                        </li>
                        <li>
                          The fraud check should also include occupancy status
                          to assist in the validation and endorsement of the
                          Business Purpose & Occupancy Affidavit.
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                      Vesting and Ownership
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      <p className="mb-2">Acceptable forms of vesting are:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Individuals</li>
                        <li>Joint tenants</li>
                        <li>
                          Tenants in Common (No Ratio Program - only permitted
                          if all borrowers match the actual borrowers on the
                          loan.)
                        </li>
                        <li>Inter Vivos Revocable Trust</li>
                        <li>
                          Business Entity
                          <ul className="list-disc pl-5 mt-1">
                            <li>Limited Liability Company (LLC)</li>
                            <li>Limited and General Partnerships</li>
                            <li>Corporations</li>
                            <li>S Corporations</li>
                          </ul>
                        </li>
                      </ul>
                      <p className="mt-2">
                        Note: Only individuals can be borrowers. The other
                        entities listed above relate only to an ownership
                        interest in the subject property
                      </p>
                      <p className="mt-2">
                        Vesting in non-profit entity is not permitted
                      </p>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                      Power of Attorney
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      <p className="mb-2">
                        A Limited Power of Attorney (POA) is acceptable when
                        following requirements are met:
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>POA is specific to the transaction</li>
                        <li>Recorded with the mortgage/deed of trust</li>
                        <li>Contains an expiration date</li>
                        <li>Used only to execute the final loan documents</li>
                        <li>
                          Borrower who executed the POA signed the initial 1003
                        </li>
                      </ul>
                      <p className="mt-2">
                        No interested party to the transaction (such as property
                        seller, broker, loan officer, realtor, etc.) may
                        function as Power of Attorney
                      </p>
                      <ul className="list-disc pl-5 space-y-1 mt-2">
                        <li>Not permitted on cash-out transactions</li>
                        <li>
                          Not permitted on loans vesting in the name of an
                          Entity
                        </li>
                        <li>Not permitted on Foreign National transactions</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                      Application
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      The application must include the subject property (when
                      the transaction is a refinance) along with the borrower's
                      Primary Residence on the Schedule of Real Estate owned.
                      Other properties owned by the borrower are not required to
                      be disclosed on the application
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                      Credit Inquiries
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      An inquiry explanation is not required
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* DSCR Supreme */}
          <div id="dscr-supreme-overview" className="scroll-mt-20 mb-12 mt-16">
            <h3 className="text-2xl font-semibold mb-4">
              DSCR Supreme Overview
            </h3>
            <p className="text-sm leading-relaxed mb-6">
              The DSCR Supreme Program is designed for the most qualified
              borrowers from a credit standpoint, with less complex
              transactions. Refer to the DSCR Supreme Matrix for specific
              program requirements.
            </p>

            {/* DSCR Supreme - General Requirements */}
            <div
              id="dscr-supreme-general-requirements"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                DSCR Supreme - General Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Exceptions
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Ineligible
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Product Type
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>30 Year Fixed Fully Amortizing</li>
                          <li>
                            30 Year Fixed I/O (10 year I/O period, and remaining
                            term fully amortizing)
                          </li>
                          <li>
                            40 Year Fixed I/O (10 year I/O period, and remaining
                            term fully amortizing)
                          </li>
                          <li>5/6 & 7/6 SOFR ARMs – 30 Year Terms Only</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Interest Only
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Borrower to qualify using the I/O payment based on the
                        qualifying rate.
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Loan Amounts
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Min $150,000 - Max $2,000,000
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Interested Party Contributions
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Max 6%
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Subordinate Financing
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Ineligible
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Occupancy
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Investment Properties Business Purpose ONLY
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Loan Purpose
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Purchase, Rate & Term Refinance, and Cash Out Refinance
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        2-1 Buydown
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Ineligible
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Cash-Out
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-2">
                          Minimum of 6 months seasoning from most recent
                          transaction, with the exception of delayed financing.
                        </p>
                        <p className="mb-2">Max Cash in hand:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            LTV {">"} 60% = $1,000,000 or when DSCR is {">"}=.75
                            unlimited Cash Out Refinance permitted with 18
                            months reserves exclusive of cash back
                          </li>
                          <li>LTV {"<"}= 60% = Unlimited</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Insurance Requirements
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-2">
                          In addition to property and title insurance, Rent Loss
                          Insurance for the subject property is required and
                          must equal at least 6 months of PITIA.
                        </p>
                        <p className="mb-2">
                          Rent Loss Insurance may be waived with three
                          additional months of PITIA reserves.
                        </p>
                        <p>
                          Blanket policies covering the subject property are
                          eligible.
                        </p>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Escrow Waivers
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-2">
                          Waiving escrows is eligible as follows:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>0x30x12 mortgage/housing history</li>
                          <li>Maximum LTV 80%</li>
                          <li>Minimum score 660</li>
                          <li>
                            Flood Insurance premiums for properties located in
                            zones A or V must be escrowed. Note that it is
                            permissible to waive taxes and insurance escrows in
                            these instances when the above requirements are met
                            and the loan is priced with an escrow waiver. In
                            addition, elective flood policies are not required
                            to be escrowed.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Prepayment Penalty
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Required where permitted. Refer to the "Business Purpose
                        Licensing & PPP Restrictions" PDF in the Documents Tab
                        in the Client Portal.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Age of Loan Documentation
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Credit: 120 days</li>
                          <li>Assets: 90 days</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* DSCR Supreme - Borrower Eligibility */}
            <div
              id="dscr-supreme-borrower-eligibility"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                DSCR Supreme - Borrower Eligibility
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="px-6 py-3 text-left font-semibold text-foreground w-1/4"></th>
                      <th className="px-6 py-3 text-left font-semibold text-foreground">
                        Eligible:
                      </th>
                      <th className="px-6 py-3 text-left font-semibold text-foreground">
                        Ineligible:
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Borrower Eligibility
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>U.S. Citizens</li>
                          <li>Permanent Resident Aliens</li>
                          <li>Non-Permanent Resident Aliens</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>ITIN</li>
                          <li>DACA</li>
                          <li>
                            LLCs, partnerships, or corporations (may qualify for
                            vesting only)
                          </li>
                          <li>
                            Trusts or Land Trusts (trusts may qualify for
                            ownership vesting only)
                          </li>
                          <li>Foreign Nationals</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        First Time Homebuyer (FTHB)
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Ineligible
                      </td>
                      <td className="px-6 py-4 text-muted-foreground"></td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Investor Experience
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Min DSCR 1.00
                      </td>
                      <td className="px-6 py-4 text-muted-foreground"></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Entity Vesting
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Eligible per Guide.
                      </td>
                      <td className="px-6 py-4 text-muted-foreground"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* DSCR Supreme - Credit Requirements */}
            <div
              id="dscr-supreme-credit-requirements"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                DSCR Supreme - Credit Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Credit Score
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-2">Minimum credit score is 720</p>
                        <p className="mb-2">
                          The Representative Score is as follows:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Lowest middle score of all borrowers</li>
                          <li>A minimum of 2 scores required</li>
                          <li>
                            Borrowers with three credit scores: use the lowest
                            middle score of all borrowers to qualify
                          </li>
                          <li>
                            Borrowers with 2 credit scores: use the lower of the
                            two scores to qualify
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Tradelines
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-2">All borrowers have 3 scores OR:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Minimum 2 open and reporting 24 months; OR</li>
                          <li>3 open and reporting 12 months; OR</li>
                          <li>24-months mortgage rating reporting on credit</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Evidence of Primary Residence
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-2">
                          All borrowers must presently maintain a Primary
                          Residence
                        </p>
                        <p className="mb-2">
                          Borrowers who own a Primary Residence must provide
                          proof of ownership or evidence they are living in a
                          property owned or rented by their spouse/domestic
                          partner
                        </p>
                        <p className="mb-2">
                          Mortgage and/or rental payments on the subject and
                          Primary Residence not reflected on the original credit
                          report must be documented via an institutional
                          third-party (Verification of Rent or Verification of
                          Mortgage - VOR/VOM)
                        </p>
                        <p className="mb-2">
                          Borrowers who rent a Primary Residence must provide
                          evidence of an active lease in place
                        </p>
                        <p className="mb-2">
                          Primary Residence should be supported by one of the
                          following characteristics:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            In a different geographical location from the
                            subject property; or
                          </li>
                          <li>
                            General appeal and location of the Primary Residence
                            is superior to subject property
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Housing History
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        0x30x12
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Rent Free
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-2">
                          Rent-free circumstances in which the borrower is not
                          residing with their spouse/domestic partner, will be
                          considered as follows:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Refinance transactions: provided the borrower has an
                            established address supported by a rent-free letter
                            from the property owner and there is no suggestion
                            of occupancy in the subject property.
                          </li>
                          <li>
                            Purchase transactions:
                            <ul className="list-disc pl-5 mt-1">
                              <li>
                                When the subject property is in a different
                                geographic area from the residence, or
                              </li>
                              <li>
                                The borrower is an experienced investor with
                                existing REOs
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Credit/Housing Events
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-2">
                          Borrowers with significant derogatory credit events
                          must meet the following criteria:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            All borrowers must have reestablished acceptable
                            credit verified after the credit event.
                          </li>
                          <li>
                            Borrowers with unrelated multiple significant credit
                            events are ineligible
                          </li>
                          <li>
                            Minimum 4 years must have elapsed from the date of
                            the credit event
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* DSCR Supreme - DSCR Ratio and Rental Income Requirements */}
            <div
              id="dscr-supreme-dscr-ratio-rental-income"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                DSCR Supreme - DSCR Ratio and Rental Income Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        DSCR Ratio
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Min 1.00</li>
                          <li>Min 1.15 Short Term Rentals</li>
                          <li>Min 1.00 First Time Investors</li>
                          <li>
                            An experienced investor must have a history of
                            owning and managing commercial or residential real
                            estate for at least 1 year in the last 3 years,
                            otherwise the borrower is considered a first time
                            investor.
                          </li>
                          <li>
                            DSCR Ratio = Gross Rental Income /PITIA Fully
                            Amortizing or ITIA (for IO Loans).
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Lease and Occupancy Requirements
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="font-semibold mb-2">
                          General Requirements:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>
                            For all purchase transactions, it is acceptable for
                            property to be vacant; gross market rents from the
                            1007 / 1025 will be used.
                            <ul className="list-disc pl-5 mt-1">
                              <li>
                                If the property is currently tenant occupied,
                                the 1007/1025 must reflect the terms of the
                                current lease
                              </li>
                            </ul>
                          </li>
                          <li>
                            All refinance transactions require the property to
                            be leased. Vacant property is not eligible except
                            for:
                            <ul className="list-disc pl-5 mt-1">
                              <li>
                                Properties leased through short term rental
                                agencies; or
                              </li>
                              <li>
                                With evidence that property has been recently
                                rehabbed and is currently listed for rent, or
                              </li>
                              <li>Delayed Financing.</li>
                            </ul>
                          </li>
                          <li>
                            Property cannot be occupied by the borrower(s), any
                            member of the borrower's LLC or any family member.
                          </li>
                        </ul>
                        <p className="font-semibold mb-2">
                          Short Term Rentals (STR):
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>
                            Defined as properties leased on a nightly, weekly,
                            monthly, or seasonal basis.
                          </li>
                          <li>Min DSCR {">"}= 1.15</li>
                          <li>Max LTV: Lesser of 75% or the Matrix LTV/CLTV</li>
                          <li>
                            Evidence is required from a third party vendor (such
                            as Property Guard, Vrolio or equivalent) validating
                            that the governing municipality where the subject
                            property is located allows properties to be rented
                            as STRs
                          </li>
                          <li>
                            1007/1025 or Alternative Short Term Rental Analysis
                            developed by an AMC is required, regardless of how
                            the STR income is computed.
                          </li>
                          <li>
                            Short Term Gross Rental Income Options:
                            <ul className="list-disc pl-5 mt-1">
                              <li>1007/1025 or</li>
                              <li>
                                Alternative Short Term Rent Analysis form
                                developed by an AMC or
                              </li>
                              <li>
                                12-month look back on rents received using bank
                                statements or third party rental statements
                              </li>
                            </ul>
                          </li>
                          <li>
                            When using the 1007/1025 or alternative Short Term
                            Rent Analysis, the market rents must account for the
                            seasonality of the subject property's rents.
                          </li>
                          <li>
                            Geographic Restrictions:
                            <ul className="list-disc pl-5 mt-1">
                              <li>
                                Not permitted in the five (5) New York City
                                Boroughs
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <p className="font-semibold mb-2">Long Term Rentals</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Monthly gross rents are calculated as follows:
                            <ul className="list-disc pl-5 mt-1">
                              <li>
                                If using the lesser of market rents or the
                                lease, nothing further is required
                              </li>
                              <li>
                                If using a higher lease amount, evidence of 2
                                months of receipt is required, and the lease
                                must be within 120% of the market rents. If the
                                actual rent exceeds 120% of the market rents,
                                the rents are capped at 120%.
                              </li>
                              <li>
                                If using a higher estimated market rent from the
                                1007/1025, it must be within 120% of the lease
                                amount. If the estimated market rent exceeds the
                                lease by more than 120%, the estimated market
                                rent is capped at 120%
                              </li>
                            </ul>
                          </li>
                          <li>
                            Refinance:
                            <ul className="list-disc pl-5 mt-1">
                              <li>
                                FNMA 1007/1025 required, along with one (1) of
                                the following:
                                <ul className="list-disc pl-5 mt-1">
                                  <li>
                                    Executed lease with no less than 1 month
                                    remaining at time of closing is required for
                                    all units in the subject property.
                                  </li>
                                  <li>
                                    Month-to-month tenancy is not subject to
                                    this requirement with sufficient evidence
                                    (such as a signed extension letter, or 1007,
                                    which includes a review of the current lease
                                    confirming month-to-month)
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* DSCR Supreme - Asset and Reserve Requirements */}
            <div
              id="dscr-supreme-asset-reserve-requirements"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                DSCR Supreme - Asset and Reserve Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Assets
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>30-day asset verification required</li>
                          <li>Atypical deposits do not need to be sourced</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Reserves
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-2">
                          Reserves PITIA or ITIA, as applicable:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>{"<"}= $500,000 = 3 months</li>
                          <li>{">"} $500,000 to $2,000,000 = 6 months</li>
                        </ul>
                        <p className="mt-2">
                          Cash Out proceeds can be used to satisfy reserves
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Gift Funds
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            Permitted after meeting 10% minimum borrower
                            contribution, regardless of LTV.
                          </li>
                          <li>Cannot be used to meet reserve requirements.</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* DSCR Supreme - Property Requirements */}
            <div
              id="dscr-supreme-property-requirements"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                DSCR Supreme - Property Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Property Type
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="font-semibold mb-2">
                          Single Family, PUD or Townhome (Attached or Detached)
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mb-4">
                          <li>
                            Single Family properties with 1 or more accessory
                            dwelling units (ADU) are permitted if subject
                            property is in a municipality that allows;
                          </li>
                          <li>
                            The appraiser must specifically confirm compliance
                            with local regulations and provide 2 similar
                            comparables.
                          </li>
                          <li>Max 75% LTV</li>
                        </ul>
                        <p className="font-semibold mb-2">Warrantable Condos</p>
                        <ul className="list-disc pl-5 space-y-1 mb-4">
                          <li>Condominium leaseholds are ineligible</li>
                          <li>Reduce Matrix LTV by 5%</li>
                        </ul>
                        <p className="font-semibold mb-2">2-4 Units</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            2-4 units with 1 ADU are permitted provided the
                            subject property is in a municipality that allows;
                          </li>
                          <li>
                            The appraiser must specifically confirm compliance
                            with local regulations and provide 2 similar
                            comparables
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Rural Properties
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-2">Ineligible</p>
                        <p className="mb-2">
                          Websites such as the below will be reviewed to analyze
                          whether the property should be classified as rural and
                          subject to rural guidelines.
                        </p>
                        <ul className="list-disc pl-5">
                          <li>
                            https://www.consumerfinance.gov/rural-or-underserved-tool/
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Appraisals
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            Appraisal Review Product to be ordered on all loans
                            with a FNMA SSR over 2.5 unless there is a second
                            appraisal
                          </li>
                          <li>
                            1007/1025 or Short Term Rental Analysis developed by
                            the AMC is required
                          </li>
                          <li>
                            Second appraisal required for all loan amounts {">"}{" "}
                            $2.0M
                          </li>
                          <li>
                            C3 condition rating is generally required;
                            Properties with a C4 rating must be sufficiently
                            justified to determine marketability and acceptance.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Declining Markets
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Declining markets, as identified by the appraiser,
                        require a 5% LTV reduction off Matrix Max LTV when {">"}
                        65% LTV
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Acreage
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Max 2 acres; Acreage and land value must be typical and
                        common for the subject's market.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* End of DSCR Supreme */}

          {/* Investor DSCR */}
          <div id="investor-dscr-overview" className="scroll-mt-20 mb-12 mt-16">
            <h3 className="text-2xl font-semibold mb-4">
              Investor DSCR Overview
            </h3>
            <p className="text-sm leading-relaxed mb-6">
              The Investor DSCR Program is designed to cover the widest range of
              options available to the DSCR investor. Refer to the Investor DSCR
              Matrix for Matrix for specific program requirements.
            </p>

            {/* Investor DSCR - General Requirements */}
            <div
              id="investor-dscr-general-requirements"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Investor DSCR - General Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Exceptions
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Permitted
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Product Type
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>30 Year and 15 Year Fixed</li>
                          <li>
                            40-Year Fixed I/O (10 year I/O period, and remaining
                            term fully amortizing) - Max 75% LTV
                          </li>
                          <li>
                            30-Yr Fixed I/O (10 year I/O period, and remaining
                            term fully amortizing) - Max 80% LTV
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Interest Only
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            Minimum Credit Score: 660 when DSCR {">"}= 1.00
                          </li>
                          <li>
                            Minimum Credit Score: 700 when DSCR {"<"} 1.00
                          </li>
                          <li>
                            Borrower to qualify using the IO payment based on
                            the qualifying rate.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Loan Amounts
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Minimum: $75,000 and Max $3,000,000</li>
                          <li>
                            Loan Amounts $75,000 to {"<"} $125,000: 1.00 DSCR
                            Required
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Interested Party Contributions
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">6%</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Subordinate Financing
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Not Permitted
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Occupancy
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Investment Properties (Business Purpose)
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Loan Purpose
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Purchase, Rate & Term Refinance, and Cash Out Refinance
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        2-1 Buydown
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Purchase Only</li>
                          <li>Seller Paid Buydown/Concession</li>
                          <li>Minimum Score 680</li>
                          <li>Minimum DSCR {">"}= .75</li>
                          <li>
                            Borrower qualifies at fully amortized rate
                            (pre-buydown)
                          </li>
                          <li>
                            Lender Paid or 3rd Party Paid Buydown (Excluding
                            Real Estate Agents, Brokerages, Borrower, or
                            relatives) permitted for Correspondent Clients only
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Investor DSCR - Borrower Eligibility */}
            <div
              id="investor-dscr-borrower-eligibility"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Investor DSCR - Borrower Eligibility
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="px-6 py-3 text-left font-semibold text-foreground w-1/4"></th>
                      <th className="px-6 py-3 text-left font-semibold text-foreground">
                        Eligible:
                      </th>
                      <th className="px-6 py-3 text-left font-semibold text-foreground">
                        Ineligible:
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Borrower Eligibility
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>U.S. Citizens</li>
                          <li>Permanent Resident Aliens</li>
                          <li>
                            Non-Permanent Resident Alien (U.S. Credit only)
                          </li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>ITIN</li>
                          <li>DACA</li>
                          <li>
                            Foreign National (Eligible under the Foreign
                            National Program)
                          </li>
                          <li>
                            LLCs, partnerships, or corporations (may qualify for
                            vesting only)
                          </li>
                          <li>
                            Trusts or Land Trusts (trusts may qualify for
                            ownership vesting only)
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        First Time Homebuyer (FTHB)
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Eligible with an established primary residence
                      </td>
                      <td className="px-6 py-4 text-muted-foreground"></td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Investor Experience
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Not Required
                      </td>
                      <td className="px-6 py-4 text-muted-foreground"></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Entity Vesting
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Eligible
                      </td>
                      <td className="px-6 py-4 text-muted-foreground"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Investor DSCR - Credit Requirements */}
            <div
              id="investor-dscr-credit-requirements"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Investor DSCR - Credit Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Credit Score
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Minimum credit score is 660</li>
                          <li>
                            The Representative Score is the lowest middle score
                            of all borrowers
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Tradelines
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-2">All borrowers have 3 scores OR:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Minimum 2 open and reporting 24 months; OR</li>
                          <li>3 open and reporting 12 months; OR</li>
                          <li>24-months mortgage rating reporting on credit</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Evidence of Primary Residence
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            All borrowers must presently maintain a Primary
                            Residence
                          </li>
                          <li>
                            Borrowers who own a Primary Residence must provide
                            proof of ownership or evidence they are living in a
                            property owned or rented by their spouse/domestic
                            partner.
                          </li>
                          <li>
                            Borrowers who rent a Primary Residence must provide
                            evidence of an active lease in place
                          </li>
                          <li>
                            Primary Residence should be supported by one of the
                            following characteristics:
                            <ul className="list-disc pl-5 mt-1">
                              <li>
                                In a different geographical location from the
                                subject property; or
                              </li>
                              <li>
                                General appeal and location of the Primary
                                Residence is superior to subject property
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Housing History
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>0x30x12 No LTV reduction</li>
                          <li>1x30x12 - 5% LTV reduction</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Rent Free
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-2">
                          Rent-free circumstances in which the borrower is not
                          residing with their spouse/domestic partner, will be
                          considered as follows:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Refinance transactions, provided the borrower has an
                            established address supported by a rent-free letter
                            from the property owner and there is no suggestion
                            of occupancy in the subject property.
                          </li>
                          <li>
                            Purchase transactions:
                            <ul className="list-disc pl-5 mt-1">
                              <li>
                                When the subject property is in a different
                                geographic area from the residence, or
                              </li>
                              <li>
                                The borrower is an experienced investor with
                                existing REOs
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Credit/Housing Event
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-2">
                          {">"}=36 Months: No LTV reductions
                        </p>
                        <p className="mb-2">{">"}=24 Months:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Max 75% LTV Purchase</li>
                          <li>Max 70% LTV Rate & Term Refinance & Cash Out</li>
                          <li>
                            Discharged Chapter 13, use filing date; minimum 1
                            year discharged
                          </li>
                          <li>Dismissed Chapter 13, use dismissal date</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Investor DSCR - DSCR & Rental Income Requirements */}
            <div
              id="investor-dscr-dscr-rental-income"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Investor DSCR - DSCR & Rental Income Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        DSCR Ratio
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            Loan amounts {">"}= $75,000 - {"<"} $125,000 require
                            a minimum DSCR of 1.00
                          </li>
                          <li>
                            Loan amounts {">"}= $125,000 require a minimum DSCR
                            of .75
                          </li>
                          <li>Minimum DSCR .75</li>
                          <li>Short Term Rentals minimum DSCR {">"}= 1.15</li>
                          <li>
                            Debt-Service Coverage Ratio = Gross Rental Income
                            /PITIA Fully Amortizing or ITIA (for IO Loans)
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Lease and Occupancy Requirements
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="font-semibold mb-2">
                          General Requirements:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>
                            For all purchase transactions, it is acceptable for
                            property to be vacant; gross market rents from the
                            1007 / 1025 will be used.
                            <ul className="list-disc pl-5 mt-1">
                              <li>
                                If the property is currently tenant occupied,
                                the 1007/1025 must reflect the terms of the
                                current lease
                              </li>
                            </ul>
                          </li>
                          <li>
                            All refinance transactions require the property to
                            be leased. Vacant property is not eligible except
                            for:
                            <ul className="list-disc pl-5 mt-1">
                              <li>
                                Properties leased through short term rental
                                agencies; or
                              </li>
                              <li>
                                With evidence that property has been recently
                                rehabbed and is currently listed for rent; or
                              </li>
                              <li>Delayed Financing.</li>
                            </ul>
                          </li>
                          <li>
                            Property cannot be occupied by the borrower(s), any
                            member of the borrower's LLC or any family member.
                          </li>
                        </ul>
                        <p className="font-semibold mb-2">
                          Short Term Rentals (STR):
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>
                            Defined as properties leased on a nightly, weekly,
                            monthly, or seasonal basis.
                          </li>
                          <li>Min DSCR {">"}= 1.15</li>
                          <li>Max LTV: Lesser of 75% or the Matrix LTV/CLTV</li>
                          <li>
                            Evidence is required from a third party vendor (such
                            as Property Guard, Vrolio or equivalent) validating
                            that the governing municipality where the subject
                            property is located allows properties to be rented
                            as STRs
                          </li>
                          <li>
                            1007/1025 or Alternative Short Term Rental Analysis
                            developed by an AMC is required, regardless of how
                            the STR income is computed
                          </li>
                          <li>
                            Short Term Gross Rental Income options:
                            <ul className="list-disc pl-5 mt-1">
                              <li>1007/1025 or</li>
                              <li>
                                Alternative Short Term Rent Analysis form
                                developed by an AMC or
                              </li>
                              <li>
                                12-month look back on rents received using bank
                                statements or third party rental statements
                              </li>
                            </ul>
                          </li>
                          <li>
                            When using the 1007/1025 or alternative Short Term
                            Rent Analysis, the market rents must account for the
                            seasonality of the subject property's rents.
                          </li>
                          <li>
                            Geographic Restrictions:
                            <ul className="list-disc pl-5 mt-1">
                              <li>
                                Not permitted in the five (5) New York City
                                Boroughs
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <p className="font-semibold mb-2">Long Term Rentals</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Monthly gross rents are calculated as follows:
                            <ul className="list-disc pl-5 mt-1">
                              <li>
                                If using the lesser of market rents or the
                                lease, nothing further is required
                              </li>
                              <li>
                                If using a higher lease amount, evidence of 2
                                months of receipt is required, and the lease
                                must be within 120% of the market rents. If the
                                actual rent exceeds 120% of the market rents,
                                the rents are capped at 120%
                              </li>
                              <li>
                                If using a higher estimated market rent from the
                                1007/1025, it must be within 120% of the lease
                                amount. If the estimated market rent exceeds the
                                lease by more than 120%, the estimated market
                                rent is capped at 120%
                              </li>
                            </ul>
                          </li>
                          <li>
                            Refinance:
                            <ul className="list-disc pl-5 mt-1">
                              <li>
                                FNMA 1007/1025 required, along with one (1) of
                                the following:
                                <ul className="list-disc pl-5 mt-1">
                                  <li>
                                    Executed lease with no less than 1 month
                                    remaining at time of closing is required for
                                    all units in the subject property.
                                  </li>
                                  <li>
                                    Month-to-month tenancy is not subject to
                                    this requirement with sufficient evidence
                                    (such as a signed extension letter, or 1007,
                                    which includes a review of the current lease
                                    confirming month-to-month)
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Investor DSCR - Asset and Reserve Requirements */}
            <div
              id="investor-dscr-asset-reserve-requirements"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Investor DSCR - Asset and Reserve Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Assets
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>30-day asset verification required</li>
                          <li>
                            Atypical deposits do not need to be sourced on DSCR
                            transactions
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Reserves
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            Loan Amount to $500,000 and {"<"}=80% LTV = 3 months
                            of PITIA
                          </li>
                          <li>
                            Loan Amount to $500,000 and {">"} 80% LTV = 6 months
                            of PITIA
                          </li>
                          <li>
                            Loan Amount {">"}$500,000 to $2,000,000 = 6 months
                            of PITIA
                          </li>
                          <li>
                            Loan Amount {">"} $2,000,000 = 12 months of PITIA
                          </li>
                          <li>
                            2-4 Units at 80% LTV requires greater of 6 months or
                            reserves indicated above.
                          </li>
                          <li>
                            Cash Out Refinance may be used to satisfy
                            requirement
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Gift Funds
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            Permitted after meeting minimum 10% borrower
                            contribution regardless of LTV.
                          </li>
                          <li>Cannot be used to meet reserve requirements</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Investor DSCR - Property Requirements */}
            <div
              id="investor-dscr-property-requirements"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Investor DSCR - Property Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Property Types
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="font-semibold mb-2">
                          Single Family, PUD or Townhouse (Attached or Detached)
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>
                            Single family properties with 1 or more accessory
                            dwelling units (ADU) or 2-4 units with 1 ADU are
                            eligible if subject property is in a municipality
                            that allows. The appraiser must specifically confirm
                            compliance with local regulations and provide 2
                            similar comparables.
                          </li>
                          <li>
                            2 Units - Refinance:
                            <ul className="list-disc pl-5 mt-1">
                              <li>Max LTV: 80%</li>
                            </ul>
                          </li>
                          <li>
                            3-4 Units - Refinance:
                            <ul className="list-disc pl-5 mt-1">
                              <li>{">"}= 1.00 DSCR = Max LTV 75%</li>
                              <li>{"<"} 1.00 DSCR = Max LTV 70%</li>
                            </ul>
                          </li>
                          <li>
                            Ineligible for {">"} 80% LTV Purchase and Rate &
                            Term Refinance:
                            <ul className="list-disc pl-5 mt-1">
                              <li>720+ credit score / Max 80%</li>
                              <li>{"<"}720 credit score / Max 75%</li>
                            </ul>
                            Cash Out Refinance
                            <ul className="list-disc pl-5 mt-1">
                              <li>720+ credit score / Max 75%</li>
                              <li>{"<"} 720 credit score / Max 70%</li>
                            </ul>
                          </li>
                        </ul>
                        <p className="font-semibold mb-2">
                          Condos (Warrantable and Non-Warrantable)
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>
                            Condominium leaseholds are ineligible Purchase or
                            Rate & Term Refinance:
                            <ul className="list-disc pl-5 mt-1">
                              <li>700 credit core / Max LTV 70%</li>
                              <li>680 credit score / Max LTV 65%</li>
                            </ul>
                            Cash Out Refinance:
                            <ul className="list-disc pl-5 mt-1">
                              <li>700 credit score / Max LTV 65%</li>
                              <li>680 credit score / Max LTV 60%</li>
                            </ul>
                          </li>
                        </ul>
                        <p className="font-semibold mb-2">Condotels</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Min DSCR {">"}= .75</li>
                          <li>Max Loan Amount: $1,500,000</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Rural Properties
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-2">
                          Properties in a resort area will only be considered as
                          follows:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mb-3">
                          <li>Maximum LTV of 65% and</li>
                          <li>Min DSCR {">"}= 1.00</li>
                          <li>
                            Examples of acceptable resort areas include beach
                            towns, ski resort areas, golf communities or
                            communities with other major recreational activities
                          </li>
                        </ul>
                        <p className="mb-2">
                          If property is accessible by a gravel road and
                          distance of comparable is {">"} 1 mile away, the
                          property could be considered rural even if it is
                          marked suburban, and then Max LTV is the lesser of 65%
                          LTV or the applicable Matrix LTV
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mb-3">
                          <li>
                            Properties must be accessible by roads that meet
                            state/local minimum standards
                          </li>
                          <li>
                            Properties must be suitable for year-round occupancy
                            regardless of location
                          </li>
                        </ul>
                        <p className="mb-2">
                          Websites such as the below will be reviewed to analyze
                          whether the property should be classified as rural and
                          subject to rural guidelines.
                        </p>
                        <ul className="list-disc pl-5">
                          <li>
                            https://www.consumerfinance.gov/rural-or-underserved-tool/
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Appraisals
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            Second appraisal required for all loan amounts {">"}{" "}
                            $2.0M
                          </li>
                          <li>
                            1007/1025 or Short Term Rental Analysis developed by
                            the AMC is required
                          </li>
                          <li>
                            Appraisal Review Product to be ordered on all loans
                            with a FNMA SSR over 2.5 except for those with a
                            full second appraisal
                          </li>
                          <li>
                            C3 condition rating is generally required;
                            Properties with a C4 rating must be sufficiently
                            justified to determine marketability and acceptance.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Declining Markets
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Declining markets, as identified by the appraiser,
                        require a 5% LTV reduction off Matrix Max LTV, when{" "}
                        {">"} 65% LTV
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Acreage
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Max 2 acres; Acreage and land value must be typical and
                        common for the subject's market.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* End of Investor DSCR */}

          {/* Investor DSCR No Ratio */}
          <div
            id="investor-dscr-no-ratio-overview"
            className="scroll-mt-20 mb-12 mt-16"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Investor DSCR No Ratio Overview
            </h3>
            <p className="text-sm leading-relaxed mb-6">
              The Investor DSCR No Ratio Program is designed to offer certain
              DSCR options when the rental income is not sufficient to cover the
              cover the monthly payments. This program allows investors
              additional options. Refer to the Investor DSCR No Ratio Matrix for
              Matrix for specific program requirements.
            </p>

            {/* Investor DSCR No Ratio - General Requirements */}
            <div
              id="investor-dscr-no-ratio-general-requirements"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Investor DSCR No Ratio - General Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Exceptions
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Ineligible
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Product Type
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>30 Year Fixed</li>
                          <li>15 Year Fixed</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Interest Only
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Not permitted
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Loan Amounts
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Min: $125,000 and Max $1,500,000
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Interested Party Contributions
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">6%</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Subordinate Financing
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Ineligible
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Occupancy
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Investment Properties (Business Purpose)
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Loan Purpose
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Purchase, Rate & Term Refinance, and Cash Out Refinance
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        2-1 Buydown
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Not Permitted
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Refinances - Continuity of Obligation
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-2">
                          Continuity of ownership is required on all refinance
                          transactions, which occurs when at least one
                          borrower(s) or member of the LLC on the existing
                          mortgage is also a Borrower on the new refinance
                          transaction.
                        </p>
                        <p className="mb-2">
                          When an existing mortgage will be satisfied because of
                          the refinance transaction, the following requirements
                          must be met:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            At least one borrower on the refinance mortgage held
                            title for the most recent six (6) month period and
                            the mortgage file contains documentation evidencing
                            the borrower has been making timely mortgage
                            payments, including the payments for any secondary
                            financing, for the most recent six (6) month period
                          </li>
                          <li>
                            At least one borrower on the refinance mortgage
                            inherited or was legally awarded the mortgaged
                            premises by a court in the case of divorce,
                            separation, or dissolution of domestic property
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Properties Listed for Sale
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        All Refinance transactions: property cannot be listed
                        for sale in the last 12 months prior to the application
                        date
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Cash-Out
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>LTV {">"} 60% = $1,000,000</li>
                          <li>LTV {"<"}=60% = Unlimited</li>
                          <li>
                            Cash-in-hand limits do not apply to Delayed
                            Financing Transactions
                          </li>
                          <li>
                            Not permitted for Non-Permanent Resident Aliens
                          </li>
                          <li>
                            Cash Out Refinance refinances on properties acquired
                            within the past 12 months are ineligible, with the
                            exception of Delayed Financing
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Investor DSCR No Ratio - Borrower Eligibility */}
            <div
              id="investor-dscr-no-ratio-borrower-eligibility"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Investor DSCR No Ratio - Borrower Eligibility
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="px-6 py-3 text-left font-semibold text-foreground w-1/4"></th>
                      <th className="px-6 py-3 text-left font-semibold text-foreground">
                        Eligible:
                      </th>
                      <th className="px-6 py-3 text-left font-semibold text-foreground">
                        Ineligible:
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Borrower Eligibility
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>U.S. Citizens</li>
                          <li>Permanent Resident Aliens</li>
                          <li>
                            Non-Permanent Resident Alien
                            <ul className="list-disc pl-5 mt-1">
                              <li>U.S. Credit only</li>
                              <li>
                                Below Visa Types only permitted: E-1, E-2, E-3,
                                EB-5, G-1 through G-5, H1-B, L-1, NATO, O-1,
                                R-1, TN NAFTA.
                              </li>
                              <li>Cash Out not permitted</li>
                              <li>
                                Tenants in common are ineligible unless all
                                parties match the borrowers on the loan.
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>ITIN</li>
                          <li>DACA</li>
                          <li>Foreign National</li>
                          <li>
                            LLCs, partnerships, or corporations (may qualify for
                            vesting only)
                          </li>
                          <li>
                            Trusts or Land Trusts (trusts may qualify for
                            ownership vesting only)
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        First Time Homebuyer (FTHB)
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Eligible with an established primary residence
                      </td>
                      <td className="px-6 py-4 text-muted-foreground"></td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Investor Experience
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Not Required
                      </td>
                      <td className="px-6 py-4 text-muted-foreground"></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Entity Vesting
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            Tenants in Common are only permitted if all parties
                            vested match the borrowers on the loan.
                          </li>
                          <li>Layering of entities not permitted</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Investor DSCR No Ratio - Credit Requirements */}
            <div
              id="investor-dscr-no-ratio-credit-requirements"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Investor DSCR No Ratio - Credit Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Credit Score
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Minimum credit score: 700</li>
                          <li>
                            The Representative Score is the lowest middle score
                            of all borrowers
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Tradelines
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            Each borrower must have a minimum of two (2) trades
                            within 24 months that show a 12 month history OR a
                            combined credit profile between both borrowers with
                            a minimum of three (3) tradelines
                          </li>
                          <li>Tradeline activity is not required.</li>
                          <li>
                            Eligible trades cannot have delinquency in the past
                            24 months
                          </li>
                          <li>
                            Current housing, not reporting on credit may count
                            as a trade if canceled checks/debits are provided.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Derogatory Credit
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            All derogatory revolving and installment accounts 60
                            days delinquent within 4 years of closing requires a
                            full explanation
                          </li>
                          <li>
                            Non-title charge-offs and collections within three
                            years and exceeding $5,000 (individually or
                            aggregate) must be paid. Medical collections less
                            than $15,000 are not required to be paid
                          </li>
                          <li>
                            IRS tax payment plans approved by the IRS are
                            permitted provided they are current and do not carry
                            a lien on the property
                            <ul className="list-disc pl-5 mt-1">
                              <li>
                                A copy of the approved repayment plan is
                                required
                              </li>
                              <li>
                                A minimum of 2 months has elapsed on the plan
                                and evidence of timely payments for the most
                                recent 2 months is provided
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Credit/Housing Events
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>3 years seasoning is required</li>
                          <li>
                            Chapter 13 must be discharged or dismissed 2+ years
                          </li>
                          <li>Multiple bankruptcies are ineligible</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Investor DSCR No Ratio - DSCR and Rental Income Requirements */}
            <div
              id="investor-dscr-no-ratio-dscr-rental-income"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Investor DSCR No Ratio – DSCR and Rental Income Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        DSCR Ratio
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>0 to {"<"} .75</li>
                          <li>
                            Debt-Service Coverage Ratio = Gross Income / PITIA
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Lease and Occupancy Requirements
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            For purchase transactions, it is acceptable for the
                            property to be vacant.
                          </li>
                          <li>
                            Vacant properties on a refinance are not eligible.
                          </li>
                          <li>
                            If the property is currently tenant occupied, the
                            1007/1025 must reflect the terms of the lease.
                          </li>
                          <li>
                            Gross market rents are calculated using the lesser
                            of the lease amount or market rents from the
                            1007/1025.
                          </li>
                          <li>A copy of the lease is not required.</li>
                          <li>
                            Property cannot be occupied by the borrower(s), any
                            member of the borrower's LLC or any family member.
                          </li>
                          <li>Short term rentals are ineligible.</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Investor DSCR No Ratio - Asset and Reserve Requirements */}
            <div
              id="investor-dscr-no-ratio-asset-reserve-requirements"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Investor DSCR No Ratio - Asset and Reserve Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Assets
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>30-day asset verification required</li>
                          <li>
                            Business assets are permitted provided Borrower has
                            100% ownership of the business.
                          </li>
                          <li>Atypical deposits do not need to be sourced</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Reserves
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            Loan Amount {">"}=$75,000 to $500,000 – 3 months of
                            PITIA
                          </li>
                          <li>
                            Loan Amount {">"} $500,000 to $1,500,000 = 6 months
                            of PITIA
                          </li>
                          <li>
                            Cash Out Refinance may be used to satisfy
                            requirement
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Gift Funds
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            Eligible after meeting minimum 10% borrower
                            contribution regardless of LTV.
                          </li>
                          <li>Cannot be used to meet reserve requirements</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Investor DSCR No Ratio - Property Requirements */}
            <div
              id="investor-dscr-no-ratio-property-requirements"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Investor DSCR No Ratio - Property Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Property Types
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="font-semibold mb-2">
                          Single Family, PUD or Townhome (Attached or Detached)
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mb-3">
                          <li>
                            Single Family Residences with 1 or more accessory
                            dwelling unit (ADU) or 2-4 units with 1 ADU are
                            permitted if subject property is in a municipality
                            that allows. The appraiser must specifically confirm
                            compliance with local regulations and 2 similar
                            comparables.
                          </li>
                          <li>
                            Refinance:
                            <ul className="list-disc pl-5 mt-1">
                              <li>Max LTV 70%</li>
                            </ul>
                          </li>
                        </ul>
                        <p className="font-semibold mb-2">
                          3-4 Units Restrictions
                        </p>
                        <p className="font-semibold mb-2">
                          Condos (Warrantable and Non-Warrantable)
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mb-3">
                          <li>Condominium leaseholds are ineligible</li>
                        </ul>
                        <p className="font-semibold mb-2">Condotel</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Ineligible</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Rural Properties
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-2">Not permitted</p>
                        <p className="mb-2">
                          Websites such as the below will be reviewed to analyze
                          whether the property should be classified as rural and
                          subject to rural guidelines.
                        </p>
                        <ul className="list-disc pl-5">
                          <li>
                            https://www.consumerfinance.gov/rural-or-underserved-tool/
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Appraisals
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>1 Full Appraisal is required</li>
                          <li>
                            Appraisal Review Product to be ordered on all loans
                            with a FNMA SSR over 2.5
                          </li>
                          <li>
                            C3 condition rating is generally required;
                            Properties with a C4 rating must be sufficiently
                            justified to determine marketability and acceptance.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Declining Markets
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Declining markets, as identified by the appraiser,
                        require a 5% LTV reduction off Matrix Max LTV, when{" "}
                        {">"} 65% LTV
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Acreage
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Max 2 acres; Acreage and land value must be typical and
                        common for the subject's market.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* End of Investor DSCR No Ratio */}

          {/* DSCR Multi & Mixed */}
          <div
            id="dscr-multi-mixed-overview"
            className="scroll-mt-20 mb-12 mt-16"
          >
            <h3 className="text-2xl font-semibold mb-4">
              DSCR Multi & Mixed (5-10 Unit Multi, 2-8 Unit Mixed-Use) Overview
            </h3>
            <p className="text-sm leading-relaxed mb-6">
              The DSCR Multi & Mixed Program is designed specifically for the
              investors who want to use DSCR income for a multi-unit or mixed
              use property. Refer to the DSCR Multi& Mixed Matrix for Matrix for
              specific program requirements.
            </p>

            {/* DSCR Multi & Mixed - General Requirements */}
            <div
              id="dscr-multi-mixed-general-requirements"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                DSCR Multi & Mixed - General Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Exceptions
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Permitted
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Product Type
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>30 Year Fixed, 15 Year Fixed</li>
                          <li>
                            40 Year Fixed I/O (10 year I/O period, and remaining
                            term fully amortizing)
                          </li>
                          <li>
                            30 Year Fixed I/O (10 year I/O period, and remaining
                            term fully amortizing)
                          </li>
                          <li>
                            5/6 and 7/6 SOFR ARMs, 30 Year Term – Fully
                            Amortizing
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Interest Only
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Max LTV: 75%
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Loan Amounts
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Min: $250,000 and Max $3,000,000</li>
                          <li>
                            Loan sizes under $400,000 require a 5% reduction to
                            LTV
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Interested Party Contributions
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">6%</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Occupancy
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Investment Properties (Business Purpose)
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Loan Purpose
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Purchase, Rate & Term Refinance, and Cash Out Refinance
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        2-1 Buydown
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Not permitted
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Cash-Out
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Max cash-out: $1,000,000
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Subordinate Financing
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Ineligible
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Insurance Requirements
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            In addition to property and title insurance, Rent
                            Loss Insurance for the subject property is required
                            and must equal at least 6 months of PITIA.
                          </li>
                          <li>
                            Blanket policies covering the subject property are
                            permitted.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Escrow Waivers
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Ineligible
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Prepayment Penalty
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Required where permitted. Refer to the "Business Purpose
                        Licensing & PPP Restrictions" PDF in the Documents Tab
                        in the Client Portal.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Age of Loan Documentation
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Credit: 120 days</li>
                          <li>Assets: 90 days</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* DSCR Multi & Mixed - Borrower Eligibility */}
            <div
              id="dscr-multi-mixed-borrower-eligibility"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                DSCR Multi & Mixed - Borrower Eligibility
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-6 py-3 border-b border-border text-left font-semibold"></th>
                      <th className="px-6 py-3 border-b border-border text-left font-semibold">
                        Eligible:
                      </th>
                      <th className="px-6 py-3 border-b border-border text-left font-semibold">
                        Ineligible:
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Borrower Eligibility
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>U.S. Citizens</li>
                          <li>Permanent Resident Aliens</li>
                          <li>Non-Permanent Resident Aliens</li>
                          <li>Foreign Nationals</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>ITIN</li>
                          <li>DACA</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        First Time Homebuyer (FTHB)
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Ineligible
                      </td>
                      <td className="px-6 py-4 text-muted-foreground"></td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Investor Experience
                      </td>
                      <td className="px-6 py-4 text-muted-foreground"></td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            First time investors are ineligible for Mixed-Use
                            2-8 Units.
                          </li>
                          <li>
                            Borrower must have a history of owning and managing
                            commercial or residential real estate for at least 1
                            year in the last 3 years
                          </li>
                          <li>
                            First time investors are eligible on 5-10 Unit
                            Residential properties with a 0x30x24 housing
                            history or when the Primary Residence is owned free
                            and clear.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Entity Vesting
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        Eligible
                      </td>
                      <td className="px-6 py-4 text-muted-foreground"></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Foreign National
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Min DSCR &gt;= 1.00</li>
                          <li>Foreign Credit is permitted.</li>
                          <li>Reserves: 12 months PITIA</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-2 font-medium">LTV requirements:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            &le; $2,000,000 = Purch & Rate/Term: 70% LTV or
                            Cash-Out: 65% LTV
                          </li>
                          <li>
                            &gt; $2,000,000 - $2,500,000 = Purch & Rate/Term:
                            65% LTV or Cash-Out: 60% LTV
                          </li>
                          <li>
                            &gt; $2,500,000 - $3,000,000 = Purch & Rate/Term:
                            60% LTV or Cash-Out: 55% LTV
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* DSCR Multi & Mixed - Credit Requirements */}
            <div
              id="dscr-multi-mixed-credit-requirements"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                DSCR Multi & Mixed - Credit Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Credit Score
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Minimum credit score is 720</li>
                          <li>
                            The Representative Score is as follows:
                            <ul className="list-circle pl-6 mt-1">
                              <li>
                                Middle of 3 scores or lower of 2 of all
                                Borrowers
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Tradelines
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>All borrowers have 3 scores: or</li>
                          <li>Minimum 2 open and reporting 24 months; or</li>
                          <li>3 open and reporting 12-months.</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Housing History
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        0x30x24
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Credit / Housing Events
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        2 years seasoning is required
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* DSCR Multi & Mixed - DSCR and Rental Income Requirements */}
            <div
              id="dscr-multi-mixed-dscr-rental-income"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                DSCR Multi & Mixed – DSCR and Rental Income Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        DSCR Ratio
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Min 1.00</li>
                          <li>
                            Debt-Service Coverage Ratio = Gross Income / PITIA
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Rental Income Requirements
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Use lower of Estimated market rent or lease
                            agreement on a refinance.
                          </li>
                          <li>Purchases use the estimated market rent.</li>
                          <li>
                            For leases that have been converted month-to-month,
                            provide 2 months bank statements to support rental
                            income.
                          </li>
                          <li>
                            Reduce qualifying rents by any management fee
                            reflected on the appraisal report.
                          </li>
                          <li>
                            2-8 Units Mixed Use:
                            <ul className="list-circle pl-6 mt-1">
                              <li>
                                Income from commercial space must not exceed 49%
                                of the total property income.
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Lease Requirements
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            For Purchase, Rate & Term Refinance and Cash-Out
                            transactions, all units must be either leased or in
                            lease ready condition meaning the properties have
                            been cleaned, no renovations or repairs to the
                            properties are needed and the properties are
                            immediately available to be leased to an eligible
                            tenant.
                          </li>
                          <li>
                            On purchase transactions, copies of the leases are
                            not required.
                          </li>
                          <li>
                            Properties with expired leases that have converted
                            to month to month per the terms of the lease will
                            require bank statements for the lesser of two months
                            or the period after the lease expired.
                          </li>
                          <li>
                            Corporate lease agreements are acceptable with lease
                            terms consistent with typical market standards and
                            will be subject to standard market rent
                            verification.
                          </li>
                          <li>
                            Lease agreements that allow single room occupancy or
                            boarder leases are not permitted.
                          </li>
                          <li>
                            Third party sale and leaseback agreements or
                            contract for deed transactions will not be
                            permitted.
                          </li>
                          <li>All leases must be in U.S. Dollars.</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Occupancy Requirements
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Vacant Unit(s) – Use 75% of the market rents to
                            qualify.
                          </li>
                          <li>
                            Max 1 vacancy on a refinance of a 2-3 Unit property.
                          </li>
                          <li>
                            Max 2 vacancies on a refinance of a 4+ Unit
                            property.
                          </li>
                          <li>
                            On a purchase, and/or a refinance situation where a
                            property was recently rehabbed, with evidence the
                            property is currently listed for rent, it is not
                            considered unleased, and it is permissible for all
                            units to be vacant at the time of purchase or
                            refinance, provided all units are in lease-ready
                            condition.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Eligible Tenants
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Neither the borrower(s) nor the borrower's immediate
                            family shall at any time occupy the residential
                            units.
                          </li>
                          <li>
                            Borrowers must attest that all residential tenants
                            are non-borrower affiliated.
                          </li>
                          <li>
                            Commercial units may be occupied by the borrower's
                            business, however in that instance the lesser of
                            market rents or the amount of rent from the lease
                            will be used when calculating the DSCR for the
                            borrower occupied units.
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* DSCR Multi & Mixed - Asset and Reserve Requirements */}
            <div
              id="dscr-multi-mixed-asset-reserve-requirements"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                DSCR Multi & Mixed - Asset and Reserve Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">
                        Assets
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        30-day asset verification required
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Reserves
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Loan Amt &le; $1,500,000: 6 Months PITIA</li>
                          <li>
                            Loan Amt &gt; $1,500,000 - $2,000,000: 9 Months
                            PITIA
                          </li>
                          <li>
                            Loan Amt &gt; $2,000,000 - $2,500,000: 12 Months
                            PITIA
                          </li>
                          <li>
                            Loan Amt &gt; $2,500,000 - $3,000,000 12 Months
                            PITIA
                          </li>
                          <li>
                            Cash Out Refinance may be used to meet reserve
                            requirements
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Gift Funds
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            Eligible after meeting min 10% borrower contribution
                            regardless of LTV.
                          </li>
                          <li>Cannot be used to meet reserve requirements</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* DSCR Multi & Mixed - Property Requirements */}
            <div
              id="dscr-multi-mixed-property-requirements"
              className="mb-8 scroll-mt-20"
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                DSCR Multi & Mixed - Property Requirements
              </h4>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-6 py-3 border-b border-border text-left font-semibold">
                        Property Type
                      </th>
                      <th className="px-6 py-3 border-b border-border text-left font-semibold">
                        Multi Family and Mixed-Use
                      </th>
                      <th className="px-6 py-3 border-b border-border text-left font-semibold"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4"></td>
                      <td
                        className="px-6 py-4 text-muted-foreground"
                        colSpan={2}
                      >
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Residential 5-10 Units</li>
                          <li>Mixed Use 2-8 units.</li>
                          <li>
                            For properties with less than 5 units, at least 1
                            unit must be commercial.
                            <ul className="list-circle pl-6 mt-1 space-y-1">
                              <li>2-3 Units: Max 1 commercial unit</li>
                              <li>4-5 Units: Max 2 commercial units</li>
                              <li>6-8 Units: Max 3 commercial units</li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Rural Properties
                      </td>
                      <td
                        className="px-6 py-4 text-muted-foreground"
                        colSpan={2}
                      >
                        <p className="mb-2">Ineligible</p>
                        <p className="mb-2">
                          Websites such as the below will be reviewed to analyze
                          whether the property should be classified as rural and
                          subject to rural guidelines.
                        </p>
                        <ul className="list-circle pl-6">
                          <li>
                            https://www.consumerfinance.gov/rural-or-underserved-tool/
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Property Requirements
                      </td>
                      <td
                        className="px-6 py-4 text-muted-foreground"
                        colSpan={2}
                      >
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Minimum 400 square feet per unit</li>
                          <li>
                            Must be accessible for year-round residential use
                          </li>
                          <li>
                            Each residential unit must contain a full kitchen
                            and bath
                          </li>
                          <li>
                            Represent the highest and best use of the property
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Prohibited Property Use
                      </td>
                      <td
                        className="px-6 py-4 text-muted-foreground"
                        colSpan={2}
                      >
                        <p className="mb-2">
                          Properties that contain one or more commercial
                          establishments in any of the following businesses are
                          prohibited:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            Adult Activities (including bars where food is not
                            served and / or any establishment where one must be
                            an Adult to enter).
                          </li>
                          <li>
                            Any activity not permitted by law, ordinance, or
                            regulation.
                          </li>
                          <li>Day care or childcare.</li>
                          <li>Gambling activities.</li>
                          <li>Manufacturing, distribution, and warehouse.</li>
                          <li>Marijuana related activities.</li>
                          <li>
                            Medical activities not under the supervisor of a
                            licensed doctor, dentist, chiropractor,
                            psychologist, nurse practitioner, or nutritionist.
                          </li>
                          <li>Transient boarding, rooming house or similar.</li>
                          <li>
                            Vehicle repair or vehicle related included garages.
                          </li>
                          <li>Dry Cleaners or laundromats.</li>
                          <li>
                            Other property uses outside of character for the
                            neighborhood in which the property is located, which
                            present higher than ordinary risks for safety, or
                            which are controversial within their community.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Property Condition
                      </td>
                      <td
                        className="px-6 py-4 text-muted-foreground"
                        colSpan={2}
                      >
                        <ul className="list-disc pl-5 space-y-1">
                          <li>No fair or poor ratings</li>
                          <li>
                            No environmental issues (Storage or use of hazardous
                            material, ex. Dry Cleaners, Laundromat)
                          </li>
                          <li>
                            No health or safety issues as noted by the appraiser
                            (ex. Broken windows, stairs, etc.)
                          </li>
                          <li>
                            No excessive deferred maintenance that could become
                            a health or safety issue for tenants.
                          </li>
                          <li>
                            No structural deferred maintenance (ex. Foundation,
                            roof, electrical, plumbing)
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        For Sale by Owner
                      </td>
                      <td
                        className="px-6 py-4 text-muted-foreground"
                        colSpan={2}
                      >
                        Ineligible
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Appraisals
                      </td>
                      <td
                        className="px-6 py-4 text-muted-foreground"
                        colSpan={2}
                      >
                        <p className="mb-2 font-medium">
                          Residential 5-10 units:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mb-4">
                          <li>FHLMC 71A</li>
                          <li>FHLMC 71B for loan amounts &lt; $750,000</li>
                          <li>Narrative report</li>
                        </ul>
                        <p className="mb-2 font-medium">Mixed-Use 2-8 Units:</p>
                        <ul className="list-disc pl-5 space-y-1 mb-4">
                          <li>FHLMC 71A</li>
                          <li>FHLMC 71B for loan amounts &lt; $750,000</li>
                          <li>
                            General Purpose Commercial Forms (ex. GP Commercial
                            Summary Form)
                          </li>
                          <li>Narrative report</li>
                        </ul>
                        <p className="mb-2 font-medium">Second Appraisal:</p>
                        <ul className="list-disc pl-5 space-y-1 mb-4">
                          <li>
                            Loans &gt; $2,000,000 require a second appraisal
                            unless a 71A or Commercial Narrative report is
                            provided.
                          </li>
                        </ul>
                        <p className="mb-2 font-medium">Appraisal Review:</p>
                        <ul className="list-disc pl-5 space-y-1 mb-4">
                          <li>
                            BPO required on all transactions except for those
                            including two full appraisals.
                          </li>
                        </ul>
                        <p className="mb-2 font-medium">
                          Appraisal Requirements:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            The following are required with each report:
                            <ul className="list-circle pl-6 mt-1 space-y-1">
                              <li>Full Interior Inspection of each unit</li>
                              <li>Rent roll</li>
                              <li>Income and Expense Statement</li>
                              <li>
                                Photos of subject including exterior/interior
                                and street scene
                              </li>
                              <li>Aerial photo</li>
                              <li>Sketch or floor plan of typical units.</li>
                              <li>Map</li>
                              <li>Appraiser qualifications</li>
                            </ul>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Transferred Appraisals
                      </td>
                      <td
                        className="px-6 py-4 text-muted-foreground"
                        colSpan={2}
                      >
                        Not permitted
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Age of Appraisal
                      </td>
                      <td
                        className="px-6 py-4 text-muted-foreground"
                        colSpan={2}
                      >
                        120 Days. Appraisals are not permitted to be extended. A
                        new report is required after 120 days.
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Declining Markets
                      </td>
                      <td
                        className="px-6 py-4 text-muted-foreground"
                        colSpan={2}
                      >
                        Declining markets, as identified by the appraiser,
                        require a 5% LTV reduction off Matrix Max LTV, when &gt;
                        65% LTV.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                        Acreage
                      </td>
                      <td
                        className="px-6 py-4 text-muted-foreground"
                        colSpan={2}
                      >
                        Max 2 acres; Acreage and land value must be typical and
                        common for the subject's market.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* End of DSCR Multi & Mixed */}
        </section>

        <section id="general-underwriting" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold border-b-2 border-gray-200 pb-4 mb-6">
            General Underwriting Requirements
          </h2>

          <div className="prose prose-sm max-w-none space-y-6">
            <p className="text-sm leading-relaxed">
              These NQM Funding, LLC Non-QM and DSCR Underwriting Guidelines
              ("the Guidelines"), coupled with each of the Program matrices,
              provide the requirements for NQM Lending, LLC to close or purchase
              a loan.
            </p>
          </div>

          {/* Age of Loan Documentation */}
          <div
            id="age-of-loan-documentation"
            className="mt-8 mb-8 scroll-mt-20"
          >
            <h3 className="text-xl font-semibold mb-4">
              Age of Loan Documentation
            </h3>
            <div className="text-sm leading-relaxed space-y-2">
              <p>
                Credit reports must be dated within 120 days of the note date.
              </p>
              <p>
                Income and Asset Documentation must be dated within 90 days of
                the note date.
              </p>
            </div>
          </div>

          {/* Mortgage Insurance */}
          <div id="mortgage-insurance" className="mb-8 scroll-mt-20">
            <h3 className="text-xl font-semibold mb-4">Mortgage Insurance</h3>
            <p className="text-sm leading-relaxed">
              Mortgage Insurance is not required on any of our Programs.
            </p>
          </div>

          {/* Daily Simple Interest */}
          <div id="daily-simple-interest" className="mb-8 scroll-mt-20">
            <h3 className="text-xl font-semibold mb-4">
              Daily Simple Interest
            </h3>
            <p className="text-sm leading-relaxed">
              Loans where interested calculated based on daily simple interest
              are not eligible on any of our Programs.
            </p>
          </div>

          {/* Geographic Restrictions */}
          <div id="geographic-restrictions" className="mb-8 scroll-mt-20">
            <h3 className="text-xl font-semibold mb-4">
              Geographic Restrictions
            </h3>

            <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
              <table className="w-full text-sm border-collapse">
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/6">
                      DC
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      Investment Properties are ineligible, including DSCR.
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                      FL
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          Foreign Nationals and Non-Permanent Resident Aliens
                          from the Peoples Republic of China are ineligible.
                        </li>
                        <li>
                          Charlotte, Lee, Hendry, and Glades Counties:
                          Investment Properties are ineligible, including DSCR.
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                      HI
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      Permitted for Delegated Correspondents only. Ineligible
                      for Non-Delegated Correspondent and Wholesale.
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                      IL
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Cook County: all occupancies are ineligible.</li>
                        <li>
                          Kane, Peoria and Will Counties: Ineligible for TRID
                          loans – Restriction does not apply to Correspondents.
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                      IN
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      Indianapolis: Investment Properties are ineligible,
                      including DSCR.
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                      MD
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      Baltimore City: all occupancies are ineligible.
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                      MS
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      Closed end second liens ineligible.
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                      NJ
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Closed end second liens are ineligible.</li>
                        <li>
                          Patterson: Investment Properties are ineligible,
                          including DSCR.
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                      NY
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      <p className="mb-3">
                        Effective July 29, 2025, NQMF has temporarily halted
                        wholesale originations for all TRID loans in the state
                        of New York. Please note that correspondent loans
                        (delegated and non-delegated) and business purpose loans
                        remain unaffected.
                      </p>
                      <p className="mb-2 font-medium">
                        All originations are restricted as follows:
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Closed end second liens are ineligible.</li>
                        <li>
                          Brooklyn: Effective July 29, 2025, Investment
                          Properties are ineligible, including DSCR.
                        </li>
                        <li>
                          Orange County: Effective July 2, 2025, all occupancies
                          are ineligible.
                        </li>
                        <li>
                          No 5/6 ARMs on Investment Property loans below the
                          FNMA loan limit.
                          <ul className="list-circle pl-6 mt-1">
                            <li>See NY Subprime section for requirements.</li>
                          </ul>
                        </li>
                        <li>
                          Short Term Rentals (STRs) are ineligible in the five
                          (5) New York City Boroughs (Manhattan, Brooklyn, The
                          Bronx, Queens and Staten Island).
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">
                      TX
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Second Liens are ineligible.</li>
                        <li>
                          Lubbock: Investment Properties are ineligible,
                          including DSCR.
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Alternative Loan Program Analysis */}
          <div
            id="alternative-loan-program-analysis"
            className="mb-8 scroll-mt-20"
          >
            <h3 className="text-xl font-semibold mb-4">
              Alternative Loan Program Analysis
            </h3>
            <p className="text-sm leading-relaxed mb-3">
              Loan applications are to be reviewed for approval under a
              traditional conventional conforming or FHA loan Program available
              to the Client. The NQM Funding, LLC Alternative Program Analysis
              Form, or something similar, must be provided to ensure borrowers
              are proceeding under the appropriate loan Program.
            </p>
            <p className="text-sm font-semibold mb-2">
              The following loans are exempt from this requirement:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Business Purpose Loans</li>
              <li>Foreign National Loans</li>
              <li>Loans qualified using Alternative Documentation</li>
            </ul>
          </div>

          {/* Escrow Waivers */}
          <div id="escrow-waivers-general" className="mb-8 scroll-mt-20">
            <h3 className="text-xl font-semibold mb-4">Escrow Waivers</h3>
            <p className="text-sm font-semibold mb-2">
              Waiving escrows is permitted as follows:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm mb-4">
              <li>Non-HPML loans</li>
              <li>0x30x12 housing/rental history</li>
              <li>
                Flex Supreme: O/O and 2nd Homes, 680 Min Score up to 80% LTV
              </li>
              <li>
                Flex Select: O/O and 2nd Homes, 660 Min Score up to 80% LTV
              </li>
              <li>
                CA: In addition to the above, escrows may be waived up to a 90%
                LTV with a Min 700 Score
              </li>
              <li>
                Investment Properties: 660 Min Score. Not permitted on No Ratio
                or DSCR Mixed/Multi loans.
              </li>
            </ul>
            <p className="text-sm font-semibold mb-2">Flood Insurance:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>
                Flood Insurance premiums for properties located in zones A or V
                must be escrowed. It is permissible to waive taxes and insurance
                escrows in these instances provided the above requirements are
                met and the loan is priced with an escrow waiver.
              </li>
              <li>
                In addition, elective flood policies are not required to be
                escrowed.
              </li>
            </ul>
          </div>

          {/* Exposure */}
          <div id="exposure" className="mb-8 scroll-mt-20">
            <h3 className="text-xl font-semibold mb-4">Exposure</h3>
            <p className="text-sm leading-relaxed mb-3">
              NQMF tracks exposure to individual borrowers, which includes
              entities and guarantors, by social security number or EIN number,
              and applies the following exposure limits:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>
                All Programs except Investor DSCR – No Ratio, the limits are
                capped at the lesser of the amounts listed below.
                <ul className="list-circle pl-6 mt-1 space-y-1">
                  <li>Max $10M or 10 loans in aggregate</li>
                  <li>
                    Max $5M or 5 any cash-out transaction & DSCR Multi- Mixed
                    Program loans.
                  </li>
                </ul>
              </li>
              <li>
                Investor DSCR No Ratio:
                <ul className="list-circle pl-6 mt-1 space-y-1">
                  <li>Max $7.5M or 10 loans in aggregate</li>
                  <li>Maximum $5M or 5 cash-out transactions</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Exceptions */}
          <div id="exceptions" className="mb-8 scroll-mt-20">
            <h3 className="text-xl font-semibold mb-4">Exceptions</h3>
            <p className="text-sm leading-relaxed mb-3">
              Exceptions to published guidelines are considered on a
              case-by-case basis. Exception Requests must be submitted in
              writing using the NQM Funding, LLC (NQMF) Exception Request Form
              and must include a minimum of two compensating factors.
            </p>
            <p className="text-sm leading-relaxed mb-3">
              It is in the sole discretion of NQMF to approve or deny any
              exception request. Approval of the exception does not guarantee
              final loan approval. The loan must still undergo a full
              underwriting review for final approval.
            </p>
            <p className="text-sm leading-relaxed mb-3">
              Credit committee may grant a maximum 5% LTV exception but never
              more than 5% above the related cohort (i.e., credit score, loan
              amount and LTV) as per the related Program Matrix.
            </p>
            <p className="text-sm leading-relaxed mb-4">
              Exceptions are not eligible for Flex Supreme, DSCR Supreme, Flex
              Select - P&L Only, Flex Select Express (DU), Super Jumbo and the
              Second Lien Select Programs.
            </p>
            <h4 className="text-md font-semibold mb-2">
              Top Compensating Factors for Exception Consideration
            </h4>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Significant Gross Disposable Income</li>
              <li>DSCR Ratio Above 1.15%</li>
              <li>Significant Reserves (beyond requirements)</li>
              <li>DTI well below Program max</li>
              <li>Lengthy & deep credit history of solid performance</li>
              <li>
                Demonstrated capacity to carry a heavy debt load with on time
                performance
              </li>
              <li>
                Credit score well above Program minimum with solid performance
              </li>
              <li>LTV well below Program Max</li>
              <li>Long, Clean Mortgage History</li>
              <li>Significant time on the same job</li>
            </ul>
          </div>

          {/* Compliance */}
          <div id="compliance" className="mb-8 scroll-mt-20">
            <h3 className="text-xl font-semibold mb-4">Compliance</h3>

            {/* HPML */}
            <div id="hpml" className="mb-6">
              <h4 className="text-lg font-semibold mb-3">
                Higher Priced Mortgage Loans (HPML)
              </h4>
              <p className="text-sm leading-relaxed mb-3">
                Higher Priced Mortgage Loans are permitted with certain
                restrictions:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm mb-4">
                <li>Escrow accounts are required.</li>
                <li>
                  A Full Interior/Exterior Appraisal is required to include a
                  certification from the appraiser indicating that the appraisal
                  was prepared in accordance with the requirements of title XI
                  of the Financial Institutions Reform, Recovery and Enforcement
                  Act of 1989, as amended (12 U.S.C. 3331 ET SEQ.), and any
                  implementing regulations.
                </li>
                <li>
                  On a purchase transaction, a second appraisal is required if:
                  <ul className="list-circle pl-6 mt-2 space-y-1">
                    <li>
                      If the seller acquired the property within the past 90
                      days and the new purchase price is more than 10% of the
                      seller's acquisition price OR
                    </li>
                    <li>
                      If the seller acquired the property within the past 91 to
                      180 days and the new purchase price is more than 20% of
                      the seller's acquisition price.
                    </li>
                  </ul>
                </li>
                <li>
                  The second appraisal must be obtained prior to the note date.
                  <ul className="list-circle pl-6 mt-1 space-y-1">
                    <li>
                      The second appraisal must be provided to the borrower
                      (standard delivery requirements apply).
                    </li>
                    <li>
                      The cost of the second appraisal may not be passed along
                      to the borrower.
                    </li>
                  </ul>
                </li>
                <li>
                  Note that the timelines are measured from the date the seller
                  became the legal owner of the property and the date all
                  parties signed the purchase agreement.
                </li>
                <li>
                  If the seller acquired the property through the following
                  methods, a second appraisal is not required:
                  <ul className="list-circle pl-6 mt-2 space-y-1">
                    <li>Bridge loans (for 12 months or less),</li>
                    <li>Reverse mortgages,</li>
                    <li>
                      Loans for the initial construction of a dwelling – note
                      that this is for a true construction loan, not for the end
                      loan purchase of a newly constructed property,
                    </li>
                    <li>A local, state, or federal government agency,</li>
                    <li>Through a foreclosure or deed in lieu, or</li>
                    <li>
                      Inheritance or through a dissolution of marriage, civil
                      union or domestic partnership, or through the partition of
                      the seller's joint or marital assets.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* State and Federal High Cost Loans */}
            <div id="state-federal-high-cost" className="mb-6">
              <h4 className="text-lg font-semibold mb-3">
                State and Federal High Cost Loans
              </h4>
              <p className="text-sm leading-relaxed mb-3">
                NQM Funding, LLC does not permit high cost mortgages, except for
                certain Second Lien loans. See Second Lien Select Program -
                General Requirements for restrictions and requirements.
              </p>
              <p className="text-sm leading-relaxed mb-3">
                In addition, except for loans that comply with New York Subprime
                regulations, any loan that meets the definition of "high cost,"
                "high risk," "covered," "subprime" or any similar designation
                under state or local law is not permitted.
              </p>
              <p className="text-sm leading-relaxed">
                States may impose different definitions of points and fees,
                rate/APR, or prepayment penalties than apply under HOEPA. States
                may also use different triggers in each category for determining
                whether a loan will be a "high-cost mortgage" (or equivalent
                terms) under state law. As a matter of policy, NQM Funding, LLC,
                does not purchase or originate 1st Lien loans defined as
                high-cost mortgages (or equivalent terms) under Federal or state
                law, regardless of the basis for the loan's treatment as such.
              </p>
            </div>

            {/* NY Subprime Loans */}
            <div id="ny-subprime" className="mb-6">
              <h4 className="text-lg font-semibold mb-3">
                New York Subprime Loans
              </h4>
              <p className="text-sm leading-relaxed mb-3">
                NY Subprime loans will be eligible provided ALL the following
                requirements are met:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>
                  Disclosures requirements:
                  <ul className="list-circle pl-6 mt-1 space-y-1">
                    <li>Borrower's Choice of Attorney Disclosure</li>
                    <li>
                      Consumer Caution and Homeownership Counseling Notice
                    </li>
                    <li>
                      NYSDFS List of Approved Housing Counselors (no signature
                      required)
                    </li>
                    <li>
                      All the above must be delivered to the borrower prior to
                      Closing.
                    </li>
                    <li>
                      Signature on the first two (2) documents will be required
                      or if mailed out, evidence of mailing at least three (3)
                      days prior to Closing.
                    </li>
                    <li>
                      Signatures/evidence of delivery must be for all borrowers
                      on the loan.
                    </li>
                  </ul>
                </li>
                <li>
                  Mavent:
                  <ul className="list-circle pl-6 mt-1 space-y-1">
                    <li>
                      Loan must NOT fail the High Cost (NY Part 41) test. NQM
                      Funding, LLC does not allow NY High-Cost Loans.
                    </li>
                    <li>
                      Loans must NOT fail the High Cost (NY) test. NQM Funding,
                      LLC does not allow NY High-Cost Loans.
                      <ul className="list-square pl-6 mt-1">
                        <li>Note, these are two separate Mavent tests.</li>
                      </ul>
                    </li>
                    <li>
                      Higher Rate review is where the subprime designation will
                      show up:
                      <ul className="list-square pl-6 mt-1 space-y-1">
                        <li>
                          A "fail" is permitted for the Fixed Loan &gt; 15 Year
                          Term test (63900)
                        </li>
                        <li>
                          ALL other tests under the Higher-Rate Review must PASS
                          for the loan to be eligible.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  Closing Documentation Requirements:
                  <ul className="list-circle pl-6 mt-1">
                    <li>
                      Must include a legend on the top of the mortgage in
                      12-point/font type stating, "This mortgage is a subprime
                      home loan subject to New York's subprime home loan laws."
                    </li>
                  </ul>
                </li>
                <li>
                  Loan Program Requirements:
                  <ul className="list-circle pl-6 mt-1 space-y-1">
                    <li>Fixed Rate</li>
                    <li>No PPP</li>
                    <li>Escrow impounds for taxes /insurance are required.</li>
                    <li>
                      Refinance loans:
                      <ul className="list-square pl-6 mt-1 space-y-1">
                        <li>Must have a documented sufficient NTB, AND</li>
                        <li>
                          Must not be a flip of a loan originated within 6
                          months, AND
                        </li>
                        <li>
                          May not pay off a special mortgage guaranteed through
                          a state, tribal or local government, or nonprofit
                          organization, which either bears a below-market
                          interest rate at the time of origination, or has
                          nonstandard payment terms beneficial to the borrower,
                          and where, because of refinancing, the borrower will
                          lose 1 or more of the special benefits.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  Correspondent Clients:
                  <ul className="list-circle pl-6 mt-1">
                    <li>
                      Must ensure the correct Disclosures are generated with
                      their Disclosure Package. Fillable PDFs of the required NY
                      Subprime Disclosure are posted on the Portal.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          {/* Prepayment Penalties, Points, and Fees */}
          <div
            id="prepayment-penalties-points-fees"
            className="mb-8 scroll-mt-20"
          >
            <h3 className="text-xl font-semibold mb-4">
              Prepayment Penalties, Points, and Fees
            </h3>
            <p className="text-sm leading-relaxed mb-3">
              Total points, fees, and APR may not exceed current state and
              federal high-cost thresholds. In addition, except for Investment
              Property transactions, points and fees may not exceed the lesser
              of state regulations or 5%, excluding prepayment penalties.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm mb-4">
              <li>
                Prepayment penalties are required on Investment Property
                transactions where permitted by applicable local law.
              </li>
              <li>
                Correspondents may treat Investment Properties as Non-TRID
                however, an LLPA will be charged for not having a prepayment
                penalty as per the Rate Sheet.
              </li>
              <li>
                Buydown options are available to reduce or remove prepayment
                penalties. Refer to the appropriate NQM Funding, LLC Rate Sheet
                for details.
              </li>
              <li>
                Prepayment penalties on Primary Residence and Second Home
                transactions are prohibited.
              </li>
            </ul>
            <p className="text-sm leading-relaxed mb-3">
              <strong>Note:</strong> States may impose different definitions of
              points and fees, rate/APR, or prepayment penalties than apply
              under HOEPA. States may also use different triggers in each
              category for determining whether a loan will be a "high-cost
              mortgage" (or equivalent terms) under state law. As a matter of
              policy, NQM Funding, LLC, does not purchase loans defined as
              high-cost mortgages (or equivalent terms) under Federal or state
              law, regardless of the basis for the loan's treatment as such.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>
                Refer to the Business Purpose Licensing & PPP Restrictions PDF
                in the Documents Tab of our Client Portal for all state
                requirements.
              </li>
              <li>
                Refer to the respective rate sheet for minimum requirements for
                prepayment penalties.
              </li>
            </ul>
          </div>

          {/* Principal Curtailment */}
          <div id="principal-curtailment" className="mb-8 scroll-mt-20">
            <h3 className="text-xl font-semibold mb-4">
              Principal Curtailment
            </h3>
            <p className="text-sm leading-relaxed mb-3">
              A curtailment may be applied to refund the overpayment of fees or
              charges paid by the borrower, in any amount.
            </p>
            <p className="text-sm leading-relaxed">
              If the borrower receives more cash back than is permitted for Cash
              Out Refinance refinances, a curtailment to reduce the amount of
              cash back to the borrower to bring the loan in compliance may be
              applied however the maximum amount of the curtailment cannot
              exceed the lesser of $2,500 or 2% of the original loan amount.
            </p>
          </div>

          {/* Maximum Interest Credit */}
          <div id="maximum-interest-credit" className="mb-8 scroll-mt-20">
            <h3 className="text-xl font-semibold mb-4">
              Maximum Interest Credit
            </h3>
            <p className="text-sm leading-relaxed">
              NQM Funding allows an interest credit through the 5th of the
              month.
            </p>
          </div>

          {/* Occupancy Types */}
          <div id="occupancy-types" className="mb-8 scroll-mt-20">
            <h3 className="text-xl font-semibold mb-4">Occupancy Types</h3>

            {/* Primary Residence */}
            <div id="primary-residence-occupancy" className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Primary Residence</h4>
              <p className="text-sm leading-relaxed mb-3">
                A Primary Residence (or owner-occupied property) is a dwelling
                occupied by the borrower as his or her principal residence.
              </p>
              <p className="text-sm leading-relaxed mb-2">
                To qualify as a Primary Residence, the transaction must meet
                each of the following criteria:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>
                  Property is in the same general area as the borrower's
                  employment.
                </li>
                <li>
                  Borrower intends to occupy the subject property for the
                  majority of the year.
                </li>
                <li>
                  Property possesses physical characteristics that accommodate
                  the borrower's family.
                </li>
              </ul>
            </div>

            {/* Second Home */}
            <div id="second-home-occupancy" className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Second Home</h4>
              <p className="text-sm leading-relaxed mb-3">
                A Second Home is a dwelling occupied by the borrower in addition
                to their Primary Residence (may also be referred to as a
                vacation home). Second homes are restricted to a 1-unit
                dwelling.
              </p>
              <p className="text-sm leading-relaxed mb-2">
                Typical Second Homes should meet the following criteria:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>
                  Be located a reasonable distance away from the borrower's
                  Primary Residence.
                </li>
                <li>
                  Must be occupied by the borrower or members of the borrower's
                  family for a portion of the year.
                </li>
                <li>Suitable for year-round occupancy</li>
                <li>Borrower must have exclusive control over the property.</li>
                <li>
                  Must not be subject to any timeshare arrangements, rental
                  pools or other agreements which require the borrower to rent
                  the subject property or otherwise give control of the subject
                  property to a management firm.
                </li>
              </ul>
            </div>

            {/* Investment Property & Business Purpose */}
            <div id="investment-property-occupancy" className="mb-6">
              <h4 className="text-lg font-semibold mb-3">
                Investment Property & Business Purpose Loans
              </h4>
              <p className="text-sm leading-relaxed mb-3">
                An Investment Property (or non-owner-occupied property) is an
                income-producing property that the borrower does not occupy.
              </p>
              <p className="text-sm leading-relaxed mb-3">
                A business purpose loan is an Investment Property where funds
                are used solely for business purposes and is considered a
                Non-TRID transaction. The Property must not and cannot be
                occupied by a borrower, any member of the borrower's LLC, or any
                family member.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>
                  Retail / Wholesale
                  <ul className="list-circle pl-6 mt-1 space-y-1">
                    <li>
                      Investment properties and all DSCR loans must be Business
                      Purpose and processed as non-TRID transactions.
                    </li>
                    <li>
                      The Business Rider to the Mortgage/Deed of Trust must be
                      executed at closing.
                    </li>
                  </ul>
                </li>
                <li>
                  Correspondent
                  <ul className="list-circle pl-6 mt-1">
                    <li>
                      Loans may be processed as TRID or non-TRID transactions
                      (Business Purpose Loans).
                    </li>
                  </ul>
                </li>
                <li>
                  Business Purpose Forms
                  <ul className="list-circle pl-6 mt-1">
                    <li>
                      Business Purpose & Occupancy Affidavit is required on all
                      Business Purpose loans (all borrowers are required to sign
                      to declare that the property is, or will be, for
                      commercial business or investment purpose only).
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          {/* Transaction Types */}
          <div id="transaction-types" className="mb-8 scroll-mt-20">
            <h3 className="text-xl font-semibold mb-4">Transaction Types</h3>

            {/* Purchase */}
            <div id="purchase-transaction" className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Purchase</h4>
              <p className="text-sm leading-relaxed mb-3">
                A purchase transaction is one which allows a buyer to acquire a
                property from a seller. A copy of the fully executed purchase
                contract and all attachments or addenda is required.
              </p>
              <p className="text-sm leading-relaxed mb-3">
                The lesser of the purchase price or appraised value of the
                subject property is used to calculate the loan-to-value.
              </p>
              <p className="text-sm leading-relaxed">
                An assignment of the purchase contract is not permitted unless
                the individual assigning the contract is assigning the rights to
                an entity in which the individual has an ownership interest.
              </p>
            </div>

            {/* Refinance General */}
            <div id="refinance-general" className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Refinance General</h4>
              <p className="text-sm leading-relaxed mb-3">
                Rate & Term Refinance, cash-out refinance, and debt
                consolidation transactions are allowed.
              </p>
              <p className="text-sm leading-relaxed">
                Debt Consolidation available on Flex Select only. See Debt
                Consolidation.
              </p>
            </div>
          </div>

          {/* Benefit to Borrower */}
          <div id="benefit-to-borrower" className="mb-8 scroll-mt-20">
            <h3 className="text-xl font-semibold mb-4">Benefit to Borrower</h3>
            <p className="text-sm leading-relaxed mb-3">
              In keeping with the commitment of responsible lending, all Primary
              Residence and Second Home refinance transactions must have a
              measurable benefit to the borrower.
            </p>
            <p className="text-sm leading-relaxed mb-2">
              When determining the benefit on a refinance transaction, one or
              more of the following must exist to support the benefit to the
              borrower:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
              <li>Balloon payoff</li>
              <li>Title transfer</li>
              <li>Property retention</li>
              <li>Rate reduction</li>
              <li>P&I reduction</li>
              <li>Debt reduction</li>
              <li>Uncontrolled cash-out</li>
            </ul>
            <p className="text-sm leading-relaxed">
              State-specific and/or federal benefit to borrower compliance
              requirements must be adhered to.
            </p>
          </div>
        </section>

        <section id="property-considerations" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold border-b-2 border-gray-200 pb-4 mb-6">
            Property Considerations
          </h2>
          <p className="text-sm">Content from PDF...</p>
        </section>
      </div>
    </div>
  );
};

export default UnderwritingGuidelines;
