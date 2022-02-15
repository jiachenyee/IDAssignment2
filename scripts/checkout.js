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

    var points = Math.round(totalPrice)
    if (userInfo != null) {
        document.getElementById("pointsParagraph").innerText = `+${points} Points`
        document.getElementById("addToCartPrice").innerText = `$${(totalPrice + deliveryPrice + tax).toFixed(2)}`
        document.getElementById("currentProgress").style = `opacity: 0.5; width:${(userInfo["points"] + points) / 10}%`
        document.getElementById("futureProgress").style = `position:absolute; width:${userInfo["points"] / 10}%`
    }

    document.getElementById("cardPreview").style.visibility = "hidden"

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

            if (member["cardNo"] != undefined) {
                document.getElementById("cardPreview").style.visibility = "visible"
                document.getElementById("cardNumber").innerText = "**** **** **** " + (member["cardNo"] % 10000).toString();
                document.getElementById("cardExpiry").innerText = member["expiryDate"];
                document.getElementById("cardHolderName").innerText = member["name"];
            }
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