let product = [
    {
        title: "Conditioner",
        price: 14.99,
        stock: 10,
        description: "Wonder Gro Jamaican Black Castor Oil Hair and Scalp Conditioner",
        imgUrl: "/assets/images/conditioner.jpg"
    },
    {
        title: "Hair Loss",
        price: 14.99,
        stock: 10,
        description: "Genuine African Formula Shea Butter",
        imgUrl: "/assets/images/loss.jpg"
    },
    {
        title: "Relaxer",
        price: 14.99,
        stock: 10,
        description: "Aclo Affirm Sensitive Scalp Relaxer",
        imgUrl: "/assets/images/relaxer.jpg"
    },
    {
        title: "Shampoo",
        price: 14.99,
        stock: 10,
        description: "ApHogee Deep Moisture Shampoo",
        imgUrl: "/assets/images/shampoo.jpg"
    }
]

function show(){
    for (let i=0; i<product.length; i++){

        const pdtPage = document.getElementById('main');

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

        const addCart = document.createElement('input');
        addCart.setAttribute('type', 'submit');
        addCart.setAttribute('value', 'Add to Cart');
        addCart.classList.add('add-cart');
        pdtItem.appendChild(addCart);
    }
}

show();