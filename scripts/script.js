let product = [
    {
        id: 1,
        title: "Conditioner",
        price: 14.99,
        stock: 10,
        description: "Wonder Gro Jamaican Black Castor Oil Hair and Scalp Conditioner",
        imgUrl: "assets/images/conditioner.JPG"
    },
    {
        id: 2,
        title: "Hair Loss",
        price: 24.99,
        stock: 20,
        description: "Genuine African Formula Shea Butter",
        imgUrl: "assets/images/loss.JPG"
    },
    {
        id: 3,
        title: "Relaxer",
        price: 34.99,
        stock: 30,
        description: "Aclo Affirm Sensitive Scalp Relaxer",
        imgUrl: "assets/images/relaxer.JPG"
    },
    {
        id: 4,
        title: "Shampoo",
        price: 44.99,
        stock: 40,
        description: "ApHogee Deep Moisture Shampoo",
        imgUrl: "assets/images/shampoo.JPG"
    }
]

const cartItems = document.querySelector(".cart-items");
const cartAmt = document.querySelector(".cart-total");


function renderProducts(){
    //console.log(product[0].stock);

    const pdtPage = document.getElementById('main');
    
    for (let i=0; i<product.length; i++){

        const pdtDiv = document.createElement('div');
        pdtDiv.classList.add('product');
        pdtPage.appendChild(pdtDiv);

        const pdtItem = document.createElement('div');
        pdtItem.classList.add('product-item');
        pdtDiv.appendChild(pdtItem);

        const pdtTitle = document.createElement('h2');
        pdtTitle.classList.add('product-title');
        pdtTitle.textContent = `${product[i].title}`;
        pdtItem.appendChild(pdtTitle);

        const pdtImage = document.createElement('img');
        pdtImage.src = `${product[i].imgUrl}`;
        pdtItem.appendChild(pdtImage);

        const pdtPrice = document.createElement('h3');
        pdtPrice.classList.add('product-price');
        pdtPrice.textContent = `${product[i].price}`;
        pdtItem.appendChild(pdtPrice);

        const pdtStock = document.createElement('h4');
        pdtStock.classList.add('product-stock');
        pdtStock.textContent = `${product[i].stock}`;
        pdtItem.appendChild(pdtStock);

        const pdtDescription = document.createElement('h4');
        pdtDescription.classList.add('product-desc');
        pdtDescription.textContent = `${product[i].description}`;
        pdtItem.appendChild(pdtDescription);

        const pdtId = 'pdt-' + `${product[i].id}`;
        const remId = 'rem-' + `${product[i].id}`;

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
    }
}

renderProducts();


function addToCart(id){
    decreaseStock(id);
    increaseCart(id);
}

function decreaseStock(id){
    let currStock = product[id].stock;
    currStock = currStock - 1;
    product[id].stock = currStock;
}

function increaseCart(id){
    let cartCount = parseInt(cartItems.innerText);
    cartCount = cartCount + 1;
    cartItems.innerText = cartCount;

    cartTotal(id);
}

function cartTotal(id){
    let cartAmount = parseInt(cartAmt.innerText);
    cartTot = cartAmount + (product[id].price);
    cartAmt.innerText = parseFloat(cartTot.toFixed(2));
}

function deleteItem(id){
    product.splice(id,1);
}