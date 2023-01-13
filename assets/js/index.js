var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  slidesPerView: "auto",
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
