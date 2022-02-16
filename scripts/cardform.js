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

function addNewCard(){
    if (window.location.pathname.endsWith("cardform.html")){
        document.getElementById("plusButton").addEventListener("click", e => {
            e.preventDefault();
            window.location.href = "paymentform.html";
        });
    }
}


function displayCard(){
    let card = document.getElementById("card1");
    let txt = document.getElementsByClassName("payment__text-sub");
    let buttoN = document.getElementById("plusContainer");

    let thename = document.getElementById("cdName");
    let thenumber = document.getElementById("cdNumber");
    let thedate = document.getElementById("cdExpiry");

    thename.textContent = localStorage.getItem("name");
    thenumber.textContent = localStorage.getItem("cardno");
    thedate.textContent = localStorage.getItem("expdate");

    card.style.display = "block";
    txt.textContent = "";
    buttoN.disabled = true; 
    
}


function submitCardForm(){
    localStorage.setItem("contact" , document.getElementById("contactNo").value);
    window.location.href = "index.html";
}

function postData(){
    var method = 'POST';
    var request = new XMLHttpRequest();
    var url = 'https://idassignment2-22a6.restdb.io/rest/member?apikey=620a818d34fd62156585852d';
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

    request.open(method, url, true);
    request.setRequestHeader("Content-Type", "application/json");
    const memberJSON = JSON.stringify(data);
    request.onreadystatechange = function(){ 
        if(request.readyState == 4 && request.status == 200){
            console.log(JSON.parse(request.responseText));
        } else if (request.readyState === XMLHttpRequest.DONE && request.status !== 200){
            console.log("Error");
        }
    }
    request.send(data);
}


document.addEventListener("DOMContentLoaded" , e =>{
    let cardExist = localStorage.getItem("existance");
    if (cardExist == true){
        displayCard();
    }
    
    validationCard(true); //change this
    document.getElementById("complete").addEventListener("submit", f => {
        f.preventDefault();
        submitCardForm();
        postData();
    });
})