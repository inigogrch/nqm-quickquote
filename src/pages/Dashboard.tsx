'use client';

import { useNavigate } from 'react-router-dom';
import { Calculator, Search, Clock, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LoanRecordCard } from '../../components/ui/LoanRecordCard';
import { useAppStore } from '../../lib/store';
import { PLACEHOLDER_TEXT } from '../../lib/fixtures';

export default function Dashboard() {
  const navigate = useNavigate();
  const { timelineEvents, loanRecords, removeLoanRecord, unlockQuickQuote } = useAppStore();

  const recentEvents = timelineEvents.slice(-3);

  const handleQuickQuoteClick = () => {
    // Unlock QuickQuote section in the workflow
    unlockQuickQuote();
    navigate('/quickquote');
  };

  const handleRemoveLoanRecord = (recordId: string) => {
    removeLoanRecord(recordId);
  };

  return (
    <div className="space-y-8">
      {/* Loan Records Section */}
      {loanRecords.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-900">Active Loan Records</h2>
          <div className="space-y-3">
            {loanRecords.map((record) => (
              <LoanRecordCard
                key={record.id}
                id={record.id}
                profileName={record.profileName}
                programName={record.programName}
                requiredSteps={record.requiredSteps}
                createdAt={record.createdAt}
                onRemove={handleRemoveLoanRecord}
              />
            ))}
          </div>
        </div>
      )}

      {/* Hero Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card 
          className="cursor-pointer hover:shadow-lg transition-shadow bg-gradient-to-br from-brand/5 to-brand/10 border-brand/20"
          onClick={handleQuickQuoteClick}
          data-testid="quick-quote-card"
        >
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl">Quick Quote</CardTitle>
                <CardDescription>Get instant loan program eligibility</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 mb-4" data-placeholder="true">
              {PLACEHOLDER_TEXT}
              {/* TODO: replace with live dashboard service */}
            </p>
            <Button className="bg-brand hover:bg-brand-600">
              Start Quick Quote
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-slate-100/50 to-slate-200/50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center">
                <Search className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl">Smart Search</CardTitle>
                <CardDescription>Advanced loan program discovery</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 mb-4" data-placeholder="true">
              {PLACEHOLDER_TEXT}
              {/* TODO: replace with live dashboard service */}
            </p>
            <Button variant="outline" disabled>
              Coming Soon
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Timeline Widget */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-slate-500" />
              <div>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
                <CardDescription>Latest loan processing events</CardDescription>
              </div>
            </div>
            <Button variant="outline" size="sm" data-testid="view-full-timeline">
              View All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {recentEvents.length > 0 ? (
            <div className="space-y-4">
              {recentEvents.map((event) => (
                <div key={event.id} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50/50">
                  <div className="w-2 h-2 bg-brand rounded-full mt-2 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-slate-900 text-sm">{event.event}</h4>
                    <p className="text-sm text-slate-600 mt-1" data-placeholder="true">
                      {event.description}
                      {/* TODO: replace with live timeline service */}
                    </p>
                    <span className="text-xs text-slate-500">
                      {new Date(event.timestamp).toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-slate-500">
              <FileText className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p>No recent activity</p>
              <p className="text-sm">Start a Quick Quote to begin</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}