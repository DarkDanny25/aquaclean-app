const CACHE_NAME = 'aquaClean-cache-v1';
const urlsToCache = [
  '/home',
  '/about',
  '/contact',
  '/media',
  '/manual',
  '/offline',
  '/img/about.jpg',
  '/img/fondo1.jpeg',
  '/img/fondo2.jpg',
  '/img/fondo3.jpg',
  '/img/fondo4.jpg',
  '/img/fondo5.jpg',
  '/img/galeria1.jpg',
  '/img/galeria2.jpg',
  '/img/galeria3.jpg',
  '/img/galeria4.jpg',
  '/img/galeria5.jpg',
  '/img/galeria6.jpg',
  '/img/galeria7.jpg',
  '/img/galeria8.jpg',
  '/img/logo.png',
  '/img/manual1.jpg',
  '/img/manual2.jpg',
  '/img/manual3.jpeg',
  '/img/manual4.jpg',
  '/img/fallback-image.jpg',
  '/icon-192x192.png',
  '/icon-512x512.png',
  '/manifest.json',
  '/globals.css',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    }).catch((error) => {
      console.error('Error al precargar la caché:', error);
    })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then((networkResponse) => {
          return caches.open(CACHE_NAME).then((cache) => {
            if (event.request.method === 'GET') {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          });
        })
        .catch(() => {
          if (event.request.destination === 'document') {
            return caches.match('/offline');
          }
          if (event.request.destination === 'image') {
            return caches.match('/img/fallback-image.jpg');
          }
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

self.addEventListener('message', (event) => {
  const allowedOrigins = ['https://aquaclean-app.vercel.app'];

  if (allowedOrigins.includes(event.origin)) {
    console.log('Mensaje recibido desde la página web:', event.data);
    event.source.postMessage({
      type: 'response',
      message: 'Mensaje recibido correctamente',
    });
  } else {
    console.warn('Origen no permitido para postMessage:', event.origin);
  }
});