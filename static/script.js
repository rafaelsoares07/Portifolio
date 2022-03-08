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
var target = $('[data-anime]');
console.log(target)
var animationClass = "animate"
var heigth = $(window).height() * 3 / 4;


function animeScroll() {
    var documetTop = $(document).scrollTop();

    target.each(function () {
        var itemTop = $(this).offset().top;
        console.log(itemTop)
        if (documetTop > itemTop - heigth) {
            $(this).addClass(animationClass)
            

        }
        else {
            $(this).removeClass(animationClass)
        
        }
    })
}

animeScroll();

//EVENTO DE SCROLL QUE ACIONA NOSSA FUNCAO DE ANMAÇÃO//
$(document).scroll(function () {
    
    animeScroll();
})

















