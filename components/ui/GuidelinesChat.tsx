'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Citations } from './citations';
import { useAppStore } from '../../lib/store';
import { useEnhancedRAG } from '../../src/hooks/use-guidelines-chat';
import { MessageCircle, Send, Bot, User, X, Minimize2, Maximize2, AlertCircle, RotateCcw } from 'lucide-react';

export function GuidelinesChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const { addTimelineEvent } = useAppStore();
  
  // Use Enhanced RAG hook
  const { 
    messages, 
    isLoading, 
    error, 
    conversationId,
    sendMessage, 
    clearMessages,
    retryLastMessage 
  } = useEnhancedRAG();

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const question = inputValue.trim();
    setInputValue('');

    try {
      await sendMessage(question);

      // Add timeline event
      addTimelineEvent({
        id: `timeline_${Date.now()}`,
        timestamp: new Date().toISOString(),
        event: 'Guidelines Query',
        description: `User asked: ${question.substring(0, 50)}${question.length > 50 ? '...' : ''}`,
        status: 'completed'
      });
    } catch (err) {
      console.error('Failed to send message:', err);
      // Timeline event for error is handled by the hook
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-brand hover:bg-brand-600 shadow-lg"
          data-testid="open-chat"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-96 max-w-[90vw] shadow-xl transition-all duration-300 ${
        isMinimized ? 'h-16' : 'h-[500px]'
      } flex flex-col overflow-hidden`}>
        {/* Header */}
        <div className={`flex items-center ${isMinimized ? 'justify-between px-4 py-3' : 'justify-between p-4'} border-b border-slate-200 bg-slate-50 flex-shrink-0`}>
          <div className="flex items-center gap-3 flex-1">
            <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-slate-900 flex items-center gap-1">
                <span className="text-brand">ask</span>
                <span className="text-slate-700">Sweens</span>
              </h3>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-slate-500">Online</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 flex-shrink-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              data-testid="minimize-chat"
              className="h-8 w-8 p-0"
            >
              {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              data-testid="close-chat"
              className="h-8 w-8 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages Area */}
            <ScrollArea className="flex-1 p-4 bg-slate-50/50">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${
                      message.type === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {message.type === 'bot' && (
                      <div className={`w-8 h-8 bg-brand rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${
                        message.isLoading ? 'animate-pulse' : ''
                      }`}>
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div className="max-w-[75%] flex flex-col min-w-0">
                      <div
                        className={`p-3 rounded-2xl text-sm shadow-sm break-words overflow-wrap-anywhere ${
                          message.type === 'user'
                            ? 'bg-brand text-white rounded-br-md'
                            : `bg-white text-slate-900 border border-slate-200 rounded-bl-md ${
                                message.isLoading ? 'animate-pulse' : ''
                              } ${message.error ? 'border-red-200 bg-red-50' : ''}`
                        }`}
                      >
                        {message.error && (
                          <div className="flex items-center gap-2 mb-2 text-red-600">
                            <AlertCircle className="w-4 h-4" />
                            <span className="text-xs">Error occurred</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={retryLastMessage}
                              className="h-5 px-2 text-xs hover:bg-red-100"
                            >
                              <RotateCcw className="w-3 h-3 mr-1" />
                              Retry
                            </Button>
                          </div>
                        )}
                        <div className="whitespace-pre-wrap break-words">
                          {message.content}
                        </div>
                      </div>
                      
                      {/* Citations */}
                      {message.citations && message.type === 'bot' && !message.isLoading && (
                        <Citations citations={message.citations} />
                      )}
                    </div>
                    {message.type === 'user' && (
                      <div className="w-8 h-8 bg-slate-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Error Banner */}
              {error && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center gap-2 text-red-700">
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">Connection Error</span>
                  </div>
                  <p className="text-sm text-red-600 mt-1">{error}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={retryLastMessage}
                    className="mt-2 h-7 px-3 text-xs text-red-700 hover:bg-red-100"
                  >
                    <RotateCcw className="w-3 h-3 mr-1" />
                    Try Again
                  </Button>
                </div>
              )}
            </ScrollArea>

            {/* Quick Questions */}
            <div className="px-4 py-2 bg-white border-t border-slate-200">
              <div className="flex flex-wrap gap-2">
                <Badge 
                  variant="outline" 
                  className="text-xs cursor-pointer hover:bg-brand/10 hover:border-brand/30 transition-colors"
                  onClick={() => handleQuickQuestion('What are the LTV limits?')}
                >
                  LTV limits
                </Badge>
                <Badge 
                  variant="outline" 
                  className="text-xs cursor-pointer hover:bg-brand/10 hover:border-brand/30 transition-colors"
                  onClick={() => handleQuickQuestion('DSCR requirements?')}
                >
                  DSCR requirements
                </Badge>
                <Badge 
                  variant="outline" 
                  className="text-xs cursor-pointer hover:bg-brand/10 hover:border-brand/30 transition-colors"
                  onClick={() => handleQuickQuestion('Income documentation needed?')}
                >
                  Income docs
                </Badge>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-200 flex-shrink-0">
              <div className="flex gap-3 items-end">
                <div className="flex-1">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={isLoading ? "Processing..." : "Ask me anything..."}
                    disabled={isLoading}
                    className="resize-none border-slate-300 focus:border-brand focus:ring-brand/20 rounded-xl disabled:opacity-50"
                    data-testid="chat-input"
                  />
                </div>
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  size="sm"
                  className="bg-brand hover:bg-brand-600 rounded-xl h-10 w-10 p-0 shadow-sm disabled:opacity-50"
                  data-testid="send-message"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}