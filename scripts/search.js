const params = new URLSearchParams(window.location.search);
const query = params.get('query').toLowerCase();
document.getElementById('search').value = query;
var productsList = []

if (query == "") {
    window.open("index.html","_self")
}

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

        if (text == "") {
            window.open("index.html","_self")
        } else {
            window.open(`search?query=${text}`,"_self");
        }

        return false;
    }
}

function displayResults(query, productList) {
    var searchResults = productList.filter(product => query.includes(product["name"].toLowerCase()) || product["name"].toLowerCase().includes(query))

    var searchResultsDiv = document.getElementById("searchResult");

    if (searchResults.length == 0) {
        searchResultsDiv.innerHTML = `
        <div style="margin-left:auto;margin-right:auto;">
            <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_lbleaciv.json" background="transparent" speed="1" style="width: 200px; height: 200px; margin-left:auto;margin-right:auto;" loop autoplay></lottie-player>
        
            <h3 style="font-size:27px;margin-bottom:0px;margin-top:0px;text-align:center;margin-left:auto;margin-right:auto;">
                There's nothing to see here.
            </h3>
            <p style="text-align:center;">
                There are no products that match your query. Try changing your search query.
            </p>
        </div>
        `
    }
    
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
}