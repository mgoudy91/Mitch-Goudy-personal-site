/* On Ready*/
$(document).ready(function() {
	$('#nav a').first().addClass('selected');

	$('#nav a').click(function() {
		if(!$(this).hasClass('selected')) {
			$('#nav a').removeClass('selected');
			$(this).addClass('selected');
		}

		var selectionId = $(this).attr('id');

		$('#content').fadeOut('medium', function() {
			$('.page').css('display', 'none');
			$('.page#'+selectionId).css('display', 'block');
			$('#content').fadeIn('medium');
		});
	});
});