import { loginHandler } from "./fire.js";
// const eyeIcon = document.getElementById('eye');
// function togglePasswordVisibility() {
//     const passwordInput = document.getElementById('login-password');
//     eyeIcon.addEventListener('click', () => {
//         if (passwordInput.type === 'password') {
//             passwordInput.type = 'text';
//             eyeIcon.classList.remove('fa-eye-slash');
//             eyeIcon.classList.add('fa-eye');
//         } else {
//             passwordInput.type = 'password';
//             eyeIcon.classList.remove('fa-eye');
//             eyeIcon.classList.add('fa-eye-slash');
//         }   
// })
// }
// eyeIcon.addEventListener('click', togglePasswordVisibility);

let loginBtn = document.getElementById("login-btn")

loginBtn.addEventListener("click" , () =>{
    let email = document.getElementById("login-email").value
let pass = document.getElementById("login-password").value
loginHandler(email,pass)


})

