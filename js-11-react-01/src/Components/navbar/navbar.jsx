

export const Navbar = (props) => {

    const cohorte = 50;

    const navbarJsx = (
    <nav>
        {/* Se imprime el numero de cohorte */}
        <h2>Cohorte {cohorte} </h2>
        <img src={props.src} alt={props.alt} /> Estoy leyendo a traves del archivo app los componentes del elemento navbar
        <ul>
            <li>Inicio</li>
            <li>Productos</li>
            <li>Contacto</li>
        </ul>
    </nav>
    );

    return navbarJsx; 

}


// Esta bien esta o directamente a la funcion
// export {navbar}; 