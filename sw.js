const staticCacheName = 'site-static-v2';
const  assets = [
    '/css/style.css',
    '/fallback/fallback.html',
];


// Instalacion del service worker
self.addEventListener('install', event => {
    // console.log('Service worker ha sido instalado');
    event.waitUntil(caches.open(staticCacheName).then(cache => {
        console.log("cachando");
        cache.addAll(assets); 
    }));
    
})

// Activacion del service worker
self.addEventListener('activate', event => {
    // console.log("Service worker ha sido activado");
    event.waitUntil(
        caches.keys().then(keys => {
            // console.log(keys);
            return Promise.all(keys
                .filter(key => key !== staticCacheName)
                .map(key => caches.delete(key))
            )
        })
    )
})

// Fetch event

self.addEventListener('fetch', event => {
    // console.log('Fetch evento',event);
    event.respondWith(
        caches.match(event.request).then(cacheRes => {
                return cacheRes || fetch(event.request).then(fetchRes =>{
                    return caches.open(dynamicCacheName).then(cache => {
                        cache.put(event.request.url, fetchRes.clone());
                        return fetchRes;
                    })
                })
            }).catch(() => caches.match('/fallback/fallback.html'))
    )
})