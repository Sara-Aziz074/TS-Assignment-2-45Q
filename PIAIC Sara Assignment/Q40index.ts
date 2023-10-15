/*Album: Write a function called make_album() that builds a Object describing a music album.
 The function should take in an artist name and an album title, and it should return a
  Object containing these two pieces of information. */
  function make_Album(album_title:string,artist_name:string){

    return  {
             album_title,
             artist_name }
  };
   console.log(make_Album("Raahi" , "Tahir Abbas"))

  
  /*Use the function to make three dictionaries representing different albums.Print each 
  return value to show that Objects  are storing the album information correctly.
  Add an optional parameter to make_album()
    that allows you to store the number of tracks on an album. 
    If the calling line includes
    a value for the number of tracks, add that value to the album’s Object.
 Make at least one new function call that includes the number of tracks on an album.
  */
interface albums{
   artist:string;
    song:string;
    tracks?:number
}

  function  make_album(artist:string, song:string, tracks?:number ){
const three_dictionaries:albums={artist,song}

if(tracks!==undefined){three_dictionaries.tracks=tracks}

return  three_dictionaries
  } 
  console.log(make_album("Atif Aslam", "Jhula Jhulaye"))
  console.log(make_album("Abdul Hanan","Iraaday"))
  console.log(make_album( "The Local Train ","Aaftaab",2)) 
  

