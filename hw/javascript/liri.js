//Global variables
var twitter = require('twitter');
var twitterKeys = require('keys.js').twitterKeys;
// var spotify = require('spotify');
// var request = require('request');
// Load the fs package to read and write
var fs = require('fs');
// Take user input for action
var direct = process.argv[2];
// //User input for movie-this and spotify-this-song
// var parameter = process.argv[3]

//Switch to determine action to take
switch(direct){
	//This will show your last 20 tweets and when they were created at in your terminal/bash window.
	case 'my-tweets':
    {
        myTweets();
    }
    //     break;
    // case 'spotify-this-song':
    // {
    //     var song = process.argv[3];
    //     spotifyThisSong(song);
    // }
    //     break;
    // case 'movie-this':
    // {
    //     var movie = process.argv[3];
    //     movieThis(movie);
    // }
    //     break;
    // case 'do-what-it-says':
    // {
}
//Twitter API client library for node.js -- npm install twitter
function myTweets(){
	// var twitter = require('twitter');
	//Grab the keys.js info
	//Set client to key grabbed
	var client = new twitter(twitterKeys);

	//Set my screen_name and number of tweets to pull
	var params = {screen_name: 'deny_us_not', count: 10};

	//Get timeline info
	client.get('statuses/user_timeline', params, function(error, tweets) {

	 	//If an error occurs
	 	if (error) {
		    console.log('Error occurred: ' + error);
		    return;
		}

	 	//If no error occurs
	 	if (!error) {

			//Display ten current tweets
			for (var i = 0; i < tweets.length; i++) {
				console.log((parseInt([i]) + 1) + '. ' + tweets[i].text);
			}
		}
	});

}
