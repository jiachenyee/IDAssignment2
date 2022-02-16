//declaring variables messages
var alphabets = /[a-zA-Z]/g;
var numerals = /\d/;
const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;


//for data validations
function setInputError(inputElement, message){
    inputElement.classList.add("form__input-error");
    inputElement.parentElement.querySelector(".form__input-message-error").textContent = message;
}
//for data validations
function clearInputError(inputElement){
    inputElement.classList.remove("form__input-error");
    inputElement.parentElement.querySelector(".form__input-message-error").textContent = "";
}


function validationSignUp(){
    let pwd = "";
    let inputValidator = {
      "usernameTF" : false,
      "emailTF" : false,
      "passwordTF" : false,
      "confirmPwdTF" : false
    }

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            //data validation for input fields

            //username field
            if (e.target.id === "username"){
                if(e.target.value.length == 0){
                    setInputError(inputElement, "Username is required.");
                }
                else if(e.target.value.length > 0 && e.target.value.length < 8){
                    setInputError(inputElement, "Username must be at least 8 characters in length.");
                }
                else{
                    let name = "usernameTF";
                    inputValidator[name] = true;
                }
            }

            //email field
            if (e.target.id === "emailaddr"){
                if(e.target.value.length == 0){
                    setInputError(inputElement, "Email is required.");
                }
                else if(!(e.target.value.includes("@") && e.target.value.includes("."))){
                  setInputError(inputElement, "Email format is invalid (missing @ or .).");
                }
                else{
                  let name = "emailTF";
                  inputValidator[name] = true;
                }
            }

            //password field
            if (e.target.id === "password"){
                if(e.target.value.length == 0){
                    setInputError(inputElement, "Password is required.");
                }
                else if(e.target.value.length < 8){
                    setInputError(inputElement, "Password must be at least 8 characters in length");
                }
                else if(!alphabets.test(e.target.value)){
                     setInputError(inputElement, "Password must contain at least a letter.");
                }
                else if(!numerals.test(e.target.value)){
                    setInputError(inputElement, "Password must contain at least a number");
                }
                else if(!specialChars.test(e.target.value)){
                     setInputError(inputElement, "Password must contain at least a special character(symbols)");
                }
                else{
                    let name = "passwordTF";
                    inputValidator[name] = true;
                }
                pwd = e.target.value;
            }


            //confirm password field
            if(e.target.id === "cfmpassword"){
              if(e.target.value.length == 0){
                  setInputError(inputElement, "Password is required.");
              }
              else if(e.target.value != pwd){
                  setInputError(inputElement, "Password does not match the above");
              }
              else{
                  let name = "confirmPwdTF";
                  inputValidator[name] = true;
              }
            }


            let allTrue = Object.keys(inputValidator).every((item) => {
                return inputValidator[item] === true;
            });
    
            console.log(inputValidator);
            console.log(allTrue);
    
            if (allTrue) {
                document.getElementById("next1").disabled = false;
            }
            else{
                document.getElementById("next1").disabled = true;
            }
            
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });

    });
}



function clearLocalStorage(){
    //localStorage.removeItem("username");
    //localStorage.removeItem("email");
    //localStorage.removeItem("password");
    localStorage.removeItem("addr1");
    localStorage.removeItem("addr2");
    localStorage.removeItem("unitno");
    localStorage.removeItem("postal");
    localStorage.removeItem("cardno");
    localStorage.removeItem("name");
    localStorage.removeItem("expdate");
    localStorage.removeItem("cvc");
    localStorage.removeItem("contact");
}




function clickLink(){
    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        window.location.href = "signin.html";
    });
}



function submitSignUpForm(){
    localStorage.setItem("username" , document.getElementById("username").value);
    localStorage.setItem("email" , document.getElementById("emailaddr").value);
    localStorage.setItem("password" , document.getElementById("password").value);
    console.log("done");
    //clearLocalStorage();
    window.open(`/addressform.html`, "_self");
}


document.addEventListener("DOMContentLoaded" , e =>{
    validationSignUp();
    document.getElementById("next1").addEventListener("click", f => {
        f.preventDefault();
        submitSignUpForm();
    });
});