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
            });
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
                    
                    day++;
                }

            }

        writeDate();
    }

    date(new Date());

    //Slider with dishes

    const nextBtn = document.querySelector('.next-slide'),
          prevBtn = document.querySelector('.prev-slide'),
          slides = document.querySelectorAll('.slider-slide'),
          pagination = document.querySelectorAll('.round');

    let active = 0;

    function hideSlide() {
        slides[active].classList.remove('active');
        slides[active].classList.remove('animate');
        pagination[active].classList.remove('active');
    }

    function showSlide() {
        slides[active].classList.add('active');
        setTimeout(() => {
            slides[active].classList.add('animate');
        }, 100);
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
    
    //Autoplay

    setInterval(() => {
        nextSlide();
    }, 8000);

    //Swipe control

    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);

    var xDown = null;
    var yDown = null;

    function getTouches(evt) {
        return evt.touches || // browser API
            evt.originalEvent.touches; // jQuery
    }

    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
    }

    function handleTouchMove(evt) {
        if (!xDown) {
            return;
        }

        var xUp = evt.touches[0].clientX;

        var xDiff = xDown - xUp;

            if (xDiff > 0) {
                prevSlide();
            } else {
                nextSlide();
            }

        /* reset values */
        xDown = null;
        yDown = null;
    }

    //Menu tabs

    function menuTabs(container) {
        let tab = container.querySelectorAll('.menu-link'),
            info = container.querySelector('.tabs-nav'),
            tabContent = container.querySelectorAll('.tab-content');

        function hideTabContent(a) {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }

        hideTabContent(1);

        function showTabContent(b) {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }

        info.addEventListener('click', function (event) {
            let target = event.target;
            if (target && target.classList.contains('menu-link')) {
                    event.target.classList.add('active');
                for (let i = 0; i < tab.length; i++) {
                    tab[i].classList.remove('active');
                    if (target == tab[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
        });
    }

    menuTabs(document.querySelector('.menu-container'));

});
