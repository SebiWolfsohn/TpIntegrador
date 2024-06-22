// Obtener el email del usuario desde el local storage
let userEmail = localStorage.getItem('userEmail');

// Obtener elementos del DOM
let header = document.querySelector('.header');
console.log(header);
let loginnav = document.querySelector('#login');
let registernav = document.querySelector('#register');

// Crear elementos de saludo y logout
let saludoElement = document.createElement('span');
let logoutLink = document.createElement('a');
logoutLink.href = 'file:///C:/Users/Lenovo/Desktop/programacionudesa-digitalhouse/github/Tpintegrador/js/logout.js'; 
logoutLink.textContent = 'Logout';

// Función para manejar el logout
function logoutFunction() {
  localStorage.removeItem('userEmail');
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

if (userEmail) {
  saludoElement.textContent = `Bienvenido: ${userEmail}`;
  header.appendChild(saludoElement);
  header.appendChild(logoutLink);

  // Ocultar elementos de login y registro
  if (loginnav) loginnav.style.display = 'none';
  if (registernav) registernav.style.display = 'none';
}

// Agregar evento para que el código se ejecute cuando el DOM esté listo
document.addEventListener('DOM', function() {
});