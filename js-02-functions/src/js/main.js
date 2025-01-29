console.log ("JS-02 Funciones");

/*
 Las funciones permiten organizar, reutilizar y 
 estructurar el código. Su propósito principal es:
- Modularidad: Dividir un programa en piezas lógicas 
  más pequeñas y manejables.
- Reutilización de código: Reducir la duplicación de 
  código al reutilizar funciones.
- Legibilidad: Hacer que el código sea más claro y fácil de entender.
- Mantenimiento: Facilitar actualizaciones o modificaciones 
  al concentrar la lógica en un solo lugar.
- Abstracción: Ocultar detalles internos y expone 
  solo lo necesario para trabajar con ellas


 Recomendaciones para el uso de las funciones:
- Nombre descriptivo: Debe indicar claramente lo que hace.
  Se recomienda comenzar con un verbo
- Parámetros: Debe tener cero o más parámetros, separados por coma.
  Se recomienda no tener más de 3 parámetros para hacerlo mas facil.
- Seguir el principo SOLID, sobre el principio de responsabilidad única.
  (Single Responsibility Principle).
- Evitar efectos secundarios: Una función no debe modificar variables externas.
*/

/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
----------- Funciones declaradas --------------
(function declaration, function statement)
Una característica de las funciones declaradas es que tien hoisting.
sintaxis:
function nombreFuncionCamelCase ( parámetros ){
    //cuerpo de la función
    instrucciones;
}
hoisting: comportamiento en JS que permite a las declaración de variables(var) o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código. (la puedes llamar aunque no este declarada)
*/

console.log(saluda());

function saludar () {
    console.log("Hola, soy una funcion declarada")
}

// Agregar el parametro nombre y mostrar "Hoola Serch, soy una funcion declarada"

function saluda (nombre) { 
    return `Hola ${nombre}, soy una funcion declarada`
 }

console.log (saluda("Eddy"))


/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.
sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/

// Realizar una función declarada que sume dos números, retorna el resultado de la suma

const sumarDosNumeros = function (a,b) { // Si quiero quito o pongo el nombre, no es necesario
 return a + b
}

/* console.log(sumarDosNumeros(5,8))
let hora = 16;
let saludarDependiendoHora;
if(hora < 12){
    saludarDependiendoHora = function(){
        return "Buenos días";
    };
} else {
    saludarDependiendoHora = function(){
        return "Buenas tardes";
    };
}
console.log (saludarDependiendoHora()); */

/* ( function setUp( name ) {
    console.log(`Hola ${name}, soy una función autoinvocada`);
}) ( "Erick" ); */


/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una solo instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return

 sintaxis:
    const nombreVariable = (parametros) => instrucción; 
        Si solo tiene un parametro puedo omitirlo
        Si solo es una instruccion no necesita llave
    
    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/

// Realizar una funcion declarada que calcule el area de un area de un rectangulo (funcion de flecha)

const areaRectangulo = (base,altura) => (base * altura / 2)
console.log(`El área del rectángulo es: ${areaRectangulo(10, 6)} cm2`);

// convertir la funcion anterior a una funcion declarada

function areaRectangulo1(ladoA, ladoB){
    return ladoA*ladoB;
}

// convertir la funcion anterior a una funcion expresada

const calcularAreaRectangulo = function(base, altura) { return base * altura; };

/*
 ------------ Parámetros por defecto -----------------------
             (default parameters)
Inicializa un parámetro de la función, si no se envía el argumento cuando se invoca
*/

const saludarPersona = (nombre) => `Hola ${nombre}, bienvenido`;
const saludarPersonaConDefaultParameters = (nombre = "Invitado") => `Hola ${nombre}, bienvenido`;

console.log(saludarPersona()); // Undifined porque no le damos argumento
console.log(saludarPersona("Eddy"));

console.log(saludarPersonaConDefaultParameters()); // Aqui me aparece el de initado porque lo puse
console.log(saludarPersonaConDefaultParameters("Eddy"));

// Realizar una función que tenga de parámetros el nombre y cohorte
// Los valored por default de los parámetros son nombre= participante cohorte= "cohorte de Generation"
// Retornar el mensaje "Hola nombre, bienvenido/a a la cohorte de Generation"
// Retornar el mensaje "Hola "", bienvenido/a a la cohorte Ch50"

const nombreCohorte = (nombre="participante", cohorte="Generation") => `Hola ${nombre}, bienvenido/a a la cohorte de ${cohorte}`;

console.log(nombreCohorte())
console.log(nombreCohorte("Eddy", "CH50"))

console.log(parseInt("faba")) //NaN
console.log(parseInt("faba", 10)) //NaN

// base decimal(10 dígitos): 0,1,2,3,4,5,6,7,8,9
// base hexadecimal(16 dígitos): 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F
// base octal(8 dígitos): 0,1,2,3,4,5,6,7
// base binaria(2 dígitos): 0,1
console.log( parseInt("faba", 16) ); // 64186 valor decimal de la base hexadecimal


/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */

 // Arrow function que reciba un parámetro y lo imprima en consola
 const mensajeConsola = mensaje => console.log(mensaje);
 // Arrow function que reciba un parámetro y lo imprima con alert
 const mensajeAlert = mensaje => alert(mensaje);

 const mensajeTitulo = mensaje => document.getElementById("title").innerText = mensaje;

 /**
  * Función que imprima en consola o alert un mensaje.
  * @param {string} mensaje mensaje a imprimir
  * @param {string} opcion "consola" o "alert" el destino a imprimir 
  */

 const imprimirMensaje = (mensaje, opcion) => {
    if (opcion === "consola") {
        console.log(mensaje);
    } else if (opcion === "alert") {
        alert(mensaje);
    } else if (opcion === "titulo") {
        mensajeTitulo(mensaje);
    } 
}

imprimirMensaje("Hola Eddy", "alert");
imprimirMensaje("Hola Kati", "titulo");

// Usar función de callback del ejercicio anterior (Hace lo mismo que hice en todo el ejercicio anterior mas facil)
const imprimerMensajeConCallback = (mensaje, funcionCallback ) => funcionCallback( mensaje );

imprimerMensajeConCallback("Hola Eddy", mensajeConsola);
imprimerMensajeConCallback("Hola Eddy", mensajeTitulo);


// Me retorna un mensaje y luego el string
// Console.log solo imprime en consola, no puede imprimir lo de consola, por eso es undefined y no tiene retorno
console.log(console.log("Hola Pipi"))


/*
Pase por referencia - Pasar un valor a otra variable
Pase por valor - Reasignacion un valor a una variable
*/

// Pase por valor

let colorPintura = "rojo";
function cambiarColorPintura(color){
  console.log(`El color que llega a la función es ${color}`); // rojo
    color = "azul";
    console.log(`El color de la pintura que imprime la función es ${color}`); // azul
}
cambiarColorPintura(colorPintura);
console.log(`El color de la pintura final es ${colorPintura}`); // rojo


// Pase por referencia

const colores = ["rojo", "azul", "verde"]; // Esto es la referencia (solo aplica en objetos)
function cambiarColorArreglo(arreglo){
  console.log(`El arreglo que llega a la función es ${arreglo}`); // "rojo", "azul", "verde"
  arreglo[0] = "negro";
  console.log(`Se imprimen los colores en la función: ${arreglo}`); // "negro", "azul", "verde"
}
cambiarColorArreglo( colores );
console.log(`Los colores finales dentro del arreglo son: ${colores}`); // "negro", "azul", "verde"


// Para ordenar tenemos el metodo sort (Tener en cuenta que ordena en Unicode)

const series = ["Winnie", "Arnold", "avengers" ,"Atreve", "Digimon", "Naruto"];
console.log( series.sort() ); // ['Arnold', 'Atreve', 'Digimon', 'Naruto', 'Winnie', 'avengers']


// Con los numeros toma en cuanta el primer digito
const numeros = [ 122, 2, 1, 55]; 
console.log( numeros.sort() ); // [1, 122, 2, 55]


// Pero si queremos que vaya de menor a mayor primero hacemos funcion de comparacion
const ordenarNumeros = ( numA, numB) => {
  if( numA < numB ){
     return -1; // numA va antes que numB
  } else if( numA > numB ) {
     return 1; // numA va después que numB
  } else { // Los números son iguales
    return 0
  }
}
console.log( ordenarNumeros( 3,6 ) ); // -1
console.log( ordenarNumeros( 6,3 ) ); // 1
console.log( ordenarNumeros( 3,3 ) ); // 0

const numbers = [1, 10, 3, 100, 5];
console.log(numbers.sort(ordenarNumeros)) //  [1, 3, 5, 10, 100]
//  [1,10     3,100,5];
//  [1,3     10,100,5];
//  [1,3,10,100   ,5 ];
//  [1,3,10,5,   100 ];
//  ... después de repetir las iteraciones nuevamente
//  [1,3,5,10,,100 ];

// Lo mismo sin hacer ciclo for y mas facil
const ordenarNumerosSimplificado = ( numA, numB) => numA - numB;
const otrosNumeros = [  1,   10,   3,   100,   5];
console.log( otrosNumeros.sort( ordenarNumerosSimplificado ) ); //  [1, 3, 5, 10, 100]

const numerosDeLaSuerte = [  7,   21,   14,   28,   35];
console.log( numerosDeLaSuerte.sort( (a,b)=> a-b ) );


const numCH50 = [  19,   15,   13,   18,   5];
console.log( numCH50.sort( (a,b)=> b-a ) );