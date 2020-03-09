(function ($) {

	"use strict";

	// fixed-menu
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 0) {
			$('.top-nav').addClass('fixed-menu');
		} else {
			$('.top-nav').removeClass('fixed-menu');
		}
	});

	// blog-slider
	$("#blog-slider").owlCarousel({
		items: 2,
		itemsDesktop: [1199, 2],
		itemsDesktopSmall: [990, 1],
		itemsMobile: [768, 1],
		navigationText: false,
		autoPlay: true
	});

})(window.jQuery);	