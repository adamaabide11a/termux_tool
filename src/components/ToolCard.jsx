import React, { useState } from 'react';
import { Copy, Terminal, Shield, Code, Database, Wifi } from 'lucide-react';

const ToolCard = ({ tool }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Network Security':
        return <Wifi className="w-5 h-5" />;
      case 'Password Cracking':
        return <Shield className="w-5 h-5" />;
      case 'Web Security':
        return <Database className="w-5 h-5" />;
      case 'System Tools':
        return <Terminal className="w-5 h-5" />;
      case 'Development':
        return <Code className="w-5 h-5" />;
      default:
        return <Terminal className="w-5 h-5" />;
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return 'text-green-400';
      case 'Intermediate':
        return 'text-yellow-400';
      case 'Advanced':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="tool-card p-6 rounded-lg group cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="text-green-400">
            {getCategoryIcon(tool.category)}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white font-mono neon-glow">
              {tool.name}
            </h3>
            <span className="text-sm text-gray-400">{tool.category}</span>
          </div>
        </div>
        <span className={`text-xs px-2 py-1 rounded ${getDifficultyColor(tool.difficulty)} bg-gray-800`}>
          {tool.difficulty}
        </span>
      </div>
      
      <p className="text-gray-300 mb-4 font-mono text-sm leading-relaxed">
        {tool.description}
      </p>
      
      <div className="space-y-3">
        <div className="terminal-window p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-green-400 text-xs font-mono">$ Installation</span>
            <button
              onClick={() => copyToClipboard(tool.installCommand)}
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>
          <code className="text-green-400 text-sm font-mono">
            {tool.installCommand}
          </code>
        </div>
        
        {tool.usage && (
          <div className="terminal-window p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-blue-400 text-xs font-mono">$ Usage Example</span>
              <button
                onClick={() => copyToClipboard(tool.usage)}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <code className="text-blue-400 text-sm font-mono">
              {tool.usage}
            </code>
          </div>
        )}
      </div>
      
      {copied && (
        <div className="mt-2 text-green-400 text-xs font-mono">
          ✓ Copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default ToolCard;

