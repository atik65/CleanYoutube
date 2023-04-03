import React, { useContext } from "react";
import PlaylistCard from "../playlistCard/PlaylistCard";

const AllPlaylists = ({ playlists }) => {
  return (
    <div
      style={{
        backgroundColor: "#e2e8f0",
        padding: "1rem",
        marginTop: "1rem",
      }}
    >
      <h3>All Playlists</h3>
      {Object.keys(playlists).map((key) => {
        return <PlaylistCard key={key} playlist={playlists[key]} />;
      })}
    </div>
  );
};

export default AllPlaylists;
