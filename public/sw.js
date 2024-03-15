// there is no dom access in service worker
// life cycle service worker events
self.addEventListener('install', (e) => {
 console.log('(from service worker) service worker is installed', e);
});

self.addEventListener('activate', (e) => {
 console.log('(from service worker) service worker is activated');
 return self.clients.claim();
});

// none life cycle service worker events
self.addEventListener('fetch', (e) => {
 console.log('(service worker) something is fetched', e);
 // intercept fetch requests like a proxy
 // you can override responses here
 e.respondWith(fetch(e.request));
});
