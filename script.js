document.addEventListener("DOMContentLoaded", function () {
let firstName = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
let email = document.getElementById("email");
let password = document.getElementById("password");

const resultFirst = document.getElementById("result_first");
const resultLast = document.getElementById("result_last");
const resultEmail = document.getElementById("result_email");
const resultPassword = document.getElementById("result_pass");

const button = document.querySelector(".button");

function validateInfos ()
{
    let firstValue = firstName.value; 
    let lastValue = lastName.value;
    let emailValue = email.value;
    let passValue = password.value;  

    resetError();
    

    if (firstValue === "")
    {
        resultFirst.textContent === "First Name cannot be empty";
        document.querySelector(".error_first").style.display = "block";
    }
    else if (!/^[a-zA-Z]+$/.test(firstValue))
    { 
        resultLast.textContent === "First Name must be only letters";
        document.querySelector(".error_first").style.display = "block"; 
    }

    if (lastValue === "")
    {
        resultLast.textContent === "Last Name cannot be empty";
        document.querySelector(".error_last").style.display = "block";
    }
    else if (!/^[a-zA-Z]+$/.test(lastValue))
    { 
        resultLast.textContent === "Last Name must be only letters";
        document.querySelector(".error_last").style.display = "block"; 
    }

    if (emailValue === "")
    {
        resultEmail.textContent = "Email cannot be empty";
        document.querySelector(".error_email").style.display = "block";
    }
    else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/.test(emailValue))
    { 
        resultEmail.textContent = "Email must contains at least six letters and at least one number";
        document.querySelector(".error_email").style.display = "block"; 
    }

    if (passValue === "")
    {
        resultPassword.textContent = "Password cannot be empty";
        document.querySelector(".error_pass").style.display = "block";
    }
    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$/.test(passValue))
    { 
        resultPassword.textContent = "Password must contains at least six letters and at least one number";
        document.querySelector(".error_pass").style.display = "block"; 
    }
}

    function resetError () 
    {  
    resultFirst.textContent = "";
    resultLast.textContent = "";
    resultEmail.textContent = "";
    resultPassword.textContent = "";

    document.querySelector(".error_first").style.display = "none"; 
    document.querySelector(".error_last").style.display = "none"; 
    document.querySelector(".error_email").style.display = "none"; 
    document.querySelector(".error_pass").style.display = "none"; 
    }    

 
    button.addEventListener("click", function ()
    {   
    console.log("Button clicked");
    button.classList.toggle("clicked");
    validateInfos();
    })
})