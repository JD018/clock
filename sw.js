caches.open("pwa-assets")
.then(cache => {
  cache.add("index.html");
  cache.add("settings.html");
  cache.add("sw.js");
  cache.add("./images");
  cache.add("./scripts");
  cache.add("./styles");
});