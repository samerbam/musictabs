(function($){
	$(function(){

		$('.sidenav').sidenav();

	}); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
	$('#autocomplete-input').autocomplete({
      data: {
        "Apple": null,
        "Microsoft": null,
        "Google": null
      },
    });

	$('.collapsible').collapsible();

	$(document).ready(function(){
		$('.tooltipped').tooltip();
	});

});