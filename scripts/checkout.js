var cartContents = JSON.parse(localStorage.getItem("cart"));
var userInfo = JSON.parse(localStorage.getItem("userInfo"));

if (cartContents == null) {
    window.open(`index`,"_self")
}

var totalPrice = cartContents.reduce((pv, cv) => pv + (cv["price"] * cv["qty"]), 0);

var tax = totalPrice * 0.07

var deliveryPrice = totalPrice >= 50 ? 0 : 10

async function load() {
    
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

        var futurePoints = (userInfo["points"] + points) / 10 > 100 ? 100 : (userInfo["points"] + points) / 10;

        document.getElementById("currentProgress").style = `opacity: 0.5; width:${futurePoints}%`
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

function onBuy() {
    var request = new XMLHttpRequest();
    var url = 'https://idassignment2-22a6.restdb.io/rest/purchase?apikey=620a818d34fd62156585852d';
    
    request.open('POST', url, true);

    request.setRequestHeader('Content-Type', 'application/json');

    request.onreadystatechange = function() {
        if(request.readyState == 4 && request.status == 200) {
            // alert(request.responseText);
        }
    }

    var body = {
        "username": userInfo["username"],
        "subtotal": Math.round(totalPrice * 100) / 100,
        "tax": Math.round(tax * 100) / 100,
        "deliveryFee": Math.round(deliveryPrice * 100) / 100,
        "totalPrice": Math.round(totalPrice + tax + deliveryPrice * 100) / 100,
        "purchaseID": createUUID(),
        "products": cartContents,
        "deliveryDateTime": getDeliveryDate().toLocaleString(),
        "purchaseDateTime": (new Date()).toLocaleString()
    }

    request.send(JSON.stringify(body));

    // Delete the cart
    localStorage.removeItem("cart");

    // Update user info
    var userRequest = new XMLHttpRequest();
    var userURL = `https://idassignment2-22a6.restdb.io/rest/member/${userInfo["_id"]}?apikey=620a818d34fd62156585852d`

    userRequest.open('PATCH', userURL, true);

    userRequest.setRequestHeader('Content-Type', 'application/json');

    userInfo["points"] += Math.round(totalPrice)
    var newBody = {
        "points": userInfo["points"]
    }

    userRequest.send(JSON.stringify(newBody));

    localStorage.setItem("userInfo", JSON.stringify(userInfo));

    window.open(`confirmation?date=${getDeliveryDate().toLocaleDateString().replaceAll("/", "-")}`,"_self");
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

function createUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
       var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
       return v.toString(16);
    });
}

function getDeliveryDate() {
    var date = new Date()
    
    var finalDate = new Date(
        date.getFullYear(), 
        date.getMonth(), 
        date.getDate() + 1, 
        13, 0, 0, 0
    )
    
    return finalDate;
}