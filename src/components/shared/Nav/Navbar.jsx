import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import PlaylistAddRoundedIcon from "@mui/icons-material/PlaylistAddRounded";
import AddPlaylistDialog from "../addPlaylist-dialog/AddPlaylistDialog";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          marginBottom: "0.5rem",
          backgroundColor: "#e0f2fe",
          py: {
            xs: "0.9rem",
            sm: "0.9rem",
          },
          width: "100%",

          alignItems: "center",
        }}
      >
        <Container>
          <Grid
            sx={{
              alignItems: "center",
            }}
            container
          >
            <Grid item xs={12} sm={2} md={2}>
              <Box
                sx={{
                  // backgroundColor: "#0c4a6e",
                  backgroundColor: "#7bc4ee46",

                  borderRadius: "3px",
                  display: "grid",
                  placeItems: "center",
                  fontWeight: "bold",
                  // color: "#f3f4f6",
                  color: "#2b2217",
                  cursor: "pointer",
                  py: "0.2rem",
                }}
                onClick={() => navigate("/")}
              >
                Clean YouTube
                <Typography variant="body2"> Atik Hasan</Typography>
              </Box>
            </Grid>

            <Grid
              sx={{
                justifyContent: "flex-end",
                display: {
                  xs: "none",
                  sm: "grid",
                },
              }}
              item
              xs={12}
              sm={10}
              md={10}
            >
              <Button onClick={handleClickOpen} variant="contained">
                <PlaylistAddRoundedIcon
                  sx={{
                    mr: 1,
                  }}
                />{" "}
                Add Playlist
              </Button>

              <AddPlaylistDialog open={open} handleClose={handleClose} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
