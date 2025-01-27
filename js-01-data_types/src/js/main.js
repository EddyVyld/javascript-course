console.log("Sesión JS-01, tipos de datos y variables")

/*
 Tipos de datos de JavaScript:
 - Objetos y primitivos
 - Los datos primitivos:
    * string
    * boolean
    * number
    * null
    * undefined
    * bigint
    * symbol
    > son inmutables, no tienen atributos ni métodos
- Objetos:
     tipo object
    {clave: valor, edad: 25, name: "pitufina"}
     tipo array
    [element_1 , element_2 , "Pitufinas", 38, {}, {}  ]
*/

/* ================= Datos primitivos ==================
String: Tipo de datos que representa una secuencia de caracteres.}
    Puede incluir textos, números, espacios, símbolos. Siempre se 
    define entre comillas.
*/
console.log("Kati seria unas pantuflas"); // Se puede usar comillas dobles 
console.log(`Alberti seria unas botas`); // Se puede usar comillas simples
console.log(``) // Usando backsticks (apostrofe grave) para Template Literals 

/*
- String template literals ` ` (backtick) 
  Es una forma más flexible y legible de trabajar con cadenas 
  de texto. Utilizan comillas invertidas (``) en lugar de 
  comillas simples o dobles y permiten incrustar expresiones
  dentro de la cadena utilizando la interpolación ${}.
*/

// El resultado de 3*4 = 12 pesos
let valor1 = 3
let valor2 = 4
console.log("El resultado de " + valor1 + " * " + valor2 + " = " + valor1 * valor2 + " pesos.");
console.log(`El resultado de ${valor1} * ${valor2} = ${valor1*valor2} pesos.`);

/*
 Tipos de datos number.
 - números positivos: 100, 1, 0.258
 - números negativos: -1 , .50.35
 - valores que no pueden ser representados numéricamente: NaN
 - número infinitos: +Infinity, -Infinity
*/

console.log( typeof 3.141592 ); // 'number'
console.log( typeof (3*3)  ); // 'number'
console.log( typeof "" ); // 'string' empty string
console.log( typeof " " ); // 'string'
console.log( 3*"pitufo trabajador" ); // NaN
console.log( typeof ( 3 * "pitufo trabajador") ); // 'number'
console.log( typeof (NaN) ); // 'number'
console.log( typeof +Infinity ); // 'number'
console.log( typeof ( 3 + "Viernes temático" ) ); // 'string'
console.log( typeof ( "3Viernes temático" ) ); // 'string'
console.log( 4 /0 ); // +Infinity

/*
 Cuando se realizan operaciones que exceden los límites
 de MAX_SAFE_INTEGER se produce una pérdida de precisión.
 Perdida precisión: No se pueden representar exactamente ciertos valores.
  típicamente en operaciones de números de punto flotate.
*/

console.log( `Pérdida de precisión: 0.1 + 0. 2 = ${ 0.1 + 0.2 }`);
console.log( `Valor entero seguro en JavaScript: ${Number.MAX_SAFE_INTEGER} `); // 9007199254740991, despues de aqui ya no es preciso
console.log( `MAX_SAFE_INTEGER + 1: ${Number.MAX_SAFE_INTEGER + 1 }`); 
console.log( `MAX_SAFE_INTEGER + 2: ${Number.MAX_SAFE_INTEGER + 2 }`); 
console.log( `MAX_SAFE_INTEGER + 3: ${Number.MAX_SAFE_INTEGER + 3 }`); 
console.log( `MAX_SAFE_INTEGER + 4: ${Number.MAX_SAFE_INTEGER + 4 }`); 
console.log( `MAX_SAFE_INTEGER + 5: ${Number.MAX_SAFE_INTEGER + 5 }`); 
//Estos son ejemplos de como se pierde la presicion, la logica dice que aumenta 1 en 1, pero cuando se imprime en la consola ya lo hace mal

/*
 Tipos de datos BigInt
 Sirve para representar valores numéricos enteros, de los que el tipo number no pueda representar o no es seguro. Por ejemplo, si excede el numero de arriba.

 Las operaciones con un bigInt se debe hacer con otro bigInt
*/
const myBigInt = 9007199254740991n;
console.log( typeof myBigInt ); // bigint

console.log( `Resultado de myBigInt + 1n: ${ myBigInt + 1n }  `); //9007199254740992
console.log( `Resultado de myBigInt + 2n: ${ myBigInt + 2n }  `); //9007199254740993
console.log( `Resultado de myBigInt + 3n: ${ myBigInt + 3n }  `); //9007199254740994
console.log( `Resultado de myBigInt + 4n: ${ myBigInt + 4n }  `); //9007199254740995
console.log( `Resultado de myBigInt + 5n: ${ myBigInt + 5n }  `); //9007199254740996
console.log( `Resultado de myBigInt + 6n: ${ myBigInt + 6n }  `); //9007199254740997

//Una variable es declarada, pero sin asignarle un valor

myAge = null; // intensionalmente se borra el tipo de dato
// NO es correcto usar typeof con un dato null
console.log(`Tipo de dato en myAge: ${typeof myAge }`); // object
console.log(`myAge es null?  ${ myAge === null } `);// true
/*
Tipo de dato boolean
Tiene dos estados: true y false
*/
const isActive = true;
console.log( typeof isActive ); // boolean


/* 
Conversion de datos (type casting)

el type casting es eel acto de compartir variables de un tipo de dato a otro. Esto puede ser implicito (automatico) o explicito (forzado por el desarrollador)

*/

// Conversion implicita
const resultado = "5" + 2; //"52" Numero convertido a String
const multiplicacion =  "5" * 3; // 15 El string convertido a number 
const division = "two" * 6; //NaN


// Conversion explicita de datos (coercion de tipo)
const edadMascota = 10;
// Conversion explicita a string 


console.log( String( true ) ); // "true"
console.log( String( null ) ); // 
console.log( String( undefined ) ); // "undefined"
console.log( String( [] ) ); // empty Array-> ""
console.log( String( [2,3,4,5,null,3] ) ); // "2,3,4,5,,3"

// Conversion implicita a number
const costo = "100"
const costoIVA = costo * 1.16; // 116 conversion implicita de string a number

// Conversion explicita a number
const precioCroquetas = "2000";
const precioJabon = "300.50";
const precioVitaminas = "600.30";
const costoTotal = precioCroquetas + precioJabon + precioVitaminas;
console.log (costoTotal);


/*
 Number() Vs parseInt() y parseFloat()
  - Number convierte enteros y decimales
  - Number devuelve NaN si la cadena contiene algún caracter no numérico
  - Con parseInt y parseFloat, si la entrada comienza con un valor no numérico devuelve NaN
  - parseInt convierte solo pa parte entera
  - parseFloat convierte la parte entera y decimales
  - parseInt y parseFloat realiza la conversión hasta encontrar un caracter no numérico
*/


console.log( Number("68.58") ); // 68.58
console.log( parseInt("68.58") ); // 68

console.log( parseFloat("68.58") ); // 68.58
console.log( Number("68.58 dolares") ); // NaN
console.log( parseInt("68.58 dolares") ); // 68

console.log( parseFloat("68.58 dolares") ); // 65.58
console.log( Number("$68.58 dolares") ); // NaN
console.log( parseInt("$68.58 dolares") ); // NaN

console.log( parseFloat("$68.58 dolares") ); // NaN
console.log( Number("68-58") ); // NaN
console.log( parseInt("68-58") ); // 68

console.log( parseFloat("68-58") ); // 68
console.log( Number( true ) ); // 1
console.log( Number( false ) ); // 0

console.log( Number( [] ) ); // 0
console.log( Number( [30] ) ); // 30
console.log( Number( [30,40] ) ); // NaN

















