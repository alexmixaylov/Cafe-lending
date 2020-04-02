window.addEventListener('DOMContentLoaded', function name() {

    let body = document.body;
        menuBtn = document.querySelector('.burger-button');

    
    function openMenu() {

        let menu = document.querySelector('.menu');

        menuBtn.classList.toggle('opened');
        menu.classList.toggle('hidden');
        body.classList.toggle('lock-scroll');
    }

    menuBtn.addEventListener('click', openMenu);


    // let select = document.querySelectorAll('.select');


    // let option = select[1].querySelectorAll('.option');

    // for (let i = 0; i < option.length; i++) {
    //     console.log(option[i].value);
        
    // }
});