(function var_var(){
  function getNombre(){
    return "Fernando";
  }
  let nombre: string = "ben";
  let apellido: string = "campbell";
  let edad:number = 40;

  let texto = "hola, "+nombre+" "+apellido+"("+edad+")";
  let text = `hola,
  ${nombre}
  ${apellido}
  (${edad})`;
  let texto2:string = ` ${getNombre()}`;
  console.log(texto2);
  console.log(text);
})();
