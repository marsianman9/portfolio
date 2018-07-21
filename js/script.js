$(function() {

  // Nav Button

  $('.navBtn').click(function() {
    $('.nav').slideToggle();
    $(this).toggleClass('toggle');
  });


// Smooth scroll


  $('.slide-scroll').click(function() {
    var headerHeight = $('#branding').innerHeight();
    var linkHref = $(this).attr('href');
    $('html,body').animate({
      scrollTop: $(linkHref).offset().top - headerHeight
    }, 1300);
  });


// Media jQuery

$(window).resize(function() {
  if($(window).width() > 1024) {
    $('.nav').css('display', 'flex');
  }
})

// Mouse Hover - sub menu

  $('.myWorks').mouseenter(function() {
    $('.myWorks ul').slideToggle('300');
  }).mouseleave(function() {
    $('.myWorks ul').slideToggle('300');
  })


// Image Zoon

  // The Magic of Achillea
  $('.mg-of-achlla-zoom').click(function() {
    $('.magic-of-achillea-big').fadeIn(200);
  });
  $('.fa-times').click(function() {
    $('.magic-of-achillea-big').fadeOut();
  });
  $('.magic-of-achillea-big').click(function() {
    $(this).fadeOut();
  })

  // The Rattle of War
  $('.rtl-of-wr-zoom').click(function() {
    $('.rtl-of-wr-big').fadeIn(200);
  });
  $('.fa-times').click(function() {
    $('.rtl-of-wr-big').fadeOut();
  });
  $('.rtl-of-wr-big').click(function() {
    $(this).fadeOut();
  })

  // Destiny's First
  $('.dstny-first-zoom').click(function() {
    $('.dstny-first-big').fadeIn(200);
  });
  $('.fa-times').click(function() {
    $('.dstny-first-big').fadeOut();
  });
  $('.dstny-first-big').click(function() {
    $(this).fadeOut();
  })

  // The Price of Creation
  $('.prce-crtn-zoom').click(function() {
    $('.prce-crtn-big').fadeIn(200);
  });
  $('.fa-times').click(function() {
    $('.prce-crtn-big').fadeOut();
  });
  $('.prce-crtn-big').click(function() {
    $(this).fadeOut();
  })

  // Rent & Grow Rich
  $('.rnt-rch-zoom').click(function() {
    $('.rnt-rch-big').fadeIn(200);
  });
  $('.fa-times').click(function() {
    $('.rnt-rch-big').fadeOut();
  });
  $('.rnt-rch-big').click(function() {
    $(this).fadeOut();
  })

  // The Chinese Armadillo
  $('.chnese-zoom').click(function() {
    $('.chnese-big').fadeIn(200);
  });
  $('.fa-times').click(function() {
    $('.chnese-big').fadeOut();
  });
  $('.chnese-big').click(function() {
    $(this).fadeOut();
  })

// Show Arrow Top on Scroll

  window.onscroll = function() {
    scrollFunction()
  };

  function scrollFunction() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
      document.getElementById('scrollTopButton').style.display = 'block';
    } else {
      document.getElementById('scrollTopButton').style.display = 'none';
    }
  }
});
