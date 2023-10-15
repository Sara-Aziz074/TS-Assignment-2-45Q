"use strict";
/*Album: Write a function called make_album() that builds a Object describing a music album.
 The function should take in an artist name and an album title, and it should return a
  Object containing these two pieces of information. */
function make_Album(album_title, artist_name) {
    return {
        album_title,
        artist_name
    };
}
;
console.log(make_Album("Raahi", "Tahir Abbas"));
function make_album(artist, song, tracks) {
    const three_dictionaries = { artist, song };
    if (tracks !== undefined) {
        three_dictionaries.tracks = tracks;
    }
    return three_dictionaries;
}
console.log(make_album("Atif Aslam", "Jhula Jhulaye"));
console.log(make_album("Abdul Hanan", "Iraaday"));
console.log(make_album("The Local Train ", "Aaftaab", 2));
