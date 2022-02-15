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



//-----------------------------------------------------------------------------------------------------------
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
//-------------------------------------------------------------------------------------------------------------







//------------------------------------------------------------------------------------------------------------
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
                setInputError(inputElement, "Postal Code must be 6 digits in length");
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
//-----------------------------------------------------------------------------------------------------------






//-----------------------------------------------------------------------------------------------------------
function validationCard(isCard){
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
                    setInputError(inputElement, "Contact number must be 8 digits in length");
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
                document.getElementById("complete").disabled = false;
            }
            else{
                document.getElementById("complete").disabled = true;
            }
            
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });

    });

}
//---------------------------------------------------------------------------------------------------------






//------------------------------------------------------------------------------------------------------------
function isDateBeforeToday(pickeddate){
    const todayDate = new Date();
    todayDate.setHours(0,0,0,0);
    return pickeddate < todayDate;
}

function validationPayment(){
    var d1 = new Date()
    let inputValidator = {
      "cardnoTF" : false,
      "nameTF" : false,
      "expirydateTF" : false,
      "cvcTF" : false
    }

    document.querySelectorAll(".form__input").forEach(inputElement => {
      inputElement.addEventListener("blur", e => {
          //data validation for input fields

          //card number field
          if (e.target.id === "cardNumber"){
              if(e.target.value.length == 0){
                  setInputError(inputElement, "A card number is required.");
              }
              else if(e.target.value.length != 16){
                  setInputError(inputElement, "Card number must be 16 digits in length.");
              }
              else{
                  let name = "cardnoTF";
                  inputValidator[name] = true;
              }
          }

          //name field
          if (e.target.id === "name"){
              if(e.target.value.length == 0){
                  setInputError(inputElement, "Your name is required.");
              }
              else{
                let name = "nameTF";
                inputValidator[name] = true;
              }
          }

          //expiry date field
          if (e.target.id === "expiryDate"){
              if(e.target.value.length == 0){
                  setInputError(inputElement, "Expiry Date is required.");
              }
              else if(isDateBeforeToday(e.target.value)){
                  setInputError(inputElement, "Card is already expired");
              }
              else{
                  let name = "expirydateTF";
                  inputValidator[name] = true;
              }
              pwd = e.target.value;
          }


          //cvc password field
          if(e.target.id === "cvc"){
              if(e.target.value.length == 0){
                  setInputError(inputElement, "CVC is required.");
              }
              else if(e.target.value.length != 3){
                  setInputError(inputElement, "CVC must be 3 digits in length.");
              }
              else{
                  let name = "cvcTF";
                  inputValidator[name] = true;
              }
          }


          let allTrue = Object.keys(inputValidator).every((item) => {
              return inputValidator[item] === true;
          });

          console.log(inputValidator);

          if (allTrue) {
              document.getElementById("addcard").disabled = false;
          }
          else{
              document.getElementById("addcard").disabled = true;
          }
          
      });

      inputElement.addEventListener("input", e => {
          clearInputError(inputElement);
      });

  });

}



//acts as main program
document.addEventListener("DOMContentLoaded", () => {
    let next1btn = document.getElementById("next1");
    let next2btn = document.getElementById("next2");
    let completebtn = document.getElementById("complete");
    let addcardbtn = document.getElementById("addcard");

    const signUpForm = document.getElementById("signup");
    const addressForm = document.getElementById("addresses");
    const cardForm = document.getElementById("contactcard");
    const paymentForm = document.getElementById("addpayment");

    if (window.location.pathname.endsWith("signup.html"))
    {
        while(next1btn.disabled == true)
        {
            validationSignUp();
        }
        console.log("hi there");
        signUpForm.addEventListener("submit", e => {
            e.preventDefault();
            var username = document.getElementById("username").value;
            var email = document.getElementById("emailaddr").value;
            var password = document.getElementById("password").value;
            
            var request = new XMLHttpRequest;
            localStorage.setItem("username" , username);
            localStorage.setItem("email" , email);
            localStorage.setItem("password" , password);

            window.location.href = "addressform.html";
        });
    }
    else if (window.location.pathname.endsWith("addressform.html"))
    {
        while(next2btn.disabled == true)
        {
            validationAddress();
        }

        addressForm.addEventListener("submit", e => {
            e.preventDefault();
            window.location.href = "cardform.html";
        });
    }
    else if (window.location.pathname.endsWith("cardform.html"))
    {
        while(completebtn.disabled == true)
        {
            validationCard(true);
        }
        cardForm.addEventListener("submit", e => {
            e.preventDefault();
            window.location.href = "index.html";
        });
    }
    else if (window.location.pathname.endsWith("paymentform.html"))
    {
        while(addcardbtn.disabled == true)
        {
            validationPayment();
        }
        paymentForm.addEventListener("submit", e => {
            e.preventDefault();
            window.location.href = "cardform.html";
        });
    }


    
});

function addNewCard(){
    if (window.location.pathname.endsWith("cardform.html")){
        document.getElementById("plusButton").addEventListener("click", e => {
            e.preventDefault();
            window.location.href = "paymentform.html";
        });
    }
}

function clickLink(){
    if (window.location.pathname.endsWith("signup.html")){
        document.querySelector("#linkLogin").addEventListener("click", e => {
            e.preventDefault();
            window.location.href = "signin.html";
        });
    }
}


