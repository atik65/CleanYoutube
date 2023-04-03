import React, { useContext } from "react";
import Player from "../../pages/Player";
import { Link } from "react-router-dom";
import { PlaylistContext } from "../../context/PlaylistContext";

const PlaylistCard = ({
  playlist,
  recentPlaylist = false,
  favPlaylist = false,
}) => {
  const {
    removeFavoritePlaylist,
    removeRecentPlaylist,
    addFavoritePlaylist,
    addRecentPlaylist,
  } = useContext(PlaylistContext);
  return (
    <div>
      <h2
        style={{
          paddingLeft: "1rem",
          marginTop: "1rem",
          marginBottom: "0.8rem",
        }}
      >
        Channel Title: {playlist.channelTitle}
      </h2>
      {!favPlaylist && !recentPlaylist && (
        <button
          onClick={() => addFavoritePlaylist(playlist.playlistId)}
          style={{
            padding: "5px",
            marginRight: "10px",
            cursor: "pointer",
            marginBottom: "10px",
            marginLeft: "10px",
          }}
        >
          Add to favorite playlist
        </button>
      )}

      {favPlaylist && (
        <button
          onClick={() => removeFavoritePlaylist(playlist.playlistId)}
          style={{
            padding: "5px",
            marginRight: "10px",
            cursor: "pointer",
            marginBottom: "10px",
            marginLeft: "10px",
          }}
        >
          Remove from favorite playlist
        </button>
      )}

      <br />
      {!recentPlaylist && !favPlaylist && (
        <button
          onClick={() => addRecentPlaylist(playlist.playlistId)}
          style={{
            padding: "5px",
            marginRight: "10px",
            cursor: "pointer",
            marginBottom: "10px",
            marginLeft: "10px",
          }}
        >
          Add to recent playlist
        </button>
      )}
      {recentPlaylist && (
        <button
          onClick={() => removeRecentPlaylist(playlist.playlistId)}
          style={{
            padding: "5px",
            marginRight: "10px",
            cursor: "pointer",
            marginBottom: "10px",
            marginLeft: "10px",
          }}
        >
          Remove from recent playlist
        </button>
      )}
      <br />
      <Link
        style={{
          fontSize: "1.5rem",
          color: "black",
        }}
        to={`/playlist/${playlist.playlistId}`}
      >
        {" "}
        Explore Playlist{" "}
      </Link>
    </div>
  );
};

export default PlaylistCard;
