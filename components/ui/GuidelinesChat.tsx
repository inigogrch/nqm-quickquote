'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { useAppStore } from '../../lib/store';
import { PLACEHOLDER_TEXT } from '../../lib/fixtures';
import { MessageCircle, Send, Bot, User, X, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export function GuidelinesChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Hi! I can help you with loan guidelines, program requirements, and compliance questions. What would you like to know?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const { addTimelineEvent } = useAppStore();

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: `user_${Date.now()}`,
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: `bot_${Date.now()}`,
        type: 'bot',
        content: `${PLACEHOLDER_TEXT} This is a simulated response about: "${inputValue}"`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);

      // Add timeline event
      addTimelineEvent({
        id: `timeline_${Date.now()}`,
        timestamp: new Date().toISOString(),
        event: 'Guidelines Query',
        description: `User asked: ${inputValue.substring(0, 50)}...`,
        status: 'completed'
      });
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
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
      <Card className={`w-96 shadow-xl transition-all duration-300 ${
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
                      <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-[75%] p-3 rounded-2xl text-sm shadow-sm ${
                        message.type === 'user'
                          ? 'bg-brand text-white rounded-br-md'
                          : 'bg-white text-slate-900 border border-slate-200 rounded-bl-md'
                      }`}
                      data-placeholder={message.type === 'bot' ? 'true' : undefined}
                    >
                      {message.content}
                      {message.type === 'bot' && (
                        <span className="sr-only">
                          {/* TODO: replace with live guidelines service */}
                        </span>
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
                    placeholder="Ask me anything..."
                    className="resize-none border-slate-300 focus:border-brand focus:ring-brand/20 rounded-xl"
                    data-testid="chat-input"
                  />
                </div>
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  size="sm"
                  className="bg-brand hover:bg-brand-600 rounded-xl h-10 w-10 p-0 shadow-sm"
                  data-testid="send-message"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}