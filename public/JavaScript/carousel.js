import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper(".slide-content", {
  autoplay: {delay: 0},
  speed: 5000,
  freeModeMomentum: false,
  slidesPerView: 3,
  freemode: true,
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

// One card toggle 
// const showMore = () => {
//   let details = document.getElementById('view-details1');
//   details.classList.toggle("pToggle");
// }


// let detailButtons = document.getElementsByClassName('detailToggle');
// for (let i = 0; i < detailButtons.length; i++){
//   let button = detailButtons[i];
//   button.addEventListener('click', showMore)
// }

// const showMore = (event) => {
//   let btnClicked = event.target;
//   console.log(`clicked`)
//   btnClicked.classList.toggle("pToggle");
// }


//All Cards Toggle 
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

