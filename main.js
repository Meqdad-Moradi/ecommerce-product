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
    lightbox.addEventListener('click', e => {
        if (e.target === e.currentTarget) {
            e.currentTarget.style.display = 'none'
        }
    })
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


//////////////////////////////////
// checkout the product

const cart = document.querySelector('.cart')


// create cart container
cart.addEventListener('click', e => {
    const cartContent = document.querySelector('.cart-content')
    cartContent.classList.toggle('active')
})