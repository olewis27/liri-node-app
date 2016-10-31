
var command = process.argv[2];
var parameter = process.argv[3];
console.log("Command: " + command)
var runProgram = function(command, parameter){
	switch(command){
		case 'my-tweets':
			var Twitter = require("twitter");
			var twitterKeys = require("./keys.js").twitterKeys;
			var client = new Twitter(twitterKeys);
			console.log('Getting my Tweets starting with the most recent');
			var params = {screen_name: 'c0ding0mar'};
			client.get('statuses/user_timeline', params, function(error, tweets, response) {
				if (!error) {
					for(var i = 0; i<tweets.length; i++)
						console.log("Tweet " + parseInt(i+1) + ": " + tweets[i].text);
				}
			});
		break;
		case 'spotify-this-song':
			var spotify = require("spotify");
			var song = parameter === 'undefined' ? 'Never gonna give you up' : parameter;
			console.log("Spotifying Song: '" + song + "'");
			spotify.search({ type: 'track', query: song }, function(err, data) {
			    if ( err ) {
			        console.log('Error occurred: ' + err);
			        return;
			    }
			    data = data.tracks.items[0];

			    console.log("Artist: " + data.artists[0].name);
			    console.log("Song: " + data.name);
			    console.log("Preview Link: " + data.preview_url);
			    console.log("Album: " + data.album.name);
			});
		break;
		case 'movie-this':
			var request = require("request");
			var movie = parameter;
			console.log("Movie: " + movie);
			request('http://www.omdbapi.com/?t=' + movie + '&y=&plot=short&r=json', function (error, response, body) {
				if (!error && response.statusCode == 200) {
					console.log(body)
				} else {
					console.warn(error);
	  			}
			});
		break;
		case 'do-what-it-says':
			fs = require('fs');
			fs.readFile('./random.txt', 'UTF-8', function(err, data){
				runProgram(data.split(' ')[0], data.split(' ')[1])
			});
		break;
	}
}
runProgram(command, parameter);
