let form = document.querySelector('#forms');
let email = document.querySelector('.email');
let erroremail = document.querySelector('.mensajeEmail');
let checkbox = document.querySelector('#checkbox'); 
let errorcheckbox = document.querySelector('.mensajeCheckbox');
let respuestaFinal = document.querySelector ('.respuestaFinal');
let linkLogin = document.querySelector('.linkLogin');
let user = {}

linkLogin.style.display = 'none';

form.addEventListener('submit', function (e){
    e.preventDefault();
    let isValid = true;

   if (email.value === '' || email.value.length < 7) {
        erroremail.innerText = 'Por favor escriba su email.';
        erroremail.style.display = 'block';
        isValid = false;
    } else {
        erroremail.style.display = 'none';
    }

  if (!checkbox.checked) {
        errorcheckbox.innerHTML = 'Por favor acepte el campo';
        errorcheckbox.style.display = 'block';
        isValid = false;
    } else {
        errorcheckbox.style.display = 'none';
    }

    if (isValid) {
        form.style.display = 'none';
        user.email = email.value;
        user.checkbox = checkbox.checked;
        localStorage.setItem('user', JSON.stringify(user));
        respuestaFinal.innerText = 'Recibirás un email con las instrucciones para recuperar tu contraseña';
        respuestaFinal.style.display = 'block';
        linkLogin.style.display = 'block';
        form.reset();
    }
    
});