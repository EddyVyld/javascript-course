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




 // ============ Ejercicio mental =============================
 let myIteration;
 for (myIteration = 0; myIteration <= 5; myIteration++) {
     console.log("For loop", myIteration ); //  0...5
    if ( myIteration === 3 ) break;
 }
 console.log("Final", myIteration); // 6

 // Ejercicio 2

 /* let myIteration;
 for (myIteration = 0; myIteration <= 5; myIteration++) {
     console.log("For loop", myIteration ); //  0
    if ( myIteration <= 3 ) break; // 0
 }
 console.log("Final", myIteration); // 0

 //  */

 // ================ Function Scope ====================
/*
  Variables declaradas con var, let y const tienen un alcance de función. 
  Esto significa que están limitadas al contexto de la función 
  en la que se declaran.
  Son sus limites dentro de la funcion 
*/

function functionScope(){
    var myVar = 10;
    let myLet = 20;
    const myConst = 30;
    console.log(myVar);
    console.log(myLet);
    console.log(myConst);
    
}
functionScope();

// console.log(myVar);
// console.log(myLet);
// console.log(myConst);

// ================ Block Scope ====================
/*
  Variables declaradas con let y const tienen un alcance de bloque. 
  Esto significa que están limitadas al bloque en el que se declaran.
*/
{
    var a = "a";
    let b = "b";
    const c = "c"; 
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
// console.log(b);
// console.log(c);

// ================ Hoisting =======================
/*
  El "hoisting" en JavaScript es un comportamiento que ocurre durante la fase de compilación antes de la ejecución del código. 
  Se refiere a la elevación (movimiento) de las declaraciones 
  de variables y funciones al inicio de su contexto de ejecución
*/
/*
  Las variables declaradas con var son elevadas al inicio de su contexto de ejecución (ya sea el ámbito de función o el ámbito global).
  
  Sin embargo, solo la declaración de la variable es elevada, 
  no la asignación. Esto significa que la variable existe, 
  pero su valor es undefined hasta que llega a la línea de asignación.
*/
console.log(phone); // undefined
var phone = "55-65-123-123";
console.log(phone); // 55-65-123-123

/*
  Las variables declaradas con let y const también se elevan al 
  inicio de su contexto, pero a diferencia de var, no se inicializan 
  automáticamente con undefined. La fase de inicialización de estas 
  variables no ocurre hasta llegar a la línea de código donde se declaran.
*/

for (let i = 0 ; i<= 5; i++){
    if (i === 3) break;
    console.log("Estoy dentro del ciclo for") // 0,1,2
    console.log("Valor de i", i); 
}

for (let i = 0 ; i<= 5; i++){
    if (i === 3) continue; // Omite el 3 
    console.log("Estoy dentro del ciclo for") // 0,1,2
    console.log("Valor de i", i); 
}


// break: rompe la iteración
//continue: salta la iteración



// ============== Ciclo While ======================
//                (while loop)
/*
 Crea un bucle que ejecuta una sentencia mientras la condición especificada
 se cumpla.
 Sintaxis:
    while( condición) sentencia;
    while ( condición ){
        sentencias;
    }
*/

// Confirm nos va presentar dos botonos
// Prompt nos ayuda  que aparezca mensaje
// Alert para ve que va a decir

/* while (confirm ("¿Quieres que te genere tu numero de la suerte?")){
    // ramdom devuelve un numero aleatoria entre 0 (incluido) y 1 (Excluido)
    console.log (`Tu numero de la suerte es ${ Math.random()}`);
    // Numero aleatorio del 0 al 10 
    console.log (`Tu numero de la suerte es ${ Math.random() * 10}`);
    // Numero aleatorio del 1 al 10 
    console.log (`Tu numero de la suerte es ${ (Math.random() * 10) + 1}`); // Asi ya no me da del 0 al 10 es 1 al 10
    //Numero aleatorio entero de 1 al 10
    console.log (`Tu numero de la suerte es ${ Math.floor((Math.random() * 10) + 1 )}`); 

} */

/*
Math. ceil (decimal hacia arriba)
Math.floor (decimal hacia abajo)
Math.round (decimal a 1.5)
Math.random (numero aleatorio)
*/

// Generar 100 números aleatorios en el rango de 1 al 50(incluyendo).
// Ordenar e imprimir de manera descendente


while (confirm ("¿Quieres que te genere un numero")){
    console.log (`Tu numero es ${ Math.round((Math.random() * 100) + 1 ) / 2}`); 
    }



