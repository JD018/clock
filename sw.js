caches.open("pwa-assets")
.then(cache => {
  cache.addAll(
    [
      "/index.html",
      "/manifest.json",
      "/settings.html",
      "/sw.js",
      "/images/",
      "/scripts/",
      "/styles/"
    ]
    ); 
});