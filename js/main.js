const swiper = new Swiper('.slide-characteres', {
  spaceBetween: 19,
  freeMode: true,
  breakpoints: {
    320: {
      slidesPerView: 1.1,
    },
    480: {
      slidesPerView: 1.2,
    },
    560: {
      slidesPerView: 1.8,
    },
    768: {
      slidesPerView: 2.2,
    },
    991: {
      slidesPerView: 2.8,
    },
    1200: {
      slidesPerView: 3.5,
    },
  },
});

AOS.init({
  duration: 1000,
  once: true,
});
