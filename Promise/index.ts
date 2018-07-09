(function ejecutar(){
  let prom1 = new Promise((resolve:any,reject:any)=>{
    setTimeout(() => {
      resolve();
      reject();
    }, 1500);
  });
  console.log("paso 1");
  prom1.then(()=>{
    console.log("Ejecutarme cuando se termine bien");
  },()=>{
    console.error("Ejecutarme cuando algo salga mal");
  });
  console.log("paso 2");
})();
