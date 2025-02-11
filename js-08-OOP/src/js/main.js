import { insertMainHeader } from "../../src/modules/header/header.js";
import { insertMainFooter } from "../../src/modules/footer/footer.js";
import { amdRadeonRx, mouseGamer } from "../modules/class/amd-radion-rx.js"; 
import { Product } from "../modules/class/Product.js";

insertMainHeader();
insertMainFooter();



console.log(amdRadeonRx)
// Podemos acceder a los atributos utilizando el operador (access and call) n.precedence: 17
// Podemos acceder usando objeto[ nombre de atributo ]

// Accediendo al modelo de dos formas
console.log(amdRadeonRx.model); 
console.log(amdRadeonRx["model"]); 


console.log( amdRadeonRx["attribute"] );
const attribute = "price";
console.log( amdRadeonRx[attribute] ); // 10699

// Acceder al atributo title e imprimir en consola, usando los dos métodos para aceder

console.log(amdRadeonRx.title); 
console.log(amdRadeonRx["title"]); 

const titulo = "title";
console.log( amdRadeonRx[titulo] );


// Accediendo a atributos que no existen

console.log(amdRadeonRx.dato1);
// console.log(mouseGamer.dato1); undefined

//Obteniendo elnumero de elementos
console.log(amdRadeonRx.compatibilidad.length);
// console.log(mouseGamer.compatibilidad.length); NO EXISTE

// Operador de encadenamiento opcional ( ?. ) para saber si existe
console.log(mouseGamer.compatibilidad?.length);

// Aqui esta el ejemplo de lo que pasa con los precios
console.log( amdRadeonRx.imprimirPrecioMxM() );
console.log( amdRadeonRx.imprimirPrecioDolares() );

console.log( mouseGamer.imprimirPrecioMxM() );
console.log( mouseGamer.imprimirPrecioDolares() );





// >>>>>> Usando la clase Product <<<<<<
// Estoy creando objetos a partir de la clase
const mouseLogi = new Product ("Mouse", 800, "LogiTech");
const tecladoGamer = new Product ("Teclado"); 
const monitorHp = new Product ("Monitor");
const bateria = new Product ();

/* mouseLogi.price = 1; */ // Aqui me iba a cambiar el valor de 800 a 1 peso

// Se imprime una tabla con los valores. Darse cuenta que aqui estan los valores de los atributos. 
console.table(mouseLogi)

mouseLogi.productName = "Ratoncito";

console.log(mouseLogi.productName); 

console.log( mouseLogi.printPrice() );