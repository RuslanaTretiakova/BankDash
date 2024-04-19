import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import './swiper.scss';

new Swiper('.j-quick-transfer', {
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
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
    1500: {
      slidesPerView: 6,
    },
  },
});
