(function exec(){
  function saludar(nombre?:string) {
    console.log('Hola ' + nombre);
  }

  function procesarEntradaUsuario(callback:any) {
    //var nombre:string = prompt('Por favor ingresa tu nombre.');
    var nombre:string = "hulk";
    callback(nombre);
  }

  procesarEntradaUsuario(saludar);
})();
