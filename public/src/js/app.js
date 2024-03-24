if ('serviceWorker' in navigator) {
 navigator.serviceWorker
  .register('/sw.js')
  .then((result) => {
   console.log('service worker is registered', result);
  })
  .catch((err) => {
   console.log('service worker is not available');
  });
}
