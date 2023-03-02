const products = [
    {name: "Smartphone", category: "electronics", price: 500},
    {name: "Laptop", category: "electronics", price: 1000},
    {name: "T-Shirt", category: "clothing", price: 20},
    {name: "Jeans", category: "clothing", price: 50},
    {name: "Harry Potter", category: "books", price: 10},
    {name: "One Piece", category: "books", price: 15}
];

function showProducts(category) {
    const productsList = document.getElementById("products");
    productsList.innerHTML = "";

    for (let i = 0; i < products.length; i++) {
        if (products[i].category === category) {
            const li = document.createElement("li");
            const link = document.createElement("a");
            link.href = "#";
            link.textContent = products[i].name;
            link.onclick = function() {showProductInfo(i)};
            li.appendChild(link);
            productsList.appendChild(li);
        }
    }
}



function showProductInfo(index) {
    const productInfo = document.getElementById("product-info");
    const product = products[index];

    productInfo.innerHTML = `<p>Name: ${product.name}</p><p>Price: $${product.price}</p>`;
    document.getElementById("buy-btn").style.display = "block";
}


function buyProduct() {
    alert("Product purchased!");
    document.getElementById("buy-btn").style.display = "none";
    document.getElementById("product-info").innerHTML = '<p>Select a product to see more information.</p>';
    document.getElementById("products").innerHTML = "";
}
document.getElementById("categories").style.listStyle = "none";

