const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const btn = document.querySelector('button')
const passwordValidation = document.querySelector('.password-validation')
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;
let message = "";

const checkPasswd= () => {
     if(pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers)){
        message='Hasło musi zawierać co najmniej 10 znaków w tym jedna litere, jedna cyfre i jeden znak specjalny!';
    }
    passwordValidation.textContent = message;
}
btn.addEventListener('click', checkPasswd)


