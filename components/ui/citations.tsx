import React, { useState } from 'react';
import { Badge } from '../../src/components/ui/badge';
import { Button } from '../../src/components/ui/button';
import { Card } from '../../src/components/ui/card';
import { ChevronDown, ChevronRight, FileText, Database } from 'lucide-react';
import { type ChatCitations } from '../../src/lib/api/guidelines-chat';

interface CitationsProps {
  citations: ChatCitations;
  className?: string;
}

export function Citations({ citations, className = '' }: CitationsProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const totalCitations = citations.guidelines_tree_citations.length + citations.neo4j_database_citations.length;
  
  if (totalCitations === 0) {
    return null;
  }

  return (
    <div className={`mt-2 ${className}`}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsExpanded(!isExpanded)}
        className="h-6 p-1 text-xs text-slate-500 hover:text-slate-700"
      >
        {isExpanded ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
        <span className="ml-1">
          {totalCitations} source{totalCitations !== 1 ? 's' : ''}
        </span>
      </Button>
      
      {isExpanded && (
        <Card className="mt-2 p-3 bg-slate-50/50 border-slate-200 max-w-full">
          <div className="space-y-3 break-words">
            {/* Guidelines Tree Sources */}
            {citations.guidelines_tree_citations.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-slate-700">
                    Guidelines ({citations.guidelines_tree_citations.length})
                  </span>
                </div>
                <div className="space-y-2 pl-6">
                  {citations.guidelines_tree_citations.map((citation, index) => (
                    <div key={`guidelines-${index}`} className="text-xs break-words">
                      <div className="font-medium text-slate-800 mb-1 break-words">
                        {citation.metadata.title}
                      </div>
                      <div className="text-slate-600 mb-1 break-words">
                        {citation.content.substring(0, 150)}
                        {citation.content.length > 150 ? '...' : ''}
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="outline" className="text-xs px-1 py-0 break-all">
                          Node {citation.node_id}
                        </Badge>
                        <Badge variant="outline" className="text-xs px-1 py-0">
                          {Math.round(citation.confidence * 100)}% confidence
                        </Badge>
                        <Badge variant="outline" className="text-xs px-1 py-0">
                          {Math.round(citation.metadata.relevance_score * 100)}% relevance
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Neo4j Database Sources */}
            {citations.neo4j_database_citations.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Database className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-slate-700">
                    Database ({citations.neo4j_database_citations.length})
                  </span>
                </div>
                <div className="space-y-2 pl-6">
                  {citations.neo4j_database_citations.map((citation, index) => (
                    <div key={`neo4j-${index}`} className="text-xs break-words">
                      <div className="font-medium text-slate-800 mb-1 break-words">
                        {citation.metadata.properties.name || citation.node_id}
                      </div>
                      {citation.metadata.properties.value && (
                        <div className="text-slate-600 mb-1 break-words">
                          {citation.metadata.properties.value}
                        </div>
                      )}
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="outline" className="text-xs px-1 py-0">
                          {citation.metadata.labels.join(', ')}
                        </Badge>
                        <Badge variant="outline" className="text-xs px-1 py-0">
                          {Math.round(citation.confidence * 100)}% confidence
                        </Badge>
                        <Badge variant="outline" className="text-xs px-1 py-0">
                          {citation.metadata.result_type}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Card>
      )}
    </div>
  );
}