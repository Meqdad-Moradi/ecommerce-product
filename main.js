const product = [{
        id: 1,
        src: `./images/image-product-1.jpg`
    },
    {
        id: 1,
        src: `./images/image-product-2.jpg`
    },
    {
        id: 1,
        src: `./images/image-product-3.jpg`
    },
    {
        id: 1,
        src: `./images/image-product-4.jpg`
    }
]


// select elements
const productImg = document.querySelector('.product-img img')
const thumbnailsImg = document.querySelectorAll('.showcase-body .thumbnail')
const lightbox = document.querySelector('.lightbox')
const lightboxProductImg = document.querySelector('.lightbox .product-img img')
const lightboxThumbnailsImg = document.querySelectorAll('.lightbox .thumbnail')
const close = document.querySelector('.close')
const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')

let counter = 0


// preview product image
const previewProductImage = (targetThumbnail, allThumbnails, productImage, i) => {
    allThumbnails.forEach(item => item.classList.remove('active'))
    targetThumbnail.classList.add('active')

    product.forEach((item, j) => {
        if (j === i) {
            productImage.src = item.src
        }
    })
}


// preview product images
thumbnailsImg.forEach((thumbnail, index) => thumbnail.addEventListener('click', e => {
    const currentThumbnail = e.currentTarget
    const currentIndex = index

    previewProductImage(currentThumbnail, thumbnailsImg, productImg, currentIndex)
}))


// lightbox section
productImg.addEventListener('click', () => {
    lightbox.style.display = 'flex'

    // next slide
    nextBtn.addEventListener('click', e => {
        counter++
        if (counter > product.length - 1) {
            counter = 0
        }

        lightboxThumbnailsImg.forEach(item => item.classList.remove('active'))
        lightboxThumbnailsImg[counter].classList.add('active')
        lightboxProductImg.src = product[counter].src
    })


    // prev slide
    prevBtn.addEventListener('click', e => {
        counter--
        if (counter < 0) {
            counter = product.length - 1
        }

        lightboxThumbnailsImg.forEach(item => item.classList.remove('active'))
        lightboxThumbnailsImg[counter].classList.add('active')
        lightboxProductImg.src = product[counter].src
    })
})


// remove lightbox 
lightbox.addEventListener('click', e => {
    if (e.target === e.currentTarget) {
        e.currentTarget.style.display = 'none'
    }
})

// preview product images from lightbox
lightboxThumbnailsImg.forEach((item, index) => item.addEventListener('click', e => {
    currentItem = e.currentTarget
    currentIndex = index
    counter = index

    previewProductImage(currentItem, lightboxThumbnailsImg, lightboxProductImg, currentIndex)
}))


// close the lightbox
close.addEventListener('click', e => {
    lightbox.style.display = 'none'
})


/*=========================
    checkout the product
=========================*/

// create cart item
const productItem = [{
    id: 1,
    pName: 'Fall Limited Edition Sneakers',
    price: 125.00,
    src: './images/image-product-1.jpg'
}]

const cart = document.querySelector('.cart')
const cartContent = document.querySelector('.cart-content')
const cartBody = document.querySelector('.cart-body')
const addToCartBtn = document.querySelector('#add-to-cart')
const decrementBtn = document.querySelector('#decrement')
const quantityBtn = document.querySelector('#quantity')
const incrementBtn = document.querySelector('#increment')
const cartInfo = document.querySelector('.cart-info')
const avatar = document.querySelector('.avatar')

let quantity = 1


// display cart container
const toggleCartContent = () => {
    if (!cartContent.classList.contains('active')) {
        cartContent.classList.add('active')
        avatar.style.borderColor = 'hsl(26, 100%, 55%)'
    } else {
        avatar.style.borderColor = 'transparent'
        cartContent.classList.remove('active')
    }
}
cart.addEventListener('click', toggleCartContent)
avatar.addEventListener('click', toggleCartContent)

// 

// decrement the item's amount
decrementBtn.addEventListener('click', e => {
    quantity--
    if (quantity <= 0) {
        quantity = 1
        return false
    }

    quantityBtn.textContent = quantity
})

// increment the item's amount
incrementBtn.addEventListener("click", e => {
    quantity++
    quantityBtn.textContent = quantity
})

// add the item to cart 
addToCartBtn.addEventListener('click', e => {
    cartInfo.style.display = 'none'
    cartBody.style.display = 'block'
    cartBody.style.height = 'auto'
    cartBody.innerHTML = `
            <div class="cart-body-content">
                <div class="cart-item-img">
                  <img src="${productItem[0].src}" alt="${productItem[0].pName}">
                </div>

                <div class="cart-item-details">
                  <p class="product-name">${productItem[0].pName}</p>
                  <div class="cart-prices">
                    <span class="price">$${productItem[0].price}.00</span>
                    <span class="calc">x <span class="quantity">${quantity}</span></span>
                    <span class="total-price">$${productItem[0].price * quantity}.00</span>
                  </div>
                </div>

                <div class="remove-product" title="Delete item">
                <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
                </div>
              </div>
              
              <button class="checkout-btn">checkout</button>`

    const deleteBtn = document.querySelector('.remove-product')
    deleteBtn.addEventListener('click', () => {
        cartBody.style.display = 'grid'
        cartBody.style.height = '200px'
        cartBody.innerHTML = '<p class="cart-info">your cart is empty!</p>'
    })
})

// remove the cart content
cartContent.addEventListener('click', e => {
    if (e.target !== e.currentTarget) {
        cartContent.classList.remove('active')
    }
})