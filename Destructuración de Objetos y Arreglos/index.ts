(function personajes(){
  let avenger = {
    nombre: "steve",
    clave: "capitan america",
    poder: "Droga"
  };
  let v_nombre = avenger.nombre;
  let v_clave = avenger.clave;
  let v_poder = avenger.poder;
  console.log(`Mi nombre es ${v_nombre} y soy ${v_clave} mi poder es ${v_poder}`);
  let { poder:poder_alias, clave:clave_alias , nombre:nombre_alias } = avenger;
  console.log(`Mi nombre es ${poder_alias} y soy ${clave_alias} mi poder es ${nombre_alias}`);

  let foo = ["uno", "dos", "tres"];
  // sin destructuración
  let x_uno = foo[0];
  let x_dos = foo[1];
  let x_tres = foo[2]; // asignación en tres lineas
  console.log(`${x_uno} ${x_dos} ${x_tres}`);
  // con destructuración
  let [uno, dos, tres] = foo; // asignación en una sola linea
  console.log(`${uno} ${dos} ${tres}`);


  var a, b, c;
  [,b] = [1, 2, 3];
  console.log(`${b}`);


})();
