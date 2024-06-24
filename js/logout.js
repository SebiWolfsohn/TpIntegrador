let logout = document.querySelector('logout');
let bienvenido = document.querySelector('bienvenido');
let usuarioEmail = document.querySelector('usuarioEmail');
let login = document.querySelector('login');
let registro = document.querySelector('registro');

function logoutFuncion() {
    localStorage.removeItem('user')
    bienvenido.style.display = 'none'; 
    logout.style.display = 'none';
    login.style.display = 'block';
    registro.style.display = 'block';
    login.style.display = 'block';
    registro.style.display = 'block';

}

logout.addEventListener('click', logout)