require("dotenv").config();
var inputString = process.argv;
var userInput = process.argv[2];
var userRequest = process.argv[3];

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var axios = require('axios');

var fs = require('fs');





// function firstThing(){
// console.log("Welcome TO Liri. Please Choose one of the Following Commands.....")
// console.log("spotify-this-song");
// console.log("concert-this")
// console.log("movie-this");
// console.log("do-what-it-says");
// }







////////////////////////





// log dates in JSON








function firstBaby() {

    if (userInput === "spotify-this-song") {
        if (!userRequest) {
            userRequest = "dammit";
        } 

        var theSearch = spotify.search({
            type: 'track',
            query: userRequest
        }, function (err, data) {
            if (err) {
                return console.log("Error occured: " + err);
            }
            // need this to work //
            if (userRequest == undefined) {
                defa;
            }
            var defa = "dammit"
            var nav = data.tracks.items[0]
            console.log("The song you searched was " + nav.name)
            console.log("This artists name is " + nav.artists[0].name)
            console.log("The album this song is on, is " + nav.album.name)
            console.log("Here is a preview link " + nav.external_urls.spotify)

        });
    }
    axios.get(theSearch)
        .then(function (response) {
            var obj = JSON.parse(response)


        });

}
if (userInput === "concert-this") {
    if (userRequest === undefined) {

        userRequest = "blink-182";
    } 

    var conSearch = "https://rest.bandsintown.com/artists/" + userRequest + "/events?app_id=codingbootcamp";
    axios.get(conSearch)
        .then(function (response2) {

            console.log("The next concert for the band you looked up is " + response2.data[0].datetime)
            console.log("The venue of the time above is is " + response2.data[0].venue.country),
                console.log(response2.data[0].venue.city),
                console.log(response2.data[0].venue.region)
            console.log("The lineup of this concert is only " + response2.data[0].lineup)
            console.log("There are tickets available on " + response2.data[0].offers[0].url)



        });

}


if (userInput === "movie-this") {
    if (userRequest === undefined) {
        userRequest = "300";
    } 

    var url = "http://www.omdbapi.com/?t=" + userRequest + "&y=&plot=short&apikey=trilogy"
    console.log(typeof url)
        axios.get(url).then(
            function (response) {
                console.log("The movie you requested was " + userRequest)
                console.log("This movie's rating is: " + response.data.imdbRating + " on imdb");
                console.log("This movie's rating is " + response.data.Ratings[1].Value + " on Rotten Tomatoes");
                console.log("This movie came out in " + response.data.Year);
                console.log("This movie is rated " + response.data.Rated);
                console.log("This movies genre is " + response.data.Genre);
                console.log("This movie is " + response.data.Runtime + " long")
                console.log("This movie was directed by " + response.data.Director);
                console.log("This movie is in " + response.data.Language);
                console.log("This movie has " + response.data.Actors + " in it");
                console.log("This movie was made in " + response.data.Country);
                console.log("This movie was awarded " + response.data.Awards);
                console.log("The movies plot is " + response.data.Plot);
            }
        );
    

}



if (userInput === "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function (error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
            return console.log(error);
        }

        // We will then print the contents of data
        console.log(data);

        // Then split it by commas (to make it more readable)
        var dataArr = data.split(",");

        // We will then re-display the content as an array for later use.
        console.log(dataArr);

    });
}







firstBaby();



// app loads tells you different inputs that are valid !!%%%%%%%%
// type in command, spotify-this-song, concert-this, movie-this, do-what-it-says
// when the command is typed, the app loads the API that goes to the command is typed
// then asks you for what you want to know
// returns input