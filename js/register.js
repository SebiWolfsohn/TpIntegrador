let form = document.querySelector('form');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let rePassword = document.querySelector('#rePassword');
let terminosYcondiciones = document.querySelector('#terminosYcondiciones');
let erroremail = document.querySelector('.invalid-feedback.email');
let errorpassword = document.querySelector('.invalid-feedback.password');
let errorrePassword = document.querySelector('.invalid-feedback.rePassword');
let errorterminosYcondiciones = document.querySelector('.invalid-feedback.terminosYcondiciones');
let user = {}



form.addEventListener('submit', function (e){
    e.preventDefault();
    if (email.value == '' || email.value.length < 5){
        erroremail.innerText = 'Completar este campo'
        erroremail.style.display = 'block';
    } else if (password.value == ''){
        errorpassword.innerText = 'Completar este campo'
        errorpassword.style.display = 'block';
    } else if (password.value == '' || password.value.length < 6){
        errorpassword.innerText = 'Debe ingresar al menos 6 caracteres'
        errorpassword.style.display = 'block';
    } else if (rePassword.value == '' || rePassword.value.length < 3){
        errorrePassword.innerText = 'Completar este campo'
        errorrePassword.style.display = 'block';
    } else if (rePassword.value !== password.value || rePassword.value.length < 3){
        errorrePassword.innerText = 'Las contraseñas no coinciden'
        errorrePassword.style.display = 'block';
    } else if (!terminosYcondiciones.checked){
        errorterminosYcondiciones.innerText = 'Aceptar los terminos y condiciones'
        errorterminosYcondiciones.style.display = 'block';
    } else {
        user.email = email.value;
        user.password = password.value;
        user.rePassword = rePassword.value;
        user.terminosYcondiciones = terminosYcondiciones.value;
        localStorage.setItem('user', JSON.stringify(user))
        this.submit();
    }
}
)