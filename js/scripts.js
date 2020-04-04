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

    (function () {
        var app = "https://script.googleusercontent.com/macros/echo?user_content_key=MsGGy8yAlqh1g7vrrazxb4KcQJ2FdlgcYJlTTMVt3p_FroUT11Ss1JqU3to-jK3owsz4AFpX-3jCGmSZPSRrPBd6i5a1kM7um5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnE6ILO7PDLX1N-1y1prnoGsV_sSvwp76DSDLyIQ62MXIi8bDz9j3YN6ALj5NvI9ZeIp-WDTslP8h&lib=MR_ogYSPEiyh-NPOYOLj_-cBLav_N1cup",
            output = '',
            xhr = new XMLHttpRequest();
        xhr.open('GET', app);
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;

            if (xhr.status == 200) {
                try {
                    var r = JSON.parse(xhr.responseText),
                        result = r["result"];
                    for (var i = 0; i < result.length; i++) {
                        var obj = r["result"][i];
                        output += obj.join("<br/>") + "<br/><hr/>";
                    }
                } catch (e) {}
            }

            document.getElementById('info').innerHTML = output;

        }
        xhr.send()
    })()

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