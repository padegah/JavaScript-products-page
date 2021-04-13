products = [];

class Product {

    constructor(id, title, price, stock, description, imgUrl){
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.description = description;
        this.imgUrl = imgUrl;
    }

    addPdt(){
        let pdt = {
            id: this.id,
            title: this.title,
            price : this.price,
            stock: this.stock,
            description: this.description,
            imgUrl: this.imgUrl
        };
        return pdt;
    }
}

class Conditioner extends Product{
    super(){}
}

class HairLoss extends Product{
    super(){}
}

class Relaxer extends Product{
    super(){}
}

class Shampoo extends Product{
    super(){}
}

Cond = new Conditioner(1, "Conditioner", 10.00, 10, "Wonder Gro Jamaican Black Castor Oil Hair and Scalp Conditioner", "assets/images/conditioner.JPG");
products.push(Cond.addPdt());

HLoss = new Product(2, "Hair Loss", 20.00, 20, "Genuine African Formula Shea Butter", "assets/images/loss.JPG");
products.push(HLoss.addPdt());

Rel = new Product(3, "Relaxer", 30.00, 30, "Aclo Affirm Sensitive Scalp Relaxer", "assets/images/relaxer.JPG");
products.push(Rel.addPdt());

Shamp = new Product(4, "Shampoo", 40.00, 40, "ApHogee Deep Moisture Shampoo", "assets/images/shampoo.JPG");
products.push(Shamp.addPdt());

console.log(products);


const cartItems = document.querySelector(".cart-items");
const cartAmt = document.querySelector(".cart-total");
const reset = document.querySelector(".reset");
const pdtPage = document.getElementById('main');
let cartCount = 0;

function renderProducts(products){
    // console.log(products.length);
    
    for (let i=0; i<products.length; i++){
        const space = document.createElement('br')
        pdtPage.appendChild(space);

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
        pdtPrice.textContent = `$${products[i].price}`;
        pdtItem.appendChild(pdtPrice);

        const pdtStock = document.createElement('h4');
        pdtStock.classList.add('product-stock');
        pdtStock.textContent = `${products[i].stock} items available`;
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
    }
}

renderProducts(products);

function addToCart(id){
    // console.log("hi");
    if (products[id].stock === 0){
        alert("Sorry, " + products[id].title + " is out of stock");
        return;
    }
    decreaseStock(id);
    increaseCart(id);
}

function decreaseStock(id){
    let currStock = products[id].stock;
    currStock = currStock - 1;
    products[id].stock = currStock;

    clearPage();
    renderProducts(products);
}

function increaseCart(id){
    cartCount = parseInt(cartItems.innerText);
    cartCount += 1;
    cartItems.innerText = cartCount;

    cartTotal(id);
}

function cartTotal(id){
    let cartAmount = parseInt(cartAmt.innerText);
    cartAmount = cartAmount + (products[id].price);
    cartAmt.innerText = parseFloat(cartAmount.toFixed(2));
}

function deleteItem(id){
    products.splice(id,1);
    
    //reset IDs
    for (let i=0; i<products.length; i++){
        products[i].id =  products[i].id - 1;
    }

    clearPage();
    renderProducts(products);
}

function resetCart(product){
    cartAmt.innerText = '0.00';
    cartItems.innerText = '0';

    resetStock(product);
}

function resetStock(product){
    const cond_stock = 10;
    const hloss_stock = 20;
    const rel_stock = 30;
    const shamp_stock = 40;

    for (let i=0; i<product.length; i++){
        if (product[i].title.includes("Conditioner")){
            product[i].stock = cond_stock;
        } else if (product[i].title.includes("Hair")){
            product[i].stock = hloss_stock;
        } else if (product[i].title.includes("Relaxer")){
            product[i].stock = rel_stock;
        } else if (product[i].title.includes("Shampoo")){
            product[i].stock = shamp_stock;
        }
    }

    clearPage();
    renderProducts(product);
}

function clearPage(){
    pdtPage.innerHTML = '';
}

reset.addEventListener('click', resetCart.bind(null, products));