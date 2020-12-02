// TODO: responsive album image sizing
// TODO: get actual token instead of demo token

import React, { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://api.spotify.com";
axios.defaults.headers.post["Content-Type"] = "application/json";

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [albumImage, setAlbumImage] = useState({});
  const [albumName, setAlbumName] = useState("");
  const [songTitle, setSongTitle] = useState("");
  const [artists, setArtists] = useState([]);
  const [songLink, setSongLink] = useState("");

  useEffect(() => {
    async function fetchLastPlayed() {
      // to get currently playing: `/v1/me/player/currently-playing`
      // https://developer.spotify.com/console/get-users-currently-playing-track/?market=ES&additional_types=episode
      // const spotifyResponse = await axios.get("/api/auth");
      // console.log("spotify response", spotifyResponse);
      // const image = spotifyResponse.data.items[0].track.album.images.find(
      //   (i) => i.height === 640
      // );
      // setAlbumImage(image);
      // setSongTitle(spotifyResponse.data.items[0].track.name);
      // setArtists(spotifyResponse.data.items[0].track.artists);
      // setSongLink(spotifyResponse.data.items[0].track.external_urls.spotify);
    }
    fetchLastPlayed();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <a href="/api/auth">CLICK HERE</a>
        {/* <h1 style={{ marginBottom: "1em" }}>
          What's Carrie listening to right now?
        </h1>
        <div style={{ display: "flex" }}>
          <div>
            <a href={songLink}>
              <img
                src={albumImage.url}
                height={albumImage.height}
                width={albumImage.width}
                alt={`Album artwork for ${albumName}`}
              />
            </a>
          </div>
          <div style={{ width: 640, height: 640, background: "#ECECEC" }}>
            <p>{songTitle}</p>
            {artists.map((a, i) => (
              <p key={i}>{a.name}</p>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
