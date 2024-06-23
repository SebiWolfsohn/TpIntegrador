let form = document.querySelector('#forms');
let email = document.querySelector('.email');
let erroremail = document.querySelector('.mensajeEmail');
let checkbox = document.querySelector('#checkbox'); 
let errorcheckbox = document.querySelector('.mensajeCheckbox');
let errorForms = document.querySelector('.errorForms')
let form = document.querySelector('#forms');
let user = {}

linkLogin.style.display = 'none';

form.addEventListener('submit', function (e) {
    e.preventDefault();
 
    let email = document.querySelector('.email')
    let checkbox = document.querySelector('.checkbox')
    let forms = document.querySelector('#forms')

    if (email.value == '' || email.value.length < 7){
        erroremail.innerText = 'Porfavor escriba su mail'
        erroremail.style.display = 'block';
    } else if (checkbox.value == '' || checkbox.value){
        errorcheckbox.innerHTML = 'Por favor acepte el campo Quiero recuperar mi contraseña'
        errorcheckbox.style.display = 'block';
    } else if (!forms.value){
        forms.innerHTML = 'Recibirás un email con las instrucciones para recuperar tu contraseña'
        errorForms.style.display = 'block';
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