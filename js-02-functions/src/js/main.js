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



