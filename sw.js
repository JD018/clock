self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('asset_cache').then(function (cache) {
      return cache.addAll([
        '/images',
        '/scripts',
        '/styles',
        'index.html',
        'manifest.json',
        'settings.html',
        'sw.js'
        // etc.
      ]);
    }),
  );
});