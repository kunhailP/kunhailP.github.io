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

  const GITHUB_ICON = '<svg aria-hidden="true" focusable="false" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>';

  const MAIL_ICON = '<svg aria-hidden="true" focusable="false" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>';

  function currentPage() {
    const file = window.location.pathname.split('/').pop() || 'index.html';
    return { 'index.html': 'home', 'research.html': 'research', 'papers.html': 'papers' }[file] || '';
  }

  function buildNav() {
    const page = currentPage();
    const links = NAV_ITEMS.map((item) => {
      const current = item.key === page ? ' aria-current="page"' : '';
      return `<a href="${item.href}" class="nav-button"${current}>${item.label}</a>`;
    }).join('');

    return `<a href="#main-content" class="skip-link">Skip to main content</a>
  <nav class="nav-buttons" aria-label="Main navigation">
    ${links}
    <a href="${SITE.links.cv}" class="nav-button" target="_blank" rel="noopener">CV</a>
    <button id="theme-toggle" class="theme-toggle" type="button" aria-label="Toggle dark mode"></button>
  </nav>`;
  }

  function buildFooter() {
    const year = new Date().getFullYear();
    return `<div class="page-shell-footer">
    <footer class="site-footer">
      <div class="footer-social">
        <a href="${SITE.links.github}" aria-label="GitHub" title="GitHub" target="_blank" rel="noopener">${GITHUB_ICON}</a>
        <a href="mailto:${SITE.links.email}" aria-label="Email" title="Email">${MAIL_ICON}</a>
      </div>
      <p class="footer-copyright">&copy; ${year} ${SITE.name}</p>
      <p class="footer-copyright">Design adapted from the
        <a href="https://github.com/Arvid-pku/Academic-Homepage-Template" target="_blank" rel="noopener">Academic Homepage Template</a>.</p>
    </footer>
  </div>`;
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
