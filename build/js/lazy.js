// var images = document.querySelectorAll('img');

// var options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.1
// }
// // function handleImg(myImg, observer){
// //     myImg.forEach(mySingleImg());
// //     console.log(mySingleImg.intersectionRatio);
// // }
// // console.log(handleImg());
// // function mySingleImg(){
// //     if(mySingleImg.intersectionRatio > 0){
// //         loadImg(mySingleImg.target);
// //     }
// // }
// // function loadImg(image){
// //     images.src = images.getAttribute('data');
// // }
// var observer = new IntersectionObserver(handleImg, options);
// images.forEach(img);
// function img(){
//     observer.observe(img());
// }
// console.log(img());
document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages;    
  
    if ("IntersectionObserver" in window) {
      lazyloadImages = document.querySelectorAll(".lazy");
      var imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var image = entry.target;
            image.src = image.dataset.src;
            image.classList.remove("lazy");
            imageObserver.unobserve(image);
          }
        });
      });
  
      lazyloadImages.forEach(function(image) {
        imageObserver.observe(image);
      });
    } else {  
      var lazyloadThrottleTimeout;
      lazyloadImages = document.querySelectorAll(".lazy");
      
      function lazyload () {
        if(lazyloadThrottleTimeout) {
          clearTimeout(lazyloadThrottleTimeout);
        }    
  
        lazyloadThrottleTimeout = setTimeout(function() {
          var scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
              }
          });
          if(lazyloadImages.length == 0) { 
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
        }, 20);
      }
  
      document.addEventListener("scroll", lazyload);
      window.addEventListener("resize", lazyload);
      window.addEventListener("orientationChange", lazyload);
    }
  })