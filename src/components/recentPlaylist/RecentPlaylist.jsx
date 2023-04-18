import React from "react";
import PlaylistCard from "../playlistCard/PlaylistCard";
import { Alert, Box, Button, Chip, Grid, Snackbar } from "@mui/material";
import useSnackbarAction from "../../hooks/useSnackbarAction";

const RecentPlaylist = ({ recentPlaylists }) => {
  const { open, closeSnackbar, openSnackbar, action } = useSnackbarAction();

  return (
    <Box
      sx={{
        mt: "1rem",
        backgroundColor: "#e2e8f0",
        p: "1rem",
        mb: "4rem",
      }}
    >
      <h3>
        {recentPlaylists.length > 0 ? (
          <Chip
            sx={{
              fontSize: "1.1rem",
              backgroundColor: "#fff",
              color: "#000000af",
            }}
            label="Recent Playlists"
          />
        ) : (
          <Alert severity="info">Recent playlist is empty.</Alert>
        )}
      </h3>

      <Grid container spacing={2}>
        {recentPlaylists.map((playlist) => {
          return (
            <Grid key={playlist.playlistId} item xs={12} sm={6} md={4} lg={4}>
              <PlaylistCard recentPlaylist={true} playlist={playlist} />
            </Grid>
          );
        })}
      </Grid>

      {/* <Button onClick={openSnackbar}>Open simple snackbar</Button>
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={closeSnackbar}
        message="Note archived"
        action={action}
      /> */}
    </Box>
  );
};

export default RecentPlaylist;
