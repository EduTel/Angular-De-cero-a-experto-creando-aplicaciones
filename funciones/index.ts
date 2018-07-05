function señal(señal = "") {
  if (señal == "batman") {
    return `
    ._M_.
   (     )
    \`'V\`'`;
  } else {
    return "";
  }
}
(function activar(quien: string, objeto: string = "batiseñal", senal:any = señal("batman"), momento?:string):any{
  let mensaje:string;
  if( momento ){
    mensaje = `${quien} activó la ${objeto} en la ${momento}`;
  }else{
    mensaje = `${quien} activó la ${objeto}`;
  }
  console.log(mensaje);
  console.log(senal);
})("Gordon");

let myAdd_number: (baseValue: number, increment: number) => number = function (x: number, y: number): number { return x + y; };
let myAdd_string: (baseValue: number, increment: number) => string = function (x: number, y: number): string { return x + "" + y; };

console.log(myAdd_number(1,1));
console.log(myAdd_string(1,1));
