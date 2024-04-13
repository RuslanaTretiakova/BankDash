import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const swiper = new Swiper('.mySwiper', {
  modules: [Navigation],
  cssMode: true,
  effect: 'fade',
  watchSlidesProgress: true,
  slidesPerView: 3,
  spaceBetween: 20,
  preventClicks: true,
  speed: 500,
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
  },
  breakpoints: {
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

document.addEventListener('DOMContentLoaded', () => {
  swiper.slideNext();
});
