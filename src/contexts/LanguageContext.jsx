import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Header
    tools: 'Tools',
    about: 'About',
    contact: 'Contact',
    
    // Hero Section
    systemStatus: 'System: Android Termux Environment',
    status: 'Status',
    online: 'ONLINE',
    toolsAvailable: 'Tools Available',
    accessLevel: 'Access Level',
    root: 'ROOT',
    heroTitle: 'TERMUX TOOLS',
    heroSubtitle: 'Ultimate collection of 50 powerful hacking and programming tools for Android Termux environment',
    startHacking: 'START HACKING',
    
    // Search and Filter
    searchTools: 'Search Tools:',
    searchPlaceholder: 'Enter tool name or description...',
    filterByCategory: 'Filter by Category:',
    
    // Categories
    all: 'All',
    networkSecurity: 'Network Security',
    passwordCracking: 'Password Cracking',
    webSecurity: 'Web Security',
    systemTools: 'System Tools',
    development: 'Development',
    
    // Tool Card
    installation: 'Installation',
    usageExample: 'Usage Example',
    copiedToClipboard: '✓ Copied to clipboard!',
    
    // Difficulty Levels
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
    
    // Error Messages
    error404: 'ERROR 404',
    noToolsFound: 'No tools found matching your criteria.',
    adjustSearch: 'Try adjusting your search or filter settings.',
    
    // About Section
    aboutTitle: 'About Termux Tools',
    aboutText1: 'Welcome to the ultimate Termux tools collection - your gateway to mobile penetration testing and development.',
    aboutText2: 'This comprehensive toolkit includes 50 carefully selected tools for network security, web application testing, password cracking, and system administration.',
    aboutText3: 'Each tool comes with installation commands and usage examples to get you started quickly.',
    aboutText4: 'Remember: Use these tools responsibly and only on systems you own or have explicit permission to test.',
    
    // Footer
    footerText: 'Happy Hacking!',
    copyright: '© 2025 Termux Tools Collection. Educational purposes only.',
    disclaimer: 'Use responsibly and ethically.'
  },
  ar: {
    // Header
    tools: 'الأدوات',
    about: 'حول',
    contact: 'اتصل',
    
    // Hero Section
    systemStatus: 'النظام: بيئة Termux للأندرويد',
    status: 'الحالة',
    online: 'متصل',
    toolsAvailable: 'الأدوات المتاحة',
    accessLevel: 'مستوى الوصول',
    root: 'جذر',
    heroTitle: 'أدوات TERMUX',
    heroSubtitle: 'مجموعة شاملة من 50 أداة قوية للاختراق والبرمجة لبيئة Termux على الأندرويد',
    startHacking: 'ابدأ الاختراق',
    
    // Search and Filter
    searchTools: 'البحث في الأدوات:',
    searchPlaceholder: 'أدخل اسم الأداة أو الوصف...',
    filterByCategory: 'تصفية حسب الفئة:',
    
    // Categories
    all: 'الكل',
    networkSecurity: 'أمان الشبكة',
    passwordCracking: 'كسر كلمات المرور',
    webSecurity: 'أمان الويب',
    systemTools: 'أدوات النظام',
    development: 'التطوير',
    
    // Tool Card
    installation: 'التثبيت',
    usageExample: 'مثال الاستخدام',
    copiedToClipboard: '✓ تم النسخ إلى الحافظة!',
    
    // Difficulty Levels
    beginner: 'مبتدئ',
    intermediate: 'متوسط',
    advanced: 'متقدم',
    
    // Error Messages
    error404: 'خطأ 404',
    noToolsFound: 'لم يتم العثور على أدوات تطابق معاييرك.',
    adjustSearch: 'حاول تعديل إعدادات البحث أو التصفية.',
    
    // About Section
    aboutTitle: 'حول أدوات Termux',
    aboutText1: 'مرحباً بك في مجموعة أدوات Termux النهائية - بوابتك لاختبار الاختراق المحمول والتطوير.',
    aboutText2: 'تتضمن هذه المجموعة الشاملة 50 أداة مختارة بعناية لأمان الشبكة واختبار تطبيقات الويب وكسر كلمات المرور وإدارة النظام.',
    aboutText3: 'كل أداة تأتي مع أوامر التثبيت وأمثلة الاستخدام لتبدأ بسرعة.',
    aboutText4: 'تذكر: استخدم هذه الأدوات بمسؤولية وفقط على الأنظمة التي تملكها أو لديك إذن صريح لاختبارها.',
    
    // Footer
    footerText: 'اختراق سعيد!',
    copyright: '© 2025 مجموعة أدوات Termux. لأغراض تعليمية فقط.',
    disclaimer: 'استخدم بمسؤولية وأخلاق.'
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [isRTL, setIsRTL] = useState(false);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
    setIsRTL(newLang === 'ar');
    
    // Update document direction
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{
      language,
      isRTL,
      toggleLanguage,
      t
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

