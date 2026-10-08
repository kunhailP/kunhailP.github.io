/**
 * Dark mode toggle (adapted from the Academic Homepage Template).
 * The initial theme is applied by a small inline script in each page's <head>
 * to avoid a flash; this file wires up the toggle button.
 */
function getStoredTheme() {
  try { return localStorage.getItem('theme'); } catch (e) { return null; }
}

function setStoredTheme(theme) {
  try { localStorage.setItem('theme', theme); } catch (e) { /* ignore */ }
}

function updateThemeIcon(theme, button) {
  const isDark = theme === 'dark';
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';
  button.setAttribute('aria-label', label);
  button.setAttribute('title', label);
  button.innerHTML = isDark
    ? '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
    : '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
}

function initializeDarkMode() {
  const button = document.getElementById('theme-toggle');
  if (!button) return;
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const theme = getStoredTheme() || (media.matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
  updateThemeIcon(theme, button);

  button.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    setStoredTheme(next);
    updateThemeIcon(next, button);
  });

  media.addEventListener('change', (e) => {
    if (getStoredTheme()) return;
    const next = e.matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    updateThemeIcon(next, button);
  });
}
