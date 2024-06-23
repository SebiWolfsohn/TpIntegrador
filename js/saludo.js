// Obtener el email del usuario desde el local storage
let user = localStorage.getItem('user');

// Obtener elementos del DOM
let header = document.querySelector('.header');
console.log(header);
let loginnav = document.querySelector('#login');
let registernav = document.querySelector('#register');

// Crear elementos de saludo y logout
let saludoElement = document.createElement('span');
let logoutLink = document.createElement('button');
logoutLink.textContent = 'Logout';

// Función para manejar el logout
function logoutFunction() {
  localStorage.removeItem('user');
  saludoElement.style.display = 'none';
  logoutLink.style.display = 'none';
  if (loginnav) loginnav.style.display = 'block';
  if (registernav) registernav.style.display = 'block';
}

// Añadir listener al enlace de logout
logoutLink.addEventListener('click', function(event) {
  event.preventDefault();
  logoutFunction();
});

if (user) {
  user = JSON.parse(user)
  saludoElement.textContent = `Bienvenido: ${user.email}`;
  header.appendChild(saludoElement);
  header.appendChild(logoutLink);

  // Ocultar elementos de login y registro
  if (loginnav) loginnav.style.display = 'none';
  if (registernav) registernav.style.display = 'none';
}

// Agregar evento para que el código se ejecute cuando el DOM esté listo
document.addEventListener('DOM', function() {
});