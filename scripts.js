let valorElement = document.querySelector("#valor");
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let passwordElement = document.querySelector("#password")

let containerPassword = document.querySelector("#container-password")



let charset = "abcdfghijklmnopqrsty1234!@#$abc123456789";
let novaSenha = "";


valorElement.innerHTML = sliderElement.value;


slider.oninput = function(){
    valorElement.innerHTML = this.value;
}


function generatePassword(){
    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n))
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
}