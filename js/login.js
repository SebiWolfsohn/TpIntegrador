let form = document.querySelector('form');
let email = document.querySelector('.email');
let password = document.querySelector('.password');
let erroremail = document.querySelector('.mensaje-email');
let errorpassword = document.querySelector('.mensaje-contraseña');
let user = {}


form.addEventListener('submit', function (e){
   e.preventDefault();
   if  (email.value == '' || email.value.length < 5){
       erroremail.innerText = 'Completar este campo'
       erroremail.style.display = 'block';
   } if (password.value == '' || password.value.length < 6){
       errorpassword.innerText = 'Completar este campo'
       errorpassword.style.display = 'block';
       
   } else {
       user.email = email.value;
       user.password = password.value;
       localStorage.setItem('user', JSON.stringify(user))
   this.submit();
     location.href = './index.html'
   }
}
)  