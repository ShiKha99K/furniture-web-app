document.addEventListener('DOMContentLoaded', () => {
    console.log('Cart JavaScript loaded');

    const cartItems = document.querySelector('.cart-items');
    const totalAmount = document.getElementById('total-amount');

    // Dummy cart data
    const cart = [
        { id: 1, name: 'Chair', price: 50, quantity: 2, image: 'images/products/chair1.jpg' },
        { id: 2, name: 'Table', price: 150, quantity: 1, image: 'images/products/table1.jpg' }
    ];

    // Render cart items
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div>${item.name}</div>
            <div>$${item.price}</div>
            <div>Quantity: ${item.quantity}</div>
        `;
        cartItems.appendChild(cartItem);
    });

    // Calculate total
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    totalAmount.textContent = total.toFixed(2);
});
