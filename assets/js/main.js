/**
 * Renders content from data/site-data.js into each page.
 * A section is filled only if its container element exists on the page.
 */

function el(tag, attrs, ...children) {
  const node = document.createElement(tag);
  Object.entries(attrs || {}).forEach(([key, value]) => {
    if (value !== null && value !== undefined && value !== false) node.setAttribute(key, value);
  });
  children.flat().forEach((child) => {
    if (child === null || child === undefined || child === '') return;
    node.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
  });
  return node;
}

function externalLink(text, href) {
  return el('a', { href, target: '_blank', rel: 'noopener' }, text);
}

function statusLabel(key) {
  const status = paperStatuses.find((s) => s.key === key);
  return status ? status.label : '';
}

// [ Paper | Code | Data | Replication ] — only links with a real URL are rendered.
function paperLinks(links) {
  const order = [['paper', 'Paper'], ['code', 'Code'], ['data', 'Data'], ['replication', 'Replication']];
  const items = order.filter(([key]) => links && typeof links[key] === 'string' && links[key].trim());
  if (!items.length) return null;
  const wrapper = el('span', { class: 'paper-links' }, '[ ');
  items.forEach(([key, label], i) => {
    if (i > 0) wrapper.appendChild(document.createTextNode(' | '));
    wrapper.appendChild(externalLink(label, links[key].trim()));
  });
  wrapper.appendChild(document.createTextNode(' ]'));
  return wrapper;
}

function renderProfile() {
  const bio = document.getElementById('bio');
  if (bio) SITE.bio.forEach((p) => bio.appendChild(el('p', null, p)));

  const links = document.getElementById('profile-links');
  if (links) {
    const items = [
      el('a', { href: `mailto:${SITE.links.email}` }, 'Email'),
      externalLink('CV', SITE.links.cv),
      externalLink('GitHub', SITE.links.github)
    ];
    if (SITE.links.scholar) items.push(externalLink('Google Scholar', SITE.links.scholar));
    items.forEach((a) => links.appendChild(a));
  }

  // Profile photo appears only when SITE.photo is set.
  const profile = document.querySelector('.profile-section');
  if (profile && SITE.photo) {
    profile.appendChild(el('img', {
      class: 'profile-photo', src: SITE.photo, alt: SITE.name,
      width: '160', height: '160', loading: 'eager'
    }));
  }
}

function renderEducation() {
  const list = document.getElementById('education-list');
  if (!list) return;
  education.forEach((e) => {
    list.appendChild(el('li', { class: 'entry' },
      el('div', { class: 'entry-head' }, el('strong', null, `${e.institution} (${e.period})`)),
      el('div', { class: 'entry-rest' }, e.degree),
      e.details.length ? el('div', { class: 'entry-rest' }, e.details.join(' · ')) : null));
  });
}

function renderSelectedResearch() {
  const list = document.getElementById('selected-research-list');
  if (!list) return;
  const selected = papers.filter((p) => p.selected).sort((a, b) => {
    const ia = selectedOrder.indexOf(a.title);
    const ib = selectedOrder.indexOf(b.title);
    return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
  });
  selected.forEach((p) => list.appendChild(paperItem(p, true)));
}

function paperItem(p, showDescription) {
  const meta = [];
  if (p.authors) meta.push(p.authors);
  if (p.venue) meta.push(el('span', { class: 'paper-venue' }, p.venue));
  // On the Papers page the subsection heading already gives the status.
  if (showDescription || p.status === 'conditionally-accepted') meta.push(statusLabel(p.status));
  if (p.note) meta.push(p.note.replace(/\.$/, ''));

  const rest = el('div', { class: 'paper_rest' });
  if (showDescription && p.description) {
    rest.appendChild(el('span', { class: 'paper-desc' }, p.description));
    rest.appendChild(el('br'));
  }
  meta.forEach((m, i) => {
    if (i > 0) rest.appendChild(document.createTextNode(' · '));
    rest.appendChild(typeof m === 'string' ? document.createTextNode(m) : m);
  });
  const links = paperLinks(p.links);
  if (links) {
    if (meta.length) rest.appendChild(document.createTextNode(' '));
    rest.appendChild(links);
  }

  return el('li', null,
    el('div', { class: 'papertitle' }, p.title),
    rest.childNodes.length ? rest : null);
}

function renderPapers() {
  const root = document.getElementById('papers-by-status');
  if (!root) return;
  paperStatuses.forEach((status) => {
    const group = papers.filter((p) => p.status === status.key);
    if (!group.length) return;
    const id = `papers-${status.key}`;
    root.appendChild(el('section', { class: 'homepage-section', 'aria-labelledby': id },
      el('h2', { id }, status.heading),
      el('ul', { class: 'plain-list publication-list' }, group.map((p) => paperItem(p, false)))));
  });
}

function renderThemes() {
  const root = document.getElementById('research-themes');
  if (!root) return;
  researchThemes.forEach((t) => {
    root.appendChild(el('div', { class: 'theme' },
      el('h3', null, t.title),
      el('p', null, t.text)));
  });
}

function renderExperience() {
  const list = document.getElementById('experience-list');
  if (!list) return;
  researchExperience.forEach((x) => {
    let person = '';
    if (x.supervisor) person = x.role === 'Research Assistant' ? `PI: ${x.supervisor}` : `Supervisor: ${x.supervisor}`;
    list.appendChild(el('li', { class: 'entry' },
      el('div', { class: 'entry-head' }, el('strong', null, `${x.role} (${x.period})`)),
      el('div', { class: 'entry-rest' }, [x.unit, x.institution].filter(Boolean).join(', ')),
      person ? el('div', { class: 'entry-rest' }, person) : null,
      x.project ? el('div', { class: 'entry-rest' }, `Project: “${x.project}”`) : null,
      x.description ? el('p', { class: 'entry-desc' }, x.description) : null));
  });
}

function renderHonors() {
  const list = document.getElementById('honors-list');
  if (!list) return;
  honors.filter((h) => h.home).forEach((h) => {
    list.appendChild(el('li', { class: 'dated' },
      el('span', { class: 'dated-year' }, h.year),
      el('span', null, `${h.title}, ${h.detail}`)));
  });
}

function renderSkills() {
  const list = document.getElementById('skills-list');
  if (!list) return;
  skills.forEach((s) => {
    list.appendChild(el('div', { class: 'skill-row' },
      el('dt', null, s.label),
      el('dd', null, s.value)));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProfile();
  renderEducation();
  renderSelectedResearch();
  renderPapers();
  renderThemes();
  renderExperience();
  renderHonors();
  renderSkills();
  initializeDarkMode();
});
