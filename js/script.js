$(document).ready(function ($) {
  $('.slick.marquee').slick({
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    dots: false // Changed from 'buttons' to 'dots'
  });
});



$(document).ready(function () {
  function initializeSlick() {
    $('.value-imageMarque').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }

  function checkWidth() {
    if ($(window).width() < 768) {
      if (!$('.responsive').hasClass('slick-initialized')) {
        initializeSlick();
      }
    } else {
      if ($('.responsive').hasClass('slick-initialized')) {
        $('.responsive').slick('unslick');
      }
    }
  }

  checkWidth();
  $(window).resize(checkWidth);
});

