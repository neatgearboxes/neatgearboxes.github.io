// main.js

$(document).ready(function () {
  $('a').click(function() {
    if (this.getAttribute('href').charAt(0) !== '#') return;

    var $el = $($(this).attr('href')),
        header = $('#nav').height(),
        divider = $('.section-divider').height(),
        pos = $el.offset().top - header - divider;

    if (pos + $(window).height() > $('body').height()) {
      pos = $('body').height() - $(window).height() + header;
    }

    $('html, body').animate({
      scrollTop: pos
    }, 800, 'easeOutExpo');

    return false;
  });

  $('.tab p').click(function() {
    var $video = $('.video'),
        right = parseInt($video.css('right'));
    
    var newRight = right === 0 ? 600 : 0;
    $video.animate({right: newRight}, 600, 'easeOutExpo');
  });

  $('#faq h3').each(function() {
    var $el = $('<div>');
    $(this).nextUntil('h3').appendTo($el);
    $el.hide().insertAfter(this);
  }).click(function() {
    $(this).next().slideToggle();
  });

  $('#contact-form').submit(function(e) {
    if ($(this).valid()) {
      $.post($(this).attr('action'), $(this).serialize())
      .done(function(data) {
        $('#error-message').hide();
        $('#success-message').show();
      })
      .error(function(data) {
        $('#success-message').hide();
        $('#error-message').show();
      });
    }

    return false;
  });
});

