var dives = document.querySelectorAll('.sale__slider .card');
var dotes = document.querySelectorAll('.scroll .circle_scroll');
var current = 0;
var index = 0;
function slider() {
    for(var i = 0; i < dives.length; i++){
        dives[i].classList.add("opacity0");
    }
    for(var i = 0; i < dotes.length; i++){
        dotes[i].classList.add("active-color");
    }
    dives[current].classList.remove("opacity0");
    dotes[current].classList.remove("active-color");
    if(current + 1 == dives.length){
        current = 0;
    }else{
        current++;
    }
}
document.querySelector('.sale__slider').onclick = slider;
//setInterval(slider, 5000);
slider();
//боковое меню
function navSlide() {
    var burger = document.querySelector('.burger__menu');
    var nav = document.querySelector('.nav__links');
    var navLinks = document.querySelectorAll('.nav__links li');
    var firstPageOpacity = document.querySelector('.page__title');
    var secondImgOpacity = document.querySelector('.img_second');
    var secondSpanOpacity = document.querySelector('.second_span');
    console.log(firstPageOpacity);

    burger.addEventListener('click', function(){
        nav.classList.toggle('nav__active');
        burger.classList.toggle('toggle');
        firstPageOpacity.classList.toggle('opacityFirstPage');
        secondImgOpacity.classList.toggle('opacityFirstPage');
        secondSpanOpacity.classList.toggle('opacityFirstPage');
    });
    //animate links
    navLinks.forEach(function(link, index){
        link.style.animation = 'navLinkFade 0.5s ease forwards ' + (index / 7 + 1) + 's';
    //     // `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`
    });
    //burger animation
}
navSlide();
// var sliderMin = document.querySelectorAll('.about_hits .hit__goods');
// var pointer = 0;
// console.log(sliderMin);
// function screenSlider(){
//     if(screen.width < 480){
//         for(var i = 0; i < sliderMin.length; i++){
//             sliderMin[i].classList.add("opacity0");
//         }
//         sliderMin[pointer].classList.remove("opacity0");
//         if(pointer + 1 == sliderMin.length){
//             pointer = 0;
//         }else{
//             pointer++;
//         }
//     }
// }
// document.querySelector('.about_hits').onclick = screenSlider;
// setInterval(screenSlider, 5000);
//медленная загрузка изображений
// var images = document.querySelectorAll('img');

// var options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.1
// }
// function handleImg(myImg, observer){
//     myImg.forEach(function mySingleImg(){
//         console.log(myImg);
//         if(mySingleImg.intersectionRatio > 0){
//             loadImg(mySingleImg.target);
//         }
//     })
// }
// function loadImg(image){
//     images.src = images.getAttribute('data');
// }
// var observer = new IntersectionObserver(handleImg, options);
// images.forEach(function img(){
//     observer.observe('img');
// })
// loadImg();