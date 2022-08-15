$(document).ready(function () {
  $(".reviews__slider").slick({
    arrows:false,
    dots:false, 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode:true,
    variableWidth:true
  });

  $('.header__burger').click(function(event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $(".header__link, .header__button").click(function (event) {
    $(".header__burger, .header__menu").removeClass("active");
    $("body").removeClass("lock");
  });
  
});

