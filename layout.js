(function () {
  // Detect current page for active nav highlighting
  const path = window.location.pathname.split('/').pop() || 'home.html';

  const navLinks = [
    { label: 'Home', href: 'home.html' },
    { label: 'Issue', href: 'issue.html' },
    { label: 'Product', href: 'product.html' },
    { label: 'How to Use', href: 'how-to-use.html' },
    { label: 'Research', href: 'research.html' },
    { label: 'About', href: 'about.html' },
    { label: 'Resources', href: 'resources.html' },
  ];

  function isActive(href) {
    return path === href || (path === '' && href === 'home.html') || (path === 'index.html' && href === 'home.html');
  }

  // Build nav links HTML
  const navLinksHTML = navLinks
    .map((link) => {
      const active = isActive(link.href);
      const cls = active
        ? "font-['Inter'] font-bold tracking-tight uppercase text-xs text-on-surface border-b-2 border-[#4F7C61]/50 pb-1"
        : "font-['Inter'] font-bold tracking-tight uppercase text-xs text-on-surface-variant hover:text-primary transition-colors";
      return `<a class="${cls}" href="${link.href}">${link.label}</a>`;
    })
    .join('\n');

  // Mobile nav links
  const mobileNavLinksHTML = navLinks
    .map((link) => {
      const active = isActive(link.href);
      const cls = active
        ? 'block px-4 py-3 font-bold text-sm text-primary bg-primary/10 rounded-lg'
        : 'block px-4 py-3 font-bold text-sm text-on-surface-variant hover:text-primary hover:bg-primary/5 rounded-lg transition-colors';
      return `<a class="${cls}" href="${link.href}">${link.label}</a>`;
    })
    .join('\n');

  // Navbar HTML
  const navbarHTML = `
<!-- Top Navigation Bar -->
<nav id="site-navbar" class="sticky top-0 w-full z-50 bg-stone-50/70 dark:bg-slate-900/70 backdrop-blur-md shadow-[0_12px_48px_rgba(25,28,27,0.04)]">
  <div class="max-w-[1280px] mx-auto flex justify-between items-center px-10 h-24">
    <a href="home.html" class="text-2xl font-bold tracking-tighter text-[#4F7C61] dark:text-[#4F7C61] no-underline">ReOil</a>
    <div class="hidden md:flex items-center gap-8">
      ${navLinksHTML}
    </div>
    <div class="flex items-center gap-4">
      <a href="product.html" class="hidden md:inline-block bg-primary text-on-primary px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:opacity-80 transition-opacity active:scale-95 no-underline">Explore Product</a>
      <button id="mobile-menu-btn" class="md:hidden p-2 text-on-surface-variant hover:text-primary transition-colors" aria-label="Open menu">
        <span class="material-symbols-outlined text-2xl">menu</span>
      </button>
    </div>
  </div>
  <!-- Mobile Menu -->
  <div id="mobile-menu" class="hidden md:hidden bg-surface-container-lowest border-t border-outline-variant/20 px-6 py-4 space-y-1">
    ${mobileNavLinksHTML}
    <a href="product.html" class="block px-4 py-3 mt-2 bg-primary text-on-primary text-center font-bold text-sm rounded-lg no-underline">Explore Product</a>
  </div>
</nav>
<!-- Awards Badge Strip -->
<div class="w-full bg-tertiary-fixed-dim py-2 border-y border-tertiary-container/10 overflow-hidden">
  <div class="max-w-[1280px] mx-auto px-10 flex justify-center items-center gap-8 text-[10px] md:text-xs font-bold tracking-[0.2em] text-tertiary uppercase">
    <span>🏆 2026 MUSE Design Awards · Silver Winner</span>
    <span class="opacity-30">|</span>
    <span>🏆 2025 為桃園做研究 · 潛力研究獎</span>
  </div>
</div>`;

  // Footer navigation links
  const footerNavHTML = navLinks
    .slice(0, 4)
    .map(
      (link) =>
        `<li><a class="text-white/70 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block transition-transform" href="${link.href}">${link.label}</a></li>`
    )
    .join('\n');

  const footerResourcesHTML = navLinks
    .slice(4)
    .map(
      (link) =>
        `<li><a class="text-white/70 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block transition-transform" href="${link.href}">${link.label}</a></li>`
    )
    .join('\n');

  // Footer HTML
  const footerHTML = `
<!-- Footer -->
<footer id="site-footer" class="w-full bg-primary dark:bg-stone-900 mt-20">
  <div class="max-w-[1280px] mx-auto px-10 py-20 grid grid-cols-1 md:grid-cols-3 gap-16">
    <!-- Brand & Info -->
    <div>
      <div class="text-xl font-bold text-white mb-4">ReOil</div>
      <p class="font-['Inter'] leading-relaxed text-sm text-white/80 mb-8 max-w-xs">
        致力於透過設計介入，解決家庭廢油排放造成的水環境負擔。讓環保成為不自覺的優雅生活習慣。
      </p>
      <div class="space-y-2">
        <p class="text-xs font-bold text-white uppercase tracking-widest">Department</p>
        <p class="text-white/70 text-sm">國立臺北商業大學<br/>創意科技與產品設計系 115級專題</p>
      </div>
    </div>
    <!-- Quick Links -->
    <div class="grid grid-cols-2 gap-8">
      <div>
        <h5 class="text-white font-bold mb-6">Navigation</h5>
        <ul class="space-y-4">
          ${footerNavHTML}
        </ul>
      </div>
      <div>
        <h5 class="text-white font-bold mb-6">Resources</h5>
        <ul class="space-y-4">
          ${footerResourcesHTML}
        </ul>
      </div>
    </div>
    <!-- Newsletter -->
    <div class="bg-black/10 p-8 rounded-[2rem]">
      <h5 class="text-white font-bold mb-6">Newsletter</h5>
      <p class="text-white/70 text-xs mb-6">訂閱我們，獲取最新的永續產品進度與環保研究資訊。</p>
      <div class="relative">
        <input class="w-full bg-white/20 border-none rounded-xl px-4 py-3 text-white text-sm focus:ring-1 focus:ring-white placeholder:text-white/40" placeholder="Email Address" type="email"/>
        <button class="absolute right-2 top-2 p-1.5 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors">
          <span class="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>
    </div>
  </div>
  <!-- Copyright Row -->
  <div class="w-full bg-black/5 py-10 border-t border-white/10">
    <div class="max-w-[1280px] mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-4">
      <p class="text-white/40 text-[10px] tracking-widest uppercase">© 2025 ReOil Project · 國立臺北商業大學 創意科技與產品設計系 115級專題 · 指導教授：洪綾珠</p>
      <div class="flex gap-6">
        <a class="text-white/40 hover:text-white transition-colors" href="#"><span class="material-symbols-outlined text-lg">share</span></a>
        <a class="text-white/40 hover:text-white transition-colors" href="#"><span class="material-symbols-outlined text-lg">mail</span></a>
        <a class="text-white/40 hover:text-white transition-colors" href="#"><span class="material-symbols-outlined text-lg">language</span></a>
      </div>
    </div>
  </div>
</footer>`;

  // Inject navbar at the beginning of body
  document.body.insertAdjacentHTML('afterbegin', navbarHTML);

  // Remove any existing footer, then inject new footer at end of body
  const existingFooter = document.getElementById('site-footer');
  if (!existingFooter) {
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }

  // Mobile menu toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      const isOpen = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');
      menuBtn.querySelector('span').textContent = isOpen ? 'menu' : 'close';
    });
  }
})();
