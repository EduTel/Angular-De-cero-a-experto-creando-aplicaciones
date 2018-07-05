

console.log(((a: string): string => a)("auto return"));

/*no lo comvierte a boleano solo sirve para el intellisense*/
console.log(typeof  ((a:any):boolean=>{
  return a;
})(1));

console.log(((a: number,b:number,c?:number): number => {
  if(c){
    return a+b+c;
  }else{
    return a+b;
  }
})(1,2));
/*Veneficio de funciones flecha*/
//let nombre:string = "pedro 1";
let personaje = {
  nombre: "hulk",
  /*Error:[ts] 'this' implicitly has type 'any' because it does not have a type annotation.*/
  /*A workaround is to replace this with the object:*/
  //accion_error() {
  //  let nombre: string = "pedro 2";
  //  setTimeout(function () { console.log(this.nombre + " Smash!!"); }, 1500);
  //},
  accion(){
    setTimeout(function () { console.log(personaje.nombre+" Smash!!"); }, 1500 );
  },
  accion_row() {
    setTimeout(() => {
      console.log(this.nombre + " Smash!!");
    }, 1500);
  }
}
personaje.accion();
personaje.accion_row();


