/* Crea tu propia lógica para hacer un fetch que emule una post request a un servidor y enseñe un mensaje en consola cuando la llamada se resuelva */
/*  ADVANCED: utiliza DOM manipulation para enseñarle al user que su mensaje se ha enviado correctamente o no */
var botonEnviar = document.getElementById("botonEnviar");

botonEnviar.addEventListener("click", function() {
    alert("Formulario enviado! Pronto pondremos en contacto con usted.");
  });