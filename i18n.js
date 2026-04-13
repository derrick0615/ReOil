// i18n.js — ReOil Language Switching Engine
(function () {
  const translations = {
    // ===== Layout (Navbar / Footer) =====
    'nav.home': { zh: 'Home', en: 'Home' },
    'nav.issue': { zh: 'Issue', en: 'Issue' },
    'nav.product': { zh: 'Product', en: 'Product' },
    'nav.howToUse': { zh: 'How to Use', en: 'How to Use' },
    'nav.research': { zh: 'Research', en: 'Research' },
    'nav.about': { zh: 'About', en: 'About' },
    'nav.resources': { zh: 'Resources', en: 'Resources' },
    'nav.exploreProduct': { zh: 'Explore Product', en: 'Explore Product' },
    'awards.muse': { zh: '🏆 2026 MUSE Design Awards · Silver Winner', en: '🏆 2026 MUSE Design Awards · Silver Winner' },
    'awards.taoyuan': { zh: '🏆 2025 為桃園做研究 · 潛力研究獎', en: '🏆 2025 Taoyuan Research · Potential Research Award' },
    'footer.desc': { zh: '致力於透過設計介入，解決家庭廢油排放造成的水環境負擔。讓環保成為不自覺的優雅生活習慣。', en: 'Committed to addressing the environmental burden of household waste oil through design intervention. Making sustainability an effortless part of everyday life.' },
    'footer.department': { zh: 'Department', en: 'Department' },
    'footer.school': { zh: '國立臺北商業大學<br/>創意科技與產品設計系 115級專題', en: 'National Taipei University of Business<br/>Dept. of Creative Technology & Product Design, Class of 115' },
    'footer.navigation': { zh: 'Navigation', en: 'Navigation' },
    'footer.resources': { zh: 'Resources', en: 'Resources' },
    'footer.contact': { zh: 'Contact', en: 'Contact' },
    'footer.contactDesc': { zh: '如有任何合作洽詢或專案相關問題，歡迎與我們聯繫。', en: 'For any collaboration inquiries or project-related questions, feel free to contact us.' },
    'footer.schoolFull': { zh: '國立臺北商業大學<br/>創意科技與產品設計系', en: 'National Taipei University of Business<br/>Dept. of Creative Technology & Product Design' },
    'footer.copyright': { zh: '© 2025 ReOil Project · 國立臺北商業大學 創意科技與產品設計系 115級專題 · 指導教授：洪綾珠', en: '© 2025 ReOil Project · NTUB Dept. of Creative Technology & Product Design, Class of 115 · Advisor: Prof. Hung Ling-Chu' },

    // ===== Home Page =====
    'home.badge': { zh: 'Home Grease Filtration Unit', en: 'Home Grease Filtration Unit' },
    'home.slogan.zh': { zh: '「讓廢油，在流入水管前停下來」', en: '"Stop waste oil before it enters the drain"' },
    'home.slogan.en': { zh: 'Stop grease before it enters the drain.', en: 'Stop grease before it enters the drain.' },
    'home.btn.explore': { zh: '了解產品 Explore Product', en: 'Explore Product' },
    'home.btn.video': { zh: '觀看影片 Watch Video', en: 'Watch Video' },

    // Awards
    'home.awards.label': { zh: 'Awards & Recognition', en: 'Awards & Recognition' },
    'home.awards.title': { zh: '獲獎肯定', en: 'Awards & Recognition' },
    'home.award1.category': { zh: 'Product Design', en: 'Product Design' },
    'home.award1.name': { zh: 'MUSE Design Awards', en: 'MUSE Design Awards' },
    'home.award1.desc': { zh: 'Silver Winner - Recognizing excellence in sustainable home appliances and innovative industrial design approach for environmental protection.', en: 'Silver Winner - Recognizing excellence in sustainable home appliances and innovative industrial design approach for environmental protection.' },
    'home.award1.year': { zh: '2026 Silver Winner', en: '2026 Silver Winner' },
    'home.award2.category': { zh: 'Academic Research', en: 'Academic Research' },
    'home.award2.name': { zh: '為桃園做研究', en: 'Taoyuan Research Program' },
    'home.award2.desc': { zh: '潛力研究獎 - 針對地方性水環境議題提出具備商業轉化與社會影響力之創新廢油解決方案，獲得高度學術肯定。', en: 'Potential Research Award - Recognized for proposing an innovative waste oil solution with commercial viability and social impact, addressing local water environment issues.' },
    'home.award2.year': { zh: '2025 潛力研究獎', en: '2025 Potential Research Award' },

    // Stats
    'home.stat1.value': { zh: '40 萬公噸', en: '400K Tons' },
    'home.stat1.desc': { zh: '台灣家庭每年產出的廚餘廢油估算總量', en: 'Estimated annual household waste cooking oil output in Taiwan' },
    'home.stat2.value': { zh: '1cc : 180L', en: '1cc : 180L' },
    'home.stat2.desc': { zh: '僅 1cc 的廢油即可造成 180 公升的水域汙染', en: 'Just 1cc of waste oil can contaminate 180 liters of water' },
    'home.stat3.value': { zh: '1,600 件/年', en: '1,600 Cases/yr' },
    'home.stat3.desc': { zh: '全台因油脂造成水管阻塞之申報修繕次數', en: 'Annual reported pipe blockage repairs caused by grease in Taiwan' },

    // Features
    'home.features.label': { zh: 'Core Innovation', en: 'Core Innovation' },
    'home.features.title': { zh: '重新定義家用廢油處理的每一道程序', en: 'Redefining Every Step of Home Waste Oil Processing' },
    'home.features.desc': { zh: '我們融合了永續材料與智慧科技，將複雜的環保行為轉化為直覺的居家日常。', en: 'We combine sustainable materials with smart technology, transforming complex eco-actions into intuitive daily routines.' },
    'home.feat1.title': { zh: '天然椰殼纖維', en: 'Natural Coconut Husk Fiber' },
    'home.feat1.desc': { zh: '採用高效吸油的椰殼纖維作為濾芯基礎，天然有機且具備極佳的疏水親油特性。', en: 'Using highly oil-absorbent coconut husk fiber as the filter core — natural, organic, with excellent hydrophobic and oleophilic properties.' },
    'home.feat2.title': { zh: '智慧燈號提示', en: 'Smart LED Indicators' },
    'home.feat2.desc': { zh: '內建高精度感測器，透過光學折射判斷濾材飽和度，即時以柔和燈號提醒更換。', en: 'Built-in high-precision sensors detect filter saturation through optical refraction, providing gentle LED reminders for replacement.' },
    'home.feat3.title': { zh: '可堆肥循環', en: 'Compostable Cycle' },
    'home.feat3.desc': { zh: '使用過的濾材可直接進入堆肥系統，實現從廚房到土壤的零浪費閉環設計。', en: 'Used filter materials can be composted directly, achieving a zero-waste closed-loop design from kitchen to soil.' },

    // Bento Grid
    'home.bento.mission': { zh: 'Our Mission', en: 'Our Mission' },
    'home.bento.issue': { zh: '議題背景', en: 'Issue Background' },
    'home.bento.more': { zh: '了解更多', en: 'Learn More' },
    'home.bento.product': { zh: '產品介紹', en: 'Product Details' },
    'home.bento.research': { zh: '研究成果', en: 'Research Results' },
    'home.bento.researchDesc': { zh: '深度解析椰殼纖維對不同油脂飽和度的吸收數據與環境降解報告。', en: 'In-depth analysis of coconut husk fiber absorption data across different oil saturation levels and environmental degradation reports.' },
    'home.bento.circular': { zh: '循環經濟', en: 'Circular Economy' },
    'home.bento.circularDesc': { zh: '我們追求的並非單純的過濾，而是將廢棄油脂轉化為生態循環中的養分。', en: 'We pursue not just filtration, but transforming waste oil into nutrients within the ecological cycle.' },
  };

  // Get/set language preference
  function getLang() {
    return localStorage.getItem('reoil-lang') || 'zh';
  }

  function setLang(lang) {
    localStorage.setItem('reoil-lang', lang);
  }

  // Apply translations to all elements with data-i18n
  function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (translations[key] && translations[key][lang] !== undefined) {
        if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
          el.placeholder = translations[key][lang];
        } else {
          el.innerHTML = translations[key][lang];
        }
      }
    });
    // Update html lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
    // Update toggle button text
    var toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
      toggleBtn.textContent = lang === 'zh' ? 'EN' : '中';
    }
  }

  // Toggle language
  function toggleLang() {
    var current = getLang();
    var next = current === 'zh' ? 'en' : 'zh';
    setLang(next);
    applyTranslations(next);
  }

  // Expose globally for layout.js to use
  window.ReOilI18n = {
    getLang: getLang,
    setLang: setLang,
    applyTranslations: applyTranslations,
    toggleLang: toggleLang,
    t: function (key) {
      var lang = getLang();
      return (translations[key] && translations[key][lang]) || key;
    }
  };

  // Auto-apply on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      applyTranslations(getLang());
    });
  } else {
    applyTranslations(getLang());
  }
})();
