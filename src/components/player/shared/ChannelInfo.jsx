import { Box, Typography } from "@mui/material";
import React from "react";

const ChannelInfo = ({ playlist }) => {
  return (
    <Box sx={{ mt: "1rem" }}>
      <Typography gutterBottom variant="h5" color="text.secondary">
        {playlist?.channelTitle}
      </Typography>
      <Typography gutterBottom variant="h6" color="dark">
        {playlist?.playlistTitle}
      </Typography>
    </Box>
  );
};

export default ChannelInfo;
