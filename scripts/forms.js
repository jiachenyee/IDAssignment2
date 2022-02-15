//declaring variables
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

function nextForm(){
    if(window.location.pathname.endsWith("signup.html")){
        document.getElementById("next1").addEventListener("click", e => {
            e.preventDefault();
            window.location.href = "addressform.html";
        });
    } else if (window.location.pathname.endsWith("addressform.html")){
        document.getElementById("next2").addEventListener("click", e =>{
            e.preventDefault();
            window.location.href = "cardform.html"
        });
    } else if (window.location.pathname.endsWith("cardform.html")){
        document.getElementById("plusButton").addEventListener("click", e => {
            e.preventDefault();
            window.location.href = "paymentform.html";
        });
    } else if (window.location.pathname.endsWith("signup.html")){
        document.querySelector("#linkLogin").addEventListener("click", e => {
            e.preventDefault();
            window.location.href = "signin.html";
        });
    }
    
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

function validationAddress(){
    let inputValidator = {
      "addrlineTF" : false,
      "postalcodeTF" : false
    }

    document.querySelectorAll(".form__input").forEach(inputElement => {
      inputElement.addEventListener("blur", e => {
          //data validation for input fields

          //address field
          if (e.target.id === "addrLine1"){
              if(e.target.value.length == 0){
                  setInputError(inputElement, "An address is required.");
              }
              else{
                  let name = "addrlineTF";
                  inputValidator[name] = true;
              }
          }

          //unit no field
          if (e.target.id === "unitNo" && e.target.value.length > 0){
              if( !e.target.value.includes("#") && !e.target.value.includes("-") ){
                  setInputError(inputElement, "Format of Unit No. is Invalid");
              }
          }


          //postal code field
          if(e.target.id === "postalCode"){
            if(e.target.value.length == 0){
                setInputError(inputElement, "Postal Code is required.");
            }
            else if(e.target.value.length != 6){
                setInputError(inputElement, "Postal Code must be 6 numbers in length");
            }
            else{
                let name = "postalcodeTF";
                inputValidator[name] = true;
            }
          }


          let allTrue = Object.keys(inputValidator).every((item) => {
              return inputValidator[item] === true;
          });
  
          console.log(inputValidator);
  
          if (allTrue) {
              document.getElementById("next2").disabled = false;
          }
          else{
              document.getElementById("next2").disabled = true;
          }
          
      });

      inputElement.addEventListener("input", e => {
          clearInputError(inputElement);
      });

  });

}



function validationCard(isCard){
    let isCard;
    let inputValidator = {
      "cardTF" : false,
      "contactTF" : false
    }

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            //data validation for input fields

            //contact field
            if (e.target.id === "contactNo"){
                if(e.target.value.length == 0){
                    setInputError(inputElement, "A contact number is required.");
                }
                else if(e.target.value.length != 8){
                    setInputError(inputElement, "Contact number must be 8 numbers in length");
                }
                else{
                    let name = "contactTF";
                    inputValidator[name] = true;
                }
            }

            //card field
            if (isCard == true){
                let name = "cardTF";
                inputValidator[name] = true;
            }



            let allTrue = Object.keys(inputValidator).every((item) => {
                return inputValidator[item] === true;
            });

            console.log(inputValidator);

            if (allTrue) {
                document.getElementById("next2").disabled = false;
            }
            else{
                document.getElementById("next2").disabled = true;
            }
            
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });

    });

}


function validationPayment(){
    let inputValidator = {
      "addrlineTF" : false,
      "postalcodeTF" : false
    }

    document.querySelectorAll(".form__input").forEach(inputElement => {
      inputElement.addEventListener("blur", e => {
          //data validation for input fields

          //address field
          if (e.target.id === "addrLine1"){
              if(e.target.value.length == 0){
                  setInputError(inputElement, "An address is required.");
              }
              else{
                  let name = "addrlineTF";
                  inputValidator[name] = true;
              }
          }

          //unit no field
          if (e.target.id === "unitNo" && e.target.value.length > 0){
              if( !e.target.value.includes("#") && !e.target.value.includes("-") ){
                  setInputError(inputElement, "Format of Unit No. is Invalid");
              }
          }


          //postal code field
          if(e.target.id === "postalCode"){
            if(e.target.value.length == 0){
                setInputError(inputElement, "Postal Code is required.");
            }
            else if(e.target.value.length != 6){
                setInputError(inputElement, "Postal Code must be 6 numbers in length");
            }
            else{
                let name = "postalcodeTF";
                inputValidator[name] = true;
            }
          }


          let allTrue = Object.keys(inputValidator).every((item) => {
              return inputValidator[item] === true;
          });

          console.log(inputValidator);

          if (allTrue) {
              document.getElementById("next2").disabled = false;
          }
          else{
              document.getElementById("next2").disabled = true;
          }
          
      });

      inputElement.addEventListener("input", e => {
          clearInputError(inputElement);
      });

  });

}



//acts as main program
document.addEventListener("DOMContentLoaded", () => {
    nextForm();
    let next1 = document.getElementById("next1");
    let next2 = document.getElementById("next2");
    let complete = document.getElementById("complete");
    if (window.location.pathname.endsWith("signup.html") && next1.disabled == true){
        validationSignUp();
    } else if (window.location.pathname.endsWith("addressform.html") && next2.disabled == true){
        validationAddress();
    } else if (window.location.pathname.endsWith("cardform.html") && complete.disabled == true){
        validationAddress();
    }

    
});


/*
function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector(".form__message");
  
    messageElement.textContent = message;
    messageElement.classList.remove("form__message-success", "form__message-error");
    messageElement.classList.add('form__message-${type}');
  }
  
  function setInputError(inputElement, message){
    inputElement.classList.add("form__input-error");
    inputElement.parentElement.querySelector(".form__input-message-error").textContent = message;
  }
  
  
  function clearInputError(inputElement){
    inputElement.classList.remove("form__input-error");
    inputElement.parentElement.querySelector(".form__input-message-error").textContent = "";
  }
  
  document.addEventListener("DOMContentLoaded", () =>{
    const loginForm = document.querySelector("#signin");
    const createAccountForm = document.querySelector("#signup1");
  
    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
      e.preventDefault();
      loginForm.classList.add("form--hidden");
      createAccountForm.classList.remove("form--hidden");
    });
  
    document.querySelector("#linkLogin").addEventListener("click", e => {
      e.preventDefault();
      loginForm.classList.remove("form--hidden");
      createAccountForm.classList.add("form--hidden");
    });
  
    loginForm.addEventListener("submit", e => {
      e.preventDefault();
  
      //perform your ajax/fetch login
  
      setFormMessage(loginForm, "error", "Invalid username/password combination");
    });
  
    document.querySelectorAll(".form__input").forEach(inputElement => {
      inputElement.addEventListener("blur", e => {
        if (e.target.id === "username" && e.target.value.length > 0 && e.target.value.length < 8){
          setInputError(inputElement, "Username must be at least 8 characters in length.");
        }
      });
  
      inputElement.addEventListener("input", e => {
        clearInputError(inputElement);
      });
    });
  });
  */