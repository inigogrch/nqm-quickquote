// Placeholder constants for prototype - all numbers = 1234567, percents = 77.7%, text = lorem
export const PLACEHOLDER_NUMBER = 1234567;
export const PLACEHOLDER_PERCENT = 77.7;
export const PLACEHOLDER_TEXT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
export const PLACEHOLDER_SHORT_TEXT = "Lorem ipsum dolor sit amet";
export const PLACEHOLDER_NAME = "Lorem Ipsum";
export const PLACEHOLDER_EMAIL = "lorem@ipsum.com";
export const PLACEHOLDER_PHONE = "(555) 123-4567";
export const PLACEHOLDER_ADDRESS = "123 Lorem St, Ipsum City, LI 12345";
export const PLACEHOLDER_DATE = "2024-01-15";
export const PLACEHOLDER_CURRENCY = "$1,234,567";
export const PLACEHOLDER_RATE = "7.75%";

// Program and checklist placeholders
export const PLACEHOLDER_PROGRAM = 'Lorem Program A';
export const PLACEHOLDER_CHECKLIST = {
  minimum: ['1003','Bank Statements (12 mo)','Title Fee Sheet','Credit Report','Borrower Certification'],
  likely: ['LOX for Large Deposit','Entity Docs (LLC)','Insurance Binder','Appraisal','VOE Alt'],
};

// Loan application fixture data
export const PLACEHOLDER_LOAN_DETAILS = {
  borrowerName: PLACEHOLDER_NAME,
  loanAmount: PLACEHOLDER_NUMBER,
  propertyValue: PLACEHOLDER_NUMBER,
  creditScore: 750,
  loanToValue: PLACEHOLDER_PERCENT,
  debtToIncome: 43.2,
  propertyType: "Single Family Residence",
  occupancyType: "Primary Residence",
  loanPurpose: "Purchase"
};

// Loan programs fixture data
export const PLACEHOLDER_LOAN_PROGRAMS = [
  {
    id: "program_1",
    name: PLACEHOLDER_PROGRAM,
    rate: 7.75,
    type: "Conventional"
  },
  {
    id: "program_2", 
    name: "Lorem Program B",
    rate: 8.25,
    type: "Non-QM"
  }
];

// Eligibility rule hits for Why Eligible/Why Not chips
export const PLACEHOLDER_RULE_HITS = [
  {
    id: "rule_001",
    type: "eligible",
    reason: "Credit score meets minimum requirements",
    citation: "Guideline 4.2.1 - Minimum credit score 620",
    ruleId: "CREDIT_MIN_620",
    result: "pass",
    description: "Credit score meets minimum requirements"
  },
  {
    id: "rule_002", 
    type: "eligible",
    reason: "Loan-to-value ratio within acceptable range",
    citation: "Guideline 3.1.5 - Maximum LTV 80% for purchase",
    ruleId: "LTV_MAX_80",
    result: "pass",
    description: "Loan-to-value ratio within acceptable range"
  },
  {
    id: "rule_003",
    type: "assumption",
    reason: "Employment history assumed based on income documentation",
    citation: "Guideline 5.3.2 - Employment verification requirements",
    ruleId: "EMPLOYMENT_VERIFY",
    result: "warning",
    description: "Employment history assumed based on income documentation"
  }
];

// Pricing and confidence data
export const PLACEHOLDER_PRICING = {
  rateBand: "7.50% - 8.00%",
  confidence: PLACEHOLDER_PERCENT,
  points: 1.5,
  fees: PLACEHOLDER_NUMBER,
  monthlyPayment: PLACEHOLDER_CURRENCY
};

// Document fixtures with statuses
export const PLACEHOLDER_DOCUMENTS = [
  {
    id: "doc_001",
    name: "1003 Uniform Residential Loan Application",
    type: "application",
    status: "completed",
    required: true,
    category: "minimum"
  },
  {
    id: "doc_002", 
    name: "Bank Statement",
    type: "financial",
    status: "in_progress",
    required: true,
    category: "minimum"
  },
  {
    id: "doc_003",
    name: "Title Fee Sheet", 
    type: "title",
    status: "pending",
    required: true,
    category: "minimum"
  },
  {
    id: "doc_004",
    name: "Credit Report",
    type: "credit", 
    status: "completed",
    required: true,
    category: "minimum"
  },
  {
    id: "doc_005",
    name: "Borrower Certification Form",
    type: "certification",
    status: "pending", 
    required: true,
    category: "minimum"
  }
];

// Agent processing steps
export const PLACEHOLDER_AGENT_STEPS = [
  {
    id: "verify_001",
    name: "Document Verification",
    status: "completed",
    type: "verification",
    findings: ["All required documents present", "Identity verification passed"],
    hitlRequired: false
  },
  {
    id: "verify_002", 
    name: "Income Analysis",
    status: "in_progress",
    type: "verification", 
    findings: ["Income documentation reviewed", "DTI calculation pending"],
    hitlRequired: true
  },
  {
    id: "pre_001",
    name: "Eligibility Review",
    status: "pending",
    type: "pre_submission",
    findings: [],
    hitlRequired: false
  },
  {
    id: "pre_002",
    name: "Package Assembly", 
    status: "pending",
    type: "pre_submission",
    findings: [],
    hitlRequired: false
  }
];

// Timeline events for Summary page
export const PLACEHOLDER_TIMELINE_EVENTS = [
  {
    id: "timeline_001",
    timestamp: "2024-01-15T10:30:00Z",
    event: "Application Submitted",
    description: "Quick Quote form completed and submitted",
    status: "completed"
  },
  {
    id: "timeline_002",
    timestamp: "2024-01-15T10:45:00Z", 
    event: "Documents Uploaded",
    description: "Minimum required documents uploaded successfully",
    status: "completed"
  },
  {
    id: "timeline_003",
    timestamp: "2024-01-15T11:15:00Z",
    event: "Verification Started", 
    description: "Document verification agent initiated review",
    status: "completed"
  },
  {
    id: "timeline_004",
    timestamp: "2024-01-15T11:30:00Z",
    event: "HITL Review Required",
    description: "Human-in-the-loop review requested for income analysis", 
    status: "in_progress"
  },
  {
    id: "timeline_005",
    timestamp: "2024-01-15T12:00:00Z",
    event: "Pre-Submission Review",
    description: "Automated pre-submission package assembly initiated",
    status: "pending"
  },
  {
    id: "timeline_006", 
    timestamp: "2024-01-15T12:30:00Z",
    event: "Queued to Encompass",
    description: "Loan package queued for LOS submission",
    status: "pending"
  }
];

// Package summary data
export const PLACEHOLDER_PACKAGE = {
  id: "pkg_001",
  loanNumber: "NQM-2024-001234",
  status: "queued_to_encompass",
  submittedDate: PLACEHOLDER_DATE,
  estimatedProcessingTime: "3-5 business days",
  packageType: "Standard Purchase",
  totalDocuments: 12,
  verifiedDocuments: 8,
  pendingDocuments: 4
};

// Guidelines chat messages
export const PLACEHOLDER_CHAT_MESSAGES = [
  {
    id: "msg_001",
    sender: "user",
    message: "What documents are required for a purchase loan?",
    timestamp: "2024-01-15T10:00:00Z"
  },
  {
    id: "msg_002",
    sender: "sweens", 
    message: PLACEHOLDER_TEXT,
    timestamp: "2024-01-15T10:01:00Z"
  }
];