import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useContext, useEffect } from "react";
import { PlaylistContext } from "../../../context/PlaylistContext";
import { useForm } from "react-hook-form";
import { Box } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    playlistURL: yup
      .string()
      .required("Playlist URL is required")
      .min(34, "Playlist URL is not valid"),
  })
  .required();

const AddPlaylistDialog = ({ open, handleClose }) => {
  const { addPlaylist } = useContext(PlaylistContext);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const closeHandler = () => {
    reset();
    handleClose();
  };

  const submitHandler = (data) => {
    let playlistId;

    if (data.playlistURL.length == 34) {
      if (data.playlistURL.startsWith("PL")) {
        playlistId = data.playlistURL;
      } else {
        setError("playlistURL", {
          message: "Playlist URL is not valid",
        });
      }
    } else {
      if (data.playlistURL.includes("list=")) {
        const temp = data.playlistURL.split("list=")[1];
        if (temp.length == 34 && temp.startsWith("PL")) {
          playlistId = temp;
        } else {
          setError("playlistURL", {
            message: "Playlist URL is not valid",
          });
        }
      } else {
        setError("playlistURL", {
          message: "Playlist URL is not valid",
        });
      }
    }

    if (Object.keys(errors).length == 0) {
      addPlaylist(playlistId);
      reset();
      closeHandler();
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={closeHandler}>
        <DialogTitle>Add New Playlist</DialogTitle>

        <Box component={"form"} onSubmit={handleSubmit(submitHandler)}>
          <DialogContent>
            <DialogContentText>
              To add a new playlist, please enter the playlist URL or playlist
              ID here. We will add it to your playlist.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="playlistURL"
              label="Playlist URL"
              type="text"
              fullWidth
              variant="standard"
              error={errors.playlistURL ? true : false}
              helperText={errors.playlistURL?.message}
              {...register("playlistURL")}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeHandler}>Cancel</Button>
            <Button type="submit">Add playlist</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
};

export default AddPlaylistDialog;
