const params = new URLSearchParams(window.location.search);
const sku = params.get('sku');

async function load() {
    var productData = await loadProductData();
    var product = productData.flatMap(category => category["products"]).filter(product => product["sku"] == sku)[0];

    document.getElementById("productName").innerText = product["name"];

    var tagsDataset = await loadTagData()

    var productTags = product["tags"].map(tag => tagsDataset.filter((item) => item["identifier"] == tag)[0])

    var tagCollectionDiv = document.getElementById("tags");

    for (let i = 0; i < productTags.length; i++) { 
        var tag = productTags[i];
        
        var div = document.createElement("DIV");
        
        div.className = "tag";
        div.innerHTML = `
        <img src="${tag["icon"]}" alt="${tag["displayName"]}"/>
        <h3>${tag["displayName"]}</h3>
        `
        
        tagCollectionDiv.appendChild(div);
    }

    var productInformationDiv = document.getElementById("productInformation");
    
    var productImage = document.createElement("img");
    productImage.className = "productImage";
    productImage.src = product["productImage"];

    productInformationDiv.appendChild(productImage);

    var productDescriptionContainer = document.createElement("div");
    productDescriptionContainer.className = "productDescriptionContainer";

    var productDescription = document.createElement("p");
    
    productDescription.innerText = product["description"];

    productDescriptionContainer.appendChild(productDescription);
    
    productInformationDiv.appendChild(productDescriptionContainer);
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

function checkEnter(event) {
    if (event.keyCode == 13) {
        var text = document.getElementById('search').value;

        window.open(`search?query=${text}`,"_self")
        return false;
    }
}