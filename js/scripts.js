window.addEventListener('DOMContentLoaded', function name() {

    //Menu open and close

    let menuBtn = document.querySelector('.burger-button');

    
    function openMenu() {

        let menu = document.querySelector('.menu'),
            body = document.body,
            menuLink = document.querySelectorAll('.menu-links .link');

        menuBtn.classList.toggle('opened');
        menu.classList.toggle('hidden');
        body.classList.toggle('lock-scroll');

        for (let i = 0; i < menuLink.length; i++) {
            menuLink[i].addEventListener('click', function () {
                menuBtn.classList.remove('opened');
                menu.classList.add('hidden');
                body.classList.remove('lock-scroll');
            })
        }
        
    }

    menuBtn.addEventListener('click', openMenu);

    //Smooth scroll from menu link to section

    function anchorLinkHandler(e) {
        const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);

        e.preventDefault();
        const targetID = this.getAttribute("href");
        const targetAnchor = document.querySelector(targetID);
        if (!targetAnchor) return;
        const originalTop = distanceToTop(targetAnchor) - 70;

        window.scrollBy({
            top: originalTop,
            left: 0,
            behavior: "smooth"
        });

        const checkIfDone = setInterval(function () {
            const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
            if (distanceToTop(targetAnchor) === 0 || atBottom) {
                targetAnchor.focus();
                window.history.pushState("", "", targetID);
                clearInterval(checkIfDone);
            }
        }, 100);
    }

    const linksToAnchors = document.querySelectorAll('a[href^="#"]');

    linksToAnchors.forEach(each => (each.onclick = anchorLinkHandler));

    //Menu background color change

    window.addEventListener('scroll', function () {
        let header = document.querySelector('.header'),
            contentHeight = document.querySelector('.main-content').style.height;

        if (pageYOffset > contentHeight) {
            header.classList.add('dark');
        } else {
            header.classList.remove('dark');
        }
        
    });
    
    //Reserve block date on select

    function date(now) {

        let day = now.getDate(),
            mounth = now.getMonth();
            function writeDate() {
                let select = document.querySelector('#date'),
                    option = select.querySelectorAll('.option');

                for (let i = 0; i < option.length; i++) {
                    if (mounth < 10) {
                        option[i].value = day + '.0' + mounth;
                    } else {
                        option[i].value = day + mounth;
                    }
                    day++;
                }
            }

        writeDate();
    }

    date(new Date(2020, 3, 30));

    //Slider with dishes

    const nextBtn = document.querySelector('.next-slide'),
          prevBtn = document.querySelector('.prev-slide'),
          slides = document.querySelectorAll('.slider-slide'),
          pagination = document.querySelectorAll('.pagination');

    let active = 0;

    function hideSlide() {
        slides[active].classList.remove('active');
        pagination[active].classList.remove('active');
        setTimeout(() => {
            slides[active].classList.add('hide');
        }, 300);
    }

    function showSlide() {
        slides[active].classList.remove('hide');
        slides[active].classList.add('active');
        pagination[active].classList.add('active');
    }

    function nextSlide() {
        hideSlide();
        if (active + 1 == slides.length) {
            active = 0;
        } else {
            active++;
        }
        showSlide();
    }

    function prevSlide() {
        hideSlide();
        if (active - 1 < 0) {
            active = slides.length - 1;
        } else {
            active--;
        }
        showSlide();
    }

    //Controls

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

});
