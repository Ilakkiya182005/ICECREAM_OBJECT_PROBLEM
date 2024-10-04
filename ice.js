
let iceCreamInventory = []; 
function addIceCream() {

    const flavor = document.getElementById('flavorInput').value;
    const price = parseFloat(document.getElementById('priceInput').value);
    const quantity = parseInt(document.getElementById('quantityInput').value);
    iceCreamInventory.push({ flavor, price, quantity });
    document.getElementById('flavorInput').value = '';
    document.getElementById('priceInput').value = '';
    document.getElementById('quantityInput').value = '';
    displayInventory();
    displayTotalValues();
}

function displayInventory() {
    const inventoryList = document.getElementById('inventoryList');
    inventoryList.innerHTML = '';
    iceCreamInventory.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.flavor} flavor- $${item.price} price- ${item.quantity} pcs`;
        inventoryList.appendChild(listItem);
    });
}


function displayTotalValues() {
    const totalPrice = iceCreamInventory.reduce((total, item) => total + (item.price * item.quantity), 0);
    const totalQuantity = iceCreamInventory.reduce((total, item) => total + item.quantity, 0);

    document.getElementById('totalPrice').textContent = `Total Price: $${totalPrice.toFixed(2)}`;
    document.getElementById('totalQuantity').textContent = `Total Quantity: ${totalQuantity} pcs`;
}





