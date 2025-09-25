// API service for Neo4j eligibility engine integration

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export interface EligibilityApiResponse {
  status: string;
  timestamp: string;
  formatted_results: Array<{
    Program: string;
    Status: string;
    Rate?: string;
    Details?: string;
  }>;
  detailed_results: {
    program_results: Record<string, {
      program: string;
      passed: Array<{
        requirement: string;
        expected: string;
        actual: string | number;
        message: string;
      }>;
      failed: Array<{
        requirement: string;
        expected: string;
        actual: string | number;
        message: string;
      }>;
      overall_status: 'PASS' | 'FAIL';
      missing_fields: Array<{
        field: string;
        requirement: string;
        message: string;
      }>;
      subprograms?: Array<{
        name: string;
        status: string;
        rate: string;
        criteria: Record<string, string>;
      }>;
    }>;
    eligible_programs: string[];
    ineligible_programs: string[];
    evaluation_summary: {
      total_programs_evaluated: number;
      programs_passed: number;
      programs_failed: number;
    };
  };
  complete_results: any;
}

// Transform frontend loan details to API format based on your engine's expected schema
function transformLoanDetailsToApiFormat(loanDetails: any) {
  return {
    BorrowerName: loanDetails.borrowerName || 'Test Borrower',
    LoanAmount: loanDetails.loanAmount || 0,
    PropertyValue: loanDetails.propertyValue || 0,
    FicoScore: loanDetails.creditScore || 0,
    LTV: loanDetails.loanToValue || 0,
    CLTV: loanDetails.loanToValue || 0, // Assuming same as LTV for now
    DTI: loanDetails.debtToIncome || 0,
    DSCRRatio: 1.0, // Default value since not in form
    PropertyType: loanDetails.propertyType || 'Single Family',
    OccupancyType: loanDetails.occupancyType || 'Primary',
    LoanPurpose: loanDetails.loanPurpose || 'Purchase'
  };
}

export async function fetchProgramEligibility(loanDetails: any): Promise<EligibilityApiResponse> {
  try {
    console.log('🔍 Calling eligibility engine API...');
    
    const apiPayload = transformLoanDetailsToApiFormat(loanDetails);
    
    console.log('📤 API Payload:', apiPayload);

    const response = await fetch(`${API_BASE_URL}/eligibility`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apiPayload)
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const apiResponse: EligibilityApiResponse = await response.json();
    
    console.log('📥 API Response:', apiResponse);

    return apiResponse;

  } catch (error) {
    console.error('❌ Error fetching program eligibility:', error);
    throw error;
  }
}

// Transform API response to frontend format for easier consumption
export function transformApiResponseToFrontend(apiResponse: EligibilityApiResponse) {
  const eligiblePrograms = [];
  const ineligiblePrograms = [];
  const ruleHits = [];

  // Process all programs from program_results based on failed array length
  if (apiResponse.detailed_results?.program_results) {
    for (const [programKey, programData] of Object.entries(apiResponse.detailed_results.program_results)) {
      if (programData) {
        // Get the clean program name (remove "Program" suffix if exists)
        const programName = programData.program || programKey.replace(' Program', '');
        
        // Extract rate range from qualified subprograms
        let rateRange = { min: 6.5, max: 6.5, hasSubprograms: false };
        
        if (programData.subprograms && programData.subprograms.length > 0) {
          // Check if there are any qualified subprograms (not "No Subprograms Qualified")
          const qualifiedSubprograms = programData.subprograms.filter(sub => 
            sub.status === 'QUALIFIED' && 
            sub.name !== 'No Subprograms Qualified' &&
            sub.rate && typeof sub.rate === 'string'
          );
          
          if (qualifiedSubprograms.length > 0) {
            const rates = qualifiedSubprograms
              .map(sub => parseFloat(sub.rate.replace('%', '')))
              .filter(rate => !isNaN(rate));
              
            if (rates.length > 0) {
              rateRange = {
                min: Math.min(...rates),
                max: Math.max(...rates),
                hasSubprograms: true
              };
            }
          }
        }

        const program = {
          id: programName.toLowerCase().replace(/\s+/g, '_').replace('_program', ''),
          name: programName,
          rate: rateRange.min, // Keep for backward compatibility
          rateRange: rateRange,
          type: programName.includes('DSCR') ? 'DSCR' : 'Conventional'
        };

        // Determine eligibility based on failed array length
        // failed.length === 0 = eligible, failed.length > 0 = ineligible
        const failedCount = programData.failed ? programData.failed.length : 0;
        
        console.log(`🔍 Processing ${programName}: ${failedCount} failures`, {
          failed: programData.failed,
          overall_status: programData.overall_status
        });
        
        if (failedCount === 0) {
          // Add passed requirements to the program object for display in the table
          const programWithDetails = {
            ...program,
            passedRequirements: programData.passed || []
          };
          eligiblePrograms.push(programWithDetails);
          console.log(`✅ ${programName} added to eligible (${failedCount} failures)`);
          
          // Create rule hits for passed requirements
          if (programData.passed) {
            programData.passed.forEach((passedRule, index) => {
              ruleHits.push({
                id: `${programName}_pass_${index}`,
                type: 'eligible' as const,
                reason: passedRule.message,
                citation: passedRule.requirement,
                ruleId: `${programName}_${passedRule.requirement}`,
                result: 'pass' as const,
                description: `${passedRule.requirement}: ${passedRule.expected}`
              });
            });
          }
        } else {
          // Add failure details to the program object for display in the table
          const programWithFailures = {
            ...program,
            failures: programData.failed || []
          };
          ineligiblePrograms.push(programWithFailures);
          console.log(`❌ ${programName} added to ineligible (${failedCount} failures)`);
          
          // Create rule hits for failed requirements
          if (programData.failed) {
            programData.failed.forEach((failedRule, index) => {
              ruleHits.push({
                id: `${programName}_fail_${index}`,
                type: 'ineligible' as const,
                reason: failedRule.message,
                citation: failedRule.requirement,
                ruleId: `${programName}_${failedRule.requirement}`,
                result: 'fail' as const,
                description: `${failedRule.requirement}: ${failedRule.expected}`
              });
            });
          }
        }
      }
    }
  }

  console.log(`📊 Final Results: ${eligiblePrograms.length} eligible, ${ineligiblePrograms.length} ineligible`);

  return {
    eligible: eligiblePrograms,
    ineligible: ineligiblePrograms,
    ruleHits
  };
}

export async function checkApiHealth(): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    return response.ok;
  } catch (error) {
    console.error('❌ API health check failed:', error);
    return false;
  }
}
