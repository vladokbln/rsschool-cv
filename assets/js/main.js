jQuery(document).ready(function($){
	scrollHeader();
	$(window).scroll(function(){
		scrollHeader();
	});
  $('.nav-toggle').click(function(){
		$('.header').toggleClass('active-menu');
	});
	var header = $('.header'),
	heightHeader = header.outerHeight();
	$('.main-nav__link').on('click', function (event) {
		event.preventDefault();
		$('.header').removeClass('active-menu');
		var id  = $(this).attr('href'),
		top = $(id).offset().top - heightHeader;
		$('body,html').animate({scrollTop: top}, 500);
	});

	function scrollHeader() {
		var header = $('.header'),
		heightHeader = header.outerHeight(),
		top = $(this).scrollTop();

		if (top >= heightHeader) {
			header.addClass('fixed');
			$('body').css('padding-top', heightHeader);
		} 
		else {
			header.removeClass('fixed');
			$('body').css('padding-top', '0');
		}
	}
});