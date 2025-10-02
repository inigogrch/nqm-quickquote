'use client';

import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  FileText, 
  Calculator, 
  Table, 
  Upload, 
  Bot, 
  CheckCircle,
  Home,
  Settings,
  User,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useAppStore } from '../../lib/store';

const navigationItems = [
  { 
    id: 'dashboard', 
    label: 'Dashboard', 
    icon: Home, 
    href: '/dashboard',
    step: null
  },
  { 
    id: 'quickquote', 
    label: 'Quick Quote', 
    icon: Calculator, 
    href: '/quickquote',
    step: 'quick_quote' as const
  },
  { 
    id: 'programs', 
    label: 'Programs', 
    icon: Table, 
    href: '/programs',
    step: null
  },
  { 
    id: 'docs', 
    label: 'Submission', 
    icon: Upload, 
    href: '/docs',
    step: 'upload_files' as const
  },
  // Agent Screen Implementation for future use
  // { 
  //   id: 'agents', 
  //   label: 'Agents', 
  //   icon: Bot, 
  //   href: '/agents',
  //   step: 'agents' as const
  // },
  { 
    id: 'summary', 
    label: 'Summary', 
    icon: CheckCircle, 
    href: '/summary',
    step: 'summary' as const
  }
];

interface LeftRailProps {
  isCollapsed?: boolean;
  onToggleCollapse?: (collapsed: boolean) => void;
}

export function LeftRail({ isCollapsed = false, onToggleCollapse }: LeftRailProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentStep, setCurrentStep, workflow } = useAppStore();

  const isNavigationEnabled = (itemId: string) => {
    // Dashboard is always enabled
    if (itemId === 'dashboard') return true;
    
    // Check workflow state for other sections
    if (itemId === 'quickquote') return workflow.quickQuoteUnlocked;
    if (itemId === 'programs') return workflow.programsUnlocked;
    if (itemId === 'docs') return workflow.submissionUnlocked;
    if (itemId === 'summary') return workflow.summaryUnlocked;
    
    return false;
  };

  const handleNavigation = (item: typeof navigationItems[0]) => {
    // Only navigate if the section is enabled
    if (!isNavigationEnabled(item.id)) return;
    
    navigate(item.href);
    if (item.step) {
      setCurrentStep(item.step);
    }
  };

  const handleToggleCollapse = () => {
    onToggleCollapse?.(!isCollapsed);
  };

  return (
    <div 
      className={cn(
        "fixed left-0 top-0 h-screen bg-white/80 backdrop-blur-sm border-r border-slate-200 flex flex-col transition-all duration-300 ease-in-out z-40",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* App Header */}
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-brand to-brand-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <FileText className="w-4 h-4 text-white" />
          </div>
          {!isCollapsed && (
            <div className="min-w-0">
              <h1 className="font-semibold text-slate-900 truncate">NQM</h1>
              <p className="text-xs text-slate-500 truncate">Quick Quote</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            const isEnabled = isNavigationEnabled(item.id);
            const isCompleted = item.step && currentStep !== item.step && 
              navigationItems.findIndex(nav => nav.step === currentStep) > 
              navigationItems.findIndex(nav => nav.step === item.step);

            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item)}
                data-testid={`nav-${item.id}`}
                disabled={!isEnabled}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors relative group",
                  !isEnabled && "opacity-40 cursor-not-allowed",
                  isActive
                    ? "bg-brand/10 text-brand-600 font-medium"
                    : isEnabled 
                      ? "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      : "text-slate-400"
                )}
                title={isCollapsed ? item.label : undefined}
              >
                <Icon className={cn(
                  "w-4 h-4 flex-shrink-0",
                  isCompleted && "text-ok"
                )} />
                {!isCollapsed && (
                  <>
                    <span className="flex-1 truncate">{item.label}</span>
                    {isCompleted && (
                      <CheckCircle className="w-4 h-4 text-ok flex-shrink-0" />
                    )}
                  </>
                )}
                
                {/* Tooltip for collapsed state */}
                {isCollapsed && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-slate-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                    {item.label}
                    {isCompleted && " ✓"}
                    {!isEnabled && " (Locked)"}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-slate-200">
        <div className="space-y-2">
          <button 
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors group relative",
            )}
            data-testid="nav-settings"
            title={isCollapsed ? "Settings" : undefined}
          >
            <Settings className="w-4 h-4 flex-shrink-0" />
            {!isCollapsed && <span className="truncate">Settings</span>}
            {isCollapsed && (
              <div className="absolute left-full ml-2 px-2 py-1 bg-slate-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                Settings
              </div>
            )}
          </button>
          
          <button 
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors group relative",
            )}
            data-testid="nav-profile"
            title={isCollapsed ? "Profile" : undefined}
          >
            <User className="w-4 h-4 flex-shrink-0" />
            {!isCollapsed && <span className="truncate">Profile</span>}
            {isCollapsed && (
              <div className="absolute left-full ml-2 px-2 py-1 bg-slate-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                Profile
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Collapse Toggle Button */}
      <button
        onClick={handleToggleCollapse}
        className="absolute -right-3 top-6 w-6 h-6 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow text-slate-600 hover:text-slate-900"
        data-testid="sidebar-toggle"
        title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isCollapsed ? (
          <ChevronRight className="w-3 h-3" />
        ) : (
          <ChevronLeft className="w-3 h-3" />
        )}
      </button>
    </div>
  );
}