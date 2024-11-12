const products = [
    { id: 1, name: '1984', author:'George Orwell', price: 100, currency: '£', image: "/assets/img/1984.jpg" },
    { id: 2, name: '1Q84', author:'Haruki Murakami', price: 200, currency: '£', image: "/assets/img/1Q84.jpg" },
    { id: 3, name: 'A Little Life', author:'Hanya Yanagihara', price: 150, currency: '£', image: "/assets/img/littlelife.jpg" },
    { id: 4, name: 'The Song of Achilles', author:'Madeline Miller', price: 300, currency: '£', image: "/assets/img/achilles.jpg" },
    { id: 5, name: 'After Dark', author:'Haruki Murakami', price: 250, currency: '£', image: "/assets/img/afterdark.jpg" },
    { id: 6, name: 'East of Eden', author:'John Steinbeck', price: 100, currency: '£', image: "/assets/img/eden.jpg" },
    { id: 7, name: 'The Bell Jar', author:'Sylvia Plath', price: 200, currency: '£', image: "/assets/img/belljar.jpg" },
    { id: 8, name: 'The Beautiful and Damned', author:'F. Scott Fitzgerald', price: 150, currency: '£', image: "/assets/img/damned.jpg" },
    { id: 9, name: 'Dance Dance Dance', author:'Haruki Murakami', price: 300, currency: '£', image: "/assets/img/dance.jpg" },
    { id: 10, name: 'The Alchemist', author:'Paulo Coelho', price: 250, currency: '£', image: "/assets/img/alchemist.jpg" },
    { id: 11, name: 'Emma', author:'Jane Austen', price: 100, currency: '£', image: "/assets/img/emma.jpg" },
    { id: 12, name: 'The Fall', author:'Albert Camus', price: 200, currency: '£', image: "/assets/img/fall.jpg" },
    { id: 13, name: 'The Goldfinch', author:'Donna Tartt', price: 150, currency: '£', image: "/assets/img/goldfinch.jpg" },
    { id: 14, name: 'The House of Hades', author:'Rick Riordan', price: 300, currency: '£', image: "/assets/img/hades.jpg" },
    { id: 15, name: 'Hobbits', author:'J. R. R. Tolkien', price: 250, currency: '£', image: "/assets/img/hobbit.jpg" },
    { id: 16, name: 'Kafka on the Shore', author:'Haruki Murakami', price: 100, currency: '£', image: "/assets/img/kafka.jpg" },
    { id: 17, name: 'To Kill a Mockingbird', author:'Harper Lee', price: 200, currency: '£', image: "/assets/img/mockingburd.jpg" },
    { id: 18, name: 'The Nose', author:'Nikolai Gogol', price: 150, currency: '£', image: "/assets/img/nose.jpg" },
    { id: 19, name: 'O', author:'Steven Carroll', price: 300, currency: '£', image: "/assets/img/o.jpg" },
    { id: 20, name: 'Pride and Prejudice ', author:'Jane Austen', price: 250, currency: '£', image: "/assets/img/pride.jpg" },
    { id: 21, name: 'The Secret History', author:'Donna Tartt', price: 100, currency: '£', image: "/assets/img/secrethistory.jpg" },
    { id: 22, name: 'They Both Die at the End', author:'Adam Silvera', price: 200, currency: '£', image: "/assets/img/theend.webp" },
    { id: 23, name: 'Death by Water', author:'Kenzaburō Ōe', price: 150, currency: '£', image: "/assets/img/water.jpg" },
    { id: 24, name: 'White Nights ', author:'Fyodor Dostoevsky', price: 300, currency: '£', image: "/assets/img/whitenight.jpg" },
];

let currentPage = 1;
const itemsPerPage = 6;

// ссылки на элементы
const productList = document.getElementById('books-list');
const cartModal = document.getElementById('cart-modal-container');
const closeModal = document.getElementById('close-modal-span');
const openCart = document.getElementById('open-cart-btn');
const cartItems = document.getElementById('cart-items-div');
const totalPriceElem = document.getElementById('total-price');

// корзина в localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// функция для обновления корзины
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    openCart.innerHTML = `<img src="/assets/img/shop.svg" alt="Cart" style="vertical-align: middle;"/> ${cart.length}`;
    renderCart();
}

function renderProducts(productsToShow) {
    const productList = document.getElementById('books-list');
    productList.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'books-catalog';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="200" height="330">
            <h3>${product.name}</h3>
            <h4>${product.author}</h4>
            <p>${product.currency}${product.price}</p>
            <button onclick="addToCart(${product.id})">Add</button>
        `;
        productList.appendChild(productDiv);
    });
}

function paginateProducts() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedProducts = products.slice(start, end);
    renderProducts(paginatedProducts);
    updatePaginationInfo();
}

function updatePaginationInfo() {
    const pageInfo = document.getElementById('pagination-info');
    pageInfo.innerText = `Page ${currentPage} of ${Math.ceil(products.length / itemsPerPage)}`;
}

// функция для добавления товара в корзину
function addToCart(id) {
    const product = products.find(prod => prod.id === id);
    cart.push(product);
    updateCart();
}

// функция для рендера содержимого корзины
function renderCart() {
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemElem = document.createElement('div');
        itemElem.className = 'cart-catalog';
        itemElem.innerHTML = `
        <button onclick="removeFromCart(${item.id})">&#10006;</button>
            <img src="${item.image}" alt="${item.name}" width="100" height="150">
            <h3>${item.name}</h3>
            <p>&pound;${item.price}</p>
        `;
        cartItems.appendChild(itemElem);
        total += item.price;
    });

    totalPriceElem.innerText = `Total: £${total}`;
}

// функция для удаления товара из корзины
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

// открытие модального окна
openCart.onclick = () => {
    cartModal.style.display = "block";
};

// закрытие модального окна
closeModal.onclick = () => {
    cartModal.style.display = "none";
};

// закрытие модального окна при клике вне его
window.onclick = (event) => {
    if (event.target === cartModal) {
        cartModal.style.display = "none";
    }
};

document.getElementById('next-btn-pagination').addEventListener('click', () => {
    if (currentPage * itemsPerPage < products.length) {
        currentPage++;
        paginateProducts();
    }
});

document.getElementById('prev-btn-pagination').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        paginateProducts();
    }
});

document.getElementById('filter').addEventListener('input', (e) => {
    const filterText = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product => product.author.toLowerCase().includes(filterText));
    currentPage = 1; // сброс на первую страницу
    renderProducts(filteredProducts);
    updatePaginationInfo();
});

paginateProducts();
renderCart();
