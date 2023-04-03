import React from "react";
import PlaylistCard from "../playlistCard/PlaylistCard";

const RecentPlaylist = ({ recentPlaylists }) => {
  return (
    <div
      style={{
        marginTop: "1rem",
        backgroundColor: "#e2e8f0",
        padding: "1rem",
      }}
    >
      <h3>
        {recentPlaylists.length > 0
          ? "Recent Playlists"
          : "Recent playlist is empty."}
      </h3>
      {recentPlaylists.map((playlist) => {
        return (
          <PlaylistCard
            recentPlaylist={true}
            key={playlist.playlistId}
            playlist={playlist}
          />
        );
      })}
    </div>
  );
};

export default RecentPlaylist;
