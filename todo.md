# NQM Quick Quote Pre-Submission Prototype - Implementation Plan

## Overview
Building a pure client-side Next.js prototype with two lanes:
1. Minimum → Light Doc Intake → Pre-Submission
2. Full → Pre-Submission

## Core Files to Create

### 1. Data & Fixtures
- `lib/fixtures.ts` - All PLACEHOLDER_ constants (numbers=1234567, percents=77.7%, text=lorem)
- `lib/types.ts` - TypeScript interfaces for all data structures
- `lib/store.ts` - Local state management (tiny store per demoState model)

### 2. Layout & Navigation
- `components/layout/AppLayout.tsx` - Main layout with left rail + breadcrumb header
- `components/layout/LeftRail.tsx` - Navigation sidebar
- `components/layout/BreadcrumbHeader.tsx` - Top breadcrumb navigation
- `components/ui/GuidelinesChat.tsx` - Floating "ask Sweens" widget (bottom-left)

### 3. Quick Quote Form (Route 1)
- `pages/quick-quote.tsx` - Main Quick Quote page
- `components/forms/QuickQuoteForm.tsx` - Two-column form inputs
- `components/forms/ImproveAccuracyAccordion.tsx` - Expandable accuracy section
- `components/tables/ProgramsTable.tsx` - Eligible/Ineligible tables with Why chips
- `components/drawers/ExplainDrawer.tsx` - Rule reasons + citations drawer

### 4. Document Upload & Processing
- `pages/upload-files.tsx` - Document upload page
- `components/upload/DocumentUploader.tsx` - File upload with drag/drop
- `components/upload/ProgressBars.tsx` - Two-tier progress (Minimum/Likely Conditions)
- `components/dialogs/UploaderDialog.tsx` - Upload modal with AI findings + HITL toggle
- `components/upload/DocumentList.tsx` - Document status list with progress

### 5. Agents Processing
- `pages/agents.tsx` - Agents processing page
- `components/agents/VerificationTab.tsx` - Document verification agent
- `components/agents/PreSubmissionTab.tsx` - Pre-submission review agent
- `components/agents/AgentProgress.tsx` - Step progression with HITL resolution

### 6. Summary & Submission
- `pages/summary.tsx` - Final summary page
- `components/summary/PackageCards.tsx` - Loan package display cards
- `components/summary/QueuedBadge.tsx` - "Queued to Encompass" status badge
- `components/modals/ShareModal.tsx` - Share functionality modal
- `components/banners/EmailBanner.tsx` - Email notification banner
- `components/drawers/TimelineDrawer.tsx` - Timeline events drawer (6+ events)

### 7. Shared Components
- `components/ui/StatusChip.tsx` - Status indicators (Why/Why-Not chips)
- `components/ui/ProgressBar.tsx` - Animated progress bars
- `components/ui/DocumentIcon.tsx` - Document type icons
- `components/modals/SubmittedModal.tsx` - Success submission modal

## Key Features to Implement

### State Management
- Local state per demoState model
- Progress tracking across routes
- Document status management
- Agent step progression

### Data Placeholders
- All UI elements rendering placeholder data include `data-placeholder="true"`
- Inline `// TODO: replace with live <service>` comments
- All interactive controls get `data-testid` attributes

### Animations & Interactions
- Framer Motion for smooth transitions
- Progress bars animate and reflect status changes
- Keyboard-accessible dialogs/drawers
- Micro-animations for status updates

### Visual Design
- Gradient background matching Figma mocks
- Card shapes and spacing from reference images
- Left rail + breadcrumb header layout
- Floating Guidelines Chat widget

## Implementation Priority
1. Setup fixtures and types
2. Create layout structure
3. Build Quick Quote form and tables
4. Implement document upload flow
5. Add agents processing screens
6. Create summary and timeline
7. Add animations and polish
8. Test keyboard accessibility

## Success Criteria
- Both lanes fully click-through without backend
- Progress bars animate with status changes
- Explain Drawer shows rule reasons + citations
- Agents panel advances with HITL resolution
- Summary shows package cards + 6+ timeline events
- All placeholders and test IDs present
- Zero console errors
- Keyboard-accessible dialogs/drawers