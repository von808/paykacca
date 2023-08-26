$(function initSlider() {

  $('.pay__slider-items').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
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
  // initialSlide: 1,
  // centeredSlides: true,
  // centeredSlidesBounds: true,
  breakpoints: {
    540: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  }
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  // initialSlide: 9,
  centeredSlides: true,
  // centeredSlidesBounds: true,
  // activeIndex: 1,
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