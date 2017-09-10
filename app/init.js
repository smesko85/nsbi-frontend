var $ = jQuery;

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

  $('[data-faq] dd').removeClass('dn').slideUp(0);
  $('[data-faq] dt').click(function() {
    $(this).toggleClass('is-active');
    $('[data-faq] dt').not(this).removeClass('is-active');
    var $target = $(this).next('dd');
    $target.slideToggle();
    $(this).parent().find('dd').not($target).slideUp();
  });
});
