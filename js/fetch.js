

var formdata = new FormData();
formdata.append("email", "mdiaz_19@alu.uabcs.mx");
formdata.append("password", "d84#6LW63KUpRz");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("https://crud.jonathansoto.mx/api/login", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));