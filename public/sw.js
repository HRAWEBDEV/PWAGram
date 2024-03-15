// there is no dom access in service worker
self.addEventListener('install', (e) => {
 console.log('(from service worker) service worker is installed', e);
});

self.addEventListener('activate', (e) => {
 console.log('(from service worker) service worker is activated');
 return self.clients.claim();
});
