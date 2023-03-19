"use strict"
const ordersBtn = document.getElementById('orders-btn');
const categories = document.getElementById('categories');
const orders = document.getElementById('orders');
const orderList = document.getElementById('order-list');


ordersBtn.addEventListener('click', showOrders);


function showOrders() {

    categories.style.display = 'none';
    orders.style.display = 'block';


    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orderList.innerHTML = '';

    orders.forEach((order, index) => {
        const li = document.createElement('li');
        const details = document.createElement('div');
        const date = document.createElement('span');
        const price = document.createElement('span');
        const deleteBtn = document.createElement('button');

        date.innerText = order.date;
        price.innerText = order.price;
        deleteBtn.innerText = 'Delete';
        deleteBtn.addEventListener('click', () => {
            orders.splice(index, 1);
            localStorage.setItem('orders', JSON.stringify(orders));
            showOrders();
        });

        details.appendChild(date);
        details.appendChild(price);
        li.appendChild(details);
        li.appendChild(deleteBtn);
        orderList.appendChild(li);
    });
}


categories.style.display = 'block';
