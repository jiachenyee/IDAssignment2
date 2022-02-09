const params = new URLSearchParams(window.location.search);
const query = params.get('query').toLowerCase();

async function load() {
    var productData = await loadProductData();
    var productsList = productData.flatMap(category => category["products"]);

    var searchResults = productsList.filter(product => query.includes(product["name"].toLowerCase()) || product["name"].toLowerCase().includes(query))

    console.log(searchResults);
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