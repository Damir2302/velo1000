$(document).ready(function() {

    let bannerSlider = new Swiper(".banner__slider", {
        pagination: {
          el: ".banner__slider .swiper-pagination",
        }
    });

    let brandsSlider = new Swiper(".brands__slider", {
        slidesPerView: 'auto',
        freeMode: true,
        loop: true,

        breakpoints: {
          744: {
            centeredSlides: true,
          },

          1024: {
            navigation: {
              nextEl: '.brands__slider .swiper-button-next',
              prevEl: '.brands__slider .swiper-button-prev',
            },
          }
        }
    });

})