if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
     .then((reg) => console.log('service worker registrado'))
     .catch((err) => console.log('service worker no registrado'))
    
}