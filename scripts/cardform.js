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


//execute data validation for card form
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
            if (isCard){
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


//add new credit/debit card using details from payment form
function displayCard(){
    let card = document.getElementById("card1");
    let txt = document.getElementById("removed");
    let buttoN = document.getElementById("plusContainer");

    let thename = document.getElementById("cdName");
    let thenumber = document.getElementById("cdNumber");
    let thedate = document.getElementById("cdExpiry");

    cardNUMBER = sessionStorage.getItem("cardno").toString();
    newNum = cardNUMBER.substring(0,4) + " " + cardNUMBER.substring(4,8) + " " + cardNUMBER.substring(8,12) + " " + cardNUMBER.substring(12,16);


    thename.textContent = sessionStorage.getItem("name");
    thenumber.textContent = newNum;
    thedate.textContent = sessionStorage.getItem("expdate");

    card.style.display = "block";
    txt.style.display = "none";
    buttoN.disabled = true; 
    
}

//send post request to restDB
function postData() {
    var request = new XMLHttpRequest();

    var url = "https://idassignment2-22a6.restdb.io/rest/member?apikey=620a818d34fd62156585852d";
    var data = {
        "username": sessionStorage.getItem("username"),
        "email": sessionStorage.getItem("email"),
        "password": sessionStorage.getItem("password"),
        "address1": sessionStorage.getItem("addr1"),
        "address2": sessionStorage.getItem("addr2"),
        "unitNo": sessionStorage.getItem("unitno"),
        "postalCode": sessionStorage.getItem("postal"),
        "contact": sessionStorage.getItem("contact"),
        "cardNo": sessionStorage.getItem("cardno"), 
        "name": sessionStorage.getItem("name"), 
        "expiryDate": sessionStorage.getItem("expdate"), 
        "cvc": sessionStorage.getItem("cvc"),
        "points": 0
    };

    request.open('POST', url, true);

    request.setRequestHeader("Content-Type", "application/json");
    
    request.onreadystatechange = function(){ 
        if(request.readyState == 4 && request.status == 200){
            // alert(JSON.parse(request.responseText));
        } else if (request.readyState == 4 && request.status != 200){
            // alert("Error");
        }
    }

    request.send(JSON.stringify(data));
}


//main program execution
document.addEventListener("DOMContentLoaded" , e =>{
    var cardExist = sessionStorage.getItem("existance");
    
    if (cardExist){
        displayCard();
    }
    
    validationCard(cardExist); //change this
    var data1 = {
        "username": sessionStorage.getItem("username"),
        "email": sessionStorage.getItem("email"),
        "password": sessionStorage.getItem("password"),
        "address1": sessionStorage.getItem("addr1"),
        "address2": sessionStorage.getItem("addr2"),
        "unitNo": sessionStorage.getItem("unitno"),
        "postalCode": sessionStorage.getItem("postal"),
        "contact": sessionStorage.getItem("contact"),
        "cardNo": sessionStorage.getItem("cardno"), 
        "name": sessionStorage.getItem("name"), 
        "expiryDate": sessionStorage.getItem("expdate"), 
        "cvc": sessionStorage.getItem("cvc"),
        "points": 0
    };
    console.log(JSON.stringify(data1));
    document.getElementById("complete").addEventListener("click", f => {
        f.preventDefault();
        sessionStorage.setItem("contact", document.getElementById("contactNo").value);
        setTimeout(function() {
            postData();
        },1000);
        setTimeout(function() {

            localStorage.setItem("userInfo", JSON.stringify(data1));
            window.open(`index.html` , "_self");
        },2000);

    });
})



