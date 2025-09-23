# Integration Guide - NQM Quick Quote Prototype

This document outlines all areas where placeholder data is used and details the real integrations needed for production deployment.

## 🎯 Overview

The current prototype uses static data and simulated responses. This guide maps each placeholder to the required production integration, including new loan record management, enhanced document upload features, and comprehensive backend integration requirements.

## 📋 Summary

### Services Requiring Integration

1. **Neo4j Graph Database** - Program eligibility, minimum documents, completion paths
   - Files: `src/pages/Programs.tsx`, `components/tables/EligibleTable.tsx`, `components/tables/IneligibleTable.tsx`

2. **Loan Calculation Engine** - LTV, DTI, payment calculations
   - Files: `src/pages/QuickQuote.tsx`, `components/ui/PreviewCard.tsx`, `lib/store.ts`

3. **AWS S3 Document Storage** - File upload, storage, processing
   - Files: `components/dialogs/UploaderDialog.tsx`, `components/submission/DocumentsFolder.tsx`, `src/pages/Docs.tsx`

4. **Guidelines Chat (ask Sweens v2)** - AI-powered compliance assistance
   - Files: `components/ui/GuidelinesChat.tsx`

5. **Loan Record Management** - CRUD operations for loan tracking
   - Files: `src/pages/Dashboard.tsx`, `components/ui/LoanRecordCard.tsx`, `lib/store.ts`

6. **Timeline Events** - Real-time event tracking and notifications
   - Files: `components/drawers/TimelineDrawer.tsx`, `lib/store.ts`

7. **LGX Integration** - Handover to LOS system (Encompass)
   - Files: `components/summary/PackageCards.tsx`, `src/pages/Summary.tsx`

8. **Compliance Automation** - Risk assessment and validation
   - Files: `components/summary/PackageCards.tsx`, `src/pages/Summary.tsx`

## 🛠 Backend Team Implementation Steps

1. **Neo4j Engine Setup** - Configure graph database for program matching and eligibility queries
2. **QuickQuote to Program Eligibility** - Implement eligibility matching based on loan criteria
3. **Loan Calculation API** - Replace static calculations with real loan calculation engine
4. **Selected Program to Minimum Docs** - Map programs to required document lists via Neo4j
5. **AWS S3 Setup** - Configure document upload, storage, and processing pipeline
6. **Rack and Stack (Document Processing)** - Implement document verification and compliance checking
7. **ask Sweens v2 Integration (Guidelines Chat)** - Integrate AI-powered compliance assistance system
8. **Loan Record Management** - Implement CRUD operations for loan tracking and status management
9. **Timeline Events** - Set up real-time event tracking and notification system
10. **LGX Integration** - Implement handover system that will send completed packages to Encompass
11. **Compliance Automation** - Automate risk assessment and regulatory compliance validation

## 📊 Data Integration Points

### 1. Loan Calculation Engine

**Current State**: Static calculations in `lib/fixtures.ts`
**Files Affected**: 
- `src/pages/QuickQuote.tsx`
- `components/ui/PreviewCard.tsx`
- `lib/store.ts`

**Integration Required**:
```typescript
// Replace static calculations with API calls
interface LoanCalculationAPI {
  calculateLTV(loanAmount: number, propertyValue: number): Promise<number>;
  calculateDTI(monthlyDebt: number, monthlyIncome: number): Promise<number>;
  calculatePayment(principal: number, rate: number, term: number): Promise<number>;
  validateLoanScenario(scenario: LoanDetails): Promise<ValidationResult>;
}
```

**Placeholder Locations**:
- Line 45-60 in `QuickQuote.tsx`: Manual LTV calculation
- Line 23-35 in `PreviewCard.tsx`: Static formatting functions
- `PLACEHOLDER_CALCULATIONS` in `fixtures.ts`

### 2. Program Matching Service (Neo4j Integration)

**Current State**: Static program list in `lib/fixtures.ts`
**Files Affected**:
- `src/pages/Programs.tsx`
- `components/tables/EligibleTable.tsx`
- `components/tables/IneligibleTable.tsx`

**Neo4j Graph Engine Integration Required**:
```typescript
interface ProgramMatchingAPI {
  getEligiblePrograms(loanDetails: LoanDetails): Promise<LoanProgram[]>;
  getProgramDetails(programId: string): Promise<ProgramDetails>;
  calculateProgramRates(programId: string, scenario: LoanDetails): Promise<RateQuote>;
  getMinimumDocuments(programId: string): Promise<DocumentRequirement[]>;
  getRoadToCompletion(programId: string, currentStatus: string): Promise<CompletionStep[]>;
}

// Neo4j Query Examples for Backend Team
interface Neo4jQueries {
  // Quick Quote Eligibility
  eligibilityQuery: `
    MATCH (p:Program)-[:REQUIRES]->(r:Requirement)
    WHERE r.creditScore <= $creditScore 
    AND r.maxLTV >= $loanToValue
    AND r.maxDTI >= $debtToIncome
    RETURN p, collect(r) as requirements
  `;
  
  // Minimum Documents Path
  documentsQuery: `
    MATCH (p:Program {id: $programId})-[:REQUIRES_DOCS]->(d:Document)
    RETURN d.type, d.priority, d.description
    ORDER BY d.priority
  `;
  
  // Road to Completion
  completionQuery: `
    MATCH (p:Program {id: $programId})-[:COMPLETION_PATH]->(s:Step)
    WHERE s.currentStatus = $status
    RETURN s.nextSteps, s.estimatedDays, s.requirements
    ORDER BY s.sequence
  `;
}
```

**Placeholder Locations**:
- Line 15-25 in `Programs.tsx`: `MOCK_PROGRAMS` usage
- Line 30-45 in `EligibleTable.tsx`: Static program data rendering
- Line 20-35 in `IneligibleTable.tsx`: Static ineligible reasons
- `MOCK_PROGRAMS` array in `fixtures.ts`

### 3. Loan Record Management System

**Current State**: Local Zustand state in `lib/store.ts`
**Files Affected**:
- `src/pages/Dashboard.tsx`
- `src/pages/Programs.tsx`
- `components/ui/LoanRecordCard.tsx`
- `lib/store.ts` (loanRecords state)

**Integration Required**:
```typescript
interface LoanRecordAPI {
  createLoanRecord(profileName: string, programName: string): Promise<LoanRecord>;
  getLoanRecords(userId: string): Promise<LoanRecord[]>;
  updateLoanRecord(recordId: string, updates: Partial<LoanRecord>): Promise<LoanRecord>;
  deleteLoanRecord(recordId: string): Promise<void>;
  getNextStep(recordId: string): Promise<NextStepInfo>;
}

// Data Schema for Backend Mapping
interface LoanRecord {
  id: string;
  profileName: string;
  programName: string;
  nextStep: string;
  status: 'active' | 'completed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
  userId: string;
}
```

**Placeholder Locations**:
- Line 15-25 in `LoanRecordCard.tsx`: `{/* TODO: replace with live loan record service */}`
- Line 45-60 in `Dashboard.tsx`: Local state loan records display
- Line 80-95 in `Programs.tsx`: `addLoanRecord` call with static data
- `loanRecords` state management in `store.ts`

### 4. Document Management System (AWS S3 Integration)

**Current State**: Local state simulation with enhanced drag-and-drop
**Files Affected**:
- `src/pages/Docs.tsx`
- `components/dialogs/UploaderDialog.tsx`
- `components/submission/DocumentsFolder.tsx`
- `components/agents/VerificationTab.tsx`

**AWS S3 Configuration Required**:
```typescript
interface DocumentAPI {
  uploadDocument(file: File, documentType: string, loanId: string): Promise<UploadResult>;
  getDocumentStatus(documentId: string): Promise<DocumentStatus>;
  verifyDocument(documentId: string): Promise<VerificationResult>;
  getRequiredDocuments(loanType: string): Promise<DocumentRequirement[]>;
  deleteDocument(documentId: string): Promise<void>;
  getSignedUploadUrl(fileName: string, fileType: string): Promise<SignedUrlResult>;
}

// AWS S3 Configuration
interface S3Config {
  bucketName: string;
  region: string;
  accessKeyId: string;
  secretAccessKey: string;
  maxFileSize: number; // 10MB default
  allowedFileTypes: string[]; // ['pdf', 'jpg', 'png', 'doc', 'docx']
}

// Environment Variables for S3
const s3Config = {
  VITE_AWS_S3_BUCKET: process.env.VITE_AWS_S3_BUCKET,
  VITE_AWS_REGION: process.env.VITE_AWS_REGION,
  VITE_AWS_ACCESS_KEY_ID: process.env.VITE_AWS_ACCESS_KEY_ID,
  VITE_AWS_SECRET_ACCESS_KEY: process.env.VITE_AWS_SECRET_ACCESS_KEY,
};
```

**Placeholder Locations**:
- Line 35-50 in `UploaderDialog.tsx`: Simulated upload progress with `data-placeholder="true"`
- Line 25-40 in `VerificationTab.tsx`: Mock verification steps with `{/* TODO: replace with live document service */}`
- Line 60-80 in `DocumentsFolder.tsx`: `{/* TODO: replace with live document service */}`
- `MOCK_DOCUMENTS` in `fixtures.ts`

### 5. Guidelines and Chat System

**Current State**: Simulated chat responses
**Files Affected**:
- `components/ui/GuidelinesChat.tsx`

**Integration Required**:
```typescript
interface GuidelinesAPI {
  sendMessage(message: string, context: LoanContext): Promise<ChatResponse>;
  getGuidelines(programType: string): Promise<GuidelineSet>;
  validateCompliance(loanDetails: LoanDetails): Promise<ComplianceResult>;
}
```

**Placeholder Locations**:
- Line 45-65 in `GuidelinesChat.tsx`: Simulated bot responses with `{/* TODO: replace with live chat service */}`
- Line 80-90: Static guideline suggestions with `data-placeholder="true"`
- `PLACEHOLDER_TEXT` usage for bot responses

### 6. Timeline and Event Tracking

**Current State**: Local state management
**Files Affected**:
- `components/drawers/TimelineDrawer.tsx`
- `lib/store.ts` (timeline events)

**Integration Required**:
```typescript
interface TimelineAPI {
  getTimelineEvents(loanId: string): Promise<TimelineEvent[]>;
  addTimelineEvent(event: TimelineEvent): Promise<void>;
  subscribeToEvents(loanId: string, callback: (event: TimelineEvent) => void): void;
}
```

**Placeholder Locations**:
- Line 20-35 in `TimelineDrawer.tsx`: Event rendering with static data and `{/* TODO: replace with live timeline service */}`
- `addTimelineEvent` calls throughout the application
- Timeline state management in `store.ts`

### 7. Compliance and Risk Assessment (Updated for LGX Integration)

**Current State**: Static compliance data
**Files Affected**:
- `components/summary/PackageCards.tsx`
- `src/pages/Summary.tsx`

**Integration Required**:
```typescript
interface ComplianceAPI {
  runComplianceCheck(loanPackage: LoanPackage): Promise<ComplianceResult>;
  calculateRiskScore(loanDetails: LoanDetails): Promise<RiskAssessment>;
  validateQMCompliance(loan: LoanDetails): Promise<QMResult>;
  checkInvestorGuidelines(programId: string, loan: LoanDetails): Promise<GuidelineResult>;
  handoverToLGX(loanPackage: LoanPackage): Promise<LGXHandoverResult>;
}

// Updated Next Steps Workflow
interface WorkflowSteps {
  step1: "Upload Documents"; // Upload and organize all required loan documentation
  step2: "Review Package"; // Final review of all documents and loan details  
  step3: "Handover to LGX"; // LGX system will handle automated LOS submission and processing
}
```

**Placeholder Locations**:
- Line 60-80 in `PackageCards.tsx`: Static compliance badges with `{/* TODO: replace with live compliance service */}`
- Line 90-110: Hardcoded confidence scores with `data-placeholder="true"`
- Line 220-250: Next Steps workflow with `{/* TODO: replace with live workflow service */}`
- Compliance status throughout summary components

## 🌐 API Configuration

### Environment Variables Needed

```bash
# API Endpoints
VITE_API_BASE_URL=https://api.nqm.com
VITE_LOAN_ENGINE_URL=https://loan-engine.nqm.com
VITE_DOCUMENT_SERVICE_URL=https://docs.nqm.com
VITE_COMPLIANCE_SERVICE_URL=https://compliance.nqm.com
VITE_LGX_SERVICE_URL=https://lgx.nqm.com

# Neo4j Database
VITE_NEO4J_URI=bolt://neo4j.nqm.com:7687
VITE_NEO4J_USER=neo4j_user
VITE_NEO4J_PASSWORD=neo4j_password

# AWS S3 Configuration
VITE_AWS_S3_BUCKET=nqm-documents
VITE_AWS_REGION=us-east-1
VITE_AWS_ACCESS_KEY_ID=your_access_key
VITE_AWS_SECRET_ACCESS_KEY=your_secret_key

# Authentication
VITE_AUTH_DOMAIN=auth.nqm.com
VITE_AUTH_CLIENT_ID=your_client_id

# Feature Flags
VITE_ENABLE_CHAT=true
VITE_ENABLE_TIMELINE=true
VITE_ENABLE_ADVANCED_CALCULATIONS=true
VITE_ENABLE_LOAN_RECORDS=true

# External Services
VITE_ANALYTICS_ID=your_analytics_id
VITE_ERROR_TRACKING_DSN=your_sentry_dsn
```

### LocalStorage Configuration for Inputs

```typescript
// LocalStorage keys for form inputs and user preferences
const STORAGE_KEYS = {
  LOAN_DETAILS: 'nqm_loan_details',
  USER_PREFERENCES: 'nqm_user_preferences',
  FORM_DRAFTS: 'nqm_form_drafts',
  SELECTED_PROGRAMS: 'nqm_selected_programs',
  DOCUMENT_CACHE: 'nqm_document_cache'
};

// LocalStorage utility functions
interface LocalStorageAPI {
  saveLoanDetails(details: LoanDetails): void;
  getLoanDetails(): LoanDetails | null;
  saveFormDraft(formId: string, data: any): void;
  getFormDraft(formId: string): any | null;
  clearFormDraft(formId: string): void;
}
```

### API Client Setup

```typescript
// lib/api-client.ts
class APIClient {
  private baseURL: string;
  private authToken: string | null = null;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  setAuthToken(token: string) {
    this.authToken = token;
  }

  async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    // Implementation with error handling, retries, etc.
  }
}
```

## 📝 Data Models and Schemas

### Required API Response Formats

```typescript
// Loan Program Response (for Neo4j mapping)
interface LoanProgramResponse {
  id: string;
  name: string;
  description: string;
  rate: number;
  apr: number;
  terms: number[];
  maxLTV: number;
  minCreditScore: number;
  eligibilityRequirements: string[];
  fees: ProgramFee[];
  minimumDocuments: DocumentRequirement[];
  completionSteps: CompletionStep[];
}

// Document Upload Response (AWS S3)
interface DocumentUploadResponse {
  documentId: string;
  status: 'uploaded' | 'processing' | 'verified' | 'rejected';
  s3Key: string;
  s3Bucket: string;
  signedUrl: string;
  metadata: DocumentMetadata;
  verificationResults?: VerificationResult[];
}

// Processing Status Response
interface ProcessingStatusResponse {
  processId: string;
  status: 'pending' | 'in_progress' | 'completed' | 'failed';
  currentStep: string;
  completedSteps: string[];
  estimatedCompletion: string;
  results?: ProcessingResult[];
}

// Loan Record Response
interface LoanRecordResponse {
  id: string;
  profileName: string;
  programName: string;
  nextStep: string;
  status: 'active' | 'completed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
  userId: string;
  loanDetails: LoanDetails;
}

// LGX Handover Response
interface LGXHandoverResponse {
  handoverId: string;
  status: 'initiated' | 'in_progress' | 'completed' | 'failed';
  losSubmissionId?: string;
  estimatedProcessingTime: string;
  nextSteps: string[];
}
```

### TypeScript Interfaces (from lib/types.ts)

```typescript
// Core data models that backend JSON should map to
interface LoanDetails {
  loanAmount: number;
  propertyValue: number;
  loanToValue: number;
  creditScore: number;
  debtToIncome: number;
  propertyType: string;
  loanPurpose: string;
  occupancyType: string;
}

interface LoanProgram {
  id: string;
  name: string;
  rate: number;
  apr: number;
  monthlyPayment: number;
  closingCosts: number;
  cashToClose: number;
  eligible: boolean;
  reason?: string;
}

interface Document {
  id: string;
  name: string;
  type: string;
  status: 'pending' | 'uploaded' | 'verified' | 'rejected';
  uploadDate?: string;
  size?: number;
  url?: string;
}

interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  type: 'info' | 'success' | 'warning' | 'error';
  source: string;
}

interface LoanRecord {
  id: string;
  profileName: string;
  programName: string;
  nextStep: string;
  createdAt: string;
}
```

## 🔄 State Management Updates

### Store Integration Points (lib/store.ts)

Update `lib/store.ts` to integrate with real APIs:

```typescript
// Replace static data with API calls
const useAppStore = create<AppState>((set, get) => ({
  // ... existing state

  // Update methods to use real APIs
  fetchLoanPrograms: async (loanDetails: LoanDetails) => {
    const programs = await programAPI.getEligiblePrograms(loanDetails);
    set({ availablePrograms: programs });
  },

  uploadDocument: async (file: File, documentType: string) => {
    const result = await documentAPI.uploadDocument(file, documentType);
    // Update state with real upload result
  },

  // Loan Records Management
  addLoanRecord: async (profileName: string, programName: string) => {
    const record = await loanRecordAPI.createLoanRecord(profileName, programName);
    set(state => ({ 
      loanRecords: [...state.loanRecords, record] 
    }));
  },

  removeLoanRecord: async (id: string) => {
    await loanRecordAPI.deleteLoanRecord(id);
    set(state => ({ 
      loanRecords: state.loanRecords.filter(record => record.id !== id) 
    }));
  },

  // ... other API integration methods
}));
```

## 🔍 Search and Replace Guide

To identify all placeholder areas, search for:
- `PLACEHOLDER_TEXT`
- `data-placeholder="true"`
- `TODO: replace with live`
- `MOCK_` prefixed constants
- Simulated `setTimeout` calls
- Static arrays in `fixtures.ts`
- `{/* TODO: replace with live` comments

Each occurrence needs to be replaced with appropriate API integration.

## 📋 Production Deployment Checklist

### Demo Workflow Essentials
- [ ] Replace all `PLACEHOLDER_TEXT` and `data-placeholder` attributes
- [ ] Configure Neo4j graph database 
- [ ] Implement Scenario + Pricing + Eligibility workflow
- [ ] Implement Selected Program to Minimum Docs mapping (Full Loan Review)
- [ ] Set up AWS S3 for document storage and processing
- [ ] Implement Rack and Stack document processing pipeline
- [ ] Integrate ask Sweens v2 for Guidelines Chat functionality
- [ ] Configure localStorage for form inputs and user preferences
- [ ] Set up Timeline Events real-time tracking

### Additional Prod. Requirements (Tentative)
- [ ] Implement Loan Record Management CRUD operations
- [ ] Implement Compliance Automation systems
- [ ] Configure LGX Integration for Encompass handover
- [ ] Add proper error handling and user feedback
- [ ] Set up authentication and authorization
- [ ] Configure environment variables for different environments
- [ ] Implement proper logging and monitoring
- [ ] Add comprehensive testing coverage
- [ ] Optimize bundle size and performance
- [ ] Set up CI/CD pipeline with proper testing
- [ ] Configure security headers and HTTPS
- [ ] Add accessibility compliance testing
- [ ] Implement proper SEO and meta tags

## 📞 Next Steps

Review each integration point, prioritize based on business requirements, and implement in phases for a smooth production transition. The backend team should focus on Neo4j graph database implementation first, followed by AWS S3 document management, then proceed with the remaining API integrations.