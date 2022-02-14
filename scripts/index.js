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

function showGreeting() {
    var user = JSON.parse(localStorage.getItem("userInfo"));

    if (user == null) {
        document.getElementById("greeting").innerHTML = "Hello!";
    } else {
        document.getElementById("greeting").innerHTML = `Hello ${user["username"]}!`;
    }
}

function showRewards() {
    let parent = document.getElementById("rewards");

    var userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (userInfo == null) { 
        parent.innerHTML = `
        <h2>Get a more personalized experience!</h2>
        <div class="bannerCTAStack">
            <a class="bannerCTA" href="signup">Sign Up</a>
            <a class="bannerCTA" href="signin">Sign In</a>
        </div>
        `;
    } else {
        var encouragmenetText = "Earn points, win prizes!";

        if (userInfo["points"] > 900) {
            encouragmenetText = "Almost there!";
        } else if (userInfo["points"] > 500) {
            encouragmenetText = "Halfway there!";
        } else if (userInfo["points"] > 200) {
            encouragmenetText = "Buy more and win more!";
        }

        parent.innerHTML = `
        <h2>${encouragmenetText}</h2>
        <p style="color:#ffffff;">Get a spin and win some free products every 1000 points!</p>
        <p style="text-align: right; color:#ffffff;">${userInfo["points"]}/1000</p>

        <div class="progressBar">
            <div class="progressBarItem" style="width:${userInfo["points"] / 10}%"></div>
        </div>
        `;
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
        var categoryPath = `category?name=${categoryName.toLowerCase().replace(/[^a-z]+/gi, '')}`

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

    var user = JSON.parse(localStorage.getItem("userInfo"));

    var loggedIn = user != null;

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
        
        var div = document.createElement("A");
        div.href = `product?sku=${product["sku"]}`;
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

function checkEnter(event) {
    if (event.keyCode == 13) {
        var text = document.getElementById('search').value;

        window.open(`search?query=${text}`,"_self")
        return false;
    }
}

updateUserData()
showGreeting()
showRewards()

function updateUserData() {
    var user = JSON.parse(localStorage.getItem("userInfo"));

    var request = new XMLHttpRequest();

    request.open("GET", "https://idassignment2-22a6.restdb.io/rest/member?apikey=620a818d34fd62156585852d", true);
    
    request.addEventListener("load", function() {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);

            var member = data.filter(member => (member["username"] == user["username"] && member["password"] == user["password"]))[0]

            if (member != undefined) {
                localStorage.setItem("userInfo", JSON.stringify(member));
                showGreeting()
                showRewards()
            }
        } 
    });
    
    request.send();
}