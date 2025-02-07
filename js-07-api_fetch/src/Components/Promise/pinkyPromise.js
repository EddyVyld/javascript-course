

const pinkyPromise = ( generation ) =>{
   
    const myPromise = new Promise( (resolve, reject)=>{
       if(generation === "clase" ){
        resolve("Poner Atencion")
       }else {
        reject("Ir a dormir")
       }
    });
    return myPromise;
  }
  
  pinkyPromise ("clase")
    .then((exito => console.log(exito))) // Puedo cambiarlo como yo desee
    .catch((recargar)  => console.log(recargar)) 



  /* const pinkyPromise = (comida) => {
    const myPromise = new Promise((res, rej) => {
      if (comida === "elote") {
        res("Tengo mi elote");
      } else {
        rej("No tengo mi elote");
      }
    });
    return myPromise;
  };
  pinkyPromise("elote")
    .then((message) => console.log(message))
    .catch((error) => console.error(error));
 */



