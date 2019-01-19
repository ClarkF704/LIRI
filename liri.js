require("dotenv").config();

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

console.log("Welcome TO Liri. Please Choose one of the Following Commands.....")
console.log("concert-this");
console.log("spotify-this-song");
console.log("movie-this");
console.log("do-what-it-says");

if(process.argv[2] === "concert-this"){
    console.log("you said clark is great")
}
else if(process.argv[2] === "spotify-this-song"){

}
else if(process.argv[2] === "movie-this"){
    
}
else if(process.argv[2] === "do-what-it-says"){
    
}
