//email validation...
const Email = document.getElementById('Email');
let validEmail = false;
Email.addEventListener('blur', () => {
    console.log('Email is blurred');
    let regex = /([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let strg = Email.value;
    console.log(regex, strg);
    if (regex.test(strg)) {
        console.log('your email is valid');
        Email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log('your email is invalid');
        Email.classList.add('is-invalid');
        validEmail = false;
    }
});
//password validation...
const Password = document.getElementById('Password');
let validPassword = false;
Password.addEventListener('blur', () => {
    console.log('Password is blurred');
    let regex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    let pass = Password.value;
    console.log(regex, pass);
    if (regex.test(pass)) {
        console.log('your Password is valid');
        Password.classList.remove('is-invalid');
        validPassword = true;
    }
    else {
        console.log('your Password is invalid');
        Password.classList.add('is-invalid');
        validPassword = false;

    }
});
const confirmPassword = document.getElementById('confirmPassword');
   
   function validate(){
       if(Password.value != confirmPassword.value){
           alert("Your confirm password is not matching with the password. Please try again");
           return false;
       }
       return true;
   }
   const result = document.getElementById("Email").value;
   const text = document.getElementById("text").innerHTML;
document.getElementById("text").innerHTML="result";