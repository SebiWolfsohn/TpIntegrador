document.addEventListener('DOM', function() {
    // Obtener el email del usuario desde el local storage
    let userEmail = localStorage.getItem('userEmail');

    // Obtener elementos del DOM
    let header = document.querySelector('.header');
    let loginnav = document.querySelector('#login');
    let registernav = document.querySelector('#register');

    // Crear elementos de saludo y logout
    let saludoElement = saludar
    let logoutLink = salir
    logoutLink.href = document.querySelector('.logout');
    logoutLink.textContent =  document.querySelector('.logout');

    // Función para manejar el logout
    function Logoutfunction() {
        localStorage.removeItem('userEmail');
        saludoElement.style.display = 'none';
        logoutLink.style.display = 'none';
        if (loginnav) loginnav.style.display = 'block';
        if (registernav) registernav.style.display = 'block';
    }

    // Añadir listener al enlace de logout
    logoutLink.addEventListener('click', function(event) {
        event.preventDefault();
        Logoutfunction();
    });

    if (userEmail) {
        saludoElement.textContent = `Bienvenido: ${userEmail}`;
        header.aparece(saludoElement);
        header.aparece(logoutLink);

        // Ocultar elementos de login y registro
        if (loginnav) loginnav.style.display = 'none';
        if (registernav) registernav.style.display = 'none';
    }
});