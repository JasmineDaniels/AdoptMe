import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper(".slide-content", {
  slidesPerView: 1,
  spaceBetween: 25,
  // slidesPerGroup: 1,
  // grid: {
  //   rows: 2,
  // },
  // loop: true,
  //centeredSlides: true,
  //centeredSlidesBounds: true,
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
      slidesPerView: 1,
      spaceBetween: 25,
    },
    1000: {
      slidesPerView: 1,
      spaceBetween: 25,
    },
  },
});



// const showMore = () => {
//   let details = document.getElementById('view-details1');
//   details.classList.toggle("pToggle");
// }

// const showMore = () => {
//   let detailButtons = document.getElementsByClassName('detailToggle');
//   // let toggleBtns = document.getElementsByClassName('toggleBtn')
//   for (const dBtn of detailButtons){
//     dBtn.classList.toggle('pToggle')

//     // if (dBtn.style.display != 'none'){
//     //   for (const tBtn of toggleBtns){
//     //     tBtn.innerHTML = 'View Less'
//     //   }
//     // } 
//     // if (dBtn.style.display == 'none') {
//     //   for (const tBtn of toggleBtns){
//     //     tBtn.innerHTML = 'View More'
//     //   }
//     // }
//   }
// }

