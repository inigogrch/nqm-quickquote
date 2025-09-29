// Guidelines Chat API service layer
// Handles communication with the guidelines chat backend

export interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
    message_id: string;
    timestamp: string;
  }
  
  export interface GuidelinesTreeCitation {
    content: string;
    confidence: number;
    node_id: string;
    metadata: {
      title: string;
      start_index: number;
      end_index: number;
      mcts_score: number;
      visits: number;
    };
  }
  
  export interface Neo4jCitation {
    node_id: string;
    metadata: {
      labels: string[];
      properties: Record<string, any>;
      entity_match_confidence: number;
      trigger_confidence: number;
    };
  }
  
  export interface ChatCitations {
    guidelines_tree: GuidelinesTreeCitation[];
    neo4j_database: Neo4jCitation[];
  }
  
  export interface ChatRequest {
    conversation_id: string;
    messages: ChatMessage[];
    include_citations: boolean;
  }
  
  export interface ChatResponseData {
    response: string;
    citations: ChatCitations;
    conversation_id: string;
    message_id: string;
    timestamp: string;
  }

  export interface ChatResponse {
    response: ChatResponseData;
    stats: {
      total_conversations: number;
      total_messages: number;
      rag_pipeline_ready: boolean;
      timestamp: string;
    };
  }
  
  export class EnhancedRAGAPI {
    private baseUrl: string;
    
    constructor(baseUrl: string = import.meta.env.VITE_ENHANCED_RAG_API_URL || 'http://localhost:8000') {
      this.baseUrl = baseUrl;
    }
  
    async sendMessage(request: ChatRequest): Promise<ChatResponse> {
      try {
        const response = await fetch(`${this.baseUrl}/api/chat`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(request),
        });
  
        if (!response.ok) {
          throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }
  
        return await response.json();
      } catch (error) {
        console.error('Failed to send message:', error);
        throw new Error(`Failed to send message: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    }
  
    generateMessageId(): string {
      return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
  
    generateConversationId(): string {
      return `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
  
    formatTimestamp(date: Date = new Date()): string {
      return date.toISOString();
    }
  }
  
  export const enhancedRAGAPI = new EnhancedRAGAPI();