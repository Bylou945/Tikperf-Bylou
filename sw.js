/* TikPerf By Lou - Service Worker
 * Strategy (v1.7.28):
 *   - Network-first for the app's own files (index.html, icons, manifest):
 *     every device always gets the latest version; the cache is only used offline
 *   - Network-only for Firebase
 *   - Network-first for external CDNs (fallback to cache if offline)
 *   - Bump CACHE_VERSION on each release to force refresh
 */
const CACHE_VERSION = 'tikperf-bylou-v1.7.30';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-192.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png',
  './favicon-32.png',
  './favicon-16.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    // One missing file (e.g. an icon) must not block the install
    caches.open(CACHE_VERSION)
      .then((cache) => Promise.all(APP_SHELL.map((u) => cache.add(u).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Firebase calls: network only (real-time sync requires it)
  if (url.hostname.includes('firebaseio.com') ||
      url.hostname.includes('googleapis.com') ||
      url.hostname.includes('firebaseapp.com') ||
      url.hostname.includes('firestore.googleapis.com')) {
    return;
  }

  // Same-origin app files: network-first (no HTTP cache for pages), cache only if offline
  if (url.origin === self.location.origin) {
    const isPage = req.mode === 'navigate' || url.pathname.endsWith('/') || url.pathname.endsWith('.html');
    const netFetch = isPage ? fetch(req.url, { cache: 'no-cache', credentials: 'same-origin' }) : fetch(req);
    event.respondWith(
      netFetch.then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
        }
        return res;
      }).catch(() => caches.match(req).then((cached) => cached || caches.match('./index.html')))
    );
    return;
  }

  // External CDN (Chart.js, XLSX, Google Fonts): network-first, fallback to cache
  event.respondWith(
    fetch(req).then((res) => {
      const copy = res.clone();
      caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
      return res;
    }).catch(() => caches.match(req))
  );
});

// Listen for "skipWaiting" message from the app (used to apply updates immediately)
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});
