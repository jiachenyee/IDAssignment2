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
        var cartContentDiv = document.createElement("section");
        var product = cartContents[i];

        cartContentDiv.innerHTML = `
        <h3>${product["sku"]}</h3>
        <h4>${product["sku"]}</h4>
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