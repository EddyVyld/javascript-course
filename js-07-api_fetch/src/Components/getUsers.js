
/**
 *  Obtener los usuarios de la siguiente URL e imprimir en consola
 *  https://reqres.in/
 * 
 *  Lista de usuarios: https://reqres.in/api/users?page=2
 */

import { generateUserCards } from "../modules/Cards/generateUserCard.js";


const getUsers = ( url ) =>{

    
    const createCards = ( userArray ) =>{
        document.getElementById("cards").innerHTML = generateUserCards (userArray); 
    }
    
fetch (url)
.then(response => response.json())
    .then((user) => createCards (user.data))
.catch(error => console.log(error))
.finally ( ()=>console.log("Ha terminado")) 

};
// getUsers("https://reqres.in/api/users?delay=5&page=1"); // Pagina 1 con retardo de 5 segundos
getUsers("https://reqres.in/api/users?page=2");


