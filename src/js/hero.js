import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

let swiper;
function initSwiper() {
  if (window.innerWidth < 1200) {
    if (!swiper) {
      swiper = new Swiper('.js-hero-swiper', {
        direction: 'horizontal',
        centerInsufficientSlides: true,
        spaceBetween: 24,
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        modules: [Pagination],
        breakpoints: {
          1200: {
            enabled: false,
          },
        },
      });
    }
  }
}

window.addEventListener('resize', initSwiper);
initSwiper();
