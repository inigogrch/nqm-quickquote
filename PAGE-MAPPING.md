# Page Mapping Guide - NQM Quick Quote Application

Simple mapping of pages to their actual UI components and integration requirements.

## 📋 Overview

This document maps each page to:
- **UI Components**: Actual components used with specific line numbers
- **Data Dependencies**: Required data structures and interfaces
- **State & Integration**: Minimal requirements for functionality
- **Placeholder Locations**: Areas requiring real data integration

---

## 🏠 Dashboard Page

**File**: `shadcn-ui/src/pages/Dashboard.tsx`

### UI Components Used
- **LoanRecordCard** (Line 7): `../../components/ui/LoanRecordCard`
- **Card, CardContent, CardDescription, CardHeader, CardTitle** (Line 5): `@/components/ui/card`
- **Button** (Line 6): `@/components/ui/button`
- **Calculator, Search, Clock, FileText** (Line 4): `lucide-react` icons

### Data Dependencies
```typescript
interface LoanRecord {
  id: string;
  profileName: string;
  programName: string;
  requiredSteps: string[];
  createdAt: string;
}

interface TimelineEvent {
  id: string;
  timestamp: string;
  event: string;
  description: string;
  status: 'completed' | 'in_progress' | 'pending' | 'failed';
}
```

### State & Integration
- **State**: `timelineEvents`, `loanRecords`, `removeLoanRecord` (Line 13)
- **Integration**: Loan Record API, Timeline Events API

### Placeholder Locations
- Line 67-68: `{PLACEHOLDER_TEXT}` with TODO comment for live dashboard service
- Line 90-91: `{PLACEHOLDER_TEXT}` with TODO comment for live dashboard service
- Line 125-126: Event description with TODO comment for live timeline service

---

## 💰 Quick Quote Page

**File**: `shadcn-ui/src/pages/QuickQuote.tsx`

### UI Components Used
- **QuickQuoteForm** (Line 5): `../../components/forms/QuickQuoteForm`
- **ImproveAccuracyAccordion** (Line 6): `../../components/forms/ImproveAccuracyAccordion`
- **PreviewCard** (Line 7): `../../components/ui/PreviewCard`
- **Card** (Line 9): `@/components/ui/card`
- **Button** (Line 8): `@/components/ui/button`

### Data Dependencies
```typescript
interface LoanDetails {
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
```

### State & Integration
- **State**: `setLoanDetails`, `setIsMinimumLane` (Line 16)
- **Integration**: Loan Calculation API, Form Validation Service

### Placeholder Locations
- Line 12: `PLACEHOLDER_LOAN_DETAILS` from fixtures used as initial form data
- Line 17: Form initialized with placeholder data

---

## 📊 Programs Page

**File**: `shadcn-ui/src/pages/Programs.tsx`

### UI Components Used
- **ScenarioChips** (Line 5): `../../components/ui/ScenarioChips`
- **EligibleTable** (Line 6): `../../components/tables/EligibleTable`
- **IneligibleTable** (Line 7): `../../components/tables/IneligibleTable`
- **ExplainDrawer** (Line 8): `../../components/drawers/ExplainDrawer`
- **Card** (Line 10): `@/components/ui/card`
- **Button** (Line 9): `@/components/ui/button`

### Data Dependencies
```typescript
interface LoanProgram {
  id: string;
  name: string;
  rate: number;
  apr: number;
  monthlyPayment: number;
  eligible: boolean;
  reason?: string;
}
```

### State & Integration
- **State**: `loanDetails`, `isMinimumLane`, `addLoanRecord` (Line 17)
- **Integration**: Neo4j Program Matching API, Loan Record Creation API

### Placeholder Locations
- Line 24: Hardcoded placeholder name 'John Smith' for loan record creation
- Line 25: Hardcoded placeholder program name 'Lorem Program A'
- Line 26: Static required steps array for loan record

---

## 📄 Documents Page

**File**: `shadcn-ui/src/pages/Docs.tsx`

### UI Components Used
- **DocumentsFolder** (Line 9): `../../components/submission/DocumentsFolder`
- **PackageComposer** (Line 10): `../../components/submission/PackageComposer`
- **UploaderDialog** (Line 11): `../../components/dialogs/UploaderDialog`
- **ExplainDrawer** (Line 12): `../../components/drawers/ExplainDrawer`
- **Badge** (Line 5): `@/components/ui/badge`
- **Button** (Line 6): `@/components/ui/button`
- **Card** (Line 7): `@/components/ui/card`

### Data Dependencies
```typescript
interface Document {
  id: string;
  name: string;
  type: string;
  status: 'pending' | 'uploaded' | 'verified' | 'rejected';
  uploadDate?: string;
  size?: number;
  url?: string;
}
```

### State & Integration
- **State**: `addTimelineEvent` (Line 22)
- **Integration**: AWS S3 Document Storage, Document Processing Service

### Placeholder Locations
- Line 14: `PLACEHOLDER_PROGRAM` from fixtures used in program badge
- Line 92-93: Badge showing placeholder program with TODO comment
- Line 118-120: Static descriptive text with TODO comment for live program service

---

## 📋 Summary Page

**File**: `shadcn-ui/src/pages/Summary.tsx`

### UI Components Used
- **PackageCards** (Line 7): `../../components/summary/PackageCards`
- **ShareModal** (Line 8): `../../components/modals/ShareModal`
- **EmailBanner** (Line 9): `../../components/banners/EmailBanner`
- **TimelineDrawer** (Line 10): `../../components/drawers/TimelineDrawer`
- **Card** (Line 4): `@/components/ui/card`
- **Button** (Line 5): `@/components/ui/button`
- **Badge** (Line 6): `@/components/ui/badge`

### Data Dependencies
```typescript
interface LoanPackage {
  id: string;
  createdAt: string;
  status: 'queued_to_encompass' | 'submitted' | 'processing';
  submittedDate?: string;
  packageType?: string;
  totalDocuments?: number;
  verifiedDocuments?: number;
  pendingDocuments?: number;
}
```

### State & Integration
- **State**: `loanPackage`, `addTimelineEvent` (Line 18)
- **Integration**: Package Assembly Service, LGX Integration, Timeline Service

### Placeholder Locations
- Line 67-68: Package ID and creation date display with TODO comment for live package service

---

## 🎯 Integration Requirements Summary

1. **Neo4j Program Matching** (Programs page)
2. **Loan Calculation API** (Quick Quote page)
3. **AWS S3 Document Storage** (Documents page)
4. **Loan Record Management** (Dashboard page)
5. **Timeline Events API** (Dashboard, Summary pages)
6. **LGX Integration** (Summary page)
7. **Guidelines Chat** (Summary page)
8. **Package Assembly** (Summary page)

---

**Note**: All file paths and line numbers verified against actual codebase structure in `shadcn-ui/` directory.