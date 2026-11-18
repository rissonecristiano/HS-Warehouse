// Tiene in memoria l'app per aprirla anche senza rete. I dati li gestisce Firebase.
const C='magazzino-v3';
const SHELL=['./','index.html','config.js','manifest.webmanifest','logo-squadra.png','logo-f4.png','icon-192.png','apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=='GET')return;
  const isShell=u.origin===location.origin||u.host==='www.gstatic.com'||u.host.endsWith('fonts.googleapis.com')||u.host.endsWith('fonts.gstatic.com');
  if(!isShell)return;
  // prima la rete (così vedi sempre l'ultima versione), poi la copia salvata se sei offline
  e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request)));
});
