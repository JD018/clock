caches.open("pwa-assets")
.then(cache => {
  cache.add("index.html");
  cache.add("settings.html");
  cache.add("sw.js");
  cache.addAll("/images");
  cache.addAll("/scripts");
  cache.addAll("/styles");
});