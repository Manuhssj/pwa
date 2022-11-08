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
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    e.preventDefault();

    var formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("https://crud.jonathansoto.mx/api/login", requestOptions)
      .then(response => response.json())
      .then(result => {
        const {code} = result
        if(code === 2){
          window.location.href="../productos/index.html";
        }else{
          alert("El email o contraseña son incorrectas")
        }
      })
      .catch(error => console.log('error', error));
    

});