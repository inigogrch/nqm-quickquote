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
      source: string;
      relevance_score: number;
    };
  }
  
  export interface Neo4jCitation {
    content: string;
    confidence: number;
    node_id: string;
    metadata: {
      labels: string[];
      properties: Record<string, any>;
      source: string;
      result_type: string;
    };
  }
  
  export interface ChatCitations {
    guidelines_tree_citations: GuidelinesTreeCitation[];
    neo4j_database_citations: Neo4jCitation[];
  }
  
  export interface ChatRequest {
    message: string;
    conversation_id: string;
  }
  
  export interface ChatResponse {
    response: string;
    citations: ChatCitations;
    conversation_id: string;
    message_id: string;
    timestamp: string;
    processing_time: number;
    processing_stats: {
      query_processing_time: number;
      mode_processing_time: number;
      neo4j_query_time: number;
      context_compilation_time: number;
      answer_generation_time: number;
      total_service_calls: number;
      neo4j_results_count: number;
      guidelines_nodes_count: number;
      context_length: number;
      fallback_triggered: boolean;
      parallel_processing: {
        mode_and_neo4j_parallel: boolean;
        neo4j_skipped: boolean;
      };
    };
    confidence: number;
  }
  
  export class EnhancedRAGAPI {
    private baseUrl: string;
    
    constructor(baseUrl: string = import.meta.env.VITE_ENHANCED_RAG_API_URL || 'http://localhost:8000') {
      this.baseUrl = baseUrl;
    }
  
    async sendMessage(request: ChatRequest): Promise<ChatResponse> {
      try {
        const apiUrl = `${this.baseUrl}chat`;
        console.log('🌐 DEBUG: API URL:', apiUrl);
        console.log('📤 DEBUG: Request payload:', JSON.stringify(request, null, 2));
        
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(request),
        });
  
        if (!response.ok) {
          const errorMessage = response.status === 502 
            ? 'Server temporarily unavailable. Please try again in a few moments.'
            : `API Error: ${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        }

        const jsonResponse = await response.json();
        console.log('📥 DEBUG: Response received:', jsonResponse);
        return jsonResponse;
      } catch (error) {
        console.error('Failed to send message:', error);
        throw new Error(`Failed to send message: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    }
  
    generateMessageId(): string {
      return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
  
    generateConversationId(): string {
      // Generate UUID v4
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }
  
    formatTimestamp(date: Date = new Date()): string {
      return date.toISOString();
    }
  }
  
  export const enhancedRAGAPI = new EnhancedRAGAPI();