(function var_var(){
  var mensaje = "hola";
  if (true) {
    var mensaje = "adios";
  }
  console.log(mensaje);
})();
(function var_let(){
  let mensaje = "hola";
  if (true) {
    let mensaje = "adios";
  }
  console.log(mensaje);
})();
(function var_contant() {
  const MENSAJE = "hola";
  if (true) {
    const MENSAJE = "adios";
  }
  console.log(MENSAJE);
})();
