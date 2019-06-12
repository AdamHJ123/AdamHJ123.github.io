$(function () {
  checkSticky();

  $('body').on('click', '.js-nav-btn', function() {
    $('body').toggleClass('nav-active');

    if (!$(this).hasClass('nav-btn--open')) {
      $(this).addClass('nav-btn--open');
    }
  });

  $(document).on('scroll', function() {
    checkSticky();
  });

  $(window).on('resize', function() {
    checkSticky();
  });

  function checkSticky() {
    if ($(this).scrollTop() >= $('.js-main').offset().top) {
      $('body').addClass('sticky-enabled');
    } else {
      $('body').removeClass('sticky-enabled');
    }
  }
});
