import React from "react";
import PlaylistCard from "../playlistCard/PlaylistCard";

const FavPlaylist = ({ favoritePlayList }) => {
  return (
    <div
      style={{ marginTop: "1rem", backgroundColor: "#e2e8f0", padding: "1rem" }}
    >
      <h3>
        {favoritePlayList.length > 0
          ? "Favorite Playlists"
          : "Favorite playlist is empty."}
      </h3>
      {favoritePlayList.map((playlist) => {
        return (
          <PlaylistCard
            favPlaylist={true}
            key={playlist.playlistId}
            playlist={playlist}
          />
        );
      })}
    </div>
  );
};

export default FavPlaylist;
