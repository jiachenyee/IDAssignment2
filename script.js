
console.log("what1");
// Load product data
async function loadCategories() {

    var productData = []

    await fetch("./categories.json")
        .then(response => {
            return response.json();
        })
        .then(data => productData = data);

    let parent = document.getElementById("categories");

    console.log(productData.toString())

    for (let i = 0; i < productData.length; i++) { 
        const productCategory = productData[i];

        var div = document.createElement("DIV");
        div.className = "categoryItem";
        div.innerHTML = `
            <img src="${productCategory["heroImage"]}" alt="${productCategory["categoryName"]}"/>
            <h4>${productCategory["categoryName"]}</h4>
        `;
        
        parent.appendChild(div);
    }
}