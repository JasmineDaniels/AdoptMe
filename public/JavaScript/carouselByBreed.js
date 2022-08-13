import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  //slidesPerGroup: 3,
  // grid: {
  //   rows: 2,
  // },
  loop: true,
  // centerSlide: 'true',
  // fade: 'true',
  //loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});