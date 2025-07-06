import React, { useState, useEffect } from 'react';
import { Search, Terminal, Github, Twitter, Menu, X, Globe } from 'lucide-react';
import MatrixBackground from './components/MatrixBackground';
import EnhancedToolCard from './components/EnhancedToolCard';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { enhancedTools } from './data/enhancedTools';
import { tools } from './data/tools';
import './App.css';

// Combine enhanced tools with regular tools
const allTools = [...enhancedTools, ...tools.slice(enhancedTools.length)];

function AppContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const { language, isRTL, toggleLanguage, t } = useLanguage();
  
  const categories = ['All', 'Network Security', 'Password Cracking', 'Web Security', 'System Tools', 'Development'];
  
  const filteredTools = allTools.filter(tool => {
    const description = tool.description?.[language] || tool.description?.en || tool.description || '';
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Typing animation effect
  useEffect(() => {
    const text = language === 'ar' 
      ? 'root@termux:~$ مرحباً بك في مجموعة أدوات الاختراق النهائية'
      : 'root@termux:~$ Welcome to the Ultimate Hacking Toolkit';
    let index = 0;
    setTypedText('');
    const timer = setInterval(() => {
      if (index < text.length) {
        setTypedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, [language]);

  const getCategoryTranslation = (category) => {
    const categoryMap = {
      'All': t('all'),
      'Network Security': t('networkSecurity'),
      'Password Cracking': t('passwordCracking'),
      'Web Security': t('webSecurity'),
      'System Tools': t('systemTools'),
      'Development': t('development')
    };
    return categoryMap[category] || category;
  };

  return (
    <div className={`min-h-screen bg-black text-white font-mono ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <MatrixBackground />
      
      {/* Header */}
      <header className="relative z-10 border-b border-green-400/30 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className={`flex items-center space-x-3 ${isRTL ? 'space-x-reverse' : ''}`}>
              <Terminal className="w-8 h-8 text-green-400 neon-glow" />
              <h1 className="text-2xl font-bold neon-glow">{language === 'ar' ? 'أدوات Termux' : 'Termux Tools'}</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className={`hidden md:flex items-center space-x-6 ${isRTL ? 'space-x-reverse' : ''}`}>
              <a href="#tools" className="hover:text-green-400 transition-colors glitch-effect">{t('tools')}</a>
              <a href="#about" className="hover:text-green-400 transition-colors glitch-effect">{t('about')}</a>
              <a href="#contact" className="hover:text-green-400 transition-colors glitch-effect">{t('contact')}</a>
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 hover:text-green-400 transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span>{language === 'en' ? 'العربية' : 'English'}</span>
              </button>
              <div className={`flex items-center space-x-3 ${isRTL ? 'space-x-reverse' : ''}`}>
                <Github className="w-5 h-5 hover:text-green-400 cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 hover:text-green-400 cursor-pointer transition-colors" />
              </div>
            </nav>
            
            {/* Mobile Menu Button */}
            <div className={`flex items-center space-x-3 md:hidden ${isRTL ? 'space-x-reverse' : ''}`}>
              <button
                onClick={toggleLanguage}
                className="text-green-400"
              >
                <Globe className="w-6 h-6" />
              </button>
              <button 
                className="text-green-400"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-green-400/30">
              <div className="flex flex-col space-y-3 mt-4">
                <a href="#tools" className="hover:text-green-400 transition-colors">{t('tools')}</a>
                <a href="#about" className="hover:text-green-400 transition-colors">{t('about')}</a>
                <a href="#contact" className="hover:text-green-400 transition-colors">{t('contact')}</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="terminal-window max-w-4xl mx-auto p-8 mb-8">
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <div className="text-green-400 mb-4 text-lg">
                {typedText}<span className="terminal-cursor"></span>
              </div>
              <div className="text-gray-300 space-y-2">
                <div>{t('systemStatus')}</div>
                <div>{t('status')}: <span className="text-green-400">{t('online')}</span></div>
                <div>{t('toolsAvailable')}: <span className="text-green-400">{allTools.length}</span></div>
                <div>{t('accessLevel')}: <span className="text-red-400">{t('root')}</span></div>
              </div>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 neon-glow">
            {t('heroTitle')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {t('heroSubtitle')}
          </p>
          
          <button className="cyber-button px-8 py-4 rounded-lg text-lg font-bold">
            {t('startHacking')}
          </button>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section id="tools" className="relative z-10 py-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto mb-12">
            {/* Search Bar */}
            <div className="terminal-window p-6 mb-6">
              <div className={`flex items-center space-x-3 mb-4 ${isRTL ? 'space-x-reverse flex-row-reverse' : ''}`}>
                <Search className="w-5 h-5 text-green-400" />
                <span className="text-green-400">{t('searchTools')}</span>
              </div>
              <input
                type="text"
                placeholder={t('searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full bg-transparent border border-green-400/30 rounded px-4 py-3 text-white font-mono focus:border-green-400 focus:outline-none ${isRTL ? 'text-right' : 'text-left'}`}
                dir={isRTL ? 'rtl' : 'ltr'}
              />
            </div>
            
            {/* Category Filter */}
            <div className="terminal-window p-6">
              <div className={`flex items-center space-x-3 mb-4 ${isRTL ? 'space-x-reverse flex-row-reverse' : ''}`}>
                <Terminal className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400">{t('filterByCategory')}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`category-button px-4 py-2 rounded border transition-all ${
                      selectedCategory === category ? 'active' : ''
                    }`}
                  >
                    {getCategoryTranslation(category)}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map(tool => (
              <EnhancedToolCard key={tool.id} tool={tool} />
            ))}
          </div>
          
          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <div className="terminal-window max-w-md mx-auto p-8">
                <div className="text-red-400 text-xl mb-4">{t('error404')}</div>
                <div className="text-gray-300">{t('noToolsFound')}</div>
                <div className="text-gray-500 text-sm mt-2">{t('adjustSearch')}</div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-4 border-t border-green-400/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-8 neon-glow">{t('aboutTitle')}</h3>
            <div className={`terminal-window p-8 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="text-green-400">$</span> {t('aboutText1')}
                </p>
                <p>
                  <span className="text-blue-400">$</span> {t('aboutText2')}
                </p>
                <p>
                  <span className="text-yellow-400">$</span> {t('aboutText3')}
                </p>
                <p>
                  <span className="text-red-400">$</span> {t('aboutText4')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-green-400/30 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="terminal-window max-w-2xl mx-auto p-6">
            <div className="text-green-400 mb-4">
              root@termux:~$ echo "{t('footerText')}"
            </div>
            <div className="text-gray-300 text-sm">
              {t('copyright')}
            </div>
            <div className="text-gray-500 text-xs mt-2">
              {t('disclaimer')}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;

