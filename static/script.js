let btn = document.querySelector(".menu-mobile")
let body = document.querySelector("body")
let listItem = document.querySelectorAll(".nav-item")
let header = document.querySelector('#header')



console.log(header)

btn.addEventListener('click',()=>{
    btn.classList.contains('bi-list')?
    btn.classList.replace('bi-list', 'bi-x'):
    btn.classList.replace('bi-x','bi-list');

    body.classList.toggle("menu-nav-active");
})

listItem.forEach((item)=>{
    item.addEventListener('click',()=>{
        if(body.classList.contains('menu-nav-active')){
            body.classList.remove('menu-nav-active')
            btn.classList.replace('bi-x','bi-list')
            header.classList.add('ocultar')
        }


    })
    
})

