const CACHE_NAME = 'aquaClean-cache-v1';
const urlsToCache = [
  '/',
  '/home',
  '/icon-192x192.png',
  '/icon-512x512.png',
  '/manifest.json',
  '/globals.css',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      try {
        return await cache.addAll(urlsToCache);
      } catch (err) {
        console.error('Error al agregar a la caché:', err);
      }
    }).catch((err) => {
      console.error('Error en la instalación del Service Worker:', err);
    })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(async (cacheNames) => {
      try {
        return await Promise.all(
          cacheNames.map((cacheName) => {
            if (!cacheWhitelist.includes(cacheName)) {
              return caches.delete(cacheName);
            }
          })
        );
      } catch (err) {
        console.error('Error en la activación del Service Worker:', err);
      }
    }).catch((err) => {
      console.error('Error al obtener las claves de caché:', err);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).catch(() => {
        return caches.match('/home');
      });
    })
  );
});

self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {};
  console.log('Datos de la notificación push:', data);

  const title = data.title || '¡Nueva Notificación!';
  const options = {
    body: data.message || 'Tienes un nuevo mensaje.',
    icon: '/icon-192x192.png',
    badge: '/icon-192x192.png',
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});