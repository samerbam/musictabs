function createListing(rank, name, artist, album, genre, chords, rating) {
	rating = ((rating > 10) ? 10 : rating)
	rating = ((rating<0) ? 0 : rating)
	var starRating = ""
	var f = 0
	var r = 0
	var i = 0
	var b = 0
	if(rating%2 == 0) {
		f = rating/2
		b = (10-rating)/2
	} else if (rating%2 == 1) {
		f = (rating-1)/2
		r = 1
		b = (9-rating)/2
	}
	for (i = 0; i<f; i++) {
		starRating += "<i class='material-icons'>star</i>"
	}
	starRating += ((r > 0) ? "<i class='material-icons'>star_half</i>" : '')
	for (i=0;i<b;i++) {
		starRating += "<i class='material-icons'>star_border</i>"
	}

	rankIcon = (rank == 1) ? 'looks_one' : ((rank == 2) ? 'looks_two' : ((rank == 3) ? 'looks_3' : ((rank == 4) ? 'looks_4' : ((rank == 5) ? 'looks_5' : ((rank == 6) ? 'looks_6' : 'queue_music')))))

	//starRating = "<i class='material-icons'>star</i><i class='material-icons'>star</i><i class='material-icons'>star</i><i class='material-icons'>star_half</i>" //This is an example of a rating of 7 (3.5 stars)
	//return `<div class='collapsible-header'><i class='material-icons light-blue-text'>${rankIcon}</i><span class='song_name'>${name}</span><span id='song_main_genre' class='new badge light-blue lighten-1' data-badge-caption=''>${genre}</span></div><div class='collapsible-body'><div class='row'><div class='col 6s'><span><p class='valign-wrapper'><i class='material-icons'>people</i><b>&nbsp;Artist:&nbsp;</b><span class='song_artist'>${artist}</span></p><p class='valign-wrapper'><i class='material-icons'>album</i><b>&nbsp;Album:&nbsp;</b><span class='song_album'>${album}</span></p><p class='valign-wrapper'><i class='material-icons'>palette</i><b>&nbsp;Genre:&nbsp;</b><span class='song_genres'>${genre}</span></p><p class='valign-wrapper'><i class='material-icons'>music_note</i><b>&nbsp;Chords:&nbsp;</b><span class='song_chords'>${chords}</span></p></span></div><div class='col s7 push-s5'><span><p class='valign-wrapper'><i class='material-icons'>stars</i><b class='valign-wrapper'>&nbsp;Rating:&nbsp;<span class='song_rating valign-wrapper'>${starRating}</span></b><div class='right-align'><a href='#'><i class='material-icons medium'>keyboard_arrow_right</i></a></div></p></span></div></div></div>`
	//<div class='col s7 push-s5'><div class='right-align'><a href='#'><i class='material-icons medium'>keyboard_arrow_right</i></a></div></div>
	return `<div class='collapsible-header'><i class='material-icons light-blue-text'>${rankIcon}</i><span class='song_name'>${name}</span><span id='song_main_genre' class='new badge light-blue lighten-1' data-badge-caption=''>${genre}</span></div><div class='collapsible-body'><div class='row'><div class='col 6s'><span><p class='valign-wrapper'><i class='material-icons'>people</i><b>&nbsp;Artist:&nbsp;</b><span class='song_artist'>${artist}</span></p><p class='valign-wrapper'><i class='material-icons'>album</i><b>&nbsp;Album:&nbsp;</b><span class='song_album'>${album}</span></p><p class='valign-wrapper'><i class='material-icons'>palette</i><b>&nbsp;Genre:&nbsp;</b><span class='song_genres'>${genre}</span></p><p class='valign-wrapper'><i class='material-icons'>music_note</i><b>&nbsp;Chords:&nbsp;</b><span class='song_chords'>${chords}</span></p></span></div><div class='right-align'><a href='#'><i class='material-icons medium'>keyboard_arrow_right</i></a></div></div></div>`
}


function truncate(n, useWordBoundary){
    if (this.length <= n) { return this; }
    var subString = this.substr(0, n-1);
    return (useWordBoundary 
       ? subString.substr(0, subString.lastIndexOf(' ')) 
       : subString) + "&hellip;";
};



/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);