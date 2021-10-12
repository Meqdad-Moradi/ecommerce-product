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




const productImg = document.querySelector('.product-img img')
const thumbnailsImg = document.querySelectorAll('.thumbnail')

const changeImage = (thumbnail, i) => thumbnail.addEventListener('click', e => {
    const currentThumbnail = e.currentTarget
    thumbnailsImg.forEach(item => item.classList.remove('active'))
    currentThumbnail.classList.add('active')
    // const currentImg = currentThumbnail.querySelector('img')
    product.forEach((item, j) => {
        if (j === i) {
            productImg.src = item.src
        }
    })
})

thumbnailsImg.forEach(changeImage)