import React, { useState } from 'react';
import { Copy, Terminal, Shield, Code, Database, Wifi, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const EnhancedToolCard = ({ tool }) => {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { language, t, isRTL } = useLanguage();

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
    const difficultyMap = {
      'Beginner': 'text-green-400',
      'Intermediate': 'text-yellow-400',
      'Advanced': 'text-red-400',
      'مبتدئ': 'text-green-400',
      'متوسط': 'text-yellow-400',
      'متقدم': 'text-red-400'
    };
    return difficultyMap[difficulty] || 'text-gray-400';
  };

  const getCategoryTranslation = (category) => {
    const categoryMap = {
      'Network Security': language === 'ar' ? 'أمان الشبكة' : 'Network Security',
      'Password Cracking': language === 'ar' ? 'كسر كلمات المرور' : 'Password Cracking',
      'Web Security': language === 'ar' ? 'أمان الويب' : 'Web Security',
      'System Tools': language === 'ar' ? 'أدوات النظام' : 'System Tools',
      'Development': language === 'ar' ? 'التطوير' : 'Development'
    };
    return categoryMap[category] || category;
  };

  const getDifficultyTranslation = (difficulty) => {
    const difficultyMap = {
      'Beginner': language === 'ar' ? 'مبتدئ' : 'Beginner',
      'Intermediate': language === 'ar' ? 'متوسط' : 'Intermediate',
      'Advanced': language === 'ar' ? 'متقدم' : 'Advanced'
    };
    return difficultyMap[difficulty] || difficulty;
  };

  return (
    <div className={`tool-card p-6 rounded-lg group cursor-pointer ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className={`flex items-start justify-between mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
        <div className={`flex items-center space-x-3 ${isRTL ? 'space-x-reverse' : ''}`}>
          <div className="text-green-400">
            {getCategoryIcon(tool.category)}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white font-mono neon-glow">
              {tool.name}
            </h3>
            <span className="text-sm text-gray-400">{getCategoryTranslation(tool.category)}</span>
          </div>
        </div>
        <span className={`text-xs px-2 py-1 rounded ${getDifficultyColor(tool.difficulty)} bg-gray-800`}>
          {getDifficultyTranslation(tool.difficulty)}
        </span>
      </div>
      
      <p className="text-gray-300 mb-4 font-mono text-sm leading-relaxed">
        {tool.description[language] || tool.description.en}
      </p>
      
      <div className="space-y-3">
        <div className="terminal-window p-3">
          <div className={`flex items-center justify-between mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <span className="text-green-400 text-xs font-mono">$ {t('installation')}</span>
            <button
              onClick={() => copyToClipboard(tool.installCommand)}
              className="copy-button text-gray-400 hover:text-green-400 transition-colors"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>
          <code className="text-green-400 text-sm font-mono block break-all">
            {tool.installCommand}
          </code>
        </div>
        
        <div className="terminal-window p-3">
          <div className={`flex items-center justify-between mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <span className="text-blue-400 text-xs font-mono">$ {t('usageExample')}</span>
            <button
              onClick={() => copyToClipboard(tool.usage)}
              className="copy-button text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>
          <code className="text-blue-400 text-sm font-mono block break-all">
            {tool.usage}
          </code>
        </div>

        {tool.detailedUsage && (
          <div className="terminal-window p-3">
            <button
              onClick={() => setExpanded(!expanded)}
              className={`flex items-center space-x-2 text-yellow-400 text-xs font-mono mb-2 hover:text-yellow-300 transition-colors ${isRTL ? 'space-x-reverse flex-row-reverse' : ''}`}
            >
              <span>{language === 'ar' ? 'أمثلة تفصيلية' : 'Detailed Examples'}</span>
              {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            
            {expanded && (
              <div className="space-y-2">
                {(tool.detailedUsage[language] || tool.detailedUsage.en || []).map((example, index) => (
                  <div key={index} className={`flex items-center justify-between bg-gray-900 p-2 rounded ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <code className="text-yellow-400 text-xs font-mono flex-1 break-all">
                      {example}
                    </code>
                    <button
                      onClick={() => copyToClipboard(example.split(': ')[1] || example)}
                      className="copy-button text-gray-400 hover:text-yellow-400 transition-colors ml-2"
                    >
                      <Copy className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      
      {copied && (
        <div className="mt-2 text-green-400 text-xs font-mono">
          {t('copiedToClipboard')}
        </div>
      )}
    </div>
  );
};

export default EnhancedToolCard;

