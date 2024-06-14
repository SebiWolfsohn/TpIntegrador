

user.email = email.value;
user.password = password.value;
localStorage.removeItem('user', JSON.stringify(user))
let user = {}


document.noMostrarId('bienvenido')
document.noMostrarId('logout')

document.mostrarId('login')
document.mostrarId('registro')

this.submit();

document.AddId('logout').addEventListener('click', logout);
 

document.addEventListener('click', function() {
    const user = localStorage.getItem('user');
    if (user) {
        document.AddId('bienvenido')
        document.AddId('usuarioEmail')
        document.AddId('logout')
        document.AddId('login')
        document.AddId('registro')
    } else {
        document.AddId('bienvenido')
        document.AddId('logout')
        document.AddId('login')
        document.AddId('registro')
    }
})