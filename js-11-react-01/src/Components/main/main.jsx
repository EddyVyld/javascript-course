

/* Todas las funciones van con UpperCamelCase */
export const Main = () => {

    const hello = "Hola mundo, esto es una prueba";

    const mainJsx = (
    <nav>
        <p>{hello} </p>
    </nav>
    );

    return mainJsx; 

}


// Esta bien esta o directamente a la funcion
// export {main}; 