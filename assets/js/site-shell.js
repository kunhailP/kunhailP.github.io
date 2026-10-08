/**
 * Shared site shell: injects the header navigation and footer on every page.
 * Adapted from the Academic Homepage Template by Xunjian Yin
 * (https://github.com/Arvid-pku/Academic-Homepage-Template).
 *
 * All pages live at the repository root, so plain relative links work both
 * at https://kunhailp.github.io/ and under a project sub-path.
 */
(function () {
  const NAV_ITEMS = [
    { key: 'home', href: 'index.html', label: 'Home' },
    { key: 'research', href: 'research.html', label: 'Research' },
    { key: 'papers', href: 'papers.html', label: 'Papers' }
  ];

  const GITHUB_ICON = '<svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>';

  function currentPage() {
    const file = window.location.pathname.split('/').pop() || 'index.html';
    return { 'index.html': 'home', 'research.html': 'research', 'papers.html': 'papers' }[file] || '';
  }

  function buildNav() {
    const page = currentPage();
    const links = NAV_ITEMS.map((item) => {
      const current = item.key === page ? ' aria-current="page"' : '';
      return `<li><a href="${item.href}"${current}>${item.label}</a></li>`;
    }).join('');

    return `<a href="#main-content" class="skip-link">Skip to main content</a>
  <header class="site-header">
    <div class="site-header-inner">
      <a class="site-name" href="index.html">${SITE.name}</a>
      <nav aria-label="Main">
        <ul class="nav-list">
          ${links}
          <li><a href="${SITE.links.cv}" target="_blank" rel="noopener">CV</a></li>
          <li><a class="nav-github" href="${SITE.links.github}" target="_blank" rel="noopener">${GITHUB_ICON}<span class="nav-label">GitHub</span></a></li>
          <li><button id="theme-toggle" class="theme-toggle" type="button" aria-label="Toggle dark mode"></button></li>
        </ul>
      </nav>
    </div>
  </header>`;
  }

  function buildFooter() {
    const year = new Date().getFullYear();
    return `<footer class="site-footer">
    <p>&copy; ${year} ${SITE.name}</p>
    <p class="footer-credit">Design adapted from the
      <a href="https://github.com/Arvid-pku/Academic-Homepage-Template" target="_blank" rel="noopener">Academic Homepage Template</a>
      by Xunjian Yin.</p>
  </footer>`;
  }

  function inject() {
    const nav = document.getElementById('site-nav');
    if (nav) nav.innerHTML = buildNav();
    const footer = document.getElementById('site-footer');
    if (footer) footer.innerHTML = buildFooter();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
