

    const cheackLogin = localStorage.getItem("login")
    if(cheackLogin === "true"){
        window.location.href = "dashboard.html"
    }
import { signupHandler } from "./fire.js";
console.log("chal raha ho")
// import { signupHandler } from "./fire.js"; 

// const eyeIcon = document.getElementById('eye');
// function togglePasswordVisibility() {
//     const passwordInput = document.getElementById('password');
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



// let btn = document.getElementById("signup-btn")
// console.log(btn)
// btn.addEventListener("click" , () =>{
//     let email = document.getElementById("email").value
// let pass = document.getElementById("password").value
// signupHandler(email,pass)
// window.location.href = "dashboard.html"
// email.value = ""
// pass.value = ""

// })






let bt = document.getElementById("signup-btn")
console.log(bt)
bt.addEventListener("click",() =>{
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    
signupHandler(email.value,password.value)
})