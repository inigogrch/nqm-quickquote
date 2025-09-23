'use client';

import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useAppStore } from '../../lib/store';
import { Clock, CheckCircle, AlertCircle, Loader } from 'lucide-react';

interface TimelineDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TimelineDrawer({ isOpen, onClose }: TimelineDrawerProps) {
  const { timelineEvents } = useAppStore();

  const getEventIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-ok" />;
      case 'in_progress':
        return <Loader className="w-4 h-4 text-brand animate-spin" />;
      case 'failed':
        return <AlertCircle className="w-4 h-4 text-bad" />;
      default:
        return <Clock className="w-4 h-4 text-slate-400" />;
    }
  };

  const getEventBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-ok text-white text-xs">Complete</Badge>;
      case 'in_progress':
        return <Badge className="bg-brand text-white text-xs">In Progress</Badge>;
      case 'failed':
        return <Badge className="bg-bad text-white text-xs">Failed</Badge>;
      default:
        return <Badge variant="outline" className="text-xs">Pending</Badge>;
    }
  };

  const sortedEvents = [...timelineEvents].sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-96 sm:max-w-96 overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-brand" />
            Processing Timeline
          </SheetTitle>
        </SheetHeader>

        <div className="space-y-4 mt-6">
          {sortedEvents.length === 0 ? (
            <Card className="p-6 text-center">
              <Clock className="w-8 h-8 mx-auto mb-2 text-slate-400" />
              <p className="text-slate-600">No events yet</p>
              <p className="text-sm text-slate-500">Timeline will populate as you progress</p>
            </Card>
          ) : (
            <div className="space-y-4">
              {sortedEvents.map((event, index) => (
                <div key={event.id} className="relative">
                  {/* Timeline Line */}
                  {index < sortedEvents.length - 1 && (
                    <div className="absolute left-5 top-8 w-px h-12 bg-slate-200" />
                  )}
                  
                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        {getEventIcon(event.status)}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-slate-900 text-sm" data-placeholder="true">
                            {event.event}
                            {/* TODO: replace with live timeline service */}
                          </h4>
                          {getEventBadge(event.status)}
                        </div>
                        
                        <p className="text-sm text-slate-600 mb-2" data-placeholder="true">
                          {event.description}
                          {/* TODO: replace with live timeline service */}
                        </p>
                        
                        <div className="text-xs text-slate-500">
                          {new Date(event.timestamp).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          )}

          <Separator className="my-6" />

          {/* Summary Stats */}
          <Card className="p-4 bg-slate-50/50">
            <h3 className="font-medium text-slate-900 mb-3 text-sm">Summary</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-lg font-bold text-ok">
                  {timelineEvents.filter(e => e.status === 'completed').length}
                </div>
                <div className="text-xs text-slate-600">Completed</div>
              </div>
              <div>
                <div className="text-lg font-bold text-brand">
                  {timelineEvents.filter(e => e.status === 'in_progress').length}
                </div>
                <div className="text-xs text-slate-600">In Progress</div>
              </div>
              <div>
                <div className="text-lg font-bold text-bad">
                  {timelineEvents.filter(e => e.status === 'failed').length}
                </div>
                <div className="text-xs text-slate-600">Failed</div>
              </div>
            </div>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
  );
}