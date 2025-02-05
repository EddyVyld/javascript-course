/*
 API: Application Programming Interface
   Permite la comunicación entre dos aplicaciones de software
   a travéz de un conjunto de reglas.
 La API Fetch nos ayuda a acceder y manipular 
 peticiones HTTP (DELETE, GET, POST, PUT).
 
 Sintaxis:
    fetch(resource, options)
*/

/* Las promesa es un patrón asincrónico que se utiliza
 para manejer operaciones asíncronas.
 Las promesas permite realizar tareas asíncronas y
 manejar los resultados (éxito o error) en un momento posterior.
 Las promesas tiene 3 estados:
 1.- Pending: El estado inicial de una promesa antes de que se resulva o rechace
 2.- Resolved: La promesa se resuelve con un valor
 3.- Rejected: La promesa se rechaza con un razón */

 
const getProducts = ( url ) =>{
    /* Esto no se debe hacer
    const products = fetch( url );
    console.log( products ); */
/* //Manejo de promesas con .then y .catch
fetch(resource)
.then(callback) // Se ejecuta cuando se ejecuta la promesa
.catch(callback) // Se ejecuta cuando falla la primesa 
.finally (callback) // Se ejecuta independientemente de que se cumpla o no la promesa
 */
fetch (url)
.then(resolve => {
    console.log(resolve);
    resolve.json()
        .then((productos) => console.log(productos))
        .catch((error) => console.log(error)); // Convierte de JSON a objeto de JS
} ) 
.catch(error => console.log(error))
.finally ( ()=>console.log("Ha terminado")) 

};
getProducts("https://fakestoreapi.com/products");