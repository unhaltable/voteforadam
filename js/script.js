$(document).ready(function() {
  var stickyNav = function() {
    var stickyNavTop = window.innerHeight,
        scrollTop    = $(window).scrollTop();

    $('header').css('opacity', 1 - scrollTop / stickyNavTop);

    if (scrollTop > stickyNavTop) {
      $('#nav').addClass('sticky');
      $('#about').addClass('contentpush');
    } else {
      $('#nav').removeClass('sticky');
      $('#about').removeClass('contentpush');
    }
  };

  var scrollTo = function(el, off){
    $('html, body').animate({
      scrollTop: $(el).offset().top - off
    }, 650);
  };

  stickyNav();

  $(window).scroll(stickyNav);
  window.onresize = stickyNav;

  $('header').click(function() { scrollTo('nav', 0); });
  $('#more').click(function() { scrollTo('nav', 0); });
  $('#title').click(function() { scrollTo('body', 0); });
  $('#navabout').click(function() {
    if (scrollTop <= stickyNavTop) scrollTo('nav', 0);
    else scrollTo('#about', 0);
  });
  $('#navgoals').click(function() { scrollTo('#goals', 50); });
  $('#navvote').click(function() { scrollTo('#vote', 50); });
  $('#navcontact').click(function() { scrollTo('#contact', 50); });
  $('#navright').click(function() { scrollTo('#vote', 50); });
});
