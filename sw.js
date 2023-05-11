caches.open("pwa-assets")
.then(cache => {
  cache.addAll(
    [
      "/"
    ]
    ); 
});