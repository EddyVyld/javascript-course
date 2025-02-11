/**
 *  Clase producto
 *  El nombre de las clases(plantillas) debe ser con UpperCamelCase
 *  Se recomienda que el nombre sea un sustantivo.
 * 
 **/

// Instaciar una clase es crear un objeto (quizas)

class Product {


    // Determinar los atributos de mi clase (encapsulamiento)
    #productName;
    #price;
    #brand; 


    // Creacion de los atributos de mi clase
    // Constructor nos ayuda a inicializar a inicializar objeto
    constructor( productName = "---", price, brand ){  // El productName va a venir el producto que acabamoos de crear, en caso de que no hayamos especificado el objeto, va a aparecer ---
        /* console.log(`Te he dado vida ${productName}`); */
        this.#productName = productName; 
        this.#price = price;
        this.#brand = brand;

    }

    //Metodos setters y getters de productName para proteccion

    //Establecer nuevo valor
    set productName( productName ){   //
        // Aqui podemos ponr mas filtros, condiciones
        this.#productName = productName; 
    }

    // 
    get productName () {
        return this.#productName
    }


    //Metodos setters y getters de price
    set price( price ){
        this.#price = price; 
    }
    get price () {
        return this.#price;
    }
    
    //Metodos setters y getters de brand
    set brand( brand ){
        this.#brand = brand; 
    }
    get brand () {
        return this.#brand;
    }

    printPrice() {
        return `${this.#productName} cuesta ${this.#price}`;
      }


}

export { Product };



 
 //Metodos setters y getters de brand





// Cuatro pilares para orientacion de objetos
// Abstraccion: Una representacion de lo simple que encubre la complejidad subyacente.
// Encapsulacion: La protección y ocultación de los atributos y métodos internos de un objeto, exponiendo solo lo necesario.
// Polimorfismo: 
// Herencia: El mecanismo mediante el cual las clases inferiores heredan atributos y comportamientos de las clases superiores, promoviendo la reutilización del código y la creación de jerarquías.
