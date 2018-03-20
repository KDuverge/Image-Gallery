const img = document.querySelectorAll('img');
const currentImg = document.querySelector('.img1');

const changeCurrent = function() {currentImg.src = this.src};

img.forEach(pic => pic.addEventListener('click', changeCurrent));

