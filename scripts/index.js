// Load product data
async function loadProductData() {
    var productData = [];

    await fetch("./resources/categories.json")
        .then(response => {
            return response.json();
        })
        .then(data => productData = data);

    return productData;
}

showGreeting()

function showGreeting() {
    var user = localStorage.getItem("username")
    if (user == null) {
        document.getElementById("greeting").innerHTML = "Hello!";
    } else {
        document.getElementById("greeting").innerHTML = `Hello ${user}!`;
    }
}

async function loadCategories() {

    var productData = await loadProductData();

    let parent = document.getElementById("categories");

    for (let i = 0; i < productData.length; i++) { 
        const productCategory = productData[i];

        var div = document.createElement("DIV");
        div.className = "categoryItem";

        var categoryName = productCategory["categoryName"];
        var categoryPath = `categories/${categoryName.toLowerCase().replace(/[^a-z]+/gi, '')}`

        div.innerHTML = `
        <a href="${categoryPath}">
            <img src="${productCategory["heroImage"]}" alt="${productCategory["categoryName"]}"/>
            <h4>${productCategory["categoryName"]}</h4>
        </a>
        `;
        
        parent.appendChild(div);
    }
}

async function loadPopularItems() {
    var productData = await loadProductData();

    let parent = document.getElementById("featuredProducts");

    var products = productData.flatMap(category => category["products"])

    console.log(products);
}