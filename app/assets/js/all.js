


// const	body = document.querySelector('body')
const changeImg = document.querySelector('.changeImg')

changeImg.addEventListener("mouseover", function () {
  changeImg.src = '../assets/images/product-2-color.png'
}, false)

changeImg.addEventListener("mouseout", function () {
  changeImg.src = '../assets/images/product-2.png'
}, false)