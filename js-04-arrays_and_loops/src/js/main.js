const postres = []; // Para los objetos declararlos con const

postres.push("Pastel de Guayaba");
postres.push("Flan","Gelatina"); // Se pueden agregar mas de un elemento

console.log(postres); 

// Eliminar un postre del final del arreglo.
console.log(`Elemento eliminado con pop() ${postres.pop()}`); // Gelatina


// Agregar un postre al inicio del arreglo.
postres.unshift("Tiramisú");
console.log(  postres ); // ["Tiramisú", "Pastel de Guayaba", "Flan"]
// Eliminar un postre al inicio del arreglo.
console.log(`Elemento eliminado con shift() ${postres.shift()}`); // Tiramisú
console.log(  postres ); // ["Pastel de Guayaba", "Flan"]
// Buscar un elemento dentro del arreglo usando indexOf().
console.log(`Índice de "Flan": ${postres.indexOf("Flan")}`); // Si el elemento no existe nos va a dar -1

// Buscar el postres "Flan" 
// Si existe mostrar "El flan existe"
// Si no existe mostrar "El flan no existe"
// Para evaluar usar el operador ternario.     evaluación ? valor si verdadero : valor si falso

console.log(postres.indexOf("Flan") !== -1 ? "El flan existe" : "El flan no existe");

// =================================================
// El método slice crea una copia superficial de un fragmento de un array y devuelve un nuevo array.
const pasteles = ["Pastel de Chocolate", "Pastel de Zanahoria", "Pastel de Limón"];

const eliminarPastel = ( array, indice ) => {
    const copyarray = array.slice();
    const pastelEliminado = copyarray.splice(indice, 1);
    console.log( copyarray ); // ["Pastel de Chocolate", "Pastel de Limón"]
    return pastelEliminado;
}
eliminarPastel( pasteles, 1 ); 
console.log( pasteles ); 

// ============ Iterar un  arreglo con for loop ============
/*
 Sintaxis:
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
*/
const nombres = ["Juan", "Pedro", "María", "Ana"];
for ( let index = 0; index < nombres.length; index++ ){
    console.log( nombres[index] ); // Juan, Pedro, María, Ana
}
console.log( "Me muestro en consola, muchas veces?" ); // Se muestra una vez en la consola

// ============ Iterar un  arreglo y mostrar los elementos como una lista ============
const gelatinas = ["Fresa", "Limon", "Naranja", "Uva"];
const gelatinasLista = [];
for ( let index = 0; index < gelatinas.length; index++ ) {
    gelatinasLista.push(`<li> ${ gelatinas[index] } </li>`);
}
console.log( gelatinasLista ); 
/* 
  [
   "<li> Fresa </li>", 
   "<li> Limon </li>", 
   "<li> Naranja </li>", 
   "<li> Uva </li>"
   ]
*/
const refGeletinasLista = document.getElementById("gelatina-lista");
console.log(refGeletinasLista); 
refGeletinasLista.innerHTML = gelatinasLista.join("");

//InnerText me lo pasa como texto
//InnerHTML para etiquetas 
// Me va a salir una coma porque cuando convertimos string los array me salen con coma, para quitarlo hay que que poner .join, este me ayuda a saber que tipo de espacio voy a dejar


// Simplificaciones en la iteración de un arreglo
// ----------------------- Uso de for... of ------------------
/* Ejecuta una sentencia por cada elemento de un objeto iterable(array, colección, string).
Sintaxis:
    for (const iterator of object) {
    
    }
*/


const colores = ["Rojo", "Azul", "Verde", "Amarillo"];

for (let i = 0; i < colores.length; i++) {
    const element = colores[i];
    console.log(element);    
}

for ( const color of colores ) {
    console.log( color );
}

// ---------------------- Ejercicio con for of ---------------------
/**
 *  Del siguiente arreglo de cantantes, mostrar en el DOM, el listado como unorder list.
 *  const cantantes = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];
 *  - Usar for of
 *  - De preferencia usar una función 
 */


const cantantes = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];
const refListaCantantes = document.getElementById("cantantes-lista");

for ( const cantante of cantantes ) {
    console.log( cantante );
}

const generarListaCantantes = (cantantesArray) => {
    const cantantesLista = [];
    for (const cantante of cantantesArray) {
        cantantesLista.push(`<li>${cantante}</li>`);
    }
    return cantantesLista.join("");
}

const insertarListaDeCantantesAlDOM = (lista, refDom)=> refDom.innerHTML = lista;

const listItemsOfCantantes = generarListaCantantes(cantantes);
insertarListaDeCantantesAlDOM( listItemsOfCantantes, refListaCantantes);

// ------------------- Uso de break en ciclos ----------------------------
// break detiene la ejecución de la iteración en curso y termina el ciclo.

let iteracion = 0;

for ( ;   ;  ){
    console.log( `Núm de iteración: ${iteracion}` );
    iteracion++;
    if ( iteracion === 5 ){
        break;
    }
}


// Uso de break y label en ciclos anidados

multiplicando:
for (let i = 1; i <= 7; i++ ){
    multiplicador:
    for (let j = 1; j <= 10 ; j++){        
        console.log(`${i} x ${j} = ${i * j}`);             
        if( i >= 4 ) break multiplicando;
    }
}


