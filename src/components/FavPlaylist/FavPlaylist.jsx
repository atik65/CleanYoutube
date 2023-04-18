import React from "react";
import PlaylistCard from "../playlistCard/PlaylistCard";
import { Alert, Chip, Grid } from "@mui/material";

const FavPlaylist = ({ favoritePlayList }) => {
  return (
    <div
      style={{ marginTop: "1rem", backgroundColor: "#e2e8f0", padding: "1rem" }}
    >
      <h3>
        {favoritePlayList.length > 0 ? (
          <Chip
            sx={{
              fontSize: "1.1rem",
              backgroundColor: "#fff",
              color: "#000000af",
            }}
            label="Favorite Playlists"
          />
        ) : (
          <Alert severity="info">Favorite playlist is empty.</Alert>
        )}
      </h3>

      <Grid container spacing={2}>
        {favoritePlayList.map((playlist) => {
          return (
            <Grid key={playlist.playlistId} item xs={12} sm={6} md={4} lg={4}>
              <PlaylistCard favPlaylist={true} playlist={playlist} />
            </Grid>
          );
        })}
      </Grid>

      {/* {favoritePlayList.map((playlist) => {
        return (
          <PlaylistCard
            favPlaylist={true}
            key={playlist.playlistId}
            playlist={playlist}
          />
        );
      })} */}
    </div>
  );
};

export default FavPlaylist;
