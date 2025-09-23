# NQM Quick Quote Prototype

**⚠️ PROTOTYPE STATUS: This is a frontend prototype with simulated data and placeholder integrations.**

A comprehensive loan origination prototype built with React, TypeScript, and shadcn/ui components. This prototype demonstrates the complete workflow from initial quote generation through document processing, loan record management, and pre-submission package creation.

## 🚀 Features

### Core Workflow
- **Quick Quote Generation** - Loan scenario input and basic calculations
- **Program Matching** - Display eligible loan programs with rates and terms
- **Loan Record Management** - Track selected programs with horizontal card interface
- **Document Management** - Upload and verification tracking with drag-and-drop support
- **Agent Processing** - Automated verification and pre-submission steps
- **Summary Package** - Final loan package with compliance checks

### Interactive Components
- **Loan Record Cards** - Horizontal cards showing active loan records with next steps
- **Document Upload Dialog** - Enhanced file upload with drag-and-drop, preview, and validation
- **Timeline Drawer** - Real-time processing events and status updates
- **Guidelines Chat** - AI-powered assistance for loan guidelines and compliance
- **Explain Drawer** - Contextual help and explanations
- **Modal Dialogs** - Document upload, sharing, and configuration

### State Management
- Zustand-based global state management
- Persistent loan data across workflow steps
- Real-time status updates and progress tracking
- Loan records state with add/remove functionality

## 🛠 Technology Stack

- **Frontend Framewor**: React 19 with TypeScript
- **Build Tool**: Vite 5.4
- **UI Components**: shadcn/ui with Tailwind CSS
- **State Management**: Zustand
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Notifications**: Sonner (toast notifications)
- **File Handling**: React Dropzone
- **Drag & Drop**: @dnd-kit
- **Form Handling**: React Hook Form with Zod validation

## 📁 Project Structure

```
src/
├── components/
│   ├── agents/           # Agent processing components
│   ├── banners/          # Notification banners
│   ├── dialogs/          # Modaldialogs (UploaderDialog)
│   ├── drawers/          # Slide-out panels (Timeline, Explain)
│   ├── forms/            # Form components (QuickQuoteForm)
│   ├── layout/           # Layout components (AppLayout, LeftRail)
│   ├── modals/           # Modal components (ShareModal)
│   ├── submission/       # Document submission components
│   ├── summary/          # Summary page components
│   ├── tables/           # Data tables (EligibleTable, IneligibleTable)
│   └── ui/               # shadcn/ui components + custom UI
│       ├── LoanRecordCard.tsx    # Horizontal loan record cards
│       ├── GuidelinesChat.tsx    # AI chat interface
│       ├── ScenarioChips.tsx     # Loan scenario display
│       └── [50+ UI components]
├── pages/                # Main application pages
│   ├── Dashboard.tsx     # Main dashboard with loan records
│   ├── Programs.tsx      # Program selection page
│   ├── QuickQuote.tsx    # Initial loan input
│   ├── Documents.tsx     # Document management
│   ├── Agents.tsx        # Processing monitoring
│   └── Summary.tsx       # Final package review
├── lib/                  # Utilities, types, and state management
│   ├── store.ts          # Zustand store with loan records
│   ├── types.ts          # TypeScript interfaces
│   └── fixtures.ts       # Placeholder data
└── assets/               # Static assets
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Run linting
pnpm run lint
```

### Development Server
The application will be available at `http://localhost:5173`

## 📋 User Journey

1. **Dashoard** (`/`) - Overview with active loan records and quick access
2. **Quick Quote** (`/quickquote`) - Enter loan details and borrower information
3. **Programs** (`/programs`) - View and select from eligible loan programs
4. **Documents** (`/docs`) - Upload and manage required documentation with enhanced dialog
5. **Agents** (`/agents`) - Monitor automated processing and verification
6. **Summary** (`/summary`) - Review final package before submission

### New Loan Record Workflow
1. Complete Quick Quote to generate loan scenario
2. Navigate to Programs page to view eligible options
3. Click "Select Program" to create loan record and proceed to Documents
4. Return to Dashboard to see active loan records with next steps
5. Use "X" button to remove completed or cancelled loan records

## 🎨 Design System

### Color Palette
- **Brand**: Primay blue (#2563eb)
- **Success**: Green (#10b981) 
- **Warning**: Amber (#f59e0b)
- **Error**: Red (#ef4444)
- **Neutral**: Slate grays

### Typography
- **Headings**: Inter font family, various weights
- **Body**: System font stack with Inter fallback
- **Code**: Monospace for technical content

### Component Patterns
- **Horizontal Cards**: Used for loan records with consistent spacing and actions
- **Modal Dialogs**: Consistent styling with backdrop blur and animations
- **Status Indicators**: Color-coded badges and icons for various states
- **Interactive Elements**: Hover states and smooth transitions throughout

## 🔧 Configuration

### Environment Variables
Currently using static coniguration. For production deployment, consider:
- API endpoints
- Authentication providers
- Feature flags
- Analytics tracking

### Build Configuration
- **Bundle Size**: ~629KB (consider code splitting for optimization)
- **CSS**: Tailwind with custom design tokens
- **Assets**: Optimized for production builds

## 🧪 Testing

### Manual Testing Checklist
- [ ] Complete user workflow from quote to summary
- [ ] Loan record creation and management
- [ ] Document upload functionality with drag-and-drop
- [ ] Timeline and status updates
- [ ] Modal interactions and form validation
- [ ] Responsive design across devices
- [ ] Accessibility compliance (keyboard navigation, screen readers)

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+- Edge 90+

## 📦 Deployment

### Build Output
```bash
pnpm run build
```

Generates optimized files in `dist/`:
- `index.html` - Main HTML file
- `assets/` - Bundled CSS and JavaScript (~69KB total)

### Hosting Options
- **Static Hosting**: Netlify, Vercel, GitHub Pages
- **CDN**: CloudFront, CloudFlare
- **Traditional**: Apache, Nginx

## 🔌 Integration oints

**⚠️ This prototype uses placeholder data. See INTEGRATION.md for detailed integration requirements.**

Key integration areas:
- Loan calculation engines
- Document processing services
- Compliance checking systems
- LOS (Loan Origination System) connectivity
- User authentication and authorization
- File storage and processing services

## 🆕 Recent Updates

### Loan Record Management (Latest)
- **Horizontal Card Interfac**: Clean, compact display of active loan records
- **Dashboard Integration**: Loan records appear prominently on main dashboard
- **Next Step Tracking**: Shows immediate next action with check icon
- **Remove Functionality**: Easy removal of completed or cancelled records

### Enhanced Document Upload
- **Drag-and-Drop Support**: Intuitive file upload experience
- **File Preview**: Visual confirmation of uploaded documents
- **Validation**: File type and size checking
- **Progress Indicators**: Real-time upload status

## 🐛 Known Issues

- Bundle size optimization needed for production
- Some components may need performance optimization for large datasets
- Mobile responsiveness may need refinement for complex orms

## 📚 Documentation

- `INTEGRATION.md` - Detailed integration requirements and placeholder data mapping
- `components/` - Individual component documentation in JSDoc format
- `lib/types.ts` - TypeScript interfaces and data models
- Component examples available in each UI component file

## 🤝 Contributin
This is a prototype for demonstration purposes. For production implementation:

1. Replace all placeholder data with real API integrations
2. Implement proper authentication and authorization
3. Add comprehensive error handling and validation
4. Optimize performance and bundle size
5. Add unit and integration tests
6. Implement real-time data synchronization

## 📄 License

Prototype for internal use. See license terms for production deployent.

## 📞 Support

For questions about this prototype or production implementation:
- Review `INTEGRATION.md` for technical requirements
- Check component documentation for implementation details
- Refer to shadcn/ui documentation for UI component usage
- Review Zustand documentation for state management patterns

---

**Built with ❤️ using React, TypeScript, and shadcn/ui**