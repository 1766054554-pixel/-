const CACHE_NAME = "starlight-study-island-v1.3.9";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./404.html",
  "./offline.html",
  "./robots.txt",
  "./site.webmanifest",
  "./assets/brand/icon.svg",
  "./assets/brand/hero-study-island.png",
  "./product_intro.html",
  "./data/starlight_manifest.js",
  "./data/resource_catalog.js",
  "./data/resource_quality.js",
  "./start_here.html",
  "./course.html",
  "./resources.html",
  "./practice_lab.html",
  "./dashboard.html",
  "./focus_dual_exam_game.html",
  "./progress_vault.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match(event.request).then(cached => cached || caches.match("./offline.html")))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(cached => cached || fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type === "opaque") return response;
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return response;
      }))
  );
});
