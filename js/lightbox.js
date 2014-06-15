$('.link-lightbox').on('click', function() {
	if (window.innerHeight > 540) {
		var margintop = (window.innerHeight - 540) / 2;
	}

	var ifr = '<iframe src="" width="640" height="480" id="video-embed" style="border:0;"></iframe>';
	var close = '<div id="close-icon"></div>';
	var lightbox = '<div class="lightbox" style="margin-top:' + margintop + 'px">';
	var back = '<div id="back-lightbox">';
	var bclo = '<div id="background-close"></div>';
	var win = '<div id="window">';
	var end = '</div></div></div>';

	$('body').append(win + bclo + back + lightbox + close + ifr + end);
	$('#window').hide();

	if ($(this).data('videosite') == "youtube") {
		var url = 'http://www.youtube.com/embed/' + $(this).data('videoid') + '?autoplay=1';
	} else if($(this).data('videosite') == "vimeo") {
		var url = 'http://player.vimeo.com/video/' + $(this).data('videoid');
	}

	$('#window').fadeIn();
	$('#video-embed').attr('src', url);

	$('#close-icon').on('click', function() {
		$('#window').delay(2000).fadeOut();
		$('#window').remove();
	});

	$('#background-close').on('click', function() {
		$('#window').delay(2000).fadeOut();
		$('#window').remove();
	});
});

$(document).on('keyup', function(e){
	if (e.keyCode == 27) {
		$('#window').delay(2000).fadeOut();
		$('#window').remove();
	}
});

$(document).ready(function(){
	if (window.innerHeight > 540) {
		var margintop = (window.innerHeight - 540) / 2;
	}
	$('.lightbox').attr('style', 'margin-top:' + margintop + 'px');
})

$('#background-close').mouseover(function(){
	
});