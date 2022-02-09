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
        searchResultDiv.className = "searchResult";
        searchResultDiv.innerHTML = `
        <img src="${searchResult["productImage"]}">
        
        <div>
            <h2>${searchResult["name"]}</h2>
            <p>${searchResult["description"]}</p>
        </div>
        
        <h2 style="color:#707070; font-weight:500; margin-left:auto;">$${searchResult["price"].toFixed(2)}</h2>
        `

        searchResultsDiv.appendChild(searchResultDiv);
    }
    

    console.log(searchResults);
}