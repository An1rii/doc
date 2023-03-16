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

const button = document.getElementById('buy-btn')
button.addEventListener('click', () => alert("you bought a product"))

const orderForm = document.querySelector('#order-form');
const orderTable = document.querySelector('#order-table');

orderForm.addEventListener('submit', function(event) {
    event.preventDefault();


    const name = orderForm.elements.name.value;
    const city = orderForm.elements.city.value;
    const postOffice = orderForm.elements.postOffice.value;
    const paymentMethod = orderForm.elements.paymentMethod.value;
    const quantity = orderForm.elements.quantity.value;
    const comment = orderForm.elements.comment.value;


    if (!name || !city || !postOffice || !paymentMethod) {
        alert('Будь ласка, заповніть всі обов\'язкові поля форми');
        return;
    }


    const newRow = orderTable.insertRow();
     insertCell().textContent = name;
    newRow.insertCell().textContent = city;
    newRow.insertCell().textContent = postOffice;
    newRow.insertCell().textContent = paymentMethod;
    newRow.insertCell().textContent = quantity;
    newRow.insertCell().textContent = comment;


    orderForm.reset();
});



