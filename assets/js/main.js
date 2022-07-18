var swiper = new Swiper(".testimonialSwiper", {
  //   loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      // when window width is >= 992px
      992: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
    },
  });
  
