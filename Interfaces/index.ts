(function ejecutar() {
  interface Xmen {
    nombre: string,
    poder: string
  }
  let wolverine: Xmen = {
    nombre: "Wolverine 1",
    poder: "regeneracion"
  }
  function enviar1(p_xmen: Xmen) {
    console.log(`Enviando a ${p_xmen.nombre}`);
  }
  enviar1(wolverine);

  class class_xmen{
    nombre: string =  "antman 2";
    poder:string = "hacerse pequeño";
  }
  let antman:class_xmen = new class_xmen();
  function enviar2(p_xmen: class_xmen) {
    console.log(`Enviando a ${p_xmen.nombre}`);
  }


  enviar2(antman);
})();
