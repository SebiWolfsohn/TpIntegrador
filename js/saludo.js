let user = localStorage.getItem('user');

let header = document.querySelector('.header');
console.log(header);
let loginnav = document.querySelector('#login');
let registernav = document.querySelector('#registro');


let saludoElement = document.createElement('span');
let logoutLink = document.createElement('a');
logoutLink.href = '#';
logoutLink.textContent = 'Logout';


function logoutFunction() {
  localStorage.removeItem('user');
  saludoElement.style.display = 'none';
  logoutLink.style.display = 'none';
  if (loginnav) loginnav.style.display = 'block';
  if (registernav) registernav.style.display = 'block';
}


logoutLink.addEventListener('click', function(event) {
  event.preventDefault();
  logoutFunction();
});

if (user) {
  user = JSON.parse(user)
  saludoElement.textContent = `Bienvenido: ${user.email}`;
  header.appendChild(saludoElement);
  header.appendChild(logoutLink);

  
  if (loginnav) loginnav.style.display = 'none';
  if (registernav) registernav.style.display = 'none';
  console.log(registernav);
}


document.addEventListener('DOM', function() {
});