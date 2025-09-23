'use client';

import { Mail, X } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function EmailBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Alert className="bg-brand/5 border-brand/20">
      <Mail className="h-4 w-4 text-brand" />
      <AlertDescription className="flex items-center justify-between">
        <span data-placeholder="true">
          Notification email sent to <strong>broker@example.com</strong> (mock)
          {/* TODO: replace with live email service */}
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsVisible(false)}
          data-testid="dismiss-email-banner"
          className="h-auto p-1 ml-2"
        >
          <X className="h-3 w-3" />
        </Button>
      </AlertDescription>
    </Alert>
  );
}