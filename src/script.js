const url = "https://randomuser.me/api/";

const fetchUser = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.results[0];
};

const person = fetchUser(url); // Guardar la promesa en una variable

// create an unordered list
const ul = document.createElement("ul");
document.body.appendChild(ul);

// Manipular la promesa más adelante
person.then((user) => {
    //
    console.log(user);
    const name = document.querySelector("#name");
    name.innerHTML = `${user.name.first} ${user.name.last}`;

    const image = document.querySelector("#profile-image");
    image.src = user.picture.large;
    
    const email = document.querySelector("#email");
    email.innerHTML = user.email;

    const address = document.querySelector("#address");
    address.innerHTML = `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`;

    const phone = document.querySelector("#phone");
    phone.innerHTML = user.phone + " - " + user.cell;



}).catch((error) => console.error(error));
