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
  
  const totalCitations = citations.guidelines_tree.length + citations.neo4j_database.length;
  
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
        <Card className="mt-2 p-3 bg-slate-50/50 border-slate-200">
          <div className="space-y-3">
            {/* Guidelines Tree Sources */}
            {citations.guidelines_tree.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-slate-700">
                    Guidelines ({citations.guidelines_tree.length})
                  </span>
                </div>
                <div className="space-y-2 pl-6">
                  {citations.guidelines_tree.map((citation, index) => (
                    <div key={`guidelines-${index}`} className="text-xs">
                      <div className="font-medium text-slate-800 mb-1">
                        {citation.metadata.title}
                      </div>
                      <div className="text-slate-600 line-clamp-2 mb-1">
                        {citation.content.substring(0, 150)}
                        {citation.content.length > 150 ? '...' : ''}
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs px-1 py-0">
                          Node {citation.node_id}
                        </Badge>
                        <Badge variant="outline" className="text-xs px-1 py-0">
                          {Math.round(citation.confidence * 100)}% match
                        </Badge>
                        <Badge variant="outline" className="text-xs px-1 py-0">
                          Score {citation.metadata.mcts_score.toFixed(2)}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Neo4j Database Sources */}
            {citations.neo4j_database.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Database className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-slate-700">
                    Database ({citations.neo4j_database.length})
                  </span>
                </div>
                <div className="space-y-2 pl-6">
                  {citations.neo4j_database.map((citation, index) => (
                    <div key={`neo4j-${index}`} className="text-xs">
                      <div className="font-medium text-slate-800 mb-1">
                        {citation.metadata.properties.name || citation.node_id}
                      </div>
                      {citation.metadata.properties.value && (
                        <div className="text-slate-600 mb-1">
                          {citation.metadata.properties.value}
                        </div>
                      )}
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="outline" className="text-xs px-1 py-0">
                          {citation.metadata.labels.join(', ')}
                        </Badge>
                        <Badge variant="outline" className="text-xs px-1 py-0">
                          {Math.round(citation.metadata.entity_match_confidence * 100)}% entity
                        </Badge>
                        <Badge variant="outline" className="text-xs px-1 py-0">
                          {Math.round(citation.metadata.trigger_confidence * 100)}% trigger
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