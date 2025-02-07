

import { generateUserCards } from "../modules/Cards/generateUserCard.js"; 

const getUsersUsingAsyncAwait = async ( url ) =>{

    const createCard = (userArray) => {
        document.getElementById("cards").innerHTML = generateUserCards(userArray);
    }

    const resolve = await fetch(url);  // Hace la peticion HTTP a la API reqres.in, que es un sitio para probar APIs
    const users = await resolve.json(); // Convierte la respuesta en JSON
    console.log(users.data); // Muestra los datos en la consola para que puedas trabajar con los datos fácilmente.
    
    createCard(users.data);

};

getUsersUsingAsyncAwait("https://reqres.in/api/users?page=2");


