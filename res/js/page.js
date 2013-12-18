// On ready
$(document).ready(function() {
	resize();
	$('#nav a').first().addClass('selected');

	$('#nav a').click(function() {

		// Scroll animate to the top no matter what since it looks cool
		$("#container").animate({ scrollTop: 0 }, "slow");

		// If page selected isn't the one we're on
		if(!$(this).hasClass('selected')) {

			// Update selected data
			$('#nav a').removeClass('selected');
			$(this).addClass('selected');
			var selectionId = $(this).attr('id');

			// Fade content out and in
			$('#content').fadeOut('medium', function() {
				$('.page').css('display', 'none');
				$('.page#'+selectionId).css('display', 'block');
				$('#content').fadeIn('medium');
			});
		}

		
	});
});

// On Resize
$( window ).resize(function() {
  resize();
});

// Resize scrollbars on height change
function resize() {
	var height = $('body').height() - 75;
	console.log(height);
	$('#container').height(height + 'px');
};