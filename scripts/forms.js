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

function submitSignUpForm(){
    alert("form submitted");
    localStorage.setItem("username" , document.getElementById("username").value);
    console.log("1");
    localStorage.setItem("email" , document.getElementById("emailaddr").value);
    console.log("2");
    localStorage.setItem("password" , document.getElementById("password").value);
    setTimeout(() => {console.log("here")},1000);
    clearLocalStorage();
    setTimeout(() => {window.location.href = "addressform.html"},1500);
    
}

function submitAddressForm(){
    localStorage.setItem("addr1" , document.getElementById("addrLine1").value);
    localStorage.setItem("addr2" , document.getElementById("addrLine2").value);
    localStorage.setItem("unitno" , document.getElementById("unitNo").value);
    localStorage.setItem("postal" , document.getElementById("postalCode").value);
    window.location.href = "cardform.html";
}

function submitPaymentForm(){
    localStorage.setItem("cardno" , document.getElementById("cardNumber").value);
    localStorage.setItem("name" , document.getElementById("name").value);
    localStorage.setItem("expdate" , document.getElementById("expiryDate").value);
    localStorage.setItem("cvc" , document.getElementById("cvc").value);
    window.location.href = "cardform.html";
    return true;
}

function submitCardForm(){
    localStorage.setItem("contact" , document.getElementById("contactNo").value);
    window.location.href = "index.html";
}

function postData(){

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


//acts as main program
document.addEventListener("DOMContentLoaded", () => {
    var data = {
        "username" : localStorage.getItem("username"),
        "email" : localStorage.getItem("email"),
        "password" : localStorage.getItem("password"),
        "address1" : localStorage.getItem("addr1"),
        "address2" : localStorage.getItem("addr2"),
        "unitNo" : localStorage.getItem("unitno"),
        "postalCode" : localStorage.getItem("postal"),
        "contact" : localStorage.getItem("contact"),
        "payment" : 
            [{ 
            "cardNo" : localStorage.getItem("cardno"), 
            "name" : localStorage.getItem("naming"), 
            "expiryDate" : localStorage.getItem("expdate"), 
            "cvc" : localStorage.getItem("cvc") 
            }]
    };
    console.log(data);
    console.log(JSON.stringify(data));



    /*
    var username = document.getElementById("username").value;
    var email = document.getElementById("emailaddr").value;
    var password = document.getElementById("password").value;
    var addr1 = document.getElementById("addrLine1").value;
    var addr2 = document.getElementById("addrLine2").value;
    var unitno = document.getElementById("unitNo").value;
    var postal = document.getElementById("postalCode").value;
    var cardno = document.getElementById("cardNumber").value;
    var naming = document.getElementById("name").value;
    var expdate = document.getElementById("expiryDate").value;
    var cvc = document.getElementById("cvc").value;
    var contact = document.getElementById("contactNo").value;




    var postData = false;
    var cardExist = false;

    let next1btn = document.getElementById("next1");
    let next2btn = document.getElementById("next2");
    let completebtn = document.getElementById("complete");
    let addcardbtn = document.getElementById("addcard");

    const signUpForm = document.getElementById("signup");
    const addressForm = document.getElementById("addresses");
    const cardForm = document.getElementById("contactcard");
    const paymentForm = document.getElementById("addpayment");
    */
    if (window.location.pathname.endsWith("signup.html"))
    {
        validationSignUp();
        /*
        signUpForm.addEventListener("submit", e => {
            e.preventDefault();
            //var username = document.getElementById("username").value;
            //var email = document.getElementById("emailaddr").value;
            //var password = document.getElementById("password").value;
            
            localStorage.setItem("username" , username);
            localStorage.setItem("email" , email);
            localStorage.setItem("password" , password);

            window.location.href = "addressform.html";
        });
        */
        
    }
    else if (window.location.pathname.endsWith("addressform.html"))
    {
        validationAddress();
        /*
        addressForm.addEventListener("submit", e => {
            e.preventDefault();
            //var addr1 = document.getElementById("addrLine1").value;
            //var addr2 = document.getElementById("addrLine2").value;
            //var unitno = document.getElementById("unitNo").value;
            //var postal = document.getElementById("postalCode").value;

            localStorage.setItem("addr1" , addr1);
            localStorage.setItem("addr2" , addr2);
            localStorage.setItem("unitno" , unitno);
            localStorage.setItem("postal" , postal);

            window.location.href = "cardform.html";
        });
        */
    }
    else if (window.location.pathname.endsWith("paymentform.html"))
    {
        validationPayment();
        /*
        paymentForm.addEventListener("submit", e => {
            e.preventDefault();
            //var cardno = document.getElementById("cardNumber").value;
            //var naming = document.getElementById("name").value;
            //var expdate = document.getElementById("expiryDate").value;
            //var cvc = document.getElementById("cvc").value;

            localStorage.setItem("cardno" , cardno);
            localStorage.setItem("name" , naming);
            localStorage.setItem("expdate" , expdate);
            localStorage.setItem("cvc" , cvc);
            
            cardExist = true;
            console.log(cardExist);
            window.location.href = "cardform.html";
        });
        */
    }
    else if (window.location.pathname.endsWith("cardform.html"))
    {
        let cardExist = submitPaymentForm;
        console.log(cardExist);
        validationCard(cardExist);
        /*
        cardForm.addEventListener("submit", e => {
            e.preventDefault();
            //var contact = document.getElementById("contactNo").value;

            localStorage.setItem("contact" , contact);
            postData = true;
            window.location.href = "index.html";
        });
        */
    }

    /*
    var method = 'POST';
    var request = new XMLHttpRequest();
    var url = 'https://idassignment2-22a6.restdb.io/rest/member?apikey=620a818d34fd62156585852d';
    var data = {
        "username" : username,
        "email" : email,
        "password" : password,
        "address1" : addr1,
        "address2" : addr2,
        "unitNo" : unitno,
        "postalCode" : postal,
        "contact" : contact,
        "payment" : [
            { "cardNo" : cardno , "name" : naming , "expiryDate" : expdate , "cvc" : cvc }]
    };

    request.open(method, url, true);
    request.setRequestHeader("Content-Type", "application/json");
    const memberJSON = JSON.stringify(data);
    request.onreadystatechange = function(){ 
        if(request.readyState === XMLHttpRequest.DONE && request.status === 200){
            console.log(JSON.parse(request.responseText));
        } else if (request.readyState === XMLHttpRequest.DONE && request.status !== 200){
            console.log("Error");
        }
    }
    request.send(data);
    */
    

    //continue here

    
});



/*
function toAddressForm(){
    if (window.location.pathname.endsWith("signup.html")){
        document.getElementById("next1").addEventListener("click", e => {
            e.preventDefault();
            ;
        });
    }
}
*/

