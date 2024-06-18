let erroremail = document.querySelector('mensajeEmail');
let errorcheckbox = document.querySelector('mensajeCheckbox');
let form = document.querySelector('#forms');
let user = {}

form.addEventListener('submit', function (e){
    e.preventDefault();
 
    let email = document.querySelector('.email')
    let checkbox = document.querySelector('.checkbox')
    let forms = document.querySelector('#forms')

    if (email.value == '' || email.value.length < 7){
        erroremail.innerText = 'Porfavor escriba su mail'
        erroremail.style.display = 'block';
    } else if (checkbox.value == '' || checkbox.value){
        errorcheckbox.innerText = 'Por favor acepte el campo Quiero recuperar mi contraseña'
        errorcheckbox.style.display = 'block';
    } else if (forms.value){
        forms.innerHTML = 'Recibirás un email con las instrucciones para recuperar tu contraseña'
        errorForms.style.display = 'block';
    } else {
        user.email = email.value;
        user.checkbox = checkbox.value;
        localStorage.setItem('user', JSON.stringify(user))
        this.submit();
    }
}
)
 