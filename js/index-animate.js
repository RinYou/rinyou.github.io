$(window).on('scroll', function () {
	var scrollTop     = $(window).scrollTop(),
		windowHeight  = $(window).height(),
		elementOffset = $('#index001').offset().top,
		elementHeight = $('#index001').height();
	if(scrollTop+windowHeight >= elementOffset+(elementHeight/4)){
		$('#index001').addClass('rotateAnimate');
		$('#index002').addClass('fadeIn');
	}
});