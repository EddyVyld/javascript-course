
let x = 10
let y = 20

//Variable temporal

let variableTemporal = x;
x = y;
y = variableTemporal;

console.log(x, y);
[x, y] = [y, x]

/**
 *  Desestructuración 
 * 
 *  La desestructuración en JavaScript es una característica 
 *  que te permite extraer datos de arrays y objetos 
 *  de manera más conveniente y legible, 
 *  asignándolos a variables individuales.  
 */

// Desestructuracion de arrays
const numbers = [1, 2, 3];
let a;
let b;
let c; 
// forma tradicional
//a = numbers[0];
//b = numbers[1];
//c = numbers[3];

[a, b] = numbers;

console.log(a,b)


// Ejercicio:  // Ejercicio
 // Del siguiente arreglo ["Isabel", "María", "Ana", "Luis", "Pedro"];
 // Extraer en variables independientes los valores de Isabel y Ana

 const nombres1 = ["Isabel", "María", "Ana", "Luis", "Pedro"]; 
 let isabel;
 let ana;

 [isabel, , ana] = nombres1;

 console.log(isabel, ana);



// Ejercicio
const product = {
    name: "Jabón Zote",
    precio: {
        frontera: 10,
        zonaCentro: 20,
        korea: 1000 
    },
    color: "blanco"
}

/* Obtener en una variables independientes name y color */
const { name, color } = product;

console.log(name, color);

// Desestructurando un objeto dentro de otro
// const {frontera} = product.precio;
/* En el primero le cambie el nombre, el segundo estoy accediento a un objeto, dentro de un objeto y cambiandole nombre */
const {color: colorJabon, precio:{frontera: precioFrontera}} = product;
console.log ( colorJabon, precioFrontera);

// Desestructurar el name y precio de korea, renombrar las variables
// name -> nombre Producto
// precio.kores -> precioKorea

const {name: tipoJabon, precio:{korea: precioKorea}} = product;
console.log ( tipoJabon, precioKorea);



