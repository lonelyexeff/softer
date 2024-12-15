// sw.js

const CACHE_NAME = 'aim_ff-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './sw.js',
  './icons/icon-180x180.png',
  './icons/icon-512x512.png'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});