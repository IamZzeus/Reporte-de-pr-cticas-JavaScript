// Función para obtener usuarios de la API
const obtenerUsuarios2 = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => mostrarUsuarios2(data))
        .catch(error => console.log('Error:', error));
};

// Función para mostrar los usuarios en el HTML
const mostrarUsuarios2 = (users) => {
    const usersUl = document.getElementById('users2');
    usersUl.innerHTML = ''; // Limpiamos la lista antes de agregar nuevos usuarios
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.email; 
        usersUl.appendChild(li);
    });
};

// Llamamos a la función para obtener y mostrar los usuarios
obtenerUsuarios2();
