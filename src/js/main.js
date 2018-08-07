$(document).ready(function(){

	$(window).bind('scroll', function () {
	    if ($(window).scrollTop() > 0) {
	        $('.main__header').addClass('fixed');
	    } else {
	        $('.main__header').removeClass('fixed');
	    }
	});

  var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

  

});

