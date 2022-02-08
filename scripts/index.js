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
    var user = localStorage.getItem("username");
    if (user == null) {
        document.getElementById("greeting").innerHTML = "Hello!";
    } else {
        document.getElementById("greeting").innerHTML = `Hello ${user}!`;
    }
}

showRewards()

function showRewards() {
    let parent = document.getElementById("rewards");

    var user = localStorage.getItem("username");

    if (user == null) { 
        parent.innerHTML = `
        <h2>Get a more personalized experience!</h2>
        <div class="bannerCTAStack">
            <a class="bannerCTA" href="/signup">Sign Up</a>
            <a class="bannerCTA" href="/login">Sign In</a>
        </div>
        `;
    } else {

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

    var loggedIn = localStorage.getItem("username") != null;

    var productData = await loadProductData();

    var parent = document.getElementById("featuredProducts");

    var products = productData.flatMap(category => category["products"])

    parent.innerHTML = loggedIn ? "<h2>For You</h2>" : "<h2>Popular</h2>"
    
    var productList = document.createElement("DIV");
    productList.id = "productsList";

    parent.appendChild(productList);

    // Get random sample of products
    var randomSample = products.sort(() => Math.random() - 0.5).slice(0, 10);

    for (let i = 0; i < randomSample.length; i++) { 
        var product = randomSample[i];
        
        var div = document.createElement("DIV");
        div.className = "productDisplay";
        div.innerHTML = `
        <img src="${product["productImage"]}" alt="${product["name"]} image">
        <h3>${product["name"]}<br/><span style="color:#707070; font-weight:500;">$${product["price"].toFixed(2)}</span></h3>
        `;
        
        productList.appendChild(div);
    }
}

async function load() {
    await loadCategories();
    await loadPopularItems();
}