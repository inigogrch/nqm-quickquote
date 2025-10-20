import React from 'react';
import { Badge } from '@/components/ui/badge';
import { BookOpen, FileText } from 'lucide-react';

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
              <a href="#introduction" className="block text-blue-600 hover:text-blue-800 hover:underline">
                → Introduction
              </a>
              <a href="#guidelines-and-programs" className="block text-blue-600 hover:text-blue-800 hover:underline">
                → Guidelines and Programs
              </a>
              <a href="#non-qm-programs" className="block text-blue-600 hover:text-blue-800 hover:underline">
                → Non-QM Programs
              </a>
              <a href="#dscr-programs" className="block text-blue-600 hover:text-blue-800 hover:underline">
                → DSCR Programs
              </a>
            </div>
            <div className="space-y-1">
              <a href="#general-underwriting" className="block text-blue-600 hover:text-blue-800 hover:underline">
                → General Underwriting Requirements
              </a>
              <a href="#property-considerations" className="block text-blue-600 hover:text-blue-800 hover:underline">
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
              NQM Funding, LLC ("NQM Funding or NQMF") is a licensed mortgage lender. Our Corporate 
              headquarters are located at 4800 North Federal Highway, Building E, Suite 200 in Boca Raton, 
              FL 33431.
            </p>

            <p className="text-sm leading-relaxed">
              The business we generate is primarily through relationships with lenders, brokers, real estate 
              agents, and builders. We promote customer relationships and have elected to recruit and hire a 
              team of mortgage professionals with existing relationships and are seeking to work for a company 
              with a strong back-end support system and experienced operations and secondary market acumen.
            </p>

            <div id="fair-lending-statement" className="scroll-mt-20">
              <h3 className="text-xl font-semibold mb-3">Fair Lending Statement</h3>
              <p className="text-sm leading-relaxed mb-3">
                NQM Funding believes making a loan to a borrower is more than just a business transaction. 
                NQM Funding, LLC wants to make loans that are good for the borrower as well as compliant 
                with the housing industry laws and regulations.
              </p>
              <p className="text-sm font-semibold mb-2">
                Steps taken to ensure compliance with responsible lending practices include but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm mb-4">
                <li>Spot checks during Production which may occur at any time.</li>
                <li>Validation during the closing process regarding correct disclosures, LE, fees, etc. to comply with RESPA requirements.</li>
                <li>HMDA reporting is completed as required and reviewed periodically throughout the year to ensure no negative or predatory trends are emerging.</li>
              </ul>
            </div>

            <div id="responsible-lending-statement" className="scroll-mt-20">
              <h3 className="text-xl font-semibold mb-3">Responsible Lending Statement</h3>
              <p className="text-sm leading-relaxed mb-3">
                The primary focus of our lending program is the borrower's ability to repay the mortgage 
                obligation. Loans originated or purchased by NQMF should be affordable to the borrower in 
                his or her pursuit of homeownership.
              </p>
              <p className="text-sm leading-relaxed mb-3">
                Under the general Ability-to-Repay (ATR) standard, lenders must make a reasonable, good-faith 
                determination that the consumer has a reasonable ability to repay the loan. Lenders must verify 
                information using third-party records that provide reliable evidence of income or assets.
              </p>
              <p className="text-sm font-semibold mb-2">
                If a loan is subject to the ATR rules under the Truth in Lending Act ("TILA"), lenders must 
                consider eight underwriting factors to comply:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm mb-4">
                <li>Current or expected income or assets (other than the value of the property that secures the loan) that the consumer will rely on to repay the loan.</li>
                <li>Current employment status (if you rely on employment income when assessing the consumer's ability to repay)</li>
                <li>Monthly mortgage payment for this loan.</li>
                <li>Monthly payment on any simultaneous loans secured by the same property.</li>
                <li>Monthly payments for property taxes and insurance that you require the consumer to buy, and certain other costs related to the property such as homeowner's association fees or ground rent.</li>
                <li>Debts, alimony, and child support obligations</li>
                <li>Monthly debt-to-income ratio or residual income</li>
                <li>Credit history</li>
              </ul>
              <p className="text-sm leading-relaxed mb-3">
                NQM Funding, LLC will not purchase a loan subject to the ATR requirement under TILA unless it 
                meets the requirements of the rule. Certain loans may be exempt from TILA or otherwise exempt 
                from the ATR rule. In those cases, though NQM Funding, LLC may choose to purchase a loan that 
                does not adhere to the formal requirements of the ATR rule. NQM Funding, LLC, will only purchase 
                loans that the applicant appears able to afford based on application of prudent underwriting standards.
              </p>
            </div>

            <div id="zero-tolerance-fraud" className="scroll-mt-20">
              <h3 className="text-xl font-semibold mb-3">Zero Tolerance – Fraud</h3>
              
              {/* Only use red color box for critical warning */}
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                <p className="text-sm text-red-900 font-semibold">
                  ⚠️ NQM Funding practices a zero-tolerance policy of any predatory lending, loan fraud and/or misrepresentation.
                </p>
              </div>

              <p className="text-sm leading-relaxed mb-3">
                All employees, independent contractors, brokers and lender partners of NQM Funding are fully 
                responsible for the content and quality of each application and all data on those applications 
                taken and submitted to NQM Funding.
              </p>
              <p className="text-sm leading-relaxed mb-3">
                The price paid by those who participate in or are impacted by loan fraud is even more costly, 
                impacting borrowers, family members, neighborhoods, and the nation's overall economy. If a 
                borrower cannot legitimately qualify for a loan or afford a particular property, it is a disservice 
                to encourage or enable them to buy a property they cannot afford and may lose to foreclosure. 
                Closing a loan for a borrower, without verifying they can afford it, is considered predatory lending.
              </p>
              <p className="text-sm font-semibold mb-2">
                Potential consequences that may be incurred by an employee or company found or suspected of 
                being a participant in a fraudulent loan transaction include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm mb-4">
                <li>Criminal prosecution including time in jail.</li>
                <li>Loss of License(s).</li>
                <li>Loss of lender access due to industry exchange of information between lenders, mortgage insurance companies including submission of information to investors (Fannie Mae/Freddie Mac), police agencies, and state licensing agencies.</li>
                <li>Loss of approval status and potential civil action by NQM Funding, LLC.</li>
                <li>Civil action by applicant/borrower or other parties to the transaction.</li>
              </ul>
              <p className="text-sm leading-relaxed mb-3">
                NQM Funding, LLC will not tolerate loan fraud. NQM Funding stands behind the quality of its 
                loan production and expects our lending partners and employees to do the same.
              </p>
              <p className="text-sm leading-relaxed">
                We perform pre-funding, post-funding file reviews, and data integrity reverification to ensure 
                the loan meets quality standards.
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
              These NQM Funding, LLC Underwriting Guidelines ("the Guidelines") coupled with each of the 
              Program Matrices for the Programs listed below ("Matrix or Matrices"), provide the comprehensive 
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
              <li>Multi & Mixed (Mixed-Use 2-8 Units and Residential 5-10 Units)</li>
            </ul>

            <p className="text-sm font-semibold mb-2">Foreign Nationals:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>Foreign Nationals are eligible for DSCR (excluding Multi & Mixed) under the Foreign National Program</li>
              <li>For Multi & Mixed-Use properties see the Multi & Mixed Program</li>
            </ul>
          </div>
        </section>

        <section id="non-qm-programs" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold border-b-2 border-gray-200 pb-4 mb-6">
            Non-QM Programs
          </h2>

          {/* Flex Supreme */}
          <div id="flex-supreme-overview" className="scroll-mt-20 mb-12">
            <h3 className="text-2xl font-semibold mb-4">Flex Supreme Overview</h3>
            <p className="text-sm leading-relaxed mb-4">
              The Flex Supreme Program is designed for the most qualified borrowers from an income and 
              credit standpoint, with less complex transactions. Refer to the Flex Supreme Matrix for specific 
              program requirements.
            </p>

            <div id="flex-supreme-general-requirements" className="scroll-mt-20 mb-8">
              <h4 className="text-xl font-semibold mb-3">Flex Supreme - General Requirements</h4>
              
              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">Exceptions</td>
                      <td className="px-6 py-4 text-muted-foreground">Ineligible</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">Product Type</td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-4 space-y-1">
                          <li>30 Year Fixed Fully Amortizing</li>
                          <li>40 Year Fixed I/O (10 year I/O period, and remaining term fully amortizing)</li>
                          <li>5/6 & 7/6 SOFR ARMs - Fully Amortizing only, qualify at higher of fully indexed</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">Interest Only</td>
                      <td className="px-6 py-4 text-muted-foreground">Minimum 700 credit score and Max 75% LTV. First Time Homebuyers are ineligible</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">Loan Amounts</td>
                      <td className="px-6 py-4 text-muted-foreground">Minimum $100,000 and Max $3,000,000</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">2-1 Buydown</td>
                      <td className="px-6 py-4 text-muted-foreground">Ineligible</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">Occupancy</td>
                      <td className="px-6 py-4 text-muted-foreground">Primary Residence, Second Homes, and Investment Properties</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">Loan Purpose</td>
                      <td className="px-6 py-4 text-muted-foreground">Purchase, Rate & Term Refinance, and Cash Out Refinance</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">Cash-Out</td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-4 space-y-1">
                          <li>Minimum of 6 (six) months seasoning from most recent transaction</li>
                          <li>≤70 LTV: Unlimited and &gt;70 LTV: $500,000</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">Interested Party Contributions</td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-2"><strong>Primary Residence and Second Homes:</strong></p>
                        <ul className="list-disc pl-4 space-y-1 mb-2">
                          <li>≤ 75% LTV = 9%</li>
                          <li>&gt; 75% = 6%</li>
                        </ul>
                        <p className="mb-2"><strong>Investment Properties:</strong></p>
                        <ul className="list-disc pl-4 space-y-1">
                          <li>Max 6%</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">Ineligible Transactions</td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-4 space-y-1">
                          <li>Non-Occupant co-borrowers on Second Home and Investment Properties</li>
                          <li>Refinances of properties listed for sale in the previous 6 months (based on the application date)</li>
                          <li>Escrow Holdbacks</li>
                          <li>Community Land Trusts</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">Subordinate Financing</td>
                      <td className="px-6 py-4 text-muted-foreground">Permitted on Primary Residence and Second Homes</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">Escrow Waivers</td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-2">Waiver of escrows is eligible as follows:</p>
                        <ul className="list-disc pl-4 space-y-1">
                          <li>Primary Residence and Second Homes only</li>
                          <li>Loan must be non-HPML</li>
                          <li>Housing History: 0x30x12 is required</li>
                          <li>Flood Insurance premiums for properties located in zones A or V must be escrowed. Note that it is permissible to waive taxes and insurance escrows in these instances when the above requirements are met and the loan is priced with an escrow waiver. In addition, elective flood policies are not required to be escrowed.</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">Prepayment Penalty</td>
                      <td className="px-6 py-4 text-muted-foreground">Required when permitted for Investment Properties. Refer to the "Business Purpose Licensing & PPP Restrictions" PDF in the Documents Tab in the Client Portal.</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">Age of Loan Documentation</td>
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
            <div id="flex-supreme-borrower-eligibility" className="scroll-mt-20 mt-8">
              <h4 className="text-lg font-semibold mb-4">Borrower Eligibility</h4>
              
              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-4">
                <table className="w-full text-sm border-collapse">
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">Eligible</td>
                    <td className="px-6 py-4 text-muted-foreground">
                      <ul className="list-disc pl-4 space-y-1">
                        <li>U.S. Citizens</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">Ineligible</td>
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
                    <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">Non-Occupant Co-Borrower</td>
                    <td className="px-6 py-4 text-muted-foreground">
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Eligible for Primary Residence only</li>
                        <li>Max Total DTI 50%</li>
                        <li>Max 65% DTI for occupying borrower</li>
                        <li>Cash Out is ineligible</li>
                        <li>Non-occupant co-borrower must be a relative</li>
                        <li>Rate & Term Refinance (non-occupant co-borrower must be on current loan)</li>
                        <li>Max Loan Amount $1,000,000</li>
                        <li>1-Unit Primary Residence only</li>
                        <li>0x30x24 rental history</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">First Time Homebuyer (FTHB)</td>
                    <td className="px-6 py-4 text-muted-foreground">
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Max Loan Amount $1,000,000</li>
                        <li>1-Unit Primary Residence only</li>
                        <li>0x30x24 rental history</li>
                        <li>Max DTI &le; 50%</li>
                        <li>Minimum 7-years seasoning for credit events</li>
                        <li>Interest Only is ineligible</li>
                        <li>At least 1 borrower must have a 24 month rental history</li>
                        <li>When at least one borrower has owned a residential property in the prior 3 years, the FTHB requirements do not apply</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>

            {/* Credit Requirements */}
            <div id="flex-supreme-credit-requirements" className="scroll-mt-20 mt-8">
              <h4 className="text-lg font-semibold mb-4">Credit Requirements</h4>
              
              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">Credit Score</td>
                    <td className="px-6 py-4 text-muted-foreground">
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Minimum credit score of 680 is required</li>
                        <li>A minimum of 2 credit scores is required (Refer to Tradelines)</li>
                        <li>The Representative Credit Score is based on the primary wage earners credit score qualify as follows:
                          <ul className="list-circle pl-6 mt-1">
                            <li>Highest middle of 3 credit scores or lower of 2 credit scores When qualifying income is equal for all borrowers on the loan, the highest representative score will be used.</li>
                          </ul>
                        </li>
                        <li>Additional borrowers must have a minimum 600 score.</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">Tradelines</td>
                    <td className="px-6 py-4 text-muted-foreground">
                      <p className="mb-2">When the primary borrower does not have 3 credit scores, the following minimum tradelines are required:</p>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>2 open and reporting trades for 24 months; or</li>
                        <li>3 open and reporting trades for 12 months; or</li>
                        <li>24-months mortgage rating reporting on credit report</li>
                      </ul>
                      <p className="mt-2 italic">Spouses may combine trades.</p>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">Housing History</td>
                    <td className="px-6 py-4 text-muted-foreground">
                      <ul className="list-disc pl-4 space-y-1">
                        <li>0x30x12</li>
                        <li>First Time Homebuyer 0x30x24</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">Credit/Housing Events</td>
                    <td className="px-6 py-4 text-muted-foreground">
                      <p className="mb-2">Borrowers with prior significant derogatory credit events must meet the following criteria:</p>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>All borrowers must have reestablished acceptable credit verified after the credit event</li>
                        <li>Borrowers with unrelated multiple significant credit events are ineligible</li>
                        <li>Minimum 4 years seasoning required</li>
                        <li>First time homebuyer &ge; 7 years seasoning required</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>

            {/* DTI and Residual Requirements */}
            <div id="flex-supreme-dti-residual" className="scroll-mt-20 mt-8">
              <h4 className="text-lg font-semibold mb-4">DTI and Residual Income Requirements</h4>
              
              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">Max DTI</td>
                    <td className="px-6 py-4 text-muted-foreground">Max 50%</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 font-semibold text-foreground bg-muted/50">Residual Income</td>
                    <td className="px-6 py-4 text-muted-foreground">
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Applies to HPML loans or when the DTI &gt; 43% on Primary Residence and Second Homes only</li>
                        <li>Defined as Gross Monthly Income less Total Monthly Obligations</li>
                        <li>Requirement based on # in household:
                          <ul className="list-circle pl-6 mt-1">
                            <li>1 person = $1,500</li>
                            <li>2 people = $2,500</li>
                            <li>Add $150 per additional household member (related or unrelated)</li>
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
            <div id="flex-supreme-income-requirements" className="mb-8 scroll-mt-20">
              <h4 className="text-lg font-semibold mb-4 text-gray-900">Flex Supreme - Income Requirements</h4>
              
              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">Self-Employment</td>
                      <td className="px-6 py-4 text-muted-foreground">Borrowers must have a minimum of 2 years in the current business</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h5 className="font-semibold text-md mb-3 mt-6">Full Doc - Income Requirements</h5>
              
              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">Wage Earners</td>
                      <td className="px-6 py-4 text-muted-foreground">30 days of paystubs reflecting YTD earnings, 1 or 2 years W-2 or an electronic verification of employment, W-2 transcripts when electronic VOE not provided, and a fully executed and signed IRS Form-4506C.</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">Self-Employment</td>
                      <td className="px-6 py-4 text-muted-foreground">1 or 2 years of personal and business tax returns (including K-1s), YTD P&L, Tax Transcripts, 2 months of most recent personal or business bank statements to support the income on the P&L.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">Rental Income</td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-3"><span className="font-medium">Rental Income on Tax Returns:</span></p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>When tax returns are used to qualify, an average of 2 years of rental income will be used unless the income is declining in which case the most recent year's income will be used for qualifying</li>
                          <li>Cash flow Analysis of Schedule E should be completed</li>
                        </ul>
                        <p className="mb-3"><span className="font-medium">Rental Income NOT on Tax Returns:</span></p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>Evidence of borrower's ownership of the property</li>
                          <li>For a refinance and/or to document rental income on other REOs:
                            <ul className="list-circle pl-6 mt-1 space-y-1">
                              <li>Lease agreement</li>
                              <li>Two months of bank statements demonstrating receipt of rental income.</li>
                              <li>Evidence the rental amount is at market rate, which can be documented via a 1007 or through an online source.</li>
                              <li>75% of the rental amount on the lease is used for qualifying.</li>
                            </ul>
                          </li>
                        </ul>
                        <p className="mb-3"><span className="font-medium">Rental Income from a Departing Residence:</span></p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>75% of the rental amount on the lease if used for qualifying.</li>
                          <li>Evidence the rental amount is at market rate, which can be documented through an online source or a 1007.</li>
                        </ul>
                        <p className="mb-3"><span className="font-medium">Short Term Gross Rental Income:</span></p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>12-month look back on rents received using bank statements; or</li>
                          <li>Third party rental statements</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h5 className="font-semibold text-md mb-3 mt-6">Alt Doc - Income Requirements</h5>
              
              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">Personal Bank Statements</td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>12 or 24 months of personal and 2 months of business bank statements</li>
                          <li>Qualifying income is determined by the total eligible deposits from the 12 or 24 months of personal statements divided by the number of statements</li>
                          <li>Evidence within 30 days of the Note date that the business is active and operating with a minimum 2 year operating history</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">Business/Co-Mingled Bank Statements</td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>12 or 24 months of business bank statements. Qualifying income is determined by ONE of the following analysis methods:
                            <ul className="list-circle pl-6 mt-1 space-y-1">
                              <li>Fixed Expense Ratio (50%); OR</li>
                              <li>Expense ratio provided by a third party (CPA/EA or PTIN tax preparer) min ratio of 20%, OR</li>
                              <li>Third party prepared Profit & Loss Statement (CPA or EA) min ratio of 20%</li>
                            </ul>
                          </li>
                          <li>Evidence within 30 days of the Note date that the business is active and operating with a minimum 2 year operating history</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">IRS Form 1099</td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Borrowers receiving 1099 income are eligible if they are individuals paid via 1099 but are not business owners of the entity issuing the 1099; and meet the required 2 most recent consecutive full years of employment with the same employer(s)</li>
                          <li>1 or 2 Years' 1099</li>
                          <li>Fixed Expense Ratio of 10%</li>
                          <li>YTD documentation to support continued receipt of income from each employer or NQMF VOE (or similar form) when 1099 is &gt; 90 days from the Note date</li>
                          <li>Ineligible for Investment Properties</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">Asset Utilization (Standalone only)</td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Qualified Assets must be seasoned for 3 months</li>
                          <li>Cash Out: follow LTV limits per the matrix</li>
                          <li>Max LTV must be reduced by 10%</li>
                          <li>Monthly Income Calculation:
                            <ul className="list-circle pl-6 mt-1 space-y-1">
                              <li>When the DTI without asset utilization is &le; 60%:
                                <ul className="list-square pl-6 mt-1">
                                  <li>Monthly Income Calculation = Net Qualified Assets / 36 Months</li>
                                </ul>
                              </li>
                              <li>When the DTI without Asset Utilization is &gt; 60% or when the borrower's entire income is comprised of income from assets:
                                <ul className="list-square pl-6 mt-1">
                                  <li>Monthly Income Calculation = Net Qualified Assets / 60 Months</li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>Ineligible Assets:
                            <ul className="list-circle pl-6 mt-1 space-y-1">
                              <li>Business assets</li>
                              <li>Unseasoned Foreign Assets</li>
                              <li>Privately traded or restricted / non-vested stocks</li>
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
            <div id="flex-supreme-asset-reserve-requirements" className="mb-8 scroll-mt-20">
              <h4 className="text-lg font-semibold mb-4 text-gray-900">Flex Supreme - Asset and Reserve Requirements</h4>
              
              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">Assets</td>
                      <td className="px-6 py-4 text-muted-foreground">Large Deposits: &gt; 50% of gross income must be documented for purchases.</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">Reserves</td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>&le; $500,000 = 3 months PITIA</li>
                          <li>&gt; $500,000 to $1,500,000 = 6 months PITIA</li>
                          <li>&gt; $1,500,000 to $2,500,000 = 9 months PITIA</li>
                          <li>&gt; $2,500,000 to $3,000,000 = 12 months PITIA</li>
                          <li>Cash Out proceeds may be used to satisfy reserves.</li>
                          <li>When asset utilization is the sole source of income, reserves are not required.</li>
                          <li>All reserves must be deposited in a U.S. Financial Institution.</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">Gift Funds</td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Permitted on 1-unit properties only, provided borrower meets the minimum contribution:
                            <ul className="list-circle pl-6 mt-1 space-y-1">
                              <li>5% primary</li>
                              <li>10% Second Home and Investment Properties</li>
                            </ul>
                          </li>
                          <li>Gift funds may be used for down payment and closing costs:
                            <ul className="list-circle pl-6 mt-1 space-y-1">
                              <li>100% gift funds may be used for down payment and closing costs on a Primary Residence or Second Home when the LTV is &le; 80%.</li>
                              <li>For Investment Properties, gift funds are permitted after meeting the 10% minimum borrower contribution regardless of LTV.</li>
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
            <div id="flex-supreme-property-requirements" className="mb-8 scroll-mt-20">
              <h4 className="text-lg font-semibold mb-4 text-gray-900">Flex Supreme - Property Requirements</h4>
              
              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm mb-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">Property Type</td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <p className="mb-3"><span className="font-medium">Single Family, PUD, Townhome (Attached/Detached)</span></p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>Single Family residences with 1 or more accessory dwelling units (ADU) are permitted if subject property is in a municipality that allows. The Appraiser must specifically confirm compliance with local regulations and provide a minimum of 2 similar comparables.</li>
                        </ul>
                        <p className="mb-3"><span className="font-medium">2-4 Units</span></p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>Max 75% LTV</li>
                          <li>Not eligible for First Time Homebuyers</li>
                          <li>Not eligible for Second Homes</li>
                          <li>2-4 units with 1 ADU are eligible if permitted by the local municipality. The appraiser must specifically confirm compliance with local regulations and provide a minimum of 2 similar comparables.</li>
                        </ul>
                        <p className="mb-3"><span className="font-medium">Condominiums</span></p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Warrantable Condominiums: Max 75% LTV</li>
                          <li>Limited review not available.</li>
                          <li>Non-Warrantable Condos and Condotels are not permitted.</li>
                          <li>Condominium leaseholds not permitted</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">Rural Properties</td>
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
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">Appraisals</td>
                      <td className="px-6 py-4 text-muted-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                          <li>A second appraisal required for loans &gt; $2,000,000</li>
                          <li>Appraisal Review Product required on all loans with a FNMA SSR over 2.5 except for those with a full second appraisal</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">Declining Markets</td>
                      <td className="px-6 py-4 text-muted-foreground">Declining markets, as identified by the appraiser, require a 5% LTV reduction off the matrix when the LTV is &gt; 65%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-foreground bg-muted/50 w-1/4">Acreage</td>
                      <td className="px-6 py-4 text-muted-foreground">Max 10 acres on Primary Residence and Second Homes; 5 acres on Investment Properties</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* TODO: Add remaining programs */}
            <p className="text-sm text-muted-foreground italic mt-8">
              Other programs (Flex Select, Select ITIN, Super Jumbo, Second Lien Select, Foreign National) to be added...
            </p>
          </div>
          {/* End of Flex Supreme Overview */}

        </section>

        <section id="dscr-programs" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold border-b-2 border-gray-200 pb-4 mb-6">
            DSCR Programs
          </h2>
          <p className="text-sm">Content from PDF...</p>
        </section>

        <section id="general-underwriting" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold border-b-2 border-gray-200 pb-4 mb-6">
            General Underwriting Requirements
          </h2>
          <p className="text-sm">Content from PDF...</p>
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