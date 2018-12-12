(function($){
	$(function(){

		$('.sidenav').sidenav();

	}); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
	$('.collapsible').collapsible();

	$('input.autocomplete').autocomplete({
		data: {
			"Apple": null,
			"Microsoft": null,
			"Google": 'https://placehold.it/250x250'
		},
	});
});