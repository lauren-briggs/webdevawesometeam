var loginButton = document.getElementById("loginButton")

const redirectUri = "https://chrisonions.github.io/webdevawesometeam/"
const clientID = "85942e5b4e564e30b232074bd5b1417d"
const clientSecret = "7f12ed9c212649dfaa703852a28d551c"
const authorise = "https://accounts.spotify.com/authorize"
const tokenHandlerUrl = "https://accounts.spotify.com/api/token"
var url = ""
var authCode = ""

function requestAccessToUserData() {
  url = authorise;
  url += "?client_id=" + clientID;
  url += "&response_type=code";
  url += "&redirect_uri=" + encodeURI(redirectUri);
  url += "&show_dialog=True";
  url += "&scope=playlist-modify-public user-modify-playback-state playlist-modify-private user-library-read playlist-read-collaborative "
};

loginButton.addEventListener("click", function (e) {
  e.preventDefault;
  requestAccessToUserData();
  window.location.href = url;
});

function getAndStoreUserCode() {
  var codeRecieved = null;
  var currentUrl = window.location.href;
  var newurl = currentUrl.split("=");
  authCode = newurl.shift();
}

function tokenHandler(AuthCode) {
  var Authurl = "grant_type=authorization_code";
  Authurl += "&code=" + authCode;
  Authurl += "&redirect_uri" + encodeURI(redirectUri);
  Authurl += "&client_id=" + clientID;
  Authurl += "&client_secret=" + clientSecret;
}


// SEARCH BOX LISTENER:
// Take input from search 		  box, checkbox, length.

// RESULTS PAGE:

// ELEMENTS:
// -add refresh button
// -add playlist to spotify button.


// Function: 
// -when search button clicked
// -check input field for artist genre or songs
// -check playlist length

// Function: 
// -api call to twitter to crosscheck username to and get latest tweet
// -Store data

// Function: 
// -search database for 10 random songs related to input field
// Add the songs into a string for storage

// Function:
// -create dynamic display with results / tracks

// Function:
// -display songs
// -Display Twitter tweet



// -when click Add songs to playlist button
// -Calls API to add the playlist to customer account.

// -random button clicked
