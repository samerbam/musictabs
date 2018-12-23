$(document).ready(function(){

	$('<li>').appendTo('#top-six').append(createListing(0, 'name', 'artist', 'album', 'genre', 'chords', 1))
	$('<li>').appendTo('#top-six').append(createListing(0, 'here is the name', 'this is an artist', 'The best album ever made', 'What is a genre', '1, 2, 3, 4', 7))

});