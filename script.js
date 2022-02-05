var productData = []

// Load product data
await fetch('./categories.json').then(response => productData = response.json());

function loadCategories() {

}