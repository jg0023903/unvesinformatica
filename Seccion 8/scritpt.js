const usersContainer = document.querySelector("#users");
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
    usersContainer.innerHTML = "";
    users.forEach(user => {
    const card = document.createElement("div");
    card.classList.add("user-card");
    card.innerHTML = `
    <h2>${user.name}</h2>
    <p><strong>Usuario:</strong> ${user.username}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Ciudad:</strong> ${user.address.city}</p>
    `;
    usersContainer.appendChild(card);
    });
    })
    .catch(error => {
    usersContainer.innerHTML = "<p>Error al cargar los datos.</p>";
    console.error(error);
    });