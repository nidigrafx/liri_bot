var tweetsArray = [];
var inputCommand = process.argv[2];
var commandParam = process.argv[3];
var defaultMovie = "Ex Machina";
var defaultSong = "Radioactive";



@@ -29,13 +31,23 @@ var client = new Twitter({
//This function processes the input commands
function processCommands(command, commandParam){

	//console.log(commandParam);

	switch(command){

	case 'my-tweets':
		getMyTweets(); break;
	case 'spotify-this-song':
		//If user has not specified a song , use default
		if(commandParam === undefined){
			commandParam = defaultSong;
		}     
		spotifyThis(commandParam); break;
	case 'movie-this':
		//If user has not specified a movie Name , use default
		if(commandParam === undefined){
			commandParam = defaultMovie;
		}    
		movieThis(commandParam); break;
	case 'do-what-it-says':
		doWhatItSays(); break;
@@ -70,7 +82,7 @@ function getMyTweets(){
function spotifyThis(song){

	//If user has not specified a song , default to "Radioactive" imagine dragons
	if(trim(song) === ""){
	if(song === ""){
		song = "Radioactive";
	}

@@ -80,7 +92,6 @@ function spotifyThis(song){
        return;
    }

    //console.log(data.tracks.items[0]);
    var song = data.tracks.items[0];
    console.log("------Artists-----");
    for(i=0; i<song.artists.length; i++){
@@ -102,17 +113,14 @@ function spotifyThis(song){

function movieThis(movieName){

	//If user has not specified a movie Name , default to "Radioactive" imagine dragons
	if(trim(movieName) === ""){
		movieName = "Mr. Nobody";
	}
	console.log(movieName);

	request("https://api.themoviedb.org/3/search/movie?api_key=" + tmdbKey + "&query=" + movieName, function(error, response, body) {

  	// If there were no errors and the response code was 200 (i.e. the request was successful)...
  	if (!error && response.statusCode === 200) {

	    //console.log(JSON.parse(body).results[0]);
	    //console.log(JSON.parse(body));

	    //Get the Movie ID
	    var movieID =  JSON.parse(body).results[0].id;