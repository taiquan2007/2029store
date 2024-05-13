// Function to remove item from cart
function removeItem(id) {
    // Find index of item in cartItems array
    const index = cartItems.findIndex(item => item.id === id);
    if (index !== -1) {
        // Remove item from cartItems array
        cartItems.splice(index, 1);
        // Update cart display
        displayCartItems();
    }
}

// Function to display cart items
function displayCartItems() {
    const cartList = document.getElementById('cartItems');
    cartList.innerHTML = '';
    cartItems.forEach(item => {
        // Add delete button for each item with trash icon
        cartList.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
                                ${item.name} - $${item.price}
                                <button onclick="removeItem(${item.id})" class="btn btn-danger btn-sm">
                                    <i class="bi bi-trash-fill"></i>
                                </button>
                            </li>`;
    });
}

// Display cart items on page load
window.onload = function() {
    displayCartItems();
};
