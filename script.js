var productData = []

await fetch('./categories.json').then(response => productData = response.json());

function loadCategories() {

}