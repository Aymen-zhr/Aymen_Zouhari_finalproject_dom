let dropdown = document.querySelector('.dropdown');
let dropdownContent = document.querySelector('.dropdown-content');

dropdown.addEventListener('click', function () {
    dropdownContent.classList.toggle('show');
});

let nav = document.querySelector('.nav-list');
document.querySelector('.fa-bars').addEventListener('click', function () {
    nav.classList.add('show');
});

document.querySelector('.nav-list-span').addEventListener('click', function () {
    nav.classList.remove('show');
});

const testimonialItems = document.querySelectorAll('.testimonial-item');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(index) {
    testimonialItems.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    testimonialItems[index].classList.add('active');
    dots[index].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

setInterval(() => {
    currentSlide = (currentSlide + 1) % testimonialItems.length;
    showSlide(currentSlide);
}, 5000);
