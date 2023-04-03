import React, { useContext, useEffect, useState } from "react";
import AllPlaylists from "./components/allPlaylists/AllPlaylists";
import { PlaylistContext } from "./context/PlaylistContext";
import FavPlaylist from "./components/FavPlaylist/FavPlaylist";
import RecentPlaylist from "./components/recentPlaylist/RecentPlaylist";
import { getFromLocalStorage } from "./utils";

const demoPlayListID = "PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl";

const App = () => {
  const [playlistURL, setPlaylistURL] = useState("");
  const {
    playlists,
    favoritePlayList,
    recentPlaylists,

    addPlaylist,
  } = useContext(PlaylistContext);

  // useEffect(() => {
  //   addPlaylist(demoPlayListID);
  // }, []);

  console.log(getFromLocalStorage("playlists"));

  return (
    <div>
      <div
        style={{
          marginLeft: "1rem",
          marginTop: "1rem",
        }}
      >
        <input
          style={{ padding: "10px" }}
          value={playlistURL}
          onChange={(e) => setPlaylistURL(e.target.value)}
          type="text"
          placeholder="Playlist URL"
        />
        <button onClick={() => addPlaylist(playlistURL)}> Add playlist </button>
      </div>

      <AllPlaylists playlists={playlists} />

      <FavPlaylist favoritePlayList={favoritePlayList} />

      <RecentPlaylist recentPlaylists={recentPlaylists} />
    </div>
  );
};

export default App;
