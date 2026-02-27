
import { 
    getsingleData, getAllUserData } from "./fire.js";
// Admin status check karein
const checkAdmin = localStorage.getItem("admin");

// Redirect function (isi file mein define karein taaki import error na aaye)
function redirectUser(location, delayInMs) {
    console.log("Access Denied. Redirecting...");
    setTimeout(() => {
        window.location.href = location;
    }, delayInMs);
}

// Logic: Agar admin "true" nahi hai YA storage khali hai
if (checkAdmin !== "true" || localStorage.length === 0) {
    redirectUser("index.html", 2000); // 2000ms = 2 seconds
} else {
    console.log("Welcome Admin! Access Granted.");
    // Yahan aapka baaki admin panel ka kaam shuru hoga
}

let getsingleBtn = document.getElementById("get-single-btn");
let getAllBtn = document.getElementById("get-all-btn");
getsingleBtn.addEventListener("click", () =>{
    getsingleData("ok9AH2Tn0NQ3kEb939mrOuOcKBB3")
})



console.log("ye")
  const getAll = await getAllUserData()
  let mainDiv = document.getElementById("main-carder-data-div")

getAll.forEach((item) => {
mainDiv.innerHTML += `

    <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.email}</h5>
    <p class="card-text">${item.password}</p>
    <a href="#" class="btn btn-primary">Update</a>
  </div>
</div>
`
})


let emails = localStorage.getItem("admin-emailing")
    let dymanicName = document.getElementById("dynamic-name")
    console.log(dymanicName)
    let adminName = document.getElementById("admin-name")
    console.log(adminName)
    dymanicName.innerText = emails.split("@")[0]
    adminName.innerText = emails.split("@")[0]


// const getAll = await getAllUserData()
// console.log(getAll)

