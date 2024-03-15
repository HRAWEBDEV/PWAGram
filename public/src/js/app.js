// check if the service worker is supported
if ('serviceWorker' in navigator) {
 navigator.serviceWorker.register('/sw.js').then((result) => {
  console.log('service worker is registered');
  console.log(result);
 });
}
