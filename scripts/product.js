const params = new URLSearchParams(window.location.search);
const categoryName = params.get('sku');

async function load() {
    
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