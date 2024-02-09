// Importamos la librería Axios desde la URL de CDN
// Referencia: https://github.com/axios/axios
// Esta librería nos permitirá hacer peticiones HTTP de manera sencilla y legible
// Justificación: Utilizamos Axios en lugar de Fetch porque ofrece una sintaxis más limpia y fácil de usar.
// Esto hace que nuestro código sea más legible y fácil de mantener.
// Además, Axios ofrece un soporte más amplio para diferentes navegadores.

// Función para obtener un usuario aleatorio desde la API
async function getUser() {
    try {
        // Hacemos una solicitud GET a la API "randomuser.me" para obtener un usuario aleatorio
        const response = await axios.get('https://randomuser.me/api/');
        
        // Extraemos los datos del usuario desde la respuesta
        const userData = response.data.results[0];

        // Mostramos los datos del usuario en el elemento HTML con el id "userData"
        document.getElementById('userData').innerHTML = `
            <img src="${userData.picture.medium}" alt="User">
            <p>Nombre: ${userData.name.first} ${userData.name.last}</p>
            <p>Correo Electrónico: ${userData.email}</p>
            <p>Género: ${userData.gender}</p>
        `;
    } catch (error) {
        // En caso de error, mostramos un mensaje en la consola del navegador
        console.error('Error al obtener el usuario:', error);
    }
}

// Event listener para el botón "Obtener Usuario Aleatorio"
document.getElementById('getUserBtn').addEventListener('click', getUser);

