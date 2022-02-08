const params = new URLSearchParams(window.location.search);
const categoryName = params.get('name');

async function load() {
    console.log(categoryName);
    showGreeting()
    await getCurrentCategory();
}

async function loadCategoryData() {

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