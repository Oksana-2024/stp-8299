import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

let swiper;
function initSwiper() {
  if (window.innerWidth < 1200) {
    if (!swiper) {
      swiper = new Swiper('.js-revies-swiper', {
        direction: 'horizontal',
        centerInsufficientSlides: true,
        /* spaceBetween: 24, */
        /*  autoHeight: true, */
        slidesPerView: 1,
        pagination: {
          // Пагінація (точки)
          el: '.swiper-pagination',
          clickable: true,
        },
        modules: [Pagination],
        breakpoints: {
          1200: {
            enabled: false, // Вимкнення слайдера при 1200px і більше
          },
        },
      });
    }
  }
}

window.addEventListener('resize', initSwiper);
initSwiper();
