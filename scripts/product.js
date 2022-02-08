const params = new URLSearchParams(window.location.search);
const sku = params.get('sku');

async function load() {
    var productData = await loadProductData();
    var product = productData.flatMap(category => category["products"]).filter(product => product["sku"] == sku)[0];

    console.log(product);
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