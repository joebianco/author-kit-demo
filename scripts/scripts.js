import { loadArea, setConfig } from './ak.js';

const hostnames = ['authorkit.dev'];

const locales = {
  '': { lang: 'en' },
  '/de': { lang: 'de' },
  '/es': { lang: 'es' },
  '/fr': { lang: 'fr' },
  '/hi': { lang: 'hi' },
  '/ja': { lang: 'ja' },
  '/zh': { lang: 'zh' },
};

// Widget patterns to look for
const widgets = [
  { fragment: '/fragments/' },
  { schedule: '/schedules/' },
  { youtube: 'https://www.youtube' },
];

// Blocks with self-managed styles
const components = ['fragment', 'schedule'];

// How to decorate an area before loading it
const decorateArea = ({ area = document }) => {
  const eagerLoad = (parent, selector) => {
    const img = parent.querySelector(selector);
    if (!img) return;
    img.removeAttribute('loading');
    img.fetchPriority = 'high';
  };

  eagerLoad(area, 'img');
};

/*
async function loadTarget() {
  // Check for target metadata flag
  const targetMeta = getMetadata('target');
  if (targetMeta) {
    // Overwrite target domains to be same origin
    window.targetGlobalSettings = {
      serverDomain: hostnames[0],
      secureOnly: true,
      overrideMboxEdgeServer: false,
    };

    // Import the local copy of at.js
    await import('../deps/at/at.js');

    // Request all the relevant offers for the page
    const offers = await window.adobe.target.getOffers({
      request: { execute: { pageLoad: {} } },
    });

    // Loop through them and inject if they exist
    offers?.execute?.pageLoad?.options?.forEach((opt) => {
      const { cssSelector, content } = opt.content[0];
      const el = document.querySelector(cssSelector);
      if (el) el.outerHTML = content;
    });
  }
}
*/

export async function loadPage() {
  await loadTarget();
  // DOM updated, decorate as usual
  await loadArea();
}
await loadPage();


export async function loadPage() {
  await loadTarget();
  // DOM updated, decorate as usual
  await loadArea();
}
await loadPage();


(async function loadPage() {
  setConfig({ hostnames, locales, widgets, components, decorateArea });
  await loadArea();
}());
