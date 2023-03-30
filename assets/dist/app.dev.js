"use strict";

///////////Slick ////////////////////////////
$(function () {
  $('.slider_wrapper').slick({
    prevArrow: false,
    nextArrow: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    vertical: true
  });
});
$('.slider_wrapper').css({
  'max-width': '920px',
  'margin': '0 auto'
});
$('.slider_wrap').css({
  'max-width': '1170px',
  'margin': ' 0 auto',
  'display': 'flex'
});
$('.slider_item-news').css({
  'max-width': '370px',
  'margin-left': '15px',
  'margin-right': '15px'
});
$('.slider_wrap').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  prevArrow: '<span> <img class="arrow-prev" src="./assets/img/Left.svg" alt=""></span>',
  nextArrow: '<span> <img class="arrow-next" src="./assets/img/Right.svg" alt=""></span>'
}); /////////////////// 

var links = $('.nav_link');
links.each(function (index, item) {
  $(item).hover(function () {
    $(this).find('.ellipse').addClass('active_nav');
  }, function () {
    $(this).find('.ellipse').removeClass('active_nav');
  });
});