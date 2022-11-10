const staticCacheName = 'site-static-v1';
const dynamicCacheName = 'site-dynamic-v1';
const  assets = [
    '/index.html',
    '/css/style.css',
    '/js/app.js',
    '/manifest.json',
    'https://kit.fontawesome.com/617fbafb99.js',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css'

    

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
                .filter(key => key !== staticCacheName && key !== dynamicCacheName)
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
        }).catch(() => caches.match('/index.html'))
    )
})