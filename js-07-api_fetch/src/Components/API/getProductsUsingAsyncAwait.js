





/* Esta es la otra forma de empezarlo, pero mejor hacerlo como abajo */
async function nameFunction () {
    await fetch(url);
}

const getProductsUsingAsyncAwait = async ( url ) =>{
/* fetch para hacer peticiones http */
    try { 
    console.log(`Estoy iniciando en la funcion con Async y Await`);

    const resolve = await fetch(url);
    const products = await resolve.json(); 
    console.log(products); 

    console.log(`Finalizado la petición fetch con Async y Await`); 
    
    } catch ( error ) {
        console.warn ("No corro, no grito, no empujo"); 
        console.error("Que paso?", error);
    }

};

console.log("Antes de la llamada de la funcion"); 
getProductsUsingAsyncAwait("https://fakestoreapi.com/products");
console.log("Despues de la llamda de la funcion"); 