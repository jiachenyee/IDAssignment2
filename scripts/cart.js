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

    console.log(cartContents)
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