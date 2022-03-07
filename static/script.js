let btn = document.querySelector(".menu-mobile")
let body = document.querySelector("body")
let a = document.querySelector("#header")
let aside  = document.querySelector("aside")

console.log(a)

btn.addEventListener('click',()=>{
    btn.classList.contains('bi-list')?
    btn.classList.replace('bi-list', 'bi-x'):
    btn.classList.replace('bi-x','bi-list');

    body.classList.toggle("menu-nav-active");
})

