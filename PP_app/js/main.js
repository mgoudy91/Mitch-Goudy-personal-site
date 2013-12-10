// Any JavaScript functionality goes in this file.
$(window).ready(function() {

	// Offsets for animating in logo and bars
	var bar_offset = 1000;
	var logo_offset = 800;

	// Move images off page and display
	$( "#lum_logo img" ).css({ "top": (-logo_offset) + "px", "display": "block"});
	$( "#bars img" ).css({ "top": (-bar_offset) + "px", "display": "block"});

	// Function for animating elements in sequence
	// From http://stackoverflow.com/questions/1218152/how-can-i-animate-multiple-elements-sequentially-using-jquery
	function queue(start) {
	    var rest = [].splice.call(arguments, 1),
	        promise = $.Deferred();

	    if (start) {
	        $.when(start()).then(function () {
	            queue.apply(window, rest);
	        });
	    } else {
	        promise.resolve();
	    }
	    return promise;
	}

	// Queue with list of animations
	queue(function () {
    	return $("#lum_logo img").animate({top: "+="+logo_offset}, 1000);
	}, function () {
	    return $("#bars img:nth-child(1)").animate({top: "+="+bar_offset}, 1000);
	}, function () {
	    return $("#bars img:nth-child(2)").animate({top: "+="+bar_offset}, 1000);
	}, function () {
	    return $("#bars img:nth-child(3)").animate({top: "+="+bar_offset}, 1000);       
	});


});