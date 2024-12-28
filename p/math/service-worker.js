const CACHE_NAME = 'my-offline-spa-v1';
const ASSETS_TO_CACHE = [
  './',             // this root call references index.html in many setups
  './index.html',  
  './manifest.json?v=2',
  './service-worker.js',
  // Add any CSS, JS, images, or other assets you want to be cached:
  // './styles.css',
  './vue.global.js',
  './icon.svg',
//   './icon-512.png'
];

// On install: open a cache and store necessary files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// On activate: clean up old caches if needed
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
});

// On fetch: return cached files when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // If a cached version is found, return it; otherwise, fetch from network
      return cachedResponse || fetch(event.request);
    })
  );
});
