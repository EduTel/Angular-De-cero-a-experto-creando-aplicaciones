(function ejecutar() {
  interface Xmen {
    nombre: string,
    poder: string
  }
  function enviar(p_xmen: Xmen) {
    console.log(`Enviando a ${p_xmen.nombre}`);
  }
  let wolverine: Xmen = {
    nombre: "Wolverine",
    poder: "regeneracion"
  }
  enviar(wolverine);
})();
