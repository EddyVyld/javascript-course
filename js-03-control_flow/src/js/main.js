/*
 El control flow (flujo de control) en JavaScript describe cómo 
 se ejecutan las instrucciones de un programa, desde el inicio 
 hasta el final. Se basa en estructuras como secuencias, 
 condiciones y bucles que determinan qué parte del código se ejecuta y cuándo.
*/

// ----------------- Condicional if-else --------------------
/*
 Ejecuta una sentencia si una condición específica es
 evaluada como verdadera.
 Sintaxis:
    if ( condición ) sentencia;
    if ( condición ) {
        sentencias;
    }
    if ( condición ) sentencia;
    else sentencia_si_condición_es_falsa;
    if ( condición ) {
        sentencias;
    }
    else {
        sentencias;
    }
    if (condición) sentencia;
    else if (condicion 2) sentencia;
         else sentencia_si_condicion2_es_falsa;

    if ( condicion1 ) sentencias;
    else if ( condicion2 ) sentencia;
    else if ( condicion3 ) sentencia;
    else if ( condicion4 ) sentencia;
     .....
    else if ( condicionN ) sentencia;
    else condición;   
*/

let teperatura = 30

/**
 * Función que recibe la temeperatura y devuelve un mensaje:
 * Si la temperatura es = 22 grados: La temperatura de 22 grados es ideal
 * Si la temperatura es de 15 a 21 grados: La temperatura de 14 grados es fresca.
 * Si la temperatura es menor a 15 grados: La temperatura de 8 grados es fria
 * Si la temperatura es mayor a 22 grados: La temperatura de 30 grados es calurosa y le gustaría a Nan
 * @param {number} temperatura
 * @returns {string} mensaje
 */

function devuelveTem (temperatura) {
if (temperatura === 22) {
    return `La temperatura de ${temperatura} grados es ideal`;
} else if (temperatura <= 15) { 
        return `La temperatura de ${temperatura} grados es fresca`;
} else if (temperatura <= 21) {
    return `La temperatura de ${temperatura} grados es fria`;
} else {
    return `La temperatura de ${temperatura} grados es calurosa y le gustaría a Nan`;
}
}

console.log(devuelveTem(teperatura))
console.log(devuelveTem(15))


//--------------- Condicional Switch --------------------------
/*
 La condicional Switch evalua una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta encontrar
 la sentencia 'break' o se finalicen todas las sentencias
 de la condicional switch.
 Para comparar la condicional switch usa el operador estricto ===
 Sintaxis:
  switch (expresión) {
    case valor1:
        sentencia;
        break;
    case valor 2:
        sentencias;
        break;
    case valor n:
        sentencias;
        break
    default:
        sentencias;
        break;
  }
*/

temperatura = 19

switch (temperatura) {
    case 22:
        console.log(`La temperatura de ${temperatura}🌡️ es ideal 😊👌.`);
        break;
    case 15:
        console.log("estoy en 15 grados");
    case 16:
        console.log("estoy en 16 grados");
    case 17:
        console.log("estoy en 17 grados");
    case 18:
        console.log("estoy en 18 grados");
    case 19:
        console.log("estoy en 19 grados");
    case 20:
        console.log("estoy en 20 grados");
    case 21:
        console.log(`La temperatura de ${temperatura}° es fresca.`);
        break;
    case 13:
    case 14:
        console.log(`La temperatura de ${temperatura}° es fria 🥶.`);
        break;
    default:
        console.log(`La temperatura de ${temperatura}° es calurosa y le gustaría a Nan.`);
        break;
}

// default en caso de que no se cumplan los demas casos, se pueden poner desde el principio

/**
 * Función que reciba la velocidad de un ventilador y devuelva el mensaje
 * de la velocidad del ventilador en:
 * Velocidad 0: Apagado
 * Velocidad 1: Baja
 * Velocidad 2: Media
 * Velocidad 3: Alta
 * Cualquier otro valor: Velocidad desconocida
 * @param {number} velocidad
 * @returns {string} mensaje
 */

// Ejercicio con Switch
let velocidad1 = 2;
const velocidadVentilador = velocidad =>{
    let mensaje;
    switch (velocidad){
        case 0:
            mensaje = "Apagado";
            break;
        case 1:
            mensaje ="Baja"
            break;
        case 2:
            mensaje = "Media";
            break;
        case 3:
            mensaje = "Alta";
            break;
        default:
            mensaje = "Velocidad desconocida";
            break; 
    } return mensaje;
}; 


// Ejercicio con if
const velocidad2 = 0
function ventilador (velocidad2) {
    if (velocidad2 === 0) {
        return "Apagado";
    } else if (velocidad2 === 1) {
        return "Baja";
    } else if (velocidad2 === 2){
        return "media";
    } else if (velocidad2 === 3){
        return "Alta";
    } else {
        return "Velocidad desconocida";
    } 
}

console.log(ventilador(velocidad2))


// ------------------------ Operador ternario --------------------------
/*
 Es el único operador de JavaScript que tiene 3 operandos.
 Generalmente se utiliza como opción a la sentencia if-else.
 Sintaxis:
  condición ? expresiónSiCondiciónEsVerdadera : expresionSiCondiciónEsFalsa; 
*/

const pagoTarjetaCredito = true;
let msj;
if ( pagoTarjetaCredito ){
    msj = "A realizado el pago de su TC";
}else {
    msj = "No ha realizado el pago de su TC";
}

// Operador ternario

function edad (numEdad) { 
    return numEdad >= 18 ? "Eres mayor de edad" : "Eres manor de edad" 
 }

console.log (edad(27))

const edad1 = (numEdad1) => (numEdad1 >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log (edad1(16))



// ------------------- Ejercicio Estaciones del año --------------------------
/*
 Preguntar por el número de mes (prompt o DOM), del 1 al 12
 Desplegar de acuerdo al mes un Alert (mostrarlo en el DOM) la estación del año.
 mes 12,  1,  2 = invierno.
 mes  3,  4,  5 = primavera
 mes  6,  7,  8 = verano
 mes  9, 10, 11 = otoño 
 Realizar una versión con if-else-elseif y otra con switch.
*/

// Ejercicio con if-else-elseif


let mes = Number(prompt("Dame un número de mes (1-12)"));

const numeroMes = mes => {
    if (mes === 1 || mes === 2 || mes === 12) {
        alert (`Es invierno`);
    } else if (mes >= 3 || mes <= 5) {
        alert (`Es primavera`);
    } else if (mes >= 6 || mes <= 8) {
        alert (`Es verano`);
    } else if (mes >= 9 || mes <= 11) {
        alert (`Es otoño`);
    } else {
        alert (`El numero de mes que usted marco es invalido`);
    }
}

// numeroMes (mes); 

// Ejercicio con switch
/* let mes1 = Number(prompt("Dame un número de mes (1-12)"));

const numeroMes1 = mes1 => {
    switch (mes) {
        case 1:
        case 2:
        case 12:
            console.log(`Es invierno`);
            break;
        case 3:
        case 4:
        case 5:
            console.log(`Es primavera`);
            break;
        case 6:
        case 7:
        case 8:
            console.log(`Es verano`);
            break;
        case 9:
        case 10:
        case 11:
            console.log(`Es otoño`);
            break;
        default:
            console.log(`El numero de mes que usted marco es invalido`);
            break;
    }
}

numeroMes (mes);  */
 






