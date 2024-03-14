function store(){
    var user= document.querySelector("#user").value
    var uid=localStorage.setItem("user",user);
    event.preventDefault();
    window.location.href = "index.html";
}

