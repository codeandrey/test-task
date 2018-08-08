$(document).ready(function(){
	$('.mobile__menu').click(function(){
		var menu = document.getElementById('primary-menu'); 
		if(menu.style.display == "block") {
    		menu.style.display = "none";
		} else { 
		    menu.style.display = "block";
		}
	});

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
	    breakpoints: {
		    767: {
		      slidesPerView: 2,
		      spaceBetween: 30
		    }
	  	}
	});
});

