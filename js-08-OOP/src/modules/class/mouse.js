import { Product } from "./Product.js";


// Aplicacion de herencia
/**
 * Herencia: mecanismo que permite a un objeto basarse en otro 
 * objeto existente para heredar propiedades y métodos. 
 * Esto permite la reutilización de código y la creación 
 * de relaciones entre objetos, lo que facilita la 
 * organización y la estructura del código.
 * 
 * Para heredar en la declaración de la clase se usa la palabra extends
 */


class Mouse extends Product {

    // Velocidad de respuesta
    #dpi

    constructor (productName, price, brand, dpi) { // Agregamos dpi
        super(productName, price, brand) // Hace referencia a los atributos del otro constructor
        this.#dpi = dpi
    }

    //Metodos setters y getters de dpi
    set dpi( dpi ){
        this.#dpi = dpi; 
    }
    
    get dpi () {
        return this.#dpi;
    }


    /* printPrice() {
        return `${this.productName}`;
      } */

    // Sobreescritura de metodo 
    card() {
    return `
        <h2>${this.productName}</h2>
        <h2>${this.dpi}</h2>
        <p>Llévatelo por ${this.price}</p>
    `
  }

}


export { Mouse };
