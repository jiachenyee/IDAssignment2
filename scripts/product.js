const params = new URLSearchParams(window.location.search);
const sku = params.get('sku');

var itemQty = 1

async function load() {
    var productData = await loadProductData();
    var product = productData.flatMap(category => category["products"]).filter(product => product["sku"] == sku)[0];

    document.getElementById("productName").innerText = product["name"];

    var tagsDataset = await loadTagData()

    var productTags = product["tags"].map(tag => tagsDataset.filter((item) => item["identifier"] == tag)[0])

    var tagCollectionDiv = document.getElementById("tags");

    for (let i = 0; i < productTags.length; i++) { 
        var tag = productTags[i];
        
        var div = document.createElement("DIV");
        
        div.className = "tag";
        div.innerHTML = `
        <img src="${tag["icon"]}" alt="${tag["displayName"]}"/>
        <h3>${tag["displayName"]}</h3>
        `
        
        tagCollectionDiv.appendChild(div);
    }

    var productInformationDiv = document.getElementById("productInformation");
    
    var productImage = document.createElement("img");
    productImage.className = "productImage";
    productImage.src = product["productImage"];

    productInformationDiv.appendChild(productImage);

    var sidebarContainer = document.createElement("div");

    var productDescriptionContainer = document.createElement("div");
    productDescriptionContainer.className = "productDescriptionContainer";

    var productNameMobile = document.createElement("h1");
    productNameMobile.id = "productNameMobile";

    productNameMobile.innerText = product["name"];
    productDescriptionContainer.appendChild(productNameMobile);

    var productDescription = document.createElement("p");
    
    productDescription.innerText = product["description"];

    productDescriptionContainer.appendChild(productDescription);
    
    sidebarContainer.appendChild(productDescriptionContainer);
    
    productInformationDiv.appendChild(sidebarContainer);

    var stepper = document.createElement("div");
    stepper.className = "stepper";
    stepper.id = "stepper";
    stepper.innerHTML = `
        <button type="button" onclick="increment()">+</button>
        <h3>${itemQty}</h3>
        <button type="button" onclick="decrement()">-</button>
    `

    productDescriptionContainer.appendChild(stepper);

    var addToCartButton = document.createElement("button");
    addToCartButton.id = "addToCart";
    addToCartButton.onclick = onAddToCartButtonClick;

    var userInfo = JSON.parse(localStorage.getItem("userInfo"));

    var points = Math.round(product["price"]) * itemQty
    var futurePoints = (userInfo["points"] + points) / 10 > 100 ? (userInfo["points"] + points) / 10 : 100;

    if (userInfo != null) {
        addToCartButton.innerHTML = `
        <div style="display:flex; width:100%">
            <div>    
                <h3>Add to Cart</h3>
                <p id="pointsParagraph" style="text-align: left; color:#ffffff; font-size:15px">+${points} Points</p>
            </div>
            <h3 id="addToCartPrice">$${(product["price"] * itemQty).toFixed(2)}</h3>
        </div>
        <div id="progressBar" class="progressBar" style="position:relative">
            <div class="progressBarItem" style="opacity: 0.5; width:${futurePoints}%"></div>
            <div class="progressBarItem" style="position:absolute; margin-top:-12px; width:${userInfo["points"] / 10}%"></div>
        </div>
    `
    } else {
        addToCartButton.innerHTML = `
    <div style="display:flex; width:100%">
        <h3>Add to Cart</h3>
        <h3 id="addToCartPrice">$${(product["price"] * itemQty).toFixed(2)}</h3>
    </div>
    `
    }
    
    sidebarContainer.appendChild(addToCartButton);
}

async function onAddToCartButtonClick() {
    var productData = await loadProductData();
    var product = productData.flatMap(category => category["products"]).filter(product => product["sku"] == sku)[0];

    var cart = JSON.parse(localStorage.getItem("cart"));
    
    if (cart == undefined) {
        cart = [];
    }

    cart.push({
        "sku": product["sku"],
        "price": product["price"],
        "qty": itemQty,
        "editableQty": true
    });
    localStorage.setItem("cart", JSON.stringify(cart));

    window.open(`cart`,"_self")
}

async function increment() {
    if (itemQty < 10) {
        itemQty++
        
        updateProductBuyButton()
    }
}

async function updateProductBuyButton() {
    var stepper = document.getElementById("stepper");
        stepper.innerHTML = `
        <button type="button" onclick="increment()">+</button>
        <h3>${itemQty}</h3>
        <button type="button" onclick="decrement()">-</button>
        `

    var productData = await loadProductData();
    var product = productData.flatMap(category => category["products"]).filter(product => product["sku"] == sku)[0];

    var addToCartPrice = document.getElementById("addToCartPrice");
    addToCartPrice.innerText = `$${(product["price"] * itemQty).toFixed(2)}`;

    var pointsParagraph = document.getElementById("pointsParagraph");
    var points = Math.round(product["price"]) * itemQty

    pointsParagraph.innerText = `+${points} Points`

    var progressBarDiv = document.getElementById("progressBar");
    
    var userInfo = JSON.parse(localStorage.getItem("userInfo"));
    
    var futurePoints = (userInfo["points"] + points) / 10 > 100 ? (userInfo["points"] + points) / 10 : 100;

    progressBarDiv.innerHTML = `
        <div class="progressBarItem" style="opacity: 0.5; width:${futurePoints}%"></div>
        <div class="progressBarItem" style="position:absolute; margin-top:-12px; width:${userInfo["points"] / 10}%"></div>
    `
}

async function decrement() {
    if (itemQty > 1) {
        itemQty--
        updateProductBuyButton()
    }
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

async function loadTagData() {
    var tags = []

    await fetch("./resources/tags.json")
        .then(response => {
            return response.json();
        })
        .then(data => tags = data);

    return tags;
}

function checkEnter(event) {
    if (event.keyCode == 13) {
        var text = document.getElementById('search').value;

        window.open(`search?query=${text}`,"_self")
        return false;
    }
}