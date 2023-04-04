import React, { useContext, useEffect, useState } from "react";
import AllPlaylists from "./components/allPlaylists/AllPlaylists";
import { PlaylistContext } from "./context/PlaylistContext";
import FavPlaylist from "./components/FavPlaylist/FavPlaylist";
import RecentPlaylist from "./components/recentPlaylist/RecentPlaylist";
import { getFromLocalStorage } from "./utils";
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Paper,
  TextField,
} from "@mui/material";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { AddTask } from "@mui/icons-material";
const demoPlayListID = "PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl";

const App = () => {
  const [playlistURL, setPlaylistURL] = useState("");
  const {
    playlists,
    favoritePlayList,
    recentPlaylists,

    addPlaylist,
  } = useContext(PlaylistContext);

  const handleSearch = (e) => {
    e.preventDefault();
    addPlaylist(playlistURL);

    setPlaylistURL("");
  };

  return (
    <Box>
      <Box
        sx={{
          mt: "1rem",
        }}
      >
        <Paper
          component="form"
          onSubmit={(e) => handleSearch(e)}
          sx={{
            boxShadow: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextField
            sx={{
              border: "0px",
              outline: "none",
            }}
            fullWidth
            size="small"
            id="outlined-search"
            label="Playlist URL"
            type="search"
            value={playlistURL}
            onChange={(e) => setPlaylistURL(e.target.value)}
          />

          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <AddTask />
          </IconButton>
        </Paper>

        {/* <Button> add</Button> */}
        {/* <input
          style={{ padding: "10px" }}
          value={playlistURL}
          onChange={(e) => setPlaylistURL(e.target.value)}
          type="text"
          placeholder="Playlist URL"
        />
        <button onClick={() => addPlaylist(playlistURL)}> Add playlist </button> */}
      </Box>

      <AllPlaylists playlists={playlists} />

      <FavPlaylist favoritePlayList={favoritePlayList} />

      <RecentPlaylist recentPlaylists={recentPlaylists} />
    </Box>
  );
};

export default App;
