/* World Flags PWA — service worker. Yeni buraxılışda CACHE adındakı versiyanı artır (v1 -> v2). */
const CACHE='wf-pwa-v1';
const ASSETS=['./index.html','./manifest.json','./icons/icon-192.png','./icons/icon-512.png','./icons/maskable-512.png','./icons/apple-touch-icon.png','./icons/favicon-32.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith('wf-pwa-')&&x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);if(u.origin!==location.origin)return;
 if(r.mode==='navigate'){/* oyun həmişə keşdən dərhal açılır, arxa planda yenilənir */
  e.respondWith(caches.match('./index.html').then(hit=>{const net=fetch(r).then(res=>{if(res&&res.ok&&res.type==='basic'){const cp=res.clone();caches.open(CACHE).then(c=>c.put('./index.html',cp))}return res}).catch(()=>null);return hit||net.then(x=>x||new Response('Oflayn: səhifə hələ keşlənməyib.',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}}))}));return}
 e.respondWith(caches.match(r,{ignoreSearch:true}).then(hit=>hit||fetch(r).then(res=>{if(res&&res.ok){const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp))}return res})))});
