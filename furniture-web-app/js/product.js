document.addEventListener('DOMContentLoaded', () => {
    const productList = document.querySelector('.product-list');

    // Dummy product data
    const products = [
        { id: 1, name: 'Chair', price: 50, image: 'images/products/chair1.jpg' },
        { id: 2, name: 'Table', price: 150, image: 'images/products/table1.jpg' },
        { id: 3, name: 'Sofa', price: 300, image: 'images/products/sofa1.jpg' },
        { id: 4, name: 'Bed', price: 500, image: 'images/products/bed1.jpg' }
    ];

    // Render products
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price}</p>
            <button>Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });
});
