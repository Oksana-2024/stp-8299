import { refs } from './refs';

window.addEventListener('DOMContentLoaded', () => {
  refs.menuBtn.addEventListener('click', () => {
    refs.mobileMenu.classList.add('active');
    document.body.classList.add('no-scroll');
  });

  refs.closeBtn.addEventListener('click', () => {
    refs.mobileMenu.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });

  refs.menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      refs.mobileMenu.classList.remove('active');
      document.body.classList.remove('no-scroll');
    });
  });
});


// menuBtn: document.querySelector('.js-menu-open'),
// mobileMenu: document.querySelector('.js-mob-menu'),
// closeBtn: document.querySelector('.js-mob-menu-close'),
// menuLinks: document.querySelectorAll('.js-nav-link'),