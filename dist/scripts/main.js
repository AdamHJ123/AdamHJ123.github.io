$(function () {
  portfolioModalItems = [];
  $('.js-portfolio-modal-item').each(function() {
    portfolioModalItems.push($(this));
  });

  checkSticky();

  $('body').on('click', '.js-nav-btn', function() {
    $('body').toggleClass('nav-active');

    if (!$(this).hasClass('nav-btn--open')) {
      $(this).addClass('nav-btn--open');
    }
  }).on('click', '.js-portfolio-item', function () {
    portfolioModalOpen($(this));
  });

  $(document).on('scroll', function() {
    checkSticky();
  });

  $(window).on('resize', function() {
    checkSticky();
    portfolioModalOpen();
  });

  function checkSticky() {
    if ($(this).scrollTop() >= $('.js-main').offset().top) {
    } else {
      $('body').removeClass('sticky-enabled');
    }
  }

  function portfolioModalOpen(e) {
    if ($(window).width() >= 960) {
      if (!$('body').hasClass('modal-enabled')) {
        $('body').addClass('modal-enabled');
        portfolioModalUpdate(e);
      }
    } else {
      $('body').removeClass('modal-enabled');
    }
  }

  function portfolioModalUpdate(e) {
    $('.js-portfolio-modal-item').removeClass('portfolio__item--active portfolio__item--previous portfolio__item--next');
    portfolioModalItems[e.attr('data-slide')].addClass('portfolio__item--active');

    if (e.attr('data-slide') != 0) {
      portfolioModalItems[parseInt(e.attr('data-slide')) - 1].addClass('portfolio__item--previous');
    } else {
      portfolioModalItems[portfolioModalItems.length - 1].addClass('portfolio__item--previous');
    }

    if (e.attr('data-slide') != portfolioModalItems.length - 1) {
      console.log(parseInt(e.attr('data-slide')) + 1);
      portfolioModalItems[parseInt(e.attr('data-slide')) + 1].addClass('portfolio__item--next');
    } else {
      portfolioModalItems[0].addClass('portfolio__item--next');
    }
  }
});
