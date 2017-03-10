$(document).ready(function() {
	var object = "default";
	$('[data-related-panel]').click(function() {
		if (object === $(this).data('related-panel')) {
			$('.nav-panel').removeClass('active').slideUp(500).fadeOut(500);
			object = "default";
		} else {
			object = $(this).data('related-panel');
			$('.nav-panel').removeClass('active').slideUp(500).fadeOut(500);
			$('#' + object).addClass('active').delay(600).slideDown(500).fadeIn(500);
		}
	});
});