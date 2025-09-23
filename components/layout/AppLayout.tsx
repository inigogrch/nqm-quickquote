'use client';

import { ReactNode, useState } from 'react';
import { LeftRail } from './LeftRail';
import { BreadcrumbHeader } from './BreadcrumbHeader';
import { GuidelinesChat } from '../ui/GuidelinesChat';
import { TimelineDrawer } from '../drawers/TimelineDrawer';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="flex">
        {/* Fixed Left Rail Navigation */}
        <LeftRail 
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={setIsSidebarCollapsed}
        />
        
        {/* Main Content Area with dynamic margin */}
        <div 
          className={cn(
            "flex-1 flex flex-col transition-all duration-300 ease-in-out",
            isSidebarCollapsed ? "ml-16" : "ml-64"
          )}
        >
          {/* Top Breadcrumb Header */}
          <BreadcrumbHeader />
          
          {/* Page Content with proper scrolling */}
          <main className="flex-1 p-6 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
      
      {/* Global Floating Components */}
      <GuidelinesChat />
      <TimelineDrawer />
      <Toaster />
    </div>
  );
}