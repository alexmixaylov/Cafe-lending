window.addEventListener('DOMContentLoaded', function name() {

    let body = document.body;
        menuBtn = document.querySelector('.burger-button');

    
    function openMenu() {

        let menu = document.querySelector('.menu');

        menuBtn.classList.toggle('opened');
        menu.classList.toggle('hidden');

    }

    menuBtn.addEventListener('click', openMenu);

});