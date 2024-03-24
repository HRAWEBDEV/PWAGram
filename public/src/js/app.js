if ('serviceWorker' in navigator) {
 navigator.serviceWorker
  .register('/sw.js')
  .then((result) => {})
  .catch((err) => {});
}
