
/**
 * 
 *  Un componente actualiza si interfaz cuando:
 *  - Cambia su estado: Si el componente interno cambia su estado, se vuelve a renderizar.
 *  - Cambia sus props: Si el componente padre le pasa nuevas props, se vuelve a renderizar.
 * 
 * 
 * 
 */
import { useState } from "react";


export const Counter = () => {

    const [count, setCount] = useState(0); // Me retorna un array y una funcion de callback [o, callback]

    const handleIncrement = () => {
        console.log("Valor de counter: ", count);
        setCount(count + 1)
    }

    /**
  *  Función para decrementar el valor del contador.
  *  Invocar la función con el botón de Drecrement
  * */

    const handleDecrement = () => {
        console.log("Valor de counter: ", count);
        /* setCount(count == 0 ? count : count - 1);  */
        count > 0 && setCount (count - 1) ;  

    }
    
    // Funcion para el reset
    const handleReset = () => {
        console.log("Valor de counter: ", count);
        setCount(0)
    }
    





    return (
        <div>
            <h2> Counter</h2>
            <h3>{count}</h3>
            <button onClick={() => { handleIncrement("parametro") }}>Increment</button>

            <button onClick={() => { handleDecrement("parametro2") }}>Decrement</button>

            <button onClick={() => { handleReset("parametro2") }}>Rest</button>
        </div>
    )
}

