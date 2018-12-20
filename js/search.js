$(document).ready(function(){
	$('input.autocomplete').autocomplete({
			data: {},
			onAutocomplete: function() {
				for(var i=0; i<globRes.length;i++) {
					$('<li>').appendTo('#search-results').append(createListing(0, globRes[i].Song_Name, globRes[i].Song_Artist, 'WIP', globRes[i].Song_Genre, globRes[i].Song_Chords, globRes[i].Song_Rating))//name, artist, album, genre, chords, rating
				}
			},
			limit: 5,
	});

	$('#search-box').focus(function(){
		$(this).val('');
		o = [];
    });

	$('#search-box').keypress($.debounce(250, function (e) {
	var inputVal = $(this).val();
		if(inputVal.length > 0) {
			$.get("REDACTED", {
				term: inputVal,
			}).done(function(response){
				$('#search-results').html('')
				var o = [];
				globRes = response;
				for(var j=0; j<response.length; j++) {
					response[j].url = null
					o[response[j].Song_Name] = [response[j].url]
				}
				console.log(o)
				$('input.autocomplete').autocomplete('updateData', o);
				if(e.which == 13) {
					for(var i=0; i<response.length;i++) {
						$('<li>').appendTo('#search-results').append(createListing(0, response[i].Song_Name, response[i].Song_Artist, 'WIP', response[i].Song_Genre, response[i].Song_Chords, response[i].Song_Rating))//name, artist, album, genre, chords, rating
						$('input.autocomplete').autocomplete('close');
					}
				}
			});
		}
	}));
});