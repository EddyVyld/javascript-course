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
    //return pastelEliminado;
}
eliminarPastel( pasteles, 1 ); 
console.log( pasteles ); // ["Pastel de Chocolate", "Pastel de Limón"]


