function createProduct(obj, callback) {
    // Додаємо унікальний ідентифікатор
    const product = { ...obj, id: generateUniqueId() };
    // Викликаємо колбек з новоствореним продуктом
    callback(product);
}

function logProduct(product) {
    console.log("Product:", product);
}

function logTotalPrice(product) {
    const totalPrice = product.price * product.quantity;
    console.log(`Total price for ${product.name}: $${totalPrice.toFixed(2)}`);
}

function generateUniqueId() {
    let id = Math.random() * 1000;
    return Math.floor(id);
}


document.querySelector('.button').addEventListener('click', function(){
    const newProduct = {};
    newProduct.name = document.querySelector('#name').value;
    newProduct.price= document.querySelector('#price').value;
    newProduct.quantity = document.querySelector('#quantity').value;
    createProduct(newProduct, logProduct);
    createProduct(newProduct, logTotalPrice);
});
