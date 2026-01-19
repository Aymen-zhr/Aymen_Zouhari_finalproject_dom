let dropdown = document.querySelector('.dropdown');
let dropdownContent = document.querySelector('.dropdown-content');

dropdown.addEventListener('click', function(){
    dropdownContent.classList.toggle('show');
});

