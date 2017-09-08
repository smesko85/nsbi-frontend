var $ = require('jquery');
$.slick = require('slick-carousel/slick/slick');

$(document).ready(function() {
  $('[data-toggle]').click(function() {
    var target = $(this).data('target');
    $(target).toggleClass('dn');
  });

  $('[data-carousel]').slick({
    dots: true,
    autoplay: true,
    dotsClass: 'c-carousel-dots',
  });
});
