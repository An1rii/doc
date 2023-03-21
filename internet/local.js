"use strict"
const orders = JSON.parse(localStorage.getItem('orders')) || [];

function saveOrder(order) {
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
}

function renderOrder(order) {
    const li = document.createElement('li');
    const date = new Date(order.date).toLocaleString();
    const price = order.price;
    li.innerHTML = `
      <div class="order-header">
        <span class="order-date">${date}</span>
        <span class="order-price">$${price}</span>
      </div>
      <div class="order-details" style="display: none">
        <p>${order.name}</p>
        <p>${order.category}</p>
        <p>${order.price}</p>
      </div>
      <button class="remove-order-btn">Remove</button>
    `;
    const orderList = document.getElementById('order-list');
    orderList.appendChild(li);
    const orderDetails = li.querySelector('.order-details');

    li.addEventListener('click', function() {
        orderDetails.style.display = orderDetails.style.display === 'none' ? 'block' : 'none';
    });

    const removeOrderBtn = li.querySelector('.remove-order-btn');
    removeOrderBtn.addEventListener('click', function() {
        orders.splice(orders.indexOf(order), 1);
        localStorage.setItem('orders', JSON.stringify(orders));
        orderList.removeChild(li);
    });
}

function renderOrders() {
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = '';
    orders.forEach(function(order) {
        renderOrder(order);
    });
}

function renderProducts(category) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';
    products.forEach(function(product) {
        if (!category || product.category === category) {
            const li = document.createElement('li');
            li.textContent = product.name;
            li.addEventListener('click', function() {
                const productInfo = document.getElementById('product-info');
                productInfo.innerHTML = `
            <p>Name: ${product.name}</p>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
          `;
                const buyBtn = document.getElementById('buy-btn');
                buyBtn.addEventListener('click', function() {
                    const order = Object.assign({}, product, {date: Date.now()});
                    saveOrder(order);
                    renderOrders();
                });
            });
            productsContainer.appendChild(li);
        }
    });
}

document.getElementById('electronics-link').addEventListener('click', function() {
    renderProducts('electronics');
});

document.getElementById('clothing-link').addEventListener('click', function() {
    renderProducts('clothing');
});

document.getElementById('books-link').addEventListener('click', function() {
    renderProducts('books');
});

document.getElementById('orders-btn').addEventListener('click', function() {
    const categories = document.getElementById('categories');
    const product = document.getElementById('product');
    const orders = document.getElementById('orders');
    categories.style.display = 'none';
    product.style.display = 'none';
    orders.style.display = 'block';
    renderOrders();
});
