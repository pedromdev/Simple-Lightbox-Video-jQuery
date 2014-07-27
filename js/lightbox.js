$('.slvj-link-lightbox').on('click', function() {
	if (window.innerHeight > 540) {
		var margintop = (window.innerHeight - 540) / 2;
	}

	var ifr = '<iframe src="" width="640" height="480" id="slvj-video-embed" style="border:0;"></iframe>';
	var close = '<div id="slvj-close-icon"></div>';
	var lightbox = '<div class="slvj-lightbox" style="margin-top:' + margintop + 'px">';
	var back = '<div id="slvj-back-lightbox">';
	var bclo = '<div id="slvj-background-close"></div>';
	var win = '<div id="slvj-window">';
	var end = '</div></div></div>';

	$('body').append(win + bclo + back + lightbox + close + ifr + end);
	$('#slvj-window').hide();

	if ($(this).data('videosite') == "youtube") {
		var url = 'http://www.youtube.com/embed/' + $(this).data('videoid') + '?autoplay=1';
	} else if($(this).data('videosite') == "vimeo") {
		var url = 'http://player.vimeo.com/video/' + $(this).data('videoid') + '?autoplay=1';
	}

	$('#slvj-window').fadeIn();
	$('#slvj-video-embed').attr('src', url);

	$('#slvj-close-icon').on('click', function() {
		$('#slvj-window').fadeOut(300, function(){
			$(this).remove();
		});
	});

	$('#slvj-background-close').on('click', function() {
		$('#slvj-window').fadeOut(300, function(){
			$(this).remove();
		});
	});
});

$(document).on('keyup', function(e){
	if (e.keyCode == 27) {
		$('#slvj-window').fadeOut(300, function(){
			$(this).remove();
		});
	}
});

$(window).resize(function(){
	var margintop = (window.innerHeight - 540) / 2;
	$('.slvj-lightbox').attr('style', 'margin-top:' + margintop + 'px');
});