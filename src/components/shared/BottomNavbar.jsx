import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useState } from "react";
import PlaylistAddRoundedIcon from "@mui/icons-material/PlaylistAddRounded";
import AddPlaylistDialog from "./addPlaylist-dialog/AddPlaylistDialog";

const BottomNavbar = () => {
  const [value, setValue] = useState(-1);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // TODO: Bottom navbar button position is not fixed

  return (
    <Box
      sx={{
        marginTop: "0.5rem",
        // paddingTop: "5rem",
        position: "fixed",
        bottom: "0",
        left: "0",
        right: "0",
        width: "100%",
        display: {
          xs: "block",
          sm: "none",
          md: "none ",
        },
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          onClick={() => navigate("/")}
          label="Go Home"
          icon={<HomeOutlinedIcon />}
        />
        <BottomNavigationAction
          onClick={handleClickOpen}
          label="Add Playlist"
          icon={<PlaylistAddRoundedIcon />}
        />
      </BottomNavigation>
      <AddPlaylistDialog open={open} handleClose={handleClose} />
    </Box>
  );
};

export default BottomNavbar;
