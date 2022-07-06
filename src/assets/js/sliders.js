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

    let compareSlider = new Swiper(".product__compare", {
      slidesPerView: 1,
      freeMode: true,
      allowTouchMove: false,

      breakpoints: {
        768: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 4
        }
      },

      navigation: {
        nextEl: '.compare__arrows .swiper-button-next',
        prevEl: '.compare__arrows .swiper-button-prev',
      }
    });

    let tableSlider = new Swiper(".compare__table", {
      slidesPerView: 1,
      freeMode: true,
      allowTouchMove: false,

      breakpoints: {
        768: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 4
        }
      },

      navigation: {
        nextEl: '.compare__arrows .swiper-button-next',
        prevEl: '.compare__arrows .swiper-button-prev',
      }
    });

})