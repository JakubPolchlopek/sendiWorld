const gallery = document.querySelector('.gallery');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

gallerySettings = {
    totalImages: gallery.querySelectorAll('img').length,
    imagesPerView: 3,
    currentIndex: 0
};

const totalImages = gallery.querySelectorAll('img').length;
const imagesPerView = 3;
let currentIndex = 0;

const updateGallery = () => {
    const offset = -(currentIndex * (100 / imagesPerView));
    gallery.style.transform = `translateX(${offset}%)`;
};

leftBtn.addEventListener('click', () => {
    if (currentIndex === 0) {
        currentIndex = totalImages - imagesPerView;
    } else {
        currentIndex--;
    }
    updateGallery();
});

rightBtn.addEventListener('click', () => {
    if (currentIndex >= totalImages - imagesPerView) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateGallery();
});

const autoSlide = () => {
    rightBtn.click();
};

let autoSlideInterval = setInterval(autoSlide, 5000);

const galleryContainer = document.querySelector('.gallery-container');
galleryContainer.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});
galleryContainer.addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(autoSlide, 5000);
});

updateGallery();
