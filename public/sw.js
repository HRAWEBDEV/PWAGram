const staticCacheName = 'static-cache-1';
const dynamicCacheName = 'dynamic-cache';
// activate install event
this.addEventListener('install', (e) => {
 return e.waitUntil(
  caches.open(staticCacheName).then((cache) => {
   cache.addAll([
    '/',
    '/src/js/material.min.js',
    '/src/js/app.js',
    '/src/js/feed.js',
    '/src/css/app.css',
    '/src/css/feed.css',
    '/manifest.json',
    '/src/images/main-image.jpg',
    'https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://fonts.googleapis.com/css?family=Roboto:400,700',
   ]);
  })
 );
});

// intercept activate event
this.addEventListener('activate', (e) => {
 // delete old caches here
 return e.waitUntil(
  caches.keys().then((keys) => {
   return Promise.all(
    keys.map((key) => {
     if (key != staticCacheName && key != dynamicCacheName)
      return caches.delete(key);
     return Promise.resolve();
    })
   );
  })
 );
});

// intercept fetch events
this.addEventListener('fetch', (e) => {
 return e.respondWith(
  caches
   .match(e.request)
   .then((result) => {
    if (result) return result;
    // we can use dynamic caching here
    // now everything is cached which is not good
    return fetch(e.request).then((result) => {
     return caches.open(dynamicCacheName).then((cache) => {
      cache.put(e.request, result.clone());
      return result;
     });
    });
   })
   .catch(() => {})
 );
});
