import React, { useContext } from "react";
import PlaylistCard from "../playlistCard/PlaylistCard";
import { Alert, Chip, Grid } from "@mui/material";

const AllPlaylists = ({ playlists }) => {
  return (
    <div
      style={{
        backgroundColor: "#e2e8f0",
        padding: "1rem",
        marginTop: "1rem",
      }}
    >
      <h3>
        {Object.keys(playlists)?.length > 0 ? (
          <Chip
            sx={{
              fontSize: "1.1rem",
              backgroundColor: "#fff",
              color: "#000000af",
            }}
            label="All Playlists"
          />
        ) : (
          <Alert severity="info">All playlist is empty.</Alert>
        )}
      </h3>

      <Grid container spacing={2}>
        {Object.keys(playlists).map((key) => {
          return (
            <Grid key={key} item xs={12} sm={6} md={4} lg={4}>
              <PlaylistCard playlist={playlists[key]} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default AllPlaylists;
