import React, { useContext, useEffect, useState } from "react";
import PlayerMainContent from "../components/player/playerMainContent/PlayerMainContent";
import PlayerSidebar from "../components/player/playerSidebar/PlayerSidebar";

import { PlaylistContext } from "../context/PlaylistContext";

import { useParams } from "react-router-dom";

const Player = () => {
  const { playlistID } = useParams();
  const { playlists } = useContext(PlaylistContext);

  const [playVideo, setPlayVideo] = useState({});

  useEffect(() => {
    setPlayVideo(playlists[playlistID]?.items[0]);
  }, [playlists]);

  const handlePlayVideo = (video) => {
    setPlayVideo(video);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "9fr 3fr",
      }}
    >
      <PlayerMainContent video={playVideo} />
      <PlayerSidebar
        handlePlayVideo={handlePlayVideo}
        videos={playlists[playlistID]?.items}
      />
    </div>
  );
};

export default Player;
