$(function(){


	"use strict";

	var buttonjs = $('#button');

$(window).bind('scroll', function() {
    if($(window).scrollTop() > $('.show_button').offset().top ) {
        buttonjs.css('display', 'block');
    }

    else {
    	 buttonjs.css('display', 'none');
    }
});

});