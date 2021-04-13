let product = [
    {
        id: 1,
        title: "Conditioner",
        price: 10,
        stock: 10,
        description: "Wonder Gro Jamaican Black Castor Oil Hair and Scalp Conditioner",
        imgUrl: "assets/images/conditioner.JPG"
    },
    {
        id: 2,
        title: "Hair Loss",
        price: 20,
        stock: 20,
        description: "Genuine African Formula Shea Butter",
        imgUrl: "assets/images/loss.JPG"
    },
    {
        id: 3,
        title: "Relaxer",
        price: 30,
        stock: 30,
        description: "Aclo Affirm Sensitive Scalp Relaxer",
        imgUrl: "assets/images/relaxer.JPG"
    },
    {
        id: 4,
        title: "Shampoo",
        price: 40,
        stock: 40,
        description: "ApHogee Deep Moisture Shampoo",
        imgUrl: "assets/images/shampoo.JPG"
    }
]

const cartItems = document.querySelector(".cart-items");
const cartAmt = document.querySelector(".cart-total");
const reset = document.querySelector(".reset");
const pdtPage = document.getElementById('main');

function renderProducts(products){
    // console.log(products.length);
    
    for (let i=0; i<products.length; i++){

        const pdtDiv = document.createElement('div');
        pdtDiv.classList.add('product');
        pdtPage.appendChild(pdtDiv);

        const pdtItem = document.createElement('div');
        pdtItem.classList.add('product-item');
        pdtDiv.appendChild(pdtItem);

        const pdtTitle = document.createElement('h2');
        pdtTitle.classList.add('product-title');
        pdtTitle.textContent = `${products[i].title}`;
        pdtItem.appendChild(pdtTitle);

        const pdtImage = document.createElement('img');
        pdtImage.src = `${products[i].imgUrl}`;
        pdtItem.appendChild(pdtImage);

        const pdtPrice = document.createElement('h3');
        pdtPrice.classList.add('product-price');
        pdtPrice.textContent = `${products[i].price}`;
        pdtItem.appendChild(pdtPrice);

        const pdtStock = document.createElement('h4');
        pdtStock.classList.add('product-stock');
        pdtStock.textContent = `${products[i].stock}`;
        pdtItem.appendChild(pdtStock);

        const pdtDescription = document.createElement('h4');
        pdtDescription.classList.add('product-desc');
        pdtDescription.textContent = `${products[i].description}`;
        pdtItem.appendChild(pdtDescription);

        const pdtId = 'pdt-' + `${products[i].id}`;
        const remId = 'rem-' + `${products[i].id}`;

        const addCart = document.createElement('input');
        addCart.setAttribute('type', 'submit');
        addCart.setAttribute('value', 'Add to Cart');
        addCart.classList.add(pdtId);
        pdtItem.appendChild(addCart);


        const delItem = document.createElement('input');
        delItem.setAttribute('type', 'submit');
        delItem.setAttribute('value', 'Delete Item');
        delItem.classList.add(remId);
        pdtItem.appendChild(delItem);

        let cart = pdtPage.querySelector('.'+ pdtId);
        let id = pdtId.slice(pdtId.length - 1) - 1;
        cart.addEventListener('click', addToCart.bind(null, id));

        let remItem = pdtPage.querySelector('.'+ remId);
        remItem.addEventListener('click', deleteItem.bind(null, id));
        // console.log(id);
    }
}

renderProducts(product);

function addToCart(id){
    if (product[id].stock === 0){
        alert("Sorry, " + product[id].title + " is out of stock");
        return;
    }
    decreaseStock(id);
    increaseCart(id);
}

function decreaseStock(id){
    let currStock = product[id].stock;
    currStock = currStock - 1;
    product[id].stock = currStock;

    clearPage();
    renderProducts(product);
}

function increaseCart(id){
    let cartCount = parseInt(cartItems.innerText);
    cartCount += 1;
    cartItems.innerText = cartCount;

    cartTotal(id);
}

function cartTotal(id){
    let cartAmount = parseInt(cartAmt.innerText);
    cartAmount = cartAmount + (product[id].price);
    cartAmt.innerText = parseFloat(cartAmount.toFixed(2));
}

function deleteItem(id){
    product.splice(id,1);
    
    //reset IDs
    for (let i=0; i<product.length; i++){
        product[i].id =  product[i].id - 1;
    }

    console.log(product);
    resetCart();
    clearPage();
    renderProducts(product);
}

function resetCart(){
    cartAmt.innerText = '0';
    cartItems.innerText = '0';
}

function clearPage(){
    pdtPage.innerHTML = '';
}

reset.addEventListener('click', resetCart);