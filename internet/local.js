const ordersBtn = document.getElementById("orders-btn");
const categories = document.getElementById("categories");
const orderList = document.getElementById("order-list");


ordersBtn.addEventListener("click", showOrders);
categories.addEventListener("click", showProducts);


displayOrders();


 displayOrders = () => {
    orderList.innerHTML = ""; // Clear existing order list
    const orders = JSON.parse(localStorage.getItem("orders")) || []; // Get saved orders or an empty array
    if (orders.length === 0) {
        orderList.innerHTML = "<p>No orders found.</p>";
    } else {
        orders.forEach((order, index) => {

            const li = document.createElement("li");
            li.innerHTML = `<span>${order.date}</span> - <span>${order.price}</span> - <button data-index="${index}" class="remove-order-btn">Remove</button>`;
            orderList.appendChild(li);
        });

        const removeOrderBtns = document.querySelectorAll(".remove-order-btn");
        removeOrderBtns.forEach((btn) => {
            btn.addEventListener("click", removeOrder);
        });
    }
}


 removeOrder = (event) => {
    const index = event.target.dataset.index;
    const orders = JSON.parse(localStorage.getItem("orders")) || []; // Get saved orders or an empty array
    orders.splice(index, 1); // Remove order at index
    localStorage.setItem("orders", JSON.stringify(orders)); // Save updated orders
    displayOrders(); // Refresh order list
}


 showOrders = () => {
    categories.style.display = "none";
    orderList.style.display = "block";
}

 showProducts = () => {
    categories.style.display = "block";
    orderList.style.display = "none";
}

