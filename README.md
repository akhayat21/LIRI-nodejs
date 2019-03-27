# LIRI 

####  LIRI is a _Language_ Interpretation and Recognition Interface. LIRI is a command line app that returns information about concerts, songs, movies and more!

## **Installation**

1. ### Installing Depended Packages ###

    * To get started you need to setup some packages using Node Package Manager that the program requires to run. To do this, run the following code in your terminal. 

    ```
    npm install
    ```

    * This will install all the packages that the program is dependant on, and allow you to search for your favorite songs, movies, and artists!

2. ### Getting your very own Spotify Developer Key ###

    1. If you already have your spotify key you can continue on to the next step. To get your Spotify keys [click here](https://developer.spotify.com/my-applications/#!/applications/create). Create a login, and register a new application, and get the Spotify key & secret.

    2. To reference the Spotify key and secret that you just made, create a file named `.env` and include the spotify key and secret in the following format:

    ```
    # Spotify API keys

    SPOTIFY_ID= <YOUR-SPOTIFY-ID-HERE>
    SPOTIFY_SECRET= <YOUR-SPOTIFY-SECRET-HERE>
    ```

## **Features**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The program allows you to search for information about songs, movies, and concerts. The program accepts 3 main paramters, along with one extra special parameter!

### Searching for a Song ###

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To search for a song use the "`spotify-this-song`" parameter when running the program as such:

```
node liri spotify-this-song <name of song>
```

### For Example ###

![spotify-this](https://media.giphy.com/media/6mmtrkPq980LGL58lY/giphy.gif)

### Searching for a Movie ###
 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Searching for a movie can be done in the similar way using "`movie-this`", as such:

```
node liri movie-this <name of movie>
```

### For Example ###

![movie-this](https://media.giphy.com/media/5C2e3Y95YNF2GF8QBQ/giphy.gif)

### Searching for a Concert ###

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Likewise, you can search for a concert that your favorite artist has scheduled with the "`concert-this`" parameter, for example:

```
node liri concert-this <name of artist>
```


### For Example ###

![concert-this](https://media.giphy.com/media/5z28zQa2XEDJGMUZqt/giphy.gif)

### Bonus feature ###

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you want to venture and explore all LIRI has to offer, you can try the "`do-what-it-says`" paramter. 

```
node liri do-what-it-says
```






   










