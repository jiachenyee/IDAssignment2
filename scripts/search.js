const params = new URLSearchParams(window.location.search);
const query = params.get('query').toLowerCase();
document.getElementById('search').value = query;
var productsList = []

async function load() {
    var productData = await loadProductData();
    productsList = productData.flatMap(category => category["products"]);
    displayResults(query, productsList);
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

function checkEnter(event) {
    if (event.keyCode == 13) {
        var text = document.getElementById('search').value;

        window.open(`search?query=${text}`,"_self")

        return false;
    }
}

function displayResults(query, productList) {
    var searchResults = productList.filter(product => query.includes(product["name"].toLowerCase()) || product["name"].toLowerCase().includes(query))

    var searchResultsDiv = document.getElementById("searchResult");
    
    for (let i = 0; i < searchResults.length; i++) { 
        var searchResult = searchResults[i];

        var searchResultDiv = document.createElement('a')
        searchResultDiv.href = `product?sku=${searchResult["sku"]}`;
        searchResultDiv.innerHTML = `
        ${searchResult["name"]}
        ${searchResult["description"]}
        ${searchResult["price"]}
        `

        searchResultsDiv.appendChild(searchResultDiv);
    }
    

    console.log(searchResults);
}