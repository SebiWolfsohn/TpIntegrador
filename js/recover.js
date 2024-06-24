document.addEventListener('DOMContentLoaded', function() {
    let form = document.querySelector('#form');
    let email = document.querySelector('#email');
    let erroremail = document.querySelector('.invalid-feedback.email');
    let checkbox = document.querySelector('#checkbox');
    let errorcheckbox = document.querySelector('.invalid-feedback.checkbox');
    let respuestaFinal = document.querySelector('#respuestaFinal');
    let linkLogin = document.querySelector('#linkLogin');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        erroremail.style.display = 'none';
        errorcheckbox.style.display = 'none';
        respuestaFinal.textContent = '';
        linkLogin.style.display = 'none';
        let valid = true;

        if (email.value === '' || email.value.length < 7) {
            erroremail.innerText = 'Por favor escriba su email';
            erroremail.style.display = 'block';
            valid = false;
        }

        if (!checkbox.checked) {
            errorcheckbox.innerText = 'Por favor acepte el campo Quiero recuperar mi contraseña';
            errorcheckbox.style.display = 'block';
            valid = false;
        }

        if (valid) {
            respuestaFinal.innerText = 'Recibirás un email con las instrucciones para recuperar tu contraseña';
            linkLogin.style.display = 'block';
        }
    });
});