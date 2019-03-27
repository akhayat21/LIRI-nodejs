require("dotenv").config();
var moment = require('moment');
var Spotify = require('node-spotify-api');
var axios = require("axios");
var fs = require('fs');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var input = process.argv.slice(3).join(" ");

switch (process.argv[2]) {
    case "concert-this":
        var artist = input;
        bandQuery(artist);
        break;

    case "spotify-this-song":
        var song = input;
        spotifyQuery(song)
        break;

    case "movie-this":
    var movie = input;
        movieQuery(movie)
        break;

    case "do-what-it-says":
        believeWhenISay()
        break;
    default:
//literally nothing
        break;
}
function bandQuery(artist) {
    if(artist == ""){

    } else{
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

    axios.get(queryURL)
        .then(function (response) {
            console.log("\nVenue Name: "+response.data[0].venue.name+"\n");
            console.log("Venue Location: "+response.data[0].venue.city +" " +response.data[0].venue.region +", "+ response.data[0].venue.country+"\n");
            console.log("Venue Date: "+moment(response.data[0].datetime).format("MM-DD-YYYY")+"\n")
        })
        .catch(function (error) {
            console.log(error);
        });

}
}
function spotifyQuery(song) {
    if(song == ""){
        spotifyQuery("The Sign");
    } else {
    spotify.search({ type: 'track', query: song }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log("\nArtist(s): "+data.tracks.items[0].artists[0].name); 

      console.log("\nSong Name: "+data.tracks.items[0].name);

      console.log("\nSpotify Link: "+data.tracks.items[0].external_urls.spotify); 
       
      console.log("\nAlbum Name: "+data.tracks.items[0].album.name); 
      });
}
}

function movieQuery(movie) {
    if(movie ==""){
        movieQuery("Mr nobody");
    }else{
  var queryURL =   "http://www.omdbapi.com/?t="+movie+"&apikey=b9b187dd"
  axios.get(queryURL)
        .then(function (response) {
          console.log("\nMovie Title: "+response.data.Title+"\n");
          console.log("Movie Release Year: "+response.data.Year+"\n");
          console.log("Movie Rating: "+response.data.Rated+"\n");
          console.log("Movie RottenTomato Score: "+response.data.Ratings[1].Value+"\n");
          console.log("Movie Country of Production: "+response.data.Country+"\n");
          console.log("Movie Language: "+response.data.Language+"\n");
          console.log("Movie Plot: "+response.data.Plot+"\n");
          console.log("Movie Actor List: "+response.data.Actors+"\n");
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}
function believeWhenISay() {

    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
          }
          var dataArr = data.split(",")
          spotifyQuery(dataArr[1])
    });

}