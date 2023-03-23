
 const showProduct = (category) => {
    productsList.innerHTML = "";
    products.forEach((product, i) => {
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

 const  showProductInfo = (index) => {
    const productInfo = document.getElementById("product-info");
    document.getElementById("buy-btn").style.display = "none";
    document.getElementById("product-info").innerHTML = '<p>Select a product to see more information.</p>';
    document.getElementById("products").innerHTML = "";
    document.getElementById("categories").style.listStyle = "none";
    document.getElementById("buy-btn").style.display = "block";
    const product = products[index];
    productInfo.innerHTML = `<p>Name: ${product.name}</p><p>Price: $${product.price}</p>`;
}

const button = document.getElementById('buy-btn')
button.addEventListener('click', () => alert("You bought product Product name here"))







