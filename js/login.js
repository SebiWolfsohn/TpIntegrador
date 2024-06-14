let form = document.querySelector('form');
let email = document.querySelector('.email');
let password = document.querySelector('.mensaje-contraseña');
let erroremail = document.querySelector('.mensaje-email');
let errorpassword = document.querySelector('.invalid-feedback.password');
let user = {}


form.addEventListener('submit', function (e){
   e.preventDefault();
   if  (email.value == '' || email.value.length < 4){
       erroremail.innerText = 'Completar este campo'
       erroremail.style.display = 'block';
   } else if (password.value == '' || password.value.length < 3){
       errorpassword.innerText = 'Completar este campo'
       errorpassword.style.display = 'block';
   } else {
       user.email = email.value;
       user.password = password.value;
       localStorage.setItem('user', JSON.stringify(user))
   this.submit();
   }
}
)  