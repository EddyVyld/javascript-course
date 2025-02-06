import userCard from "./UserCard.js";  // Importacion por default


const generateUserCards = ( userArray ) => {
    
    // const cards = userArray.map ( ( element, index, array) => )
    const cards = userArray.map ( ( user ) => userCard(user));

    return cards.join("");
}

export { generateUserCards };


/*
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
const userCard = ( userData ) =>{
   const card = `
    <div class="card">
    <img src="${userData.avatar}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${userData.first_name} ${userData.last_name}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
   `;
};

Kati Sandoval  to  Everyone 2:14 PM
Vamos a realizar como un template?

Sergio Torres 2:15 PM
 [
        {
            "id": 1,
            "email": "george.bluth@reqres.in",
            "first_name": "George",
            "last_name": "Bluth",
            "avatar": "https://reqres.in/img/faces/1-image.jpg"
        },
        {
            "id": 2,
            "email": "janet.weaver@reqres.in",
            "first_name": "Janet",
            "last_name": "Weaver",
            "avatar": "https://reqres.in/img/faces/2-image.jpg"
        },
 ]
*/
