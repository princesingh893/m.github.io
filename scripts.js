const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.navigation-dots');

let currentSlide = 0;
const totalSlides = slides.length;

// Create navigation dots
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

// Update slider position
function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

// Previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
}

// Go to specific slide
function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

// Event listeners
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto-advance (optional)
let autoSlide = setInterval(nextSlide, 5000);

// Pause on hover
slider.parentElement.addEventListener('mouseenter', () => clearInterval(autoSlide));
slider.parentElement.addEventListener('mouseleave', () => {
    autoSlide = setInterval(nextSlide, 5000);
});
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
hamburger.addEventListener('click', () => navList.classList.toggle('active'));        