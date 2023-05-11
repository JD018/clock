const CACHE = "clockoffline";
self.addEventListener('install', async (event) => {
    event.waitUntil(
        caches.open(CACHE)
        .then((cache) => cache.add("index.html"))
    );
});