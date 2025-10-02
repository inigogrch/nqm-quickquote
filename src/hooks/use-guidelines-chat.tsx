// Guidelines Chat hook

import { useState, useCallback, useRef } from 'react';
import { 
  enhancedRAGAPI, 
  type ChatMessage, 
  type ChatResponse, 
  type ChatCitations 
} from '@/lib/api/guidelines-chat';

export interface ExtendedMessage extends ChatMessage {
  id: string;
  type: 'user' | 'bot';
  timestamp_display: Date;
  citations?: ChatCitations;
  isLoading?: boolean;
  error?: string;
}

interface UseEnhancedRAGReturn {
  messages: ExtendedMessage[];
  isLoading: boolean;
  error: string | null;
  conversationId: string;
  sendMessage: (content: string) => Promise<void>;
  clearMessages: () => void;
  retryLastMessage: () => Promise<void>;
}

export function useEnhancedRAG(): UseEnhancedRAGReturn {
  const [messages, setMessages] = useState<ExtendedMessage[]>([
    {
      id: '1',
      role: 'assistant',
      type: 'bot',
      content: 'Hi! I can help you with loan guidelines, program requirements, and compliance questions. What would you like to know?',
      message_id: 'initial',
      timestamp: new Date().toISOString(),
      timestamp_display: new Date()
    }
  ]);
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const conversationIdRef = useRef<string>(enhancedRAGAPI.generateConversationId());
  const lastUserMessageRef = useRef<string>('');

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    lastUserMessageRef.current = content;

    // Create user message
    const userMessage: ExtendedMessage = {
      id: `user_${Date.now()}`,
      role: 'user',
      type: 'user',
      content: content.trim(),
      message_id: enhancedRAGAPI.generateMessageId(),
      timestamp: enhancedRAGAPI.formatTimestamp(),
      timestamp_display: new Date()
    };

    // Add user message immediately
    setMessages(prev => [...prev, userMessage]);

    // Add loading bot message
    const loadingMessage: ExtendedMessage = {
      id: `bot_loading_${Date.now()}`,
      role: 'assistant',
      type: 'bot',
      content: 'Thinking...',
      message_id: 'loading',
      timestamp: enhancedRAGAPI.formatTimestamp(),
      timestamp_display: new Date(),
      isLoading: true
    };

    setMessages(prev => [...prev, loadingMessage]);

    try {
      // Prepare API request with conversation history
      const apiMessages: ChatMessage[] = messages
        .filter(msg => !msg.isLoading && msg.message_id !== 'initial')
        .map(msg => ({
          role: msg.role,
          content: msg.content,
          message_id: msg.message_id,
          timestamp: msg.timestamp
        }));

      // Add the new user message
      apiMessages.push({
        role: userMessage.role,
        content: userMessage.content,
        message_id: userMessage.message_id,
        timestamp: userMessage.timestamp
      });

      const requestPayload = {
        conversation_id: conversationIdRef.current,
        messages: apiMessages,
        include_citations: true,
        message: content // Add the current message for Lambda compatibility
      };
      
      console.log('🔍 DEBUG: Sending request to API:', requestPayload);
      console.log('🔍 DEBUG: Latest message content:', content);
      console.log('🔍 DEBUG: Full API messages:', apiMessages);
      
      const response: ChatResponse = await enhancedRAGAPI.sendMessage(requestPayload);

      // Handle nested response structure - the API returns { response: ChatResponseData, stats: ... }
      console.log('🔍 DEBUG: API Response received:', response);
      console.log('🔍 DEBUG: Response data:', response.response);
      console.log('🔍 DEBUG: Actual response text:', response.response?.response);
      
      const responseData = response.response;
      
      // Create bot response message
      const botMessage: ExtendedMessage = {
        id: `bot_${Date.now()}`,
        role: 'assistant',
        type: 'bot',
        content: responseData.response,
        message_id: responseData.message_id,
        timestamp: responseData.timestamp,
        timestamp_display: new Date(responseData.timestamp),
        citations: responseData.citations
      };

      // Replace loading message with actual response
      setMessages(prev => 
        prev.filter(msg => !msg.isLoading).concat([botMessage])
      );

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to get response';
      setError(errorMessage);

      // Replace loading message with error message
      const errorBotMessage: ExtendedMessage = {
        id: `bot_error_${Date.now()}`,
        role: 'assistant',
        type: 'bot',
        content: 'Sorry, I encountered an error. Please try again.',
        message_id: 'error',
        timestamp: enhancedRAGAPI.formatTimestamp(),
        timestamp_display: new Date(),
        error: errorMessage
      };

      setMessages(prev => 
        prev.filter(msg => !msg.isLoading).concat([errorBotMessage])
      );
    } finally {
      setIsLoading(false);
    }
  }, [messages, isLoading]);

  const retryLastMessage = useCallback(async () => {
    if (lastUserMessageRef.current) {
      // Remove the last bot message (which was likely an error)
      setMessages(prev => {
        // Find last bot message index (compatible with older JS versions)
        let lastBotIndex = -1;
        for (let i = prev.length - 1; i >= 0; i--) {
          if (prev[i].type === 'bot') {
            lastBotIndex = i;
            break;
          }
        }
        if (lastBotIndex !== -1) {
          return prev.slice(0, lastBotIndex);
        }
        return prev;
      });

      await sendMessage(lastUserMessageRef.current);
    }
  }, [sendMessage]);

  const clearMessages = useCallback(() => {
    setMessages([{
      id: '1',
      role: 'assistant',
      type: 'bot',
      content: 'Hi! I can help you with loan guidelines, program requirements, and compliance questions. What would you like to know?',
      message_id: 'initial',
      timestamp: new Date().toISOString(),
      timestamp_display: new Date()
    }]);
    setError(null);
    conversationIdRef.current = enhancedRAGAPI.generateConversationId();
    lastUserMessageRef.current = '';
  }, []);

  return {
    messages,
    isLoading,
    error,
    conversationId: conversationIdRef.current,
    sendMessage,
    clearMessages,
    retryLastMessage
  };
}