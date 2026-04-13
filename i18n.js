// i18n.js — ReOil Language Switching Engine
(function () {
  const translations = {
    // ===== Layout (Navbar / Footer) =====
    'nav.home': { zh: '首頁', en: 'Home' },
    'nav.issue': { zh: '議題背景', en: 'Issue' },
    'nav.product': { zh: '產品介紹', en: 'Product' },
    'nav.howToUse': { zh: '使用方式', en: 'How to Use' },
    'nav.research': { zh: '研究成果', en: 'Research' },
    'nav.about': { zh: '關於我們', en: 'About' },
    'nav.resources': { zh: '資源下載', en: 'Resources' },
    'nav.exploreProduct': { zh: '探索產品', en: 'Explore Product' },
    'awards.muse': { zh: '🏆 2026 MUSE Design Awards · 銀獎', en: '🏆 2026 MUSE Design Awards · Silver Winner' },
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
    'home.award1.category': { zh: '產品設計', en: 'Product Design' },
    'home.award1.name': { zh: 'MUSE Design Awards', en: 'MUSE Design Awards' },
    'home.award1.desc': { zh: 'Silver Winner — 以永續家用電器的卓越設計與創新環保工業設計方法，獲得國際評審肯定。', en: 'Silver Winner - Recognizing excellence in sustainable home appliances and innovative industrial design approach for environmental protection.' },
    'home.award1.year': { zh: '2026 銀獎', en: '2026 Silver Winner' },
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

    // ===== Issue Page =====
    'issue.hero.label': { zh: 'Current Crisis', en: 'Current Crisis' },
    'issue.hero.title': { zh: '家庭廢油，<br/>城市的隱形危機', en: 'Household Waste Oil,<br/>The Hidden Urban Crisis' },
    'issue.hero.desc': { zh: 'The Hidden Crisis of Household Waste Cooking Oil. A silent ecological threat flowing beneath our feet every day.', en: 'The Hidden Crisis of Household Waste Cooking Oil. A silent ecological threat flowing beneath our feet every day.' },
    'issue.gap.title': { zh: '數據中的巨大缺口', en: 'The Massive Data Gap' },
    'issue.gap.desc': { zh: '台灣每年食用油內銷量約為 50–60 萬公噸，然而官方申報的回收量僅約 7–8.5 萬公噸。這意味著每年有將近 40 萬公噸的廢油「流向不明」，成為環境監管的真空地帶。', en: 'Taiwan\'s annual domestic cooking oil sales total approximately 500,000–600,000 metric tons, yet officially reported recycling amounts to only 70,000–85,000 tons. This means nearly 400,000 tons of waste oil "disappear" annually, creating a vacuum in environmental oversight.' },
    'issue.gap.stat': { zh: '公噸廢油<br/>流向不明', en: 'Metric tons of<br/>waste oil unaccounted' },
    'issue.gap.chart.oil': { zh: '食用油內銷<br/>50-60萬噸', en: 'Domestic oil sales<br/>500-600K tons' },
    'issue.gap.chart.recycle': { zh: '申報回收<br/>7-8.5萬噸', en: 'Reported recycling<br/>70-85K tons' },
    'issue.gap.chart.gap': { zh: '缺口：約 40 萬公噸', en: 'Gap: ~400,000 metric tons' },
    'issue.gap.chart.gapLabel': { zh: '數據缺口', en: 'Data Gap' },
    'issue.gap.chart.note': { zh: '推估之生產量與回收紀錄間的龐大差異。', en: 'The vast discrepancy between estimated production and recycling records.' },
    'issue.eco.label': { zh: 'Ecological Impact', en: 'Ecological Impact' },
    'issue.eco.title': { zh: '環境代價', en: 'Environmental Cost' },
    'issue.eco.oil': { zh: '廢油', en: 'Waste Oil' },
    'issue.eco.water': { zh: '清水稀釋', en: 'Clean Water Dilution' },
    'issue.eco.quote': { zh: '「僅僅 1cc 的廢食用油，就需要 180 公升的清水才能將其稀釋至水生生物可生存的安全程度。」', en: '"Just 1cc of waste cooking oil requires 180 liters of clean water to dilute it to a level safe for aquatic life."' },
    'issue.cases.title': { zh: '真實世界的後果', en: 'Real-World Consequences' },
    'issue.case1.location': { zh: '倫敦，2017', en: 'London, 2017' },
    'issue.case1.title': { zh: '倫敦油脂山 (The Fatberg)', en: 'The London Fatberg' },
    'issue.case1.desc': { zh: '一座長達 250 公尺、重達 130 公噸的龐大脂質山塞滿了下水道，顯示出城市油脂管理系統的徹底崩潰與公共衛生威脅。', en: 'A massive 250-meter long, 130-ton grease mountain blocked the sewers, revealing the complete collapse of urban grease management systems and a public health threat.' },
    'issue.case2.location': { zh: '新北市，統計數據', en: 'New Taipei City, Statistics' },
    'issue.case2.title': { zh: '下水道油脂阻塞統計', en: 'Sewer Grease Blockage Statistics' },
    'issue.case2.desc': { zh: '根據統計，新北市下水道年均發生 1,600 件油脂阻塞案件。其中高達 40% 的住宅區管網阻塞可溯源自私人廚房排放的廢食用油。', en: 'Statistics show an average of 1,600 annual grease blockage incidents in New Taipei City sewers. Up to 40% of residential pipe blockages can be traced back to waste cooking oil from private kitchens.' },
    'issue.case3.location': { zh: '基隆河，2025', en: 'Keelung River, 2025' },
    'issue.case3.title': { zh: '基隆河重度油污事件', en: 'Keelung River Severe Oil Pollution' },
    'issue.case3.desc': { zh: '近期發生的非法傾倒廢油事件導致基隆河下游長達 2 公里的油污帶，不僅嚴重危害生態，更迫使下游自來水廠緊急停止取水。', en: 'A recent illegal waste oil dumping incident caused a 2-kilometer oil slick downstream in the Keelung River, severely harming ecosystems and forcing downstream water treatment plants to halt operations.' },
    'issue.reg.title': { zh: '分級管理制度下的缺口', en: 'Gaps in the Tiered Management System' },
    'issue.reg.p1': { zh: '在現行的環境法規架構下，商業廚房與大型食品加工廠受到嚴格監管。每一公升的廢油都必須由合格清除處理機構回收，並詳細紀錄、申報與追蹤。這種可追溯性確保了企業端廢油的安全流向。', en: 'Under the current environmental regulatory framework, commercial kitchens and large food processing plants are strictly regulated. Every liter of waste oil must be collected by qualified disposal agencies, with detailed records, declarations, and tracking. This traceability ensures the safe flow of industrial waste oil.' },
    'issue.reg.p2': { zh: '然而，一旦進入一般住宅與家庭領域，這種嚴密的監督便徹底消失。', en: 'However, once we enter the residential and household domain, this rigorous oversight completely vanishes.' },
    'issue.reg.p3': { zh: '家庭廢食用油 (WCO) 目前處於廢棄物管理的灰色地帶。由於缺乏專門的收集基礎設施或法定的申報要求，絕大多數的住宅端廢油最終流向了市政污水系統，或是與一般垃圾混合，造成焚化爐負擔或掩埋場的二次污染。', en: 'Household waste cooking oil (WCO) currently exists in a grey area of waste management. Due to the lack of dedicated collection infrastructure or mandatory reporting requirements, the vast majority of residential waste oil ends up in municipal sewage systems, or mixed with general waste, burdening incinerators or causing secondary pollution in landfills.' },
    'issue.reg.p4': { zh: '這個斷層不僅是政策上的漏洞，更是一個系統性的設計缺陷，忽略了城市油脂生命週期中極為重要的一環。', en: 'This disconnect is not merely a policy loophole, but a systemic design flaw that overlooks a critical link in the urban grease lifecycle.' },
    'issue.cta.title': { zh: '那麼，有解法嗎？', en: 'So, Is There a Solution?' },
    'issue.cta.desc': { zh: '探索 ReOil 如何縫合這條斷裂的供應鏈，將隱形的城市危機轉化為永續的資源循環。', en: 'Explore how ReOil bridges this broken supply chain, transforming an invisible urban crisis into a sustainable resource cycle.' },
    'issue.cta.btn': { zh: '了解解決方案', en: 'Discover the Solution' },

    // ===== Product Page =====
    'product.hero.label': { zh: 'Product Showcase', en: 'Product Showcase' },
    'product.hero.title': { zh: 'ReOil <br/>家用油汙過濾裝置', en: 'ReOil <br/>Home Grease Filtration Unit' },
    'product.hero.desc': { zh: '三層模組化設計, 重力過濾 × 智慧感測', en: 'Three-layer modular design, gravity filtration × smart sensing' },
    'product.hero.btn1': { zh: '瞭解更多', en: 'Learn More' },
    'product.hero.btn2': { zh: '了解運作原理', en: 'How It Works' },
    'product.name.re': { zh: '重新 / 回收', en: 'Renew / Recycle' },
    'product.name.oil': { zh: '油脂', en: 'Oil / Grease' },
    'product.structure.title': { zh: '模組化結構解析', en: 'Modular Structure Analysis' },
    'product.structure.desc': { zh: '三層核心系統,打造高效廚房生態', en: 'Three-layer core system for an efficient kitchen ecosystem' },
    'product.layer1': { zh: 'Layer 1: 廚餘過濾層', en: 'Layer 1: Food Waste Filter' },
    'product.layer2': { zh: 'Layer 2: 油水分離層', en: 'Layer 2: Oil-Water Separator' },
    'product.layer3': { zh: 'Layer 3: 廢水收集層', en: 'Layer 3: Wastewater Collection' },
    'product.tech.label': { zh: 'Exclusive Tech', en: 'Exclusive Tech' },
    'product.tech.title': { zh: '核心技術 — <br/>天然椰殼纖維', en: 'Core Technology — <br/>Natural Coconut Husk Fiber' },
    'product.tech.desc1': { zh: '我們發掘了自然界最高效的過濾媒介：<br/><span class="text-secondary-fixed font-bold">親油疏水 (Oleophilic &amp; Hydrophobic)</span> 特性。', en: 'We discovered nature\'s most efficient filtration medium:<br/><span class="text-secondary-fixed font-bold">Oleophilic & Hydrophobic</span> properties.' },
    'product.tech.desc2': { zh: '特殊的多孔纖維結構，讓油脂在接觸瞬間被牢牢吸附與鎖定，同時允許清水順利穿透流動。這種源自大自然的智慧，比合成材料更環保、更高效。', en: 'The special porous fiber structure firmly absorbs and locks oil upon contact, while allowing clean water to flow through freely. This nature-inspired wisdom is more eco-friendly and efficient than synthetic materials.' },
    'product.led.title': { zh: '智慧燈語系統', en: 'Smart LED Indicator System' },
    'product.led.desc': { zh: '一眼掌握 ReOil 的運作狀態，無需猜測，生活更從容。', en: 'Know ReOil\'s status at a glance — no guessing, just living.' },
    'product.led.yellow.title': { zh: '🟡 黃燈 — 運作中', en: '🟡 Yellow — Processing' },
    'product.led.yellow.desc': { zh: '(感測到湯水通過)', en: '(Liquid flow detected)' },
    'product.led.green.title': { zh: '🟢 綠燈 — 狀態良好', en: '🟢 Green — Good Condition' },
    'product.led.green.desc': { zh: '(濾芯尚有空間)', en: '(Filter has capacity)' },
    'product.led.red.title': { zh: '🔴 紅燈 — 更換提醒', en: '🔴 Red — Replace Reminder' },
    'product.led.red.desc': { zh: '(濾芯已飽和)', en: '(Filter saturated)' },
    'product.cta.title': { zh: '為您的廚房，也為這座星球。', en: 'For Your Kitchen, and for the Planet.' },
    'product.cta.desc': { zh: '每一次過濾，都是在減少海洋的油脂負擔。ReOil 不僅僅是一個裝置，它是您對未來永續生活的承諾。', en: 'Every filtration reduces the ocean\'s grease burden. ReOil is not just a device — it\'s your commitment to a sustainable future.' },
    'product.cta.btn1': { zh: '認識 ReOil 專案', en: 'About ReOil Project' },
    'product.cta.btn2': { zh: '查看技術手冊', en: 'View Technical Manual' },

    // ===== How to Use Page =====
    'howto.hero.label': { zh: 'User Guide', en: 'User Guide' },
    'howto.hero.title': { zh: '四步驟，輕鬆完成<br/><span class="text-primary italic">家庭油汙源頭過濾</span>', en: 'Four Steps to Effortless<br/><span class="text-primary italic">Home Grease Source Filtration</span>' },
    'howto.hero.desc': { zh: '透過直覺的感測與自然材料過濾，讓廚房廢棄油脂處理變得優雅、高效且對環境友善。', en: 'Through intuitive sensing and natural material filtration, making kitchen waste oil disposal elegant, efficient, and eco-friendly.' },
    'howto.step1.title': { zh: '傾倒與初步分離', en: 'Pour & Initial Separation' },
    'howto.step1.desc': { zh: '倒入混合廚餘，高效濾網即刻攔截固體殘渣，確保下游不堵塞。這是淨化流程的第一道守護。', en: 'Pour in mixed kitchen waste — the high-efficiency filter instantly intercepts solid residue, ensuring no downstream blockage. This is the first line of defense in the purification process.' },
    'howto.step2.title': { zh: '自動過濾與感測喚醒 <span class="text-2xl">🟡</span>', en: 'Auto-Filtration & Sensor Activation <span class="text-2xl">🟡</span>' },
    'howto.step2.desc': { zh: '液體通過天然椰殼纖維濾芯，智能感測器亮起黃燈偵測油水比例，科技與自然的完美協奏。', en: 'Liquid passes through the natural coconut husk fiber filter while smart sensors activate a yellow light to detect the oil-water ratio — a perfect harmony of technology and nature.' },
    'howto.step3.title': { zh: '直覺燈號判讀 <span class="text-2xl tracking-tighter">🟢🔴</span>', en: 'Intuitive LED Reading <span class="text-2xl tracking-tighter">🟢🔴</span>' },
    'howto.step3.desc': { zh: '無需複雜說明書：綠燈代表過濾完成，可以放心排放；紅燈提示濾芯已飽和，提醒您適時更新。', en: 'No complex manuals needed: green light means filtration complete, safe to drain; red light indicates filter saturation, reminding you to replace it.' },
    'howto.step4.title': { zh: '清理與耗材更新', en: 'Cleaning & Filter Replacement' },
    'howto.step4.desc': { zh: '倒掉攔截的固體殘渣，必要時僅需 30 秒即可完成濾芯更換。讓環保維護如同日常整理般輕鬆。', en: 'Discard intercepted solid residue; filter replacement takes only 30 seconds when needed. Making eco-maintenance as easy as daily tidying.' },
    'howto.scenarios.title': { zh: '場景實踐', en: 'Practical Scenarios' },
    'howto.scenarios.subtitle': { zh: 'In Practice', en: 'In Practice' },
    'howto.scA.label': { zh: 'Scenario A', en: 'Scenario A' },
    'howto.scA.title': { zh: '日常使用情境 — <br/>晚餐後的廚餘處理', en: 'Daily Use — <br/>After-Dinner Kitchen Cleanup' },
    'howto.scA.desc': { zh: '忙碌的一天結束後，ReOil 讓收拾餐桌變得輕鬆。不需要擔心繁瑣的油水分離，只需一鍵傾倒，安靜安穩地為您的家守護水管清潔。', en: 'After a busy day, ReOil makes cleaning up effortless. No need to worry about tedious oil-water separation — just pour, and it quietly protects your home\'s plumbing.' },
    'howto.scB.label': { zh: 'Scenario B', en: 'Scenario B' },
    'howto.scB.title': { zh: '維護情境 — <br/>濾芯飽和時的更換流程', en: 'Maintenance — <br/>Filter Replacement Process' },
    'howto.scB.desc': { zh: '當系統提醒需要維護時，更換濾芯就如同更換咖啡濾紙一樣簡單。不需要專業工具，讓環保科技完美融入您的居家美學，優雅且從容。', en: 'When the system signals maintenance, replacing the filter is as simple as changing a coffee filter. No tools needed — eco-technology seamlessly blends into your home aesthetic, elegant and effortless.' },
    'howto.faq.title': { zh: '常見問題解答', en: 'FAQ' },
    'howto.faq1.q': { zh: '多久需要更換濾芯?', en: 'How often should the filter be replaced?' },
    'howto.faq1.a': { zh: '視家庭使用頻率而定，一般建議 1–3 個月更換一次。內建的感測系統會根據實際飽和度亮起紅燈提醒，您不需要刻意記錄日期。', en: 'Depending on household usage, replacement is generally recommended every 1–3 months. The built-in sensor system will activate a red light based on actual saturation, so you don\'t need to track dates.' },
    'howto.faq2.q': { zh: '濾芯可以清洗嗎?', en: 'Can the filter be washed?' },
    'howto.faq2.a': { zh: '濾芯採用一次性生物降解材料設計，旨在徹底吸附油脂微粒。為了維持最佳過濾效能與衛生，不建議清洗重複使用。', en: 'The filter is designed with single-use biodegradable materials to thoroughly absorb oil particles. For optimal filtration performance and hygiene, washing and reusing is not recommended.' },
    'howto.faq3.q': { zh: '用完的濾芯怎麼處理?', en: 'How to dispose of used filters?' },
    'howto.faq3.a': { zh: 'ReOil 濾芯由 100% 天然椰殼纖維製成，完全可以隨一般廚餘堆肥處理。油脂與天然纖維在環境中可被自然分解，不產生微塑膠汙染。', en: 'ReOil filters are made from 100% natural coconut husk fiber and can be composted with regular kitchen waste. Oil and natural fibers decompose naturally, producing no microplastic pollution.' },
    'howto.faq4.q': { zh: '適合哪些家庭?', en: 'Which households is it suitable for?' },
    'howto.faq4.a': { zh: '無論是單身公寓還是多口之家，只要您重視廚房衛生與管線壽命，ReOil 簡潔的外型與靈活的體積都能完美融入您的廚房流理台空間。', en: 'Whether a studio apartment or a large family home, if you value kitchen hygiene and pipe longevity, ReOil\'s sleek design and flexible size fit perfectly into any kitchen countertop.' },
    'howto.final.title': { zh: '準備好開始您的<br/><span class="text-primary italic">意識廚房</span>體驗了嗎？', en: 'Ready to Start Your<br/><span class="text-primary italic">Conscious Kitchen</span> Experience?' },
    'howto.final.btn1': { zh: '認識 ReOil 專案', en: 'About ReOil Project' },
    'howto.final.btn2': { zh: '聯繫我們', en: 'Contact Us' },
    'howto.sensing': { zh: '智能感測中', en: 'Smart Sensing' },

    // ===== Research Page =====
    'research.hero.label': { zh: 'Methodology', en: 'Methodology' },
    'research.hero.title': { zh: '研究方法與實驗驗證', en: 'Research Methods & Experimental Validation' },
    'research.hero.desc': { zh: '86 份問卷 × 多組對照實驗', en: '86 Surveys × Multiple Controlled Experiments' },
    'research.survey.title': { zh: '市場趨勢洞察', en: 'Market Trend Insights' },
    'research.survey.desc': { zh: '透過大規模問卷調查，我們挖掘出消費者對於廢棄油處理的真實痛點。數據顯示，永續性不再只是加分項，而是核心需求。', en: 'Through large-scale surveys, we uncovered consumers\' real pain points regarding waste oil disposal. Data shows sustainability is no longer a bonus — it\'s a core demand.' },
    'research.survey.highlight.label': { zh: 'Interest Highlight', en: 'Interest Highlight' },
    'research.survey.highlight.desc': { zh: '受訪者對於具備「全生物降解」功能的廢油處理產品表現出極高購買意願。', en: 'Respondents showed extremely high purchase intent for waste oil processing products with "fully biodegradable" capabilities.' },
    'research.survey.chart1.label': { zh: 'Processing methods', en: 'Processing Methods' },
    'research.survey.chart2.label': { zh: 'User pain points', en: 'User Pain Points' },
    'research.survey.chart2.note': { zh: 'Top categories identified by respondents', en: 'Top categories identified by respondents' },
    'research.persona.title': { zh: '核心使用者畫像', en: 'Core User Personas' },
    'research.persona.desc': { zh: '我們針對兩大主力客群進行深度分析，確保 ReOil 的解決方案能精準對接生活情境。', en: 'We conducted in-depth analysis of two primary customer segments to ensure ReOil\'s solution precisely addresses real-life scenarios.' },
    'research.persona1.name': { zh: 'Senior Home Manager', en: 'Senior Home Manager' },
    'research.persona1.needs.label': { zh: 'Needs', en: 'Needs' },
    'research.persona1.needs.desc': { zh: '追求極致的廚房清潔度與系統化的廢棄物處理流程。對產品成分有極高的環保堅持。', en: 'Pursuing ultimate kitchen cleanliness and systematic waste disposal processes. Extremely committed to eco-friendly product materials.' },
    'research.persona2.name': { zh: 'Busy Professional', en: 'Busy Professional' },
    'research.persona2.needs.label': { zh: 'Needs', en: 'Needs' },
    'research.persona2.needs.desc': { zh: '重視效率，希望在極短時間內完成油汙清理，不希望處理過程造成二次汙染或不便。', en: 'Values efficiency, hoping to complete oil cleaning in minimal time without secondary contamination or inconvenience.' },
    'research.experiment.title': { zh: '實驗數據對比', en: 'Experimental Data Comparison' },
    'research.experiment.col1': { zh: '評估指標 / 指標材質', en: 'Evaluation Metric / Material' },
    'research.experiment.col2': { zh: 'Coconut Fiber (ReOil)', en: 'Coconut Fiber (ReOil)' },
    'research.experiment.col3': { zh: 'Synthetic Cotton', en: 'Synthetic Cotton' },
    'research.experiment.row1': { zh: 'Absorbing Capacity (油脂吸收量)', en: 'Absorbing Capacity' },
    'research.experiment.row2': { zh: 'Permeability (滲透阻隔性)', en: 'Permeability' },
    'research.experiment.row3': { zh: 'Compostable (生物降解性)', en: 'Compostable (Biodegradability)' },
    'research.experiment.compost.yes': { zh: '100% 降解', en: '100% Degradable' },
    'research.experiment.compost.no': { zh: '不可降解', en: 'Non-degradable' },
    'research.experiment.note': { zh: '*數據基於 20 攝氏度實驗室環境，使用 100ml 標準橄欖油樣品測試所得。', en: '*Data based on laboratory conditions at 20°C using 100ml standard olive oil samples.' },
    'research.lab.label': { zh: 'In Situ', en: 'In Situ' },
    'research.lab.title': { zh: '實驗室現場紀錄', en: 'Laboratory Documentation' },
    'research.lab.desc': { zh: '我們在封閉的受控環境中模擬各種極端烹飪條件，確保產品的耐用性與穩定性。', en: 'We simulate various extreme cooking conditions in controlled environments to ensure product durability and stability.' },
    'research.cta.title': { zh: '透明的研發歷程，構築信任的基礎。', en: 'Transparent R&D process builds the foundation of trust.' },
    'research.cta.desc': { zh: '每一項數據的背後，都是我們對「永續廚房」的承諾。ReOil 堅持用科學驗證每一滴廢油的最佳歸宿。', en: 'Behind every data point is our commitment to a "sustainable kitchen." ReOil insists on using science to verify the best destination for every drop of waste oil.' },
    'research.cta.link': { zh: '閱讀完整研究報告', en: 'Read Full Research Report' },

    // ===== About Page =====
    'about.dept.label': { zh: '學術傳承', en: 'Academic Heritage' },
    'about.dept.title': { zh: '國立臺北商業大學<br />創意科技與產品設計系', en: 'National Taipei University of Business<br />Dept. of Creative Technology & Product Design' },
    'about.dept.desc': { zh: '結合生態探究與技術精準度，115 級專題代表 ReOil 在將廢棄油脂與循環經濟優雅結合的使命中，開創的全新里程碑。', en: 'Combining ecological inquiry with technical precision, the Class of 115 capstone project ReOil pioneers a new milestone in elegantly merging waste oil with the circular economy.' },
    'about.dept.badge': { zh: '115 級專題', en: 'Class of 115 Capstone' },
    'about.advisor.title': { zh: '指導教授', en: 'Advisor' },
    'about.advisor.label': { zh: '專題指導', en: 'Capstone Advisor' },
    'about.advisor.name': { zh: '洪綾珠 教授', en: 'Prof. Hung Ling-Chu' },
    'about.advisor.desc': { zh: '洪綾珠老師在永續材料與循環經濟領域擁有豐富的教學與研究經驗，引導 ReOil 團隊在技術可行性與創意表達之間取得精妙的平衡。她的指導聚焦於生態責任與產品設計的交匯點，協助團隊將理念落地為可實踐的設計方案。', en: 'Prof. Hung Ling-Chu has extensive teaching and research experience in sustainable materials and circular economy, guiding the ReOil team to achieve an exquisite balance between technical feasibility and creative expression. Her guidance focuses on the intersection of ecological responsibility and product design, helping the team turn ideas into actionable design solutions.' },
    'about.team.title': { zh: '團隊成員', en: 'Team Members' },
    'about.team.desc': { zh: '五位各具專長的成員，以共同的永續信念為核心，攜手探索廢棄物轉化的未來可能。', en: 'Five members with diverse expertise, united by a shared belief in sustainability, exploring the future possibilities of waste transformation.' },
    'about.member1.role': { zh: '專案統籌 ／ 3D 建模 ／ 模型製作', en: 'Project Lead / 3D Modeling / Prototyping' },
    'about.member2.role': { zh: '電路設計 ／ 濾芯材料研究 ／ 網站建置', en: 'Circuit Design / Filter Research / Web Development' },
    'about.member3.role': { zh: '視覺設計 ／ 產品外型設計 ／ 平面設計', en: 'Visual Design / Product Design / Graphic Design' },
    'about.member4.role': { zh: '機構設計 ／ 濾芯材料研究 ／ 影片製作', en: 'Mechanical Design / Filter Research / Video Production' },
    'about.member5.role': { zh: '視覺設計 ／ 產品外型設計 ／ 平面設計', en: 'Visual Design / Product Design / Graphic Design' },
    'about.timeline.title': { zh: '專題歷程', en: 'Project Timeline' },
    'about.timeline.desc': { zh: '追溯我們在生態創新道路上的發展軌跡。', en: 'Tracing our development trajectory on the path of ecological innovation.' },
    'about.ms1.title': { zh: '議題探索', en: 'Issue Exploration' },
    'about.ms1.desc': { zh: '針對在地廢油循環與社區環境影響進行初步研究與資料蒐集。', en: 'Preliminary research and data collection on local waste oil cycles and community environmental impact.' },
    'about.ms1.time': { zh: '第 1-3 個月', en: 'Months 1-3' },
    'about.ms2.title': { zh: '原型開發', en: 'Prototype Development' },
    'about.ms2.desc': { zh: '反覆迭代硬體設計，並進行感測器校準與模組驗證。', en: 'Iterative hardware design with sensor calibration and module verification.' },
    'about.ms2.time': { zh: '第 4-6 個月', en: 'Months 4-6' },
    'about.ms3.title': { zh: '實測驗證', en: 'Field Testing' },
    'about.ms3.desc': { zh: '於校園餐廳與指定場域進行實際使用測試與數據蒐集。', en: 'Real-world usage testing and data collection at campus cafeterias and designated sites.' },
    'about.ms3.time': { zh: '第 7-9 個月', en: 'Months 7-9' },
    'about.ms4.title': { zh: '成果展覽', en: 'Exhibition' },
    'about.ms4.desc': { zh: '完整呈現 ReOil 專案成果與生態系統架構的最終展示。', en: 'Complete presentation of ReOil project results and ecosystem architecture.' },
    'about.ms4.time': { zh: '第 10-12 個月', en: 'Months 10-12' },
    'about.thanks.title': { zh: '致謝', en: 'Acknowledgements' },
    'about.thanks.desc': { zh: '衷心感謝國立臺北商業大學提供的創意研究資源與支持，使本專題得以順利完成。同時特別感謝技術合作夥伴、實驗室工作人員，以及參與早期測試的在地協力者。您們對永續未來的堅持，是驅動我們持續創新的最大動力。', en: 'Sincere thanks to National Taipei University of Business for the creative research resources and support that made this project possible. Special thanks also to technical partners, lab staff, and local collaborators who participated in early testing. Your commitment to a sustainable future is our greatest motivation for continued innovation.' },
    'about.thanks.academic': { zh: '學術支持', en: 'Academic Support' },
    'about.thanks.academicName': { zh: '國立臺北商業大學', en: 'National Taipei University of Business' },
    'about.thanks.material': { zh: '材料贊助', en: 'Material Sponsorship' },
    'about.thanks.materialName': { zh: '永續材料研究基金', en: 'Sustainable Materials Research Fund' },
    'about.thanks.community': { zh: '社區夥伴', en: 'Community Partners' },
    'about.thanks.communityName': { zh: '在地協力單位', en: 'Local Collaborators' },

    // ===== Resources Page =====
    'res.header.label': { zh: '資源中心', en: 'Resource Center' },
    'res.header.title': { zh: '知識與<br/>專案資源', en: 'Knowledge &<br/>Project Resources' },
    'res.header.desc': { zh: '瀏覽我們完整的研究成果、視覺文件與報告資料。我們相信過程的透明與成果的公開分享。', en: 'Browse our complete research results, visual documents, and reports. We believe in transparency of process and open sharing of results.' },
    'res.dl.title': { zh: '可下載檔案', en: 'Downloadable Files' },
    'res.dl.version': { zh: '目前版本：2026.Q1', en: 'Current version: 2026.Q1' },
    'res.dl.report.title': { zh: '完整成果報告書', en: 'Full Project Report' },
    'res.dl.report.desc': { zh: '完整記錄 ReOil 廢油回收過濾研究成果與實驗數據的專案報告書。', en: 'Comprehensive project report documenting ReOil waste oil recycling filtration research results and experimental data.' },
    'res.dl.report.btn': { zh: '下載', en: 'Download' },
    'res.dl.intro.title': { zh: '產品一頁式簡介', en: 'Product One-Pager' },
    'res.dl.intro.desc': { zh: 'ReOil 產品核心規格與環保效益摘要。', en: 'ReOil product core specifications and environmental benefits summary.' },
    'res.dl.video.title': { zh: '產品介紹影片', en: 'Product Video' },
    'res.dl.video.desc': { zh: '以影像呈現 ReOil 的產品理念與使用流程。', en: 'Visual presentation of ReOil\'s product concept and usage process.' },
    'res.dl.video.link': { zh: '線上觀看', en: 'Watch Online' },
    'res.dl.poster.title': { zh: '展覽海報圖檔', en: 'Exhibition Poster' },
    'res.dl.poster.desc': { zh: '高解析度展覽海報，適用於展場輸出。', en: 'High-resolution exhibition poster for venue display.' },
    'res.awards.label': { zh: '獲獎紀錄', en: 'Awards Record' },
    'res.awards.title': { zh: '獲國際設計社群肯定', en: 'Recognized by the International Design Community' },
    'res.awards.desc': { zh: '我們對環保卓越與設計嚴謹的堅持，已獲得國際評審的認可。點擊以下連結瀏覽官方得獎頁面與評審紀錄。', en: 'Our commitment to environmental excellence and design rigor has been recognized by international judges. Click the links below to view official award pages and judging records.' },
    'res.awards.muse': { zh: 'MUSE Design Awards 2026 官方得獎頁', en: 'MUSE Design Awards 2026 Official Page' },
    'res.awards.taoyuan': { zh: '2025 為桃園做研究 潛力研究獎', en: '2025 Taoyuan Research Potential Research Award' },
    'res.contact.title': { zh: '聯絡我們', en: 'Contact Us' },
    'res.contact.desc': { zh: '有任何合作邀約、媒體採訪或展覽邀請需求？請填寫表單，我們的團隊將盡快與您聯繫。', en: 'Have any collaboration proposals, media interviews, or exhibition invitations? Fill out the form and our team will contact you shortly.' },
    'res.contact.social': { zh: '與我們聯繫', en: 'Connect With Us' },
    'res.form.name.label': { zh: '姓名', en: 'Name' },
    'res.form.name.ph': { zh: '您的姓名', en: 'Your name' },
    'res.form.org.label': { zh: '單位', en: 'Organization' },
    'res.form.org.ph': { zh: '機構名稱', en: 'Organization name' },
    'res.form.email.label': { zh: '電子郵件', en: 'Email' },
    'res.form.purpose.label': { zh: '用途', en: 'Purpose' },
    'res.form.purpose.media': { zh: '媒體採訪', en: 'Media Interview' },
    'res.form.purpose.collab': { zh: '合作邀約', en: 'Collaboration' },
    'res.form.purpose.exhibit': { zh: '展覽邀請', en: 'Exhibition Invitation' },
    'res.form.purpose.other': { zh: '其他', en: 'Other' },
    'res.form.message.label': { zh: '訊息內容', en: 'Message' },
    'res.form.message.ph': { zh: '請簡述您的需求...', en: 'Please briefly describe your needs...' },
    'res.form.submit': { zh: '送出表單', en: 'Submit Form' },
    'res.toast': { zh: '感謝您的來信，我們將盡快與您聯繫！', en: 'Thank you for your message! We will get back to you soon.' },
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
        if ((el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') && el.hasAttribute('placeholder')) {
          el.placeholder = translations[key][lang];
        } else if (el.tagName === 'OPTION') {
          el.textContent = translations[key][lang];
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
