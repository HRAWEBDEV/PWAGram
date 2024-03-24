// activate install event
self.addEventListener('install', (e) => {});

// intercept activate event
self.addEventListener('activate', (e) => {});

// intercept fetch events
self.addEventListener('fetch', (e) => {
 return e.respondWith(fetch(e.request));
});
