self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.use('ajmeer-store').then((cache) => {
      return cache.addAll(['index.html', 'admin.html', 'user.html']);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
