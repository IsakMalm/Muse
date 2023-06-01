function loginAttempt(){ // funktion för att logga in
    var accountUsername = document.getElementById("username").value;
    var accountPassword = document.getElementById("password").value;
    if(accountUsername === "" && accountPassword === ""){ // om det inte finns någon text i input rutorna körs denna metod
        console.log("error");
    } else{ // om rutorna är ifyllda sparas informationen från inputen i sessionstorage
        sessionStorage.setItem("username", accountUsername);
        sessionStorage.setItem("password", accountPassword);
        sessionStorage.setItem("login", "verified");
        sessionStorage.setItem("hideItem", "on");
        location.reload();
    }
}

function logOut(){ // funktion för att logga ut
    sessionStorage.removeItem("login");
    sessionStorage.removeItem("hideItem");
    loginBox.style.display = "block";
    loginBox2.style.display = "none";
}

