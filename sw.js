const CACHE_NAME = 'study-camp-v1';
const ASSETS = [
  './',
  './index.html',
  'https://googleapis.com',
  'https://unpkg.com'
];

// تثبيت الملفات في ذاكرة الجهاز
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// تشغيل الموقع من الذاكرة عند انقطاع النت
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
