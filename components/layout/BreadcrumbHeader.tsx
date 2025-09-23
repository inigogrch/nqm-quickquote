'use client';

import { ChevronLeft, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { TimelineDrawer } from '../drawers/TimelineDrawer';

interface BreadcrumbHeaderProps {
  title: string;
  description?: string;
}

export function BreadcrumbHeader({ title, description }: BreadcrumbHeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);

  const getBreadcrumbs = () => {
    const path = location.pathname;
    const breadcrumbs = [
      { label: 'Dashboard', path: '/' }
    ];

    if (path === '/quick-quote') {
      breadcrumbs.push({ label: 'Quick Quote', path: '/quick-quote' });
    } else if (path === '/programs') {
      breadcrumbs.push(
        { label: 'Quick Quote', path: '/quick-quote' },
        { label: 'Programs', path: '/programs' }
      );
    } else if (path === '/docs') {
      breadcrumbs.push(
        { label: 'Quick Quote', path: '/quick-quote' },
        { label: 'Programs', path: '/programs' },
        { label: 'Submission', path: '/docs' }
      );
    } else if (path === '/summary') {
      breadcrumbs.push(
        { label: 'Quick Quote', path: '/quick-quote' },
        { label: 'Programs', path: '/programs' },
        { label: 'Submission', path: '/docs' },
        { label: 'Agents', path: '/agents' },
        { label: 'Summary', path: '/summary' }
      );
    }

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();
  const currentIndex = breadcrumbs.findIndex(b => b.path === location.pathname);
  const canGoBack = currentIndex > 0;

  const handleBackClick = () => {
    if (canGoBack) {
      const previousBreadcrumb = breadcrumbs[currentIndex - 1];
      navigate(previousBreadcrumb.path);
    }
  };

  return (
    <>
      <div className="border-b border-slate-200 bg-white">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {canGoBack && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleBackClick}
                  className="flex items-center gap-2 text-slate-600 hover:text-slate-900"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back to {breadcrumbs[currentIndex - 1]?.label}
                </Button>
              )}
              
              <div className="flex flex-col gap-1">
                <Breadcrumb>
                  <BreadcrumbList>
                    {breadcrumbs.map((breadcrumb, index) => (
                      <div key={breadcrumb.path} className="flex items-center">
                        {index > 0 && <BreadcrumbSeparator />}
                        <BreadcrumbItem>
                          {index === breadcrumbs.length - 1 ? (
                            <BreadcrumbPage className="font-medium text-slate-900">
                              {breadcrumb.label}
                            </BreadcrumbPage>
                          ) : (
                            <BreadcrumbLink
                              onClick={() => navigate(breadcrumb.path)}
                              className="text-slate-600 hover:text-slate-900 cursor-pointer"
                            >
                              {breadcrumb.label}
                            </BreadcrumbLink>
                          )}
                        </BreadcrumbItem>
                      </div>
                    ))}
                  </BreadcrumbList>
                </Breadcrumb>
                
                <div>
                  <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>
                  {description && (
                    <p className="text-sm text-slate-600 mt-1">{description}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Timeline Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsTimelineOpen(true)}
              className="flex items-center gap-2"
              data-testid="timeline-button"
            >
              <Clock className="w-4 h-4" />
              Timeline
            </Button>
          </div>
        </div>
      </div>

      {/* Timeline Drawer */}
      <TimelineDrawer 
        isOpen={isTimelineOpen} 
        onClose={() => setIsTimelineOpen(false)} 
      />
    </>
  );
}