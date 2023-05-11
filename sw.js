const CACHE_NAME = 'cool-cache';

// Add whichever assets you want to pre-cache here:
const PRECACHE_ASSETS = [
    './clock_shortcut.png',
    './favicon.ico',
    './icon.png',
    './index.html',
    './initiate.js',
    './legacy.css',
    './manifest.json',
    './run.js',
    './screenshot.png',
    './settings.css',
    './settings.html',
    './sw.js',
    './update.js'
]

// Listener for the install event - pre-caches our assets list on service worker install.
self.addEventListener('install', event => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        cache.addAll(PRECACHE_ASSETS);
    })());
});