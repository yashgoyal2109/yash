
function login() {
    event.preventDefault();
    var user= document.querySelector("#user").value
    var uid=localStorage.setItem("user",user);
    window.location.href = "index.html";
    }
    function toggleForm() {
        event.preventDefault();
        var loginForm = document.getElementById("login-form");
        var signupForm = document.getElementById("signup-form");
        if (loginForm.style.display === "none") {
            loginForm.style.display = "flex";
            signupForm.style.display = "none";
        } else {
            loginForm.style.display = "none";
            signupForm.style.display = "flex";
        }
}

