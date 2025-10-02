import { create } from 'zustand';
import { AppState, ProgressState } from './types';
import { 
  PLACEHOLDER_LOAN_DETAILS, 
  PLACEHOLDER_RULE_HITS, 
  PLACEHOLDER_PRICING,
  PLACEHOLDER_DOCUMENTS,
  PLACEHOLDER_AGENT_STEPS,
  PLACEHOLDER_TIMELINE_EVENTS,
  PLACEHOLDER_PACKAGE,
  PLACEHOLDER_CHAT_MESSAGES,
  PLACEHOLDER_LOAN_PROGRAMS
} from './fixtures';

interface PackageDocument {
  id: string;
  name: string;
  category: 'minimum' | 'likely';
  verified: boolean;
  timestamp: string;
}

interface LoanRecord {
  id: string;
  profileName: string;
  programName: string;
  requiredSteps: string[];
  createdAt: string;
}

interface AppStore extends AppState {
  // New package state
  packageDocuments: PackageDocument[];
  
  // New loan records state
  loanRecords: LoanRecord[];
  
  // Selected program state
  selectedProgramId: string | null;

  // Current loan id
  currentLoanId: string | null;
  
  // Actions
  setCurrentStep: (step: AppState['currentStep']) => void;
  setLoanDetails: (details: AppState['loanDetails']) => void;
  updateDocument: (docId: string, updates: Partial<AppState['documents'][0]>) => void;
  setDocuments: (documents: AppState['documents']) => void;
  updateAgentStep: (stepId: string, updates: Partial<AppState['agentSteps'][0]>) => void;
  addTimelineEvent: (event: AppState['timelineEvents'][0]) => void;
  addChatMessage: (message: AppState['chatMessages'][0]) => void;
  setIsMinimumLane: (isMinimum: boolean) => void;
  
  // New eligibility API actions
  setEligibilityApiResponse: (response: any) => void;
  setLoanPrograms: (programs: AppState['loanPrograms']) => void;
  setIneligiblePrograms: (programs: AppState['ineligiblePrograms']) => void;
  setEligibilityRules: (rules: AppState['eligibilityRules']) => void;
  
  // New package actions
  addToPackage: (doc: PackageDocument) => void;
  removeFromPackage: (docId: string) => void;
  updatePackageDocument: (docId: string, updates: Partial<PackageDocument>) => void;
  reorderPackageDocuments: (startIndex: number, endIndex: number) => void;
  
  // New loan record actions
  addLoanRecord: (record: Omit<LoanRecord, 'id' | 'createdAt'>) => void;
  removeLoanRecord: (recordId: string) => void;
  setCurrentLoanId: (loanId: string | null) => void;
  
  // Selected program actions
  setSelectedProgramId: (programId: string | null) => void;
  
  resetState: () => void;
}

const initialState: AppState = {
  currentStep: 'quick_quote',
  loanDetails: PLACEHOLDER_LOAN_DETAILS,
  eligibilityRules: PLACEHOLDER_RULE_HITS as any,
  loanPrograms: PLACEHOLDER_LOAN_PROGRAMS,
  ineligiblePrograms: [],
  eligibilityApiResponse: null,
  pricing: PLACEHOLDER_PRICING,
  documents: PLACEHOLDER_DOCUMENTS as any,
  agentSteps: PLACEHOLDER_AGENT_STEPS as any,
  timelineEvents: PLACEHOLDER_TIMELINE_EVENTS as any,
  loanPackage: PLACEHOLDER_PACKAGE as any,
  chatMessages: PLACEHOLDER_CHAT_MESSAGES as any,
  isMinimumLane: true
};

export const useAppStore = create<AppStore>((set, get) => ({
  ...initialState,
  packageDocuments: [],
  loanRecords: [],
  selectedProgramId: null,
  currentLoanId: null,

  setCurrentStep: (step) => set({ currentStep: step }),
  
  setLoanDetails: (details) => set({ loanDetails: details }),
  
  updateDocument: (docId, updates) => set((state) => ({
    documents: state.documents.map(doc => 
      doc.id === docId ? { ...doc, ...updates } : doc
    )
  })),
  
  setDocuments: (documents) => set({ documents }),
  
  updateAgentStep: (stepId, updates) => set((state) => ({
    agentSteps: state.agentSteps.map(step => 
      step.id === stepId ? { ...step, ...updates } : step
    )
  })),
  
  addTimelineEvent: (event) => set((state) => ({
    timelineEvents: [...state.timelineEvents, event]
  })),
  
  addChatMessage: (message) => set((state) => ({
    chatMessages: [...state.chatMessages, message]
  })),
  
  setIsMinimumLane: (isMinimum) => set({ isMinimumLane: isMinimum }),
  
  // Eligibility API actions
  setEligibilityApiResponse: (response) => set({ eligibilityApiResponse: response }),
  setLoanPrograms: (programs) => set({ loanPrograms: programs }),
  setIneligiblePrograms: (programs) => set({ ineligiblePrograms: programs }),
  setEligibilityRules: (rules) => set({ eligibilityRules: rules }),
  
  // Package management actions
  addToPackage: (doc) => set((state) => ({
    packageDocuments: [...state.packageDocuments, doc]
  })),
  
  removeFromPackage: (docId) => set((state) => ({
    packageDocuments: state.packageDocuments.filter(doc => doc.id !== docId)
  })),
  
  updatePackageDocument: (docId, updates) => set((state) => ({
    packageDocuments: state.packageDocuments.map(doc =>
      doc.id === docId ? { ...doc, ...updates } : doc
    )
  })),
  
  reorderPackageDocuments: (startIndex, endIndex) => set((state) => {
    const result = Array.from(state.packageDocuments);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return { packageDocuments: result };
  }),
  
  // Loan record management actions
  addLoanRecord: (record) => set((state) => ({
    loanRecords: [...state.loanRecords, {
      ...record,
      id: `loan_record_${Date.now()}`,
      createdAt: new Date().toISOString()
    }]
  })),
  
  removeLoanRecord: (recordId) => set((state) => ({
    loanRecords: state.loanRecords.filter(record => record.id !== recordId)
  })),
  
  setCurrentLoanId: (loanId) => set({ currentLoanId: loanId }),
  
  // Selected program management
  setSelectedProgramId: (programId) => set({ selectedProgramId: programId }),
  
  resetState: () => set({ ...initialState, packageDocuments: [], loanRecords: [], selectedProgramId: null })
}));

// Progress calculation helpers
export const useProgressState = (): ProgressState => {
  const { documents, agentSteps } = useAppStore();
  
  const minimumDocs = documents.filter(doc => doc.category === 'minimum');
  const likelyConditionsDocs = documents.filter(doc => doc.category === 'likely_conditions');
  const verificationSteps = agentSteps.filter(step => step.type === 'verification');
  const preSubmissionSteps = agentSteps.filter(step => step.type === 'pre_submission');
  
  const calculateProgress = (items: any[]) => {
    const completed = items.filter(item => item.status === 'completed').length;
    return items.length > 0 ? (completed / items.length) * 100 : 0;
  };
  
  return {
    minimumDocsProgress: calculateProgress(minimumDocs),
    likelyConditionsProgress: calculateProgress(likelyConditionsDocs),
    verificationProgress: calculateProgress(verificationSteps),
    preSubmissionProgress: calculateProgress(preSubmissionSteps)
  };
};