let log = document.getElementById("logout-btn")

log.addEventListener("click" , () =>{
       localStorage.setItem("login", "false");
    window.location.href = "login.html"
})

    const cheackLogin = localStorage.getItem("login")
    let localLength = localStorage


    if(cheackLogin === "false"){
        window.location.href = "login.html"
    }else if(localLength.length == 0){
        window.location.href = "login.html"

    }


    