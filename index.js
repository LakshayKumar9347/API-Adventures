// Application name 	last.fm Api Adventure
// API key 	93c0fad0490df99fd065a384a21d596c
// Shared secret 	aa4239b879cf40ad4ded0775d945cca4
// Registered to 	RadhikaRadhe
// https://api.last.fm/2.0/user/recenttracks.xml?method=user.getRecentTracks&user=RadhikaRadhe&api_key=93c0fad0490df99fd065a384a21d596c
// http://ws.audioscrobbler.com/2.0/?api_key=3ae834eee073c460a250ee08979184ec&method=track.getsimilar&limit=50&artist=R%C3%B8yksopp&track=Vision+One

  // SoundCloud API endpoint
  const baseUrl = "https://api.soundcloud.com/";

  // SoundCloud track URL (replace with your own)
  const trackUrl = "https://soundcloud.com/user/track";

  // Event listener for the play button
  document.getElementById("play-button").addEventListener("click", () => {
    // Extract the track ID from the track URL
    const trackId = trackUrl.split("/").pop();

    // SoundCloud API request URL
    const requestUrl = `${baseUrl}tracks/${trackId}/stream?client_id=YOUR_CLIENT_ID`;

    // Create an HTML audio element
    const audioPlayer = new Audio(requestUrl);

    // Play the audio
    audioPlayer.play();
  });