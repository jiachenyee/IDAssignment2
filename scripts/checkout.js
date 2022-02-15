var cartContents = JSON.parse(localStorage.getItem("cart"));
var userInfo = JSON.parse(localStorage.getItem("userInfo"));

async function load() {
    var totalPrice = cartContents.reduce((pv, cv) => pv + (cv["price"] * cv["qty"]), 0);

    var tax = totalPrice * 0.07


    var deliveryPrice = totalPrice >= 50 ? 0 : 10
    
    var subtotal = document.getElementById("subtotal");
    subtotal.innerText = `$${totalPrice.toFixed(2)}`;

    var delivery = document.getElementById("delivery");
    delivery.innerText = `$${deliveryPrice.toFixed(2)}`;

    var taxText = document.getElementById("tax");
    taxText.innerText = `$${tax.toFixed(2)}`;

    var addToCartButton = document.createElement("button");
    addToCartButton.id = "addToCart";
    // addToCartButton.onclick = onCheckout;

    var points = Math.round(totalPrice)
    if (userInfo != null) {
        addToCartButton.innerHTML = `
        <div style="display:flex; width:100%">
            <div>    
                <h3>Checkout</h3>
                <p id="pointsParagraph" style="text-align: left; color:#ffffff; font-size:15px">+${points} Points</p>
            </div>
            <h3 id="addToCartPrice">$${(totalPrice + deliveryPrice + tax).toFixed(2)}</h3>
        </div>
        <div class="progressBar" style="position:relative">
            <div class="progressBarItem" style="opacity: 0.5; width:${(userInfo["points"] + points) / 10}%"></div>
            <div class="progressBarItem" style="position:absolute; margin-top:-12px; width:${userInfo["points"] / 10}%"></div>
        </div>
    `
    } else {

    }

    cartInformationDiv.appendChild(addToCartButton);

    getCreditCard()
}

function getCreditCard() {
    var request = new XMLHttpRequest();

    request.open("GET", "https://idassignment2-22a6.restdb.io/rest/member?apikey=620a818d34fd62156585852d", true);
    
    request.addEventListener("load", function() {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);

            var member = data.filter(member => (member["username"] == userInfo["username"] && member["password"] == userInfo["password"]))[0]

            if (member != undefined) {
                // Update user in local storage
                localStorage.setItem("userInfo", JSON.stringify(member));
                userInfo = member;
            }

            member["cardNo"]
            member["name"]
            member["expiryDate"]
            member["cvc"]
        } 
    });
    
    request.send();
}
async function loadProductData() {
    var productData = [];

    await fetch("./resources/categories.json")
        .then(response => {
            return response.json();
        })
        .then(data => productData = data);

    return productData;
}

const removeChilds = (parent) => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};