let dropdown = document.querySelector('.dropdown');
let dropdownContent = document.querySelector('.dropdown-content');

dropdown.addEventListener('click', function(){
    dropdownContent.classList.toggle('show');
});

let nav = document.querySelector('.nav-list');
document.querySelector('.fa-bars').addEventListener('click', function(){
    nav.classList.add('show');
});

document.querySelector('.nav-list-span').addEventListener('click', function(){
    nav.classList.remove('show');
});