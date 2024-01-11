function openFavouritesSlider(slidesCount) {
  const favouritesSlider = new Swiper('.favourites__slider', {
      slidesPerView: slidesCount,
      spaceBetween: 30,
      loop: true,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
  })
}

if (window.innerWidth <= 500) {
  openFavouritesSlider(1)
} else {
  openFavouritesSlider(3)
}

const widthMediaQuery = window.matchMedia('(max-width: 500px)');
widthMediaQuery.addEventListener('change', function() {
  console.log(widthMediaQuery.matches);
  if (widthMediaQuery.matches) {
    openFavouritesSlider(1);
  } else {
    openFavouritesSlider(3);
  }
})


const modalBtns = document.querySelectorAll('[data-modal-btn]');

modalBtns.forEach(function(item) {
  item.addEventListener('click', function() {
    console.log(item.dataset.modalBtn);
    const modal = document.querySelector('#' + item.dataset.modalBtn);

    modal.classList.add('fade-modal--active');
  })
})


const modalBtnClose = document.querySelectorAll('[data-modal-close]');

modalBtnClose.forEach(function(item) {
  item.addEventListener('click', function() {
    const modal = item.closest('.fade-modal');

    modal.classList.remove('fade-modal--active');
  })
})


const hamburgerBtn = document.querySelector('.hamburger');
const navList = document.querySelector('.nav__list')

hamburgerBtn.addEventListener('click', function() {
  navList.classList.toggle('nav__list--active');
})