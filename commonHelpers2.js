import{r as e}from"./assets/scroll-3eee0f63.js";import{A as u,S as o,P as s}from"./assets/vendor-96b18729.js";new u(".js-accordion",{elementClass:"js-accordion-item",triggerClass:"js-accordion-trigger",panelClass:"js-accordion-body",activeClass:"active",collapse:!1,openOnInit:[0]});let c;function w(){window.innerWidth<1200&&(c||(c=new o(".js-gallery-swiper",{direction:"horizontal",centerInsufficientSlides:!0,spaceBetween:24,autoHeight:!0,slidesPerView:1,pagination:{el:".swiper-pagination",clickable:!0},modules:[s],breakpoints:{1200:{enabled:!1}}})))}window.addEventListener("resize",w);w();let a;function p(){window.innerWidth<1200&&(a||(a=new o(".js-revies-swiper",{direction:"horizontal",centerInsufficientSlides:!0,slidesPerView:1,pagination:{el:".swiper-pagination",clickable:!0},modules:[s],breakpoints:{1200:{enabled:!1}}})))}window.addEventListener("resize",p);p();let l;function m(){window.innerWidth<1200&&(l||(l=new o(".js-hero-swiper",{direction:"horizontal",centerInsufficientSlides:!0,spaceBetween:24,slidesPerView:1,pagination:{el:".swiper-pagination",clickable:!0},modules:[s],breakpoints:{1200:{enabled:!1}}})))}window.addEventListener("resize",m);m();window.addEventListener("DOMContentLoaded",()=>{e.menuBtn.addEventListener("click",()=>{e.mobileMenu.classList.add("active"),document.body.classList.add("no-scroll")}),e.closeBtn.addEventListener("click",()=>{e.mobileMenu.classList.remove("active"),document.body.classList.remove("no-scroll")}),e.menuLinks.forEach(n=>{n.addEventListener("click",()=>{e.mobileMenu.classList.remove("active"),document.body.classList.remove("no-scroll")})})});function d(n,i){try{const t=JSON.stringify(i);localStorage.setItem(n,t)}catch(t){console.error(t)}}function f(n){try{const i=localStorage.getItem(n);return i===null?void 0:JSON.parse(i)}catch(i){console.error(i)}}window.onload=()=>{const n=()=>{e.modal.classList.add("is-open"),document.body.classList.add("no-scroll")},i=()=>{e.modal.classList.remove("is-open"),document.body.classList.remove("no-scroll")};if(f("cookies"))return;n();const t=()=>{d("cookies","accept"),i(),e.acceptBtn.removeEventListener("click",t)},r=()=>{d("cookies","decline"),i(),e.declineBtn.removeEventListener("click",r)};e.acceptBtn.addEventListener("click",t),e.declineBtn.addEventListener("click",r)};
//# sourceMappingURL=commonHelpers2.js.map
