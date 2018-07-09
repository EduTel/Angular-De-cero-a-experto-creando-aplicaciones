(function ejecutar() {
  class Avenger {
    nombre    : string = "";
    nombreReal: string = "";
    equipo    : string = "";

    puedePelear  : boolean = false;
    peleasGanadas: number  = 0;

    constructor(nombre: string, nombreReal: string, equipo: string){
      this.nombre = nombre;
      this.equipo = equipo;
      this.nombreReal = nombreReal;
    }
  }
  let antman: Avenger = new Avenger("Antman", "Cap", "Scott Lang");
  console.log(antman);
})();
