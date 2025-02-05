
  
  /**
   *  Cambiar el contenido de un elemento HTML por medio de su ID
   */
  const changeElementById = () =>{
    // document: representa cualquier página web carga en el navegador
    //         sirve como punto e entrada al contenido de la página.
    //         document es el objeto principal del DOM.
      const descripcionOperadores = document.getElementById("Descripcion-operadores");
      console.log( descripcionOperadores );
      descripcionOperadores.innerHTML = `<span class="text-warning"> document</span>: representa cualquier página web carga en el navegador.`;
  }
  changeElementById();

/**
 * Modificar elementos por su tag(etiqueta HTML)
 */
const changeElementsByTagName =  () => {
    const listItems = document.getElementsByTagName("li");
    console.log( listItems );
 }
 changeElementsByTagName();


/**
/**
 * Acceder a un elemento usando el selector universar
 */
const getElementsByQuerySelector = () =>{
    // document.getElementById("descripcion-operadores");
const element = document.querySelector("#Descripcion-operadores");
console.log(element);

const elementParagraph = document.querySelector("p"); // Seleccionar el primer paragraph que se encuentre    
console.log( elementParagraph );

const classTextCenter = document.querySelector(".text-center"); // Seleccionar el primer elemento con la clase text-center
console.log( classTextCenter );

const anchorAndTextWarning = document.querySelector("a");
console.log( anchorAndTextWarning)

}

getElementsByQuerySelector();

/**
 * Acceder a varios elementos usando el selector universal
 En resumen me da todos
 * 
 */
const getListItemsByQuerySelector = () =>{
    const listItems = document.querySelectorAll("main li");
    console.log( listItems );
}
getListItemsByQuerySelector();

// ----------------------- Ejercicio ----------------------------------
// Seleccionar la imagen de dinosaurio que se muestra.
// mostrar en consola el objeto

const getDinosaurio = ( ) => {
    const getImagenDragon = document.querySelector("main img");
    console.log(getImagenDragon); 
    return getImagenDragon; 
}

getDinosaurio ( );

// Cambiar la imagen de dinosaurio a la imagen del ninja
const changeImage = ( ) => {
    const refImag = getImagenDragon ();
    refImag.src = "/public/images/Ninja.jpg";
    refImag.alt = "Ninja";
 }

 const imagenPrincipal = getDinosaurio();

imagenPrincipal.addEventListener( "click" , () =>{
changeImage();
});


// ------------------ Propiedades de visualización ---------------
//                       Desaparecer el elemento
// display : none (quitar el elemento del DOM)
// visibility: hidden (ocultar el elemento)
// refBtnPrimary = document.quearySelector("#btn-primary")
refBtnPrimary = document.getElementById("btn-primary");
refBtnSecondary = document.getElementById("btn-secondary");
refBtnSuccess = document.getElementById("btn-success");

refBtnPrimary.addEventListener ("click" , () =>{
    refBtnPrimary.style.display = "none";
});

// Aplicar visibility = "hidden" para el btn-secondar
// y

refBtnSecondary.addEventListener("click", () => {
    refBtnSecondary.style.visibility = "hidden";
}); 


// Reestablecer la visualizacion de los botones primary y secondary
// Usando el evento mouseover : Se activa cuando el puntero del ratón pasa sobre el botón
// display: "block"      visibility: "visible"

refBtnSuccess.addEventListener("mouseover", () => {
    refBtnPrimary.style.display = "block"; 
    refBtnSecondary.style.visibility = "visible"; 
});