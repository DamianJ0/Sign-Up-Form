const pass = document.querySelector('#password');
const nick = document.querySelector('#nickname')
const checkPass = document.querySelector('#check-password')
const email = document.querySelector('#email')
const btn = document.querySelector('button')
const passwordValidation1 = document.querySelector('.password-validation1')
const passwordValidation2 = document.querySelector('.password-validation2')
const nicknameValidation = document.querySelector('.nickname-validation')
const emailValidation = document.querySelector('.email-validation')
const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;
let messagePasswd = "";
let messagePasswd2 = "";
let messageNickname= "";
let messageEmail = "";

const validation = () => {
     if(pass.value.length < minValue){
        messagePasswd='Hasło musi zawierać co najmniej 10 znaków w tym jedna litere, jedna cyfre i jeden znak specjalny!';
    }
    passwordValidation1.textContent = messagePasswd;
    if(checkPass === pass){
        messagePasswd2=''
    }else{
        messagePasswd2='Podane hasła są różne'
    }
    passwordValidation2.textContent = messagePasswd2;

    if(!regex.test(email)){
        
    } else {
        messageNickname = 'Nickname nie może zawierać znaków specjalnych'
    }
    nicknameValidation.textContent = messageNickname;
    
    if(regex.test(email)){
    }else {
        messageEmail = 'Podany email jest błędny'
    }
    emailValidation.textContent = messageEmail
}

btn.addEventListener('click', validation)




