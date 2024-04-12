product = document.querySelector('.product');
comapny = document.querySelector('.company');
connect = document.querySelector('.connect');
forActiveCard = document.querySelector('.for-active-card');
two = document.querySelector('.two');
three = document.querySelector('.three');
menu = document.querySelector('.menu');
items = document.querySelector('.items');
leftNav = document.querySelector('.left-nav');
forJs = document.querySelector('.forjs');
closeMenu = document.querySelector('.close-menu');


menu.addEventListener('click',()=>{
    items.classList.toggle('none');
    leftNav.classList.toggle('none');
    forJs.classList.add('none');
})
closeMenu.addEventListener('click',()=>{
    items.classList.add('none');
    leftNav.classList.add('none');
    forJs.classList.toggle('none');
})

product.addEventListener('click',()=>{
    forActiveCard.classList.toggle('none');
})
comapny.addEventListener('click',()=>{
    two.classList.toggle('none');
})
connect.addEventListener('click',()=>{
    three.classList.toggle('none');
})