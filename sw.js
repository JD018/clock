const CACHE_NAME = 'pwa-cache';

// Add whichever assets you want to pre-cache here:
const PRECACHE_ASSETS = [
    './'
];

// Listener for the install event - pre-caches our assets list on service worker install.
self.addEventListener('install', event => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        cache.addAll(PRECACHE_ASSETS);
    })());
});