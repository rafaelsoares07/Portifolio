let btn = document.querySelector(".menu-mobile")
let body = document.querySelector("body")
let listItem = document.querySelectorAll(".nav-item")
let header = document.querySelector('#header')


btn.addEventListener('click', () => {
    btn.classList.contains('bi-list') ?
        btn.classList.replace('bi-list', 'bi-x') :
        btn.classList.replace('bi-x', 'bi-list');

    body.classList.toggle("menu-nav-active");
})

listItem.forEach((item) => {
    item.addEventListener('click', () => {
        if (body.classList.contains('menu-nav-active')) {
            body.classList.remove('menu-nav-active')
            btn.classList.replace('bi-x', 'bi-list')
            header.classList.add('ocultar')
        }


    })

})


//ANIMAÇÕES DAS SECTIONS COM O SCROLL//
var target = $('.animacao');
var animationClass = "animacao-play"
var heigth = $(window).height() * 3 / 5;


function animeScroll() {
    var documetTop = $(document).scrollTop();

    target.each(function () {
        var itemTop = $(this).offset().top;
        console.log(itemTop)
        if (documetTop > itemTop - heigth) {
            $(this).addClass(animationClass)
            var a = 5

        }
        else {
            $(this).removeClass(animationClass)
            var b = 6
        }
    })
}

animeScroll();

//EVENTO DE SCROLL QUE ACIONA NOSSA FUNCAO DE ANMAÇÃO//
$(document).scroll(function () {
    
    animeScroll();
})

















