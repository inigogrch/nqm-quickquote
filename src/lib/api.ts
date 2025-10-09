// API service for Neo4j eligibility engine integration

const API_BASE_URL = import.meta.env.VITE_ELIGIBILITY_ENGINE_BASE_URL;

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

// Helper function to convert occupancy type to short code
function getOccupancyCode(occupancyType: string): string {
  const occupancyMap: Record<string, string> = {
    'Primary Residence': 'OO',  // Owner Occupied
    'Second Home': 'SH',
    'Investment Property': 'NOO',  // Non-Owner Occupied
    'Primary': 'OO',  // Fallback for short form
    'Investment': 'NOO'  // Fallback for short form
  };
  
  return occupancyMap[occupancyType] || 'OO';  // Default to OO
}

// Transform frontend loan details to API format based on your engine's expected schema
function transformLoanDetailsToApiFormat(loanDetails: any) {
  const occupancyType = loanDetails.occupancyType || 'Primary Residence';
  
  return {
    BorrowerName: loanDetails.borrowerName || 'Test Borrower',
    LoanAmount: loanDetails.loanAmount || 0,
    PropertyValue: loanDetails.propertyValue || 0,
    FicoScore: loanDetails.creditScore || 0,
    LTV: loanDetails.loanToValue || 0,
    CLTV: loanDetails.loanToValue || 0, // Assuming same as LTV for now
    DTI: loanDetails.debtToIncome || 0,
    DSCR: 1.3, // Default value since not in form
    PropertyType: loanDetails.propertyType || 'Single Family',
    Occupancy: getOccupancyCode(occupancyType),  // Short code: OO, SH, NOO
    OccupancyType: occupancyType,  // Full text: Primary Residence, Second Home, Investment Property
    LoanPurpose: loanDetails.loanPurpose || 'Purchase',
    State: loanDetails.state || '',
    County: loanDetails.county || '',
    
    // Additional fields from ImproveAccuracyAccordion
    Reserves: loanDetails.reserves || 0,
    SubordinateAmount: loanDetails.subordinateAmount || 0,
    Escrow: loanDetails.escrow || 'Yes',
    BorrowerType: loanDetails.citizenship || 'US Citizen',
    is_select_itin: loanDetails.itin === 'Yes',
    IncomeDocType: loanDetails.incomeDocType || 'Bank Statement',
  };
}

export async function fetchProgramEligibility(loanDetails: any): Promise<EligibilityApiResponse> {
  try {
    // Check if API is configured
    if (!API_BASE_URL) {
      console.warn('⚠️ Eligibility Engine API not configured - returning demo data for UI testing');
      
      // Return mock data structure for UI testing
      return {
        status: 'success',
        timestamp: new Date().toISOString(),
        formatted_results: [
          {
            Program: 'Demo Eligible Program',
            Status: 'ELIGIBLE',
            Rate: '6.75%',
            Details: 'Demo mode - API not configured'
          },
          {
            Program: 'Demo Ineligible Program',
            Status: 'INELIGIBLE',
            Details: 'Demo mode - Failed LTV requirement'
          }
        ],
        detailed_results: {
          program_results: {},
          eligible_programs: ['Demo Eligible Program'],
          ineligible_programs: ['Demo Ineligible Program'],
          evaluation_summary: {
            total_programs_evaluated: 2,
            programs_passed: 1,
            programs_failed: 1,
          }
        },
        complete_results: {}
      };
    }
    
    console.log('🔍 Calling eligibility engine API...');
    
    const apiPayload = transformLoanDetailsToApiFormat(loanDetails);
    
    console.log('📤 API Payload:', apiPayload);

    const response = await fetch(`${API_BASE_URL}/evaluate`, {
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
          type: programName.includes('DSCR') ? 'DSCR' : 'Conventional',
          originalApiKey: programKey // Store the original API key for document lookup
        };

        // Determine eligibility based on failed array length
        // failed.length === 0 = eligible, failed.length > 0 = ineligible
        const failedCount = programData.failed ? programData.failed.length : 0;

        
        if (failedCount === 0) {
          // Add passed requirements to the program object for display in the table
          const programWithDetails = {
            ...program,
            passedRequirements: programData.passed || [],
            missing_fields: programData.missing_fields || []
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
            failures: programData.failed || [],
            missing_fields: programData.missing_fields || []
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

// Document status extraction and mapping
export interface DocumentStatus {
  id: string;
  name: string;
  field: string;
  status: 'pending' | 'uploaded' | 'ai-verified';
  value: boolean | null;
}

// Map API document field names to user-friendly names
const DOCUMENT_FIELD_MAPPING: Record<string, string> = {
  'Has_Initial_1003': '1003 Application',
  'Has_Credit_Report': 'Credit Report',
  'Has_Borrower_Certification_Form': 'Borrower Certification Form',
  'Has_Most_Recent_Bank_statements': 'Bank Statements',
  'Has_Title_Fee_Sheet': 'Title Fee Sheet',
  'Has_Purchase_Agreement': 'Purchase Agreement',
  'Has_Appraisal': 'Appraisal',
  'Has_Income_Documentation': 'Income Documentation',
  'Has_Asset_Documentation': 'Asset Documentation',
  'Has_Property_Documentation': 'Property Documentation'
};

// Extract document statuses from API response for a specific program
export function extractDocumentStatusesForProgram(
  apiResponse: EligibilityApiResponse,
  programId: string
): DocumentStatus[] {
  const documentStatuses: DocumentStatus[] = [];

  if (!apiResponse.detailed_results?.program_results) {
    return documentStatuses;
  }

  // Find the program data - try both the programId and variations
  const programKeys = Object.keys(apiResponse.detailed_results.program_results);
  const programKey = programKeys.find(key => {
    // Generate the same ID transformation we use when creating programs
    const keyAsId = key.toLowerCase().replace(/\s+/g, '_').replace('_program', '');
    const keyAsIdVariant = key.replace(' Program', '').toLowerCase().replace(/\s+/g, '_');
    
    return (
      key.toLowerCase().includes(programId.toLowerCase()) ||
      programId.toLowerCase().includes(key.toLowerCase()) ||
      keyAsId === programId.toLowerCase() ||
      keyAsIdVariant === programId.toLowerCase() ||
      key.replace(/\s+/g, '_').toLowerCase() === programId.toLowerCase()
    );
  });

  if (!programKey) {
    console.warn(`Program not found in API response: ${programId}`);
    console.warn('Available program keys:', programKeys);
    console.warn('Attempting to match against:', {
      programId: programId,
      programIdLower: programId.toLowerCase(),
      availableKeys: programKeys.map(k => ({
        original: k,
        lower: k.toLowerCase(),
        normalized: k.replace(/\s+/g, '_').toLowerCase()
      }))
    });
    return documentStatuses;
  }

  const programData = apiResponse.detailed_results.program_results[programKey];

  // Extract document requirements from passed, failed, and missing arrays
  const allRequirements = [
    ...(programData.passed || []),
    ...(programData.failed || []),
    ...(programData.missing_fields || [])
  ];

  // Look for document-related requirements
  allRequirements.forEach((requirement, index) => {
    // Check if this requirement is about documents - handle both formats
    if ('actual' in requirement) {
      const actualValue = requirement.actual;
      
      // Look for Has_* pattern fields that represent document requirements
      if (typeof actualValue === 'object' && actualValue !== null) {
        Object.entries(actualValue).forEach(([field, value]) => {
          if (field.startsWith('Has_') && field in DOCUMENT_FIELD_MAPPING) {
            const documentName = DOCUMENT_FIELD_MAPPING[field];
            
            // Determine status based on value
            let status: 'pending' | 'uploaded' | 'ai-verified' = 'pending';
            
            if (value === true) {
              status = 'uploaded'; // Document is present
            } else if (value === false || value === null) {
              status = 'pending'; // Document is missing or not verified
            }

            documentStatuses.push({
              id: `${programId}_${field}`,
              name: documentName,
              field: field,
              status: status,
              value: value as boolean | null
            });
          }
        });
      }
    }
  });

  return documentStatuses;
}

// Extract document statuses for all programs
export function extractDocumentStatusesForAllPrograms(
  apiResponse: EligibilityApiResponse
): Record<string, DocumentStatus[]> {
  const allProgramStatuses: Record<string, DocumentStatus[]> = {};

  if (!apiResponse.detailed_results?.program_results) {
    return allProgramStatuses;
  }

  Object.keys(apiResponse.detailed_results.program_results).forEach(programKey => {
    const programId = programKey.toLowerCase().replace(/\s+/g, '_').replace('_program', '');
    allProgramStatuses[programId] = extractDocumentStatusesForProgram(apiResponse, programId);
  });

  return allProgramStatuses;
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
