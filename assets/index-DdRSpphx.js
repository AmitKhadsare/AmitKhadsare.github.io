
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

window.addEventListener('DOMContentLoaded', () => {
  new Swiper(".mySwiper", {
    loop: true,
    autoplay: { delay: 3000 },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
  });
});
