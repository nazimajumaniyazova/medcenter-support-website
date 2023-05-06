const menuBar = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
const menuClose = document.querySelector('.close-icon-menu');
const screenWidth = screen.width;
menuBar.addEventListener('click', function(){
 menuBody.style.left = 0;
})
menuClose.addEventListener('click', function(){
    menuBody.style.left = -100 + '%';
})

ScrollReveal({
    reset: true, 
    distance: '60px',
    origin: 'bottom',
});

ScrollReveal().reveal('.get-started__content, .stay-safe__content, .statistics-experts__body body-statistics-experts, .experts__content, .healthcare__block-text',{
    delay: 200,
});

ScrollReveal().reveal('.get-started__image, .stay-safe__media, .body-statistics-experts__item, .experts__video',{
    delay: 300,
});
ScrollReveal().reveal('.healthcare__column_1, .body-statistics-experts__item_1',{
    delay: 350,
})
ScrollReveal().reveal('.healthcare__column_2, .body-statistics-experts__item_2',{
    delay: 450,
})
ScrollReveal().reveal('.healthcare__column_3, .body-statistics-experts__item_3',{
    delay: 550,
})