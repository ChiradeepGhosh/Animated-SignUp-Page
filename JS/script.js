
function showPassword(i) {
    var inputs = document.getElementsByClassName("passWord");
    var eye = document.getElementsByClassName("false");

    if (inputs[i - 1].type == "password") {
        inputs[i - 1].type = "text";
        eye[i - 1].classList.remove("hide");

    }
    else {
        inputs[i - 1].type = "password";
        eye[i-1].classList.add("hide");
    }
}

var password = document.querySelector(".createPassWord");
var confirmPassword = document.querySelector(".ConfPassWord");
var submitButton = document.querySelector(".btn");

submitButton.addEventListener("click", function(){
    if(confirmPassword.value !== password.value){
        alert("Please enter Confirm Password same as Password");
    }
    else{
        alert("WELCOME OnBoard");
    }
})

var logIn = document.querySelector(".logIn");
logIn.addEventListener("click", function(){
    document.querySelector(".container-form").classList.add("hidden");
    document.querySelector(".SignIn").classList.remove("hidden");
})

var register = document.querySelector(".register");
register.addEventListener("click", function(){
    document.querySelector(".SignIn").classList.add("hidden");
    document.querySelector(".container-form").classList.remove("hidden");

})
