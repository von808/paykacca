$(function initSlider() {

  $('.pay__slider-items').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    fade: true,
    pagination: false,
    prevArrow: '<span class="circle-orange arrow-prev"><svg class="arrow arrow-up"><use xlink: href="#arrow"></use></svg></span >',
    nextArrow: '<span class="circle-orange arrow-next"><svg class="arrow arrow-down"><use xlink: href="#arrow"></use></svg></span >',
    asNavFor: '.pay__slider-paginations',
    responsive: [
      {
        breakpoint: 1780,
        settings: {
          vertical: false,
          verticalSwiping: false,
        }
      }
    ]
  });

  $('.pay__slider-paginations').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    centeredMode: true,
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
    pagination: false,
    asNavFor: '.pay__slider-items',
    responsive: [
      {
        breakpoint: 1780,
        settings: {
          vertical: false,
          verticalSwiping: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  });

})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 5,
  breakpoints: {
    540: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1780: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  }
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  centeredSlides: true,
  breakpoints: {
    1780: {
      slidesPerView: 4.5,
      spaceBetween: 40
    },
    1400: {
      slidesPerView: 3.5,
      spaceBetween: 40
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    540: {
      slidesPerView: 1.5,
      spaceBetween: 10
    },
  }
});

const burgerBtn = document.querySelector('#burger-btn');
const burgerMenu = document.querySelector('#burger-menu');
const body = document.querySelector('#body');

burgerBtn.onclick = function () {
  burgerBtn.classList.toggle('active')
  burgerMenu.classList.toggle('active')
  body.classList.toggle('active')
}


let heroText = document.querySelector('.hero__text');
let heroPhone = document.querySelector('.hero__phone');
let heroLine = document.querySelector('.hero__line');
let heroPrice1 = document.querySelector('.hero__price-1');
let heroPrice2 = document.querySelector('.hero__price-2');
let heroCard = document.querySelector('.hero__card');
let heroQr = document.querySelector('.hero__qr');
let heroCurrency = document.querySelector('.hero__currency');

window.addEventListener('scroll', () => {
  let value = window.scrollY;

  heroText.style.top = value * 1.1 + 'px';
  heroText.style.opacity = 1 + value * -0.0005;
  heroPhone.style.bottom = value * -0.6 + 'px';
  heroLine.style.bottom = value * -0.6 + 'px';
  heroLine.style.opacity = 1 + value * -0.0008;
  heroPrice1.style.top = 529 + value * 0.75 + 'px';
  heroPrice1.style.opacity = 1 + value * -0.0008;
  heroPrice2.style.top = 247 + value * 0.75 + 'px';
  heroPrice2.style.opacity = 1 + value * -0.0008;
  heroCard.style.top = 432 + value * 1.17 + 'px';
  heroCard.style.scale = 1 + value * 0.00015;
  heroQr.style.top = 638 + value * 0.9 + 'px';
  heroQr.style.rotate = value * 0.02 + 'deg';
  heroQr.style.scale = 1 + value * -0.0002;
  heroCurrency.style.top = 365 + value * 0.5 + 'px';
  
  if (window.innerHeight <= 1600) {
    heroCurrency.style.top = 280 + value * 0.5 + 'px';
    heroCard.style.top = 345 + value * 1.17 + 'px';
    heroQr.style.top = 550 + value * 0.9 + 'px';
  } else {
    //не выполнять
  }
  
  if (window.innerWidth <= 768) {
    heroCard.style.top = 410 + value * 1.17 + 'px';
    heroQr.style.top = 379 + value * 0.9 + 'px';
  } else {
    //не выполнять
  }
  
  if (window.innerWidth <= 540) {
    heroCard.style.top = 427 + value * 1.17 + 'px';
    heroQr.style.top = 388 + value * 0.9 + 'px';
  } else {
    //не выполнять
  }
});

