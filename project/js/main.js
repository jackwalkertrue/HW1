const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title, price) => {
    return `<div class="product-box">
    <article class="product">
    <a href="#"><img class="product__img" src="https://m.sodrk.ru/files/uploads/remont_printerov2.jpg" alt="product"></a>
    <div class="product__content">
        <a href="#" class="product__name">${title}</a>
        <div class="product__price">${price}</div>
    </div>
    <a href="#" class="product__add">Add to Cart</a>
</article>
</div>`;
};

const renderProducts = (list) => {
    const productList = list.map((product) => {
        return renderProduct(product.title, product.price);
    });
    console.log(productList);
    document.querySelector('.products').innerHTML = productList.join('');
};

renderProducts(products);
