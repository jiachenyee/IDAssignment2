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


//execute data validation for address form
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


//main program execution
document.addEventListener("DOMContentLoaded" , e =>{
    validationAddress();
    document.getElementById("next2").addEventListener("click", f => {
        f.preventDefault();
        sessionStorage.setItem("addr1" , document.getElementById("addrLine1").value);
        sessionStorage.setItem("addr2" , document.getElementById("addrLine2").value);
        sessionStorage.setItem("unitno" , document.getElementById("unitNo").value);
        sessionStorage.setItem("postal" , document.getElementById("postalCode").value);
        window.open(`/cardform.html` , "_self");
    });
});