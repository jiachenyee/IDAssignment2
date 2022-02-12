var cartContents = localStorage.getItem("cart");

// Add placeholder cart contents
cartContents = [
    {
        "sku": "PAST009",
        "price": 0,
        "qty": 1,
        "editableQty": true
    },
    {
        "sku": "PAST010",
        "price": 10,
        "qty": 1,
        "editableQty": true
    }
]

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

    for (let i = 0; i < cartContents.length; i++) {
        var cartProduct = cartContents[i];
        var product = products.find(prod => prod["sku"] == cartProduct["sku"]);
        
        var cartContentDiv = document.createElement("a");
        cartContentDiv.className = "product";
        cartContentDiv.href = `product?sku=${product["sku"]}`;
        
        cartContentDiv.innerHTML = `
        <img src=${product["productImage"]}/>
        <div>
            <h3>${product["name"]}</h3>
            <h4>$${cartProduct["price"].toFixed(2)}</h4>
        </div>
        `

        parent.appendChild(cartContentDiv);
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