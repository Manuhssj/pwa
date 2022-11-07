function mostrarContrasena(){
    var tipo = document.getElementById("password");
    if(tipo.type == "password"){
        tipo.type = "text";
    }else{
        tipo.type = "password";
    }
}




const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function(e){

    e.preventDefault();

    var formdata = new FormData();
    formdata.append("email", "dioc_19@alu.uabcs.mx");
    formdata.append("password", "K8^i2Zu43g%IVv");
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("https://crud.jonathansoto.mx/api/login", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

     
});