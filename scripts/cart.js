var cartContents = JSON.parse(localStorage.getItem("cart"));

function checkEnter(event) {
    if (event.keyCode == 13) {
        var text = document.getElementById('search').value;

        window.open(`search?query=${text}`,"_self")
        return false;
    }
}

async function load() {
    var productData = await loadProductData();
    var products = productData.flatMap(category => category["products"])

    if (cartContents == null || cartContents.length == 0) {
        var cartDiv = document.getElementById("cart");
        cartDiv.innerHTML = `
        <div style="margin-left:auto;margin-right:auto;">
            <h3 style="text-align:center;margin-left:auto;margin-right:auto;">There's nothing to see here.</h3>
            <p style="text-align:center;">Add products to your cart to see them here.</p>
        </div>
        `
        return 
    }
    var parent = document.getElementById("cartContents");

    removeChilds(parent);

    var totalPrice = 0;

    for (let i = 0; i < cartContents.length; i++) {
        var cartProduct = cartContents[i];
        var product = products.find(prod => prod["sku"] == cartProduct["sku"]);

        var cartContentDiv = document.createElement("a");
        cartContentDiv.className = "product";
        
        cartContentDiv.innerHTML = `
        <a href="product?sku=${product["sku"]}">
            <img src="${product["productImage"]}">
            <div>
                <h3>${product["name"]}</h3>
                <h4>$${(cartProduct["price"] * cartProduct["qty"]).toFixed(2)}</h4>
            </div>
        </a>
        `
        if (cartProduct["editableQty"]) {
            cartContentDiv.innerHTML += `<div class="stepper">
            <button type="button" onclick="increment(${i})">+</button>
            <h3>${cartProduct["qty"]}</h3>
            <button type="button" onclick="decrement(${i})">-</button>
        </div>
        `
        }

        parent.appendChild(cartContentDiv);

        totalPrice += cartProduct["price"] * cartProduct["qty"];
    }

    var tax = totalPrice * 0.07

    var cartInformationDiv = document.getElementById("cartInformation");

    var deliveryPrice = totalPrice >= 50 ? 0 : 10
    cartInformationDiv.innerHTML = `
    <div style="display:flex;">
        <h3>Subtotal</h3>
        <h3 style="margin-left: auto; color: #0D21A1;">$${totalPrice.toFixed(2)}</h3>
    </div>
    <div style="display:flex;">
        <h3>Delivery</h3>
        <h3 style="margin-left: auto; color: #0D21A1;">$${(deliveryPrice).toFixed(2)}</h3>
    </div>
    <div style="display:flex;">
        <h3>Tax</h3>
        <h3 style="margin-left: auto; color: #0D21A1;">$${tax.toFixed(2)}</h3>
    </div>
    `

    var addToCartButton = document.createElement("button");
    addToCartButton.id = "addToCart";
    addToCartButton.onclick = onCheckout;

    var userInfo = JSON.parse(localStorage.getItem("userInfo"));

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
}

function onCheckout() {
    var userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (userInfo == null) {
        window.location.href = "signup.html";
    } else {
        window.location.href = "checkout.html";
    }
}

function increment(index) {
    if (cartContents[index]["qty"] < 10) {
        cartContents[index]["qty"]++;
    }

    load();
    localStorage.setItem("cart", JSON.stringify(cartContents));
}

function decrement(index) {
    cartContents[index]["qty"]--;
    if (cartContents[index]["qty"] == 0) {
        cartContents.pop(index);
    }

    load();
    localStorage.setItem("cart", JSON.stringify(cartContents));
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