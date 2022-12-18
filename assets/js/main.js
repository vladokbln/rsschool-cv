jQuery(document).ready(function($){
	scrollHeader();
	$(window).scroll(function(){
		scrollHeader();
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