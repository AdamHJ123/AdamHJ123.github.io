$(function () {
  portfolioModalItems = [];
  activeSlide = 0;

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
  }).on('click', '.portfolio__item--previous', function () {
    portfolioModalUpdate($(this));
  }).on('click', '.portfolio__item--next', function () {
    portfolioModalUpdate($(this));
  });

  $('.js-modal-close').click(function(){
    $('body').removeClass('modal-enabled');
  }); //.children().click(function(e) {
  //   return false;
  // });

  $(document).on('scroll', function() {
    checkSticky();
  });

  $(window).on('resize', function() {
    checkSticky();

    if ($('body').hasClass('modal-enabled')) {
      portfolioModalOpen();
    }
  });

  function checkSticky() {
    if ($(this).scrollTop() >= $('.js-main').offset().top) {
      $('body').addClass('sticky-enabled');
    } else {
      $('body').removeClass('sticky-enabled');
    }
  }

  $(document).on('click', 'a[href^="#"]', function(e) {
    var id = $(this).attr('href');

    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    e.preventDefault();

    let pos = $id.offset().top;

    if (id === '#experience') {
      pos = pos -= 79;
    }
    
    $('body').removeClass('nav-active');

    $('body, html').animate({scrollTop: pos});
});

  function portfolioModalOpen(e) {
    if ($(window).width() >= 960) {
      event.preventDefault();
      if (!$('body').hasClass('modal-enabled')) {
        $('body').addClass('modal-enabled');
        portfolioModalUpdate(e);
      }
    } else {
      $('body').removeClass('modal-enabled');
    }
  }

  function portfolioModalUpdate(e) {
    activeSlide = e.attr('data-slide');
    $('.js-portfolio-modal-item').removeClass('portfolio__item--active portfolio__item--previous portfolio__item--next');
    portfolioModalItems[activeSlide].addClass('portfolio__item--active');

    if (activeSlide != 0) {
      portfolioModalItems[parseInt(activeSlide) - 1].addClass('portfolio__item--previous');
    } else {
      portfolioModalItems[portfolioModalItems.length - 1].addClass('portfolio__item--previous');
    }

    if (activeSlide != portfolioModalItems.length - 1) {
      portfolioModalItems[parseInt(activeSlide) + 1].addClass('portfolio__item--next');
    } else {
      portfolioModalItems[0].addClass('portfolio__item--next');
    }
  }
});
