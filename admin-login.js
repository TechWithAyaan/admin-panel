


import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEozEk5ILCz53juJbfQmg3hrmQjhsYEl8",
  authDomain: "assigment-b2369.firebaseapp.com",
  projectId: "assigment-b2369",
  storageBucket: "assigment-b2369.firebasestorage.app",
  messagingSenderId: "290532013603",
  appId: "1:290532013603:web:1033666d6f928f0c956396",
  measurementId: "G-0L6Y073DBT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




  let admin1UID = "ExoFj547fhccMX4FcVlNHsboQwy1"
  
  function time(locations,delay) {
      adminEmail()
    localStorage.setItem("admin", "true");

    
    setTimeout(() =>{
      window.location.href = locations
    }, delay+"s")
  } 
  
  const auth = getAuth();
  function mainer(email,password) {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      time("admin.html",30000)
      // Signed in 
      const user = userCredential.user;
      console.log(user.email, "admin email hai")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      
      alert("error" + errorMessage)
    });
    
  }
  let btn = document.getElementById("admin-btn")

  
  btn.addEventListener("click" ,() =>{
    let email = document.getElementById("admin-email").value
    let password = document.getElementById("admin-password").value
    mainer(email,password)
    
  })
  // console.log(document.getElementById("admin-email").value)
  function adminEmail() {
    localStorage.setItem("admin-emailing", document.getElementById("admin-email").value)
  }

  let email = document.getElementById("admin-email").value
  let emails = localStorage.setItem("admin-emailing",email)

export{time,adminEmail}


