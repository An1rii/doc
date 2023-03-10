const PRODUCTS = [
    {name: "Smartphone", category: "electronics", price: 500},
    {name: "Laptop", category: "electronics", price: 1000},
    {name: "T-Shirt", category: "clothing", price: 20},
    {name: "Jeans", category: "clothing", price: 50},
    {name: "Harry Potter", category: "books", price: 10},
    {name: "One Piece", category: "books", price: 15}
];

const electronicsLink = document.getElementById("electronics-link");
const clothingLink = document.getElementById("clothing-link");
const booksLink = document.getElementById("books-link");
const productsList = document.getElementById("products");

electronicsLink.addEventListener("click", () => showProduct("electronics"));
clothingLink.addEventListener("click", () => showProduct("clothing"));
booksLink.addEventListener("click", () => showProduct("books"));

 showProduct = (category) => {
    productsList.innerHTML = "";
    PRODUCTS.forEach((product, i) => {
        if (product.category === category) {
            const div = document.createElement("div");
            const link = document.createElement("a");
            link.href = "#";
            link.textContent = product.name;
            link.onclick = () => showProductInfo(i);
            div.appendChild(link);
            productsList.appendChild(div);
        }
    });
}

showProductInfo = (index) => {
    const productInfo = document.getElementById("product-info");
    document.getElementById("buy-btn").style.display = "none";
    document.getElementById("product-info").innerHTML = '<p>Select a product to see more information.</p>';
    document.getElementById("products").innerHTML = "";
    document.getElementById("categories").style.listStyle = "none";
    document.getElementById("buy-btn").style.display = "block";
    const product = PRODUCTS[index];
    productInfo.innerHTML = `<p>Name: ${product.name}</p><p>Price: $${product.price}</p>`;
}

const onClick = () => {
     alert("you bought a product")
}
const button = document.getElementById('buy-btn')
button.onclick = onClick;

document.getElementById("order-form").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value;
    let city = document.getElementById("city").value;
    let novaPoshta = document.getElementById("nova-poshta").value;
    let paymentType = document.getElementById("payment-type").value;
    let quantity = document.getElementById("quantity").value;

    if (name === "" || city === "" || novaPoshta === "" || paymentType === "" || quantity === "") {
        alert("Будь ласка, заповніть всі обов'язкові поля форми.");
        return false;
    }
    return true;
});
