var carrito = [];
let local = JSON.parse(localStorage.getItem("token"));


let myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${local.data.token}`);
let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};
fetch("https://crud.jonathansoto.mx/api/products", requestOptions)
    .then(response => response.json())
    .then(data => mostrarDatos(data.data))
    .catch(error => console.log('error', error));

const mostrarDatos = (data) =>{
    
    let body = ''
    for (let i = 0; i < data.length; i++) {
        body += `<div class="m-3">
                            <div class="row row-cols-1 row-cols-md-2 row-cols-sm-1 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-4">
                                <div class="col">
                                    <div class="card">
                                        <img src="${data[i].cover}" class="card-img-top" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">${data[i].name}</h5>
                                            <p class="card-text">${data[i].description}</p> 
                                        </div>
                                        <div class="card-footer">
                                            <button class="btn btn-warning col-12">
                                                Carrito
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`
                        
        document.getElementById("cards").innerHTML=body;

        
    }
}

// const agregarAlCarrito = (prodId) => {
//     // const item = stockProductos.find((prod) => data.id === prod.id)
// }
// console.log(data);