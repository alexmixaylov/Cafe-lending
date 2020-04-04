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

    // function resizeTitle() {
    //     let image = document.querySelectorAll('.lol'),
    //         title = document.querySelectorAll('.azaz');

    //         for (let i = 0; i < image.length; i++) {
    //             title[i].getElementsByClassName.height = image[i].scrollHeight;
    //             console.log('ok');
    //         }

    // }

    // resizeTitle();
});