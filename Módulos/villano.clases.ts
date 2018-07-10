export class Villano{
  nombre:string;
  plan:string;
  constructor(nombre:string,plan:string){
    this.nombre=nombre;
    this.plan=plan;
  }
  imprimir(){
    console.log(`El plan es: ${this.plan}`);
  }
}
