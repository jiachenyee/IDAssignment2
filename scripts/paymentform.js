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


//execute data validation for payment form
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
              else if(!e.target.value.includes("/")){
                setInputError(inputElement, "A '/' is missing");
              }
              else if(e.target.value.length != 7){
                  setInputError(inputElement, "Expiry Date must be 7 characters in length");
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


//main program execution
document.addEventListener("DOMContentLoaded" , e =>{
    validationPayment();
    document.getElementById("addcard").addEventListener("click", f => {
        f.preventDefault();
        sessionStorage.setItem("existance" , true);
        sessionStorage.setItem("cardno" , document.getElementById("cardNumber").value);
        sessionStorage.setItem("name" , document.getElementById("name").value);
        sessionStorage.setItem("expdate" , document.getElementById("expiryDate").value);
        sessionStorage.setItem("cvc" , document.getElementById("cvc").value);
        window.location.href = "cardform.html";
    });
});