const CACHE_NAME = 'memory-game-v1';
const urlsToCache = [
  '/manifest.json',
  '/p/memory/',
  '/p/memory/index.html',
  '/p/memory/manifest.json',
  'https://unpkg.com/vue@3/dist/vue.global.js'
];

// Install event - cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.log('Cache install failed:', err);
        // Continue anyway for basic functionality
      })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        
        // Clone the request because it's a stream
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then(response => {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clone the response because it's a stream
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        }).catch(() => {
          // If both cache and network fail, return a basic offline page
          if (event.request.destination === 'document') {
            return new Response(
              `<!DOCTYPE html>
              <html>
              <head>
                <title>Memory Game - Offline</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                  body { 
                    font-family: Arial, sans-serif; 
                    text-align: center; 
                    padding: 2rem; 
                    background: #f3f4f6;
                  }
                  .offline-message {
                    background: white;
                    padding: 2rem;
                    border-radius: 12px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
                    max-width: 400px;
                    margin: 2rem auto;
                  }
                </style>
              </head>
              <body>
                <div class="offline-message">
                  <h1>🧠 Memory Game</h1>
                  <p>You're offline, but the game should still work!</p>
                  <p>Try refreshing the page or check your connection.</p>
                  <button onclick="window.location.reload()">🔄 Refresh</button>
                </div>
              </body>
              </html>`,
              {
                headers: {
                  'Content-Type': 'text/html'
                }
              }
            );
          }
        });
      })
  );
});

// Handle background sync for potential future features
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    console.log('Background sync event');
  }
});

// Handle push notifications for potential future features
self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🧠</text></svg>',
      badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🧠</text></svg>',
      vibrate: [200, 100, 200],
      data: data
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});
