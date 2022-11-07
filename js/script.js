if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../sw.js')
      .then(reg => console.log('Registro de SW exitoso'))
      .catch(err => console.log('El sw ya se encuentra creado'))
  }