window.addEventListener('DOMContentLoaded', function name() {

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

    function anchorLinkHandler(e) {
        const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);

        e.preventDefault();
        const targetID = this.getAttribute("href");
        const targetAnchor = document.querySelector(targetID);
        if (!targetAnchor) return;
        const originalTop = distanceToTop(targetAnchor);

        window.scrollBy({
            top: originalTop,
            left: 0,
            behavior: "smooth"
        });

        const checkIfDone = setInterval(function () {
            const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
            if (distanceToTop(targetAnchor) === 0 || atBottom) {
                targetAnchor.tabIndex = "-1";
                targetAnchor.focus();
                window.history.pushState("", "", targetID);
                clearInterval(checkIfDone);
            }
        }, 100);
    }

    const linksToAnchors = document.querySelectorAll('a[href^="#"]');

    linksToAnchors.forEach(each => (each.onclick = anchorLinkHandler));

    window.addEventListener('scroll', function () {
        let header = document.querySelector('.header'),
            contentHeight = document.querySelector('.main-content').style.height;

        if (pageYOffset > contentHeight) {
            header.classList.add('dark');
        } else {
            header.classList.remove('dark');
        }
        
    });


});