// Beach Brings PWA service worker — offline-first for the app shell
const CACHE_NAME = 'bb-shell-v2-2026-05-28';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './beach_brings_coastal_seal.svg'
];

// Install: cache the app shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

// Activate: clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: stale-while-revalidate for app shell, network-first for everything else
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);

  // Same-origin shell assets → stale-while-revalidate
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        const networkFetch = fetch(event.request)
          .then((res) => {
            // Only cache successful, basic responses
            if (res && res.status === 200 && res.type === 'basic') {
              const clone = res.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
            }
            return res;
          })
          .catch(() => cached);
        return cached || networkFetch;
      })
    );
  }
});
