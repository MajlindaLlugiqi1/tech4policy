
$(function(){

  "use strict";


$('ul.nav li.dropdown').hover(function() {
    if (!$('.navbar-toggle').is(':visible')) {
        $(this).toggleClass('open', true);
    }
}, function() {
    if (!$('.navbar-toggle').is(':visible')) {
        $(this).toggleClass('open', false);
    }
});
$('ul.nav li.dropdown a').click(function(){
    if (!$('.navbar-toggle').is(':visible') && $(this).attr('href') != '#') {
        $(this).toggleClass('open', false);
        window.location = $(this).attr('href')
    }
});

});

$(document).ready(function(){
  var myDiv = $('.nenheader');

  $(window).scroll(function() {

    if ($(document).scrollTop() > 50) {
      myDiv.hide();
    } else {
      myDiv.show();
    }

  });
});
