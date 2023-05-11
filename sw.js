const urlsToCache = ["index.html"];
self.addEventListener("install", (event) => {
   event.waitUntil(async () => {
      const cache = await caches.open("pwa-assets");
      return cache.add(urlsToCache);
   });
});