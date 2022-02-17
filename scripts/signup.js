//declaring variables for validation
var alphabets = /[a-zA-Z]/g;
var numerals = /\d/;
const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;


//adding validations message - error msg
function setInputError(inputElement, message){
    inputElement.classList.add("form__input-error");
    inputElement.parentElement.querySelector(".form__input-message-error").textContent = message;
}


//clearing validations message
function clearInputError(inputElement){
    inputElement.classList.remove("form__input-error");
    inputElement.parentElement.querySelector(".form__input-message-error").textContent = "";
}


//execute data validation for sign up form
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


//remove values for specific keys in session storage
function clearLocalStorage(){
    //localStorage.removeItem("username");
    //localStorage.removeItem("email");
    //localStorage.removeItem("password");
    sessionStorage.removeItem("addr1");
    sessionStorage.removeItem("addr2");
    sessionStorage.removeItem("unitno");
    sessionStorage.removeItem("postal");
    sessionStorage.removeItem("cardno");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("expdate");
    sessionStorage.removeItem("cvc");
    sessionStorage.removeItem("contact");
}


//main program execution
document.addEventListener("DOMContentLoaded" , e =>{
    validationSignUp();
    document.getElementById("next1").addEventListener("click", f => {
        f.preventDefault();
        sessionStorage.setItem("username" , document.getElementById("username").value);
        sessionStorage.setItem("email" , document.getElementById("emailaddr").value);
        sessionStorage.setItem("password" , document.getElementById("password").value);
        console.log("done");
        //clearLocalStorage();
        window.location.href = "addressform.html"
    });
});