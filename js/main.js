/* This is a js file that ensures the functionality
   of the long-press event needed in the Journal section*/

   jQuery(document).ready(function ($) {

	/* Opens a popup asking the user if he or she wants to
	   delete the selected element + the choice's consequences. */
	$('.journal_paragraph').on('long-press', function (event) {
		event.preventDefault();
		var trigger = $(this);
		$('.cd-popup').addClass('is-visible');
		$('.yes').on('click', function (event) {
			$(trigger).remove();
			$('.cd-popup').removeClass('is-visible');
		});
		$('.no').on('click', function (event) {
			$('.cd-popup').removeClass('is-visible');
		});
	});

	// Closes popup when user presses the x button on the right corner.
	$('.cd-popup').on('click', function (event) {
		if ($(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup')) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});

	// Close popup when clicking the esc keyboard button.
	$(document).keyup(function (event) {
		if (event.which == '27') {
			$('.cd-popup').removeClass('is-visible');
		}
	});

});