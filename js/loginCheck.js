window.onload = function checkLogin(){
    if(sessionStorage.getItem("login") === null){
        console.log("not logged in");
    } else {
        console.log("already logged in");
    }
}