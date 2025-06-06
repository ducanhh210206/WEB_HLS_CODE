const images = ["Image1.jpg", "Image2.jpg", "Image3.jpg", "Image4.jpg"];
let currentIndex = 0;
let timeout;

const slide = document.getElementById("slide");
const dotsContainer = document.getElementById("dotsContainer");

function showImage(index) {
    slide.classList.remove("show");
    setTimeout(() => {
        slide.src = images[index];
        slide.classList.add("show");
    }, 100);
    updateDots(index);
}

function next() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
    resetAutoSlide();
}

function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
    resetAutoSlide();
}

function createDots() {
    dotsContainer.innerHTML = "";
    for (let i = 0; i < images.length; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === currentIndex) dot.classList.add("active");
        dotsContainer.appendChild(dot);
    }
}

function updateDots(index) {
    const dots = document.querySelectorAll(".dot");
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

function getRandomDelay() {
    return Math.floor(Math.random() * 2000) + 3000; 
}

function autoSlide() {
    timeout = setTimeout(() => {
        next();
        autoSlide();
    }, getRandomDelay());
}

function resetAutoSlide() {
    clearTimeout(timeout);
    autoSlide();
}

createDots();
showImage(currentIndex);
autoSlide();


function updateDots(index) {
    const dots = document.querySelectorAll(".dot");
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

function startAutoSlide() {
    interval = setInterval(() => {
        next();
    }, 5000); 
}

function resetAutoSlide() {
    clearInterval(interval);
    startAutoSlide();
}

createDots();
showImage(currentIndex);
startAutoSlide();

