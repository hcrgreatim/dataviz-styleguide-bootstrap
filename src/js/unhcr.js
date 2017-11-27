$(document).on('pageshow', '#index', function(){
  $("#custom-btn").buttonMarkup({corners: false });
  $('[data-role="content"]').height(getRealContentHeight());

  $('.ui-btn-inner').css({
    position:'absolute',
    top: (getRealContentHeight() - $('.ui-btn-inne').outerHeight())/2
  });
});

function getRealContentHeight() {
  var header = $.mobile.activePage.find("div[data-role='header']:visible");
  var footer = $.mobile.activePage.find("div[data-role='footer']:visible");
  var content = $.mobile.activePage.find("div[data-role='content']:visible:visible");
  var viewport_height = $(window).height();

  var content_height = viewport_height - header.outerHeight() - footer.outerHeight();
  if((content.outerHeight() - header.outerHeight() - footer.outerHeight()) <= viewport_height) {
    content_height -= (content.outerHeight() - content.height());
  }
  return content_height - 1;
}

// Scroll support for shrinking header
function removeShrinkClasses() {
  $('.navbar-fixed-top').removeClass('shrink');
  $('.navbar-wrapper').removeClass('shrink');
  $('#primary-nav').removeClass('shrink');
  $('#primary-nav-expand').removeClass('shrink');
  $('.row-primary-nav-search').removeClass('shrink');
  $('body').removeClass('shrink');
};

$(window).scroll(function() {
  if ($(document).scrollTop() > 101) {
    $('.navbar-fixed-top').addClass('shrink');
    $('.navbar-wrapper').addClass('shrink');
    $('#primary-nav').addClass('shrink');
    $('#primary-nav-expand').addClass('shrink');
    $('.row-primary-nav-search').addClass('shrink');
    $('body').addClass('shrink');
  } else {
    removeShrinkClasses();
  }
});

function expandPrimaryNav(event) {
  removeShrinkClasses();
  event.preventDefault();
};

function openPrimarySearch(event) {
  $('.row-primary-nav-search').removeClass('hide-search')
  event.preventDefault();
}

function closePrimarySearch(event) {
  $('.row-primary-nav-search').addClass('hide-search')
  event.preventDefault();
}

function openContactMail() {
  location.href = 'mailto:mapping@unhcr.org';
}
