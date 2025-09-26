// TypeScript interfaces for NQM Quick Quote prototype

export interface LoanDetails {
  borrowerName: string;
  loanAmount: number;
  propertyValue: number;
  creditScore: number;
  loanToValue: number;
  debtToIncome: number;
  propertyType: string;
  occupancyType: string;
  loanPurpose: string;
}

export interface RuleHit {
  id: string;
  type: 'eligible' | 'ineligible' | 'assumption';
  reason: string;
  citation: string;
  ruleId: string;
  result?: 'pass' | 'fail' | 'warning';
  description?: string;
}

export interface LoanProgram {
  id: string;
  name: string;
  rate: number;
  rateRange?: {
    min: number;
    max: number;
    hasSubprograms: boolean;
  };
  type: string;
  originalApiKey?: string; // Store the original API key for document lookup
  failures?: Array<{
    requirement: string;
    message: string;
    actual: string;
    expected: string;
  }>;
  passedRequirements?: Array<{
    requirement: string;
    message: string;
    actual: string;
    expected: string;
  }>;
}

export interface PricingData {
  rateBand: string;
  confidence: number;
  points: number;
  fees: number;
  monthlyPayment: string;
}

export interface Document {
  id: string;
  name: string;
  type: string;
  status: 'pending' | 'in_progress' | 'completed' | 'failed';
  required: boolean;
  category: 'minimum' | 'likely_conditions';
  uploadedFile?: File;
  aiFindings?: string[];
}

export interface AgentStep {
  id: string;
  name: string;
  status: 'pending' | 'in_progress' | 'completed' | 'failed';
  type: 'verification' | 'pre_submission';
  findings: string[];
  hitlRequired: boolean;
}

export interface TimelineEvent {
  id: string;
  timestamp: string;
  event: string;
  description: string;
  status: 'completed' | 'in_progress' | 'pending' | 'failed';
}

export interface LoanPackage {
  id: string;
  loanNumber: string;
  status: 'queued_to_encompass' | 'submitted' | 'processing' | 'approved' | 'rejected';
  submittedDate: string;
  estimatedProcessingTime: string;
  packageType: string;
  totalDocuments: number;
  verifiedDocuments: number;
  pendingDocuments: number;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'sweens';
  message: string;
  timestamp: string;
}

export interface AppState {
  currentStep: 'quick_quote' | 'upload_files' | 'agents' | 'summary';
  loanDetails: LoanDetails | null;
  eligibilityRules: RuleHit[];
  loanPrograms: LoanProgram[];
  ineligiblePrograms: LoanProgram[];
  eligibilityApiResponse: any; // Raw API response from eligibility engine
  pricing: PricingData | null;
  documents: Document[];
  agentSteps: AgentStep[];
  timelineEvents: TimelineEvent[];
  loanPackage: LoanPackage | null;
  chatMessages: ChatMessage[];
  isMinimumLane: boolean;
}

export interface ProgressState {
  minimumDocsProgress: number;
  likelyConditionsProgress: number;
  verificationProgress: number;
  preSubmissionProgress: number;
}