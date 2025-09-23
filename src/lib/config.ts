// Configuration for Enhanced RAG API
export const API_CONFIG = {
    // Enhanced RAG API endpoint
    ENHANCED_RAG_BASE_URL: process.env.NEXT_PUBLIC_ENHANCED_RAG_API_URL || 'https://replace-with-deployed-api.com',
    
    // API timeouts
    REQUEST_TIMEOUT: 30000, // 30 seconds
    
    // Chat settings
    MAX_CONVERSATION_HISTORY: 20, // Maximum messages to keep in conversation
    INCLUDE_CITATIONS_BY_DEFAULT: true,
    
    // UI settings
    AUTO_SCROLL_TO_BOTTOM: true,
    SHOW_TYPING_INDICATOR: true,
  } as const;
  
  // Environment check
  export const isDevelopment = process.env.NODE_ENV === 'development';
  export const isProduction = process.env.NODE_ENV === 'production';
  