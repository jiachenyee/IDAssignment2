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

    var parent = document.getElementById("cartContents");

    removeChilds(parent);

    for (let i = 0; i < cartContents.length; i++) {
        var cartProduct = cartContents[i];
        var product = products.find(prod => prod["sku"] == cartProduct["sku"]);

        var cartContentDiv = document.createElement("a");
        cartContentDiv.className = "product";
        
        cartContentDiv.innerHTML = `
        <a href="product?sku=${product["sku"]}">
            <img src=${product["productImage"]}/>
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