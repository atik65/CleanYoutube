import React, { useContext, useEffect, useState } from "react";
import { PlaylistContext } from "../../../context/PlaylistContext";
import {
  Box,
  Button,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import Textarea from "@mui/joy/Textarea";

const Notes = ({ videoId }) => {
  const { addNote, getNote } = useContext(PlaylistContext);

  const [note, setNote] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(videoId, note);
    setNote("");
  };

  useEffect(() => {
    if (getNote(videoId)) setNote(getNote(videoId));
    else setNote("");
  }, [videoId]);

  return (
    <Box
      sx={{
        mt: "0.5rem",
        mb: {
          xs: "1rem",
          md: "2rem",
        },
      }}
    >
      <Typography variant="h6">Notes</Typography>
      <Typography
        variant="body1"
        sx={{
          mb: "1rem",
          textAlign: "justify",
        }}
      >
        {getNote(videoId)}
      </Typography>

      <form onSubmit={handleSubmit}>
        <Textarea
          required
          color="primary"
          placeholder="Add note"
          minRows={3}
          size="lg"
          variant="soft"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <Button
          fullWidth
          sx={{
            mt: "0.5rem",
          }}
          variant="contained"
          type="submit"
        >
          {getNote(videoId) ? "Update " : "Add "} Note
        </Button>
      </form>
    </Box>
  );
};

export default Notes;
