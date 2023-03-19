const orderForm = document.querySelector('#order-form');
const orderTable = document.querySelector('#order-table');

orderForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const {
        name:{value: name},
        city:{value: city},
        postOffice:{value: postOffice},
        paymentMethod:{value: paymentMethod},
        quantity:{value: quantity},
        comment:{value: comment},
    } = orderForm.elements

    if (!name || !city || !postOffice || !paymentMethod) {
        alert('Будь ласка, заповніть всі обов\'язкові поля форми');
        return;
    }


    const newRow = orderTable.insertRow();
    newRow.insertCell().textContent = name;
    newRow.insertCell().textContent = city;
    newRow.insertCell().textContent = postOffice;
    newRow.insertCell().textContent = paymentMethod;
    newRow.insertCell().textContent = quantity;
    newRow.insertCell().textContent = comment;


    orderForm.reset();
});
