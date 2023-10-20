// Слайдер для пролистования серий
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.arrow',
  },
  breakpoints: {
    540: {
      slidesPerView: 2,
    }
  }
});

// Модальное окно для трейлера
Fancybox.bind('[data-fancybox]', {
  // Custom options
});

let menuBurgerBtn = document.querySelector('.menu__burgerBtn');
let menu = document.querySelector('.header');
menuBurgerBtn.addEventListener('click', function () {
  menuBurgerBtn.classList.toggle('menu__burgerBtn_active');
  menu.classList.toggle('header_active');
});
