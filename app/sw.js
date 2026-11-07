// Guarda o app no celular para funcionar mesmo sem internet na hora da apresentação.
const CACHE = 'sera-golpe-v2';
const ARQUIVOS = ['./', './index.html', './manifest.webmanifest', './icones/icone.svg', './icones/icone-192.png', './icones/icone-512.png', './icones/icone-maskable-512.png', './icones/apple-touch-icon-180.png', './icones/favicon.ico'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARQUIVOS))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const salvo = await c.match(e.request);
    const rede = fetch(e.request).then(r => { if (r && (r.ok || r.type === 'opaque')) c.put(e.request, r.clone()); return r; }).catch(() => salvo);
    return salvo || rede;
  }));
});
