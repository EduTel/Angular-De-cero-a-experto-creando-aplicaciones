(function ejecutar() {
  interface Xmen {
    nombre: string,
    poder: string
  }
  let wolverine: Xmen = {
    nombre: "Wolverine",
    poder: "regeneracion"
  }
  function enviar1(p_xmen: Xmen) {
    console.log(`Enviando a ${p_xmen.nombre}`);
  }
  class class_xmen{
    nombre:string =  "Wolverine";
    poder:string = "regeneracion";
  }

  function enviar2(p_xmen: class_xmen) {
    console.log(`Enviando a ${p_xmen.nombre}`);
  }

  enviar1(wolverine);
  enviar2(wolverine);
})();
