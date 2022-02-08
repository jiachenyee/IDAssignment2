const params = new URLSearchParams(window.location.search);
const categoryName = params.get('name');

async function load() {
    if (categoryName == undefined || categoryName == "") {
        window.location.href = "/";
    }

    showGreeting()
    await loadCategoryData();
}

async function loadCategoryData() {
    const category = await getCurrentCategory();

    var tagDiv = document.getElementById("tag");
    
    var tags = await loadTagData()
    var tag = tags.filter((tag) => tag["identifier"] == category["categoryName"].toLowerCase().replace(/[^a-z]+/gi, ''))[0]

    tagDiv.innerHTML = `
    <img src="${tag["icon"]}" alt="${tag["displayName"]}"/>
    <h3>${tag["displayName"]}</h3>
    `

    const products = category["products"]

    var parent = document.getElementById("products");
    
    for (let i = 0; i < products.length; i++) { 
        var product = products[i];
        
        var div = document.createElement("DIV");
        div.className = "productDisplay";
        div.innerHTML = `
        <img src="${product["productImage"]}" alt="${product["name"]} image">
        <h3>${product["name"]}<br/><span style="color:#707070; font-weight:500;">$${product["price"].toFixed(2)}</span></h3>
        `;
        
        parent.appendChild(div);
    }
}

function showGreeting() {
    var user = localStorage.getItem("username");
    if (user == null) {
        document.getElementById("greeting").innerHTML = "Hello!";
    } else {
        document.getElementById("greeting").innerHTML = `Hello ${user}!`;
    }
}

async function getCurrentCategory() {
    var productData = await loadProductData();
    var categoryMatch = productData.filter((category) => category["categoryName"].toLowerCase().replace(/[^a-z]+/gi, '') == categoryName)

    return categoryMatch[0];
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