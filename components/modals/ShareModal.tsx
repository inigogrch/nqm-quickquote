'use client';

import { useState } from 'react';
import { Copy, Check, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ShareModal({ isOpen, onClose }: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const mockShareUrl = 'https://nqm-demo.example.com/share/pkg_001_demo_link';

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(mockShareUrl);
      setCopied(true);
      toast.success('Link copied to clipboard');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy link');
    }
  };

  const handleOpenLink = () => {
    window.open(mockShareUrl, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Share Summary</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="share-url">Share Link</Label>
            <div className="flex gap-2">
              <Input
                id="share-url"
                value={mockShareUrl}
                readOnly
                data-placeholder="true"
                className="text-sm"
              />
              <Button
                size="sm"
                variant="outline"
                onClick={handleCopyLink}
                data-testid="copy-link-button"
                className="flex-shrink-0"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-ok" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-slate-500" data-placeholder="true">
              Mock share URL for demo purposes
              {/* TODO: replace with live sharing service */}
            </p>
          </div>

          <div className="space-y-3">
            <Button
              onClick={handleOpenLink}
              variant="outline"
              className="w-full justify-start"
              data-testid="open-link-button"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Open in New Tab
            </Button>
          </div>

          <div className="pt-4 border-t border-slate-200">
            <p className="text-xs text-slate-500 text-center">
              Share links expire after 30 days
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}