import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const PlayerSidebar = ({ videos, handlePlayVideo }) => {
  return (
    <Box>
      {screen.width < 900 && (
        <Typography sx={{ textAlign: "center", mb: "1rem" }} variant="h6">
          All Videos
        </Typography>
      )}
      <Box
        sx={{
          mb: {
            xs: "5rem",
            md: "2rem",
          },
          overflowY: "scroll",
          paddingBottom: "1rem",
          maxHeight: "550px",
          border: "1px solid #c7c7c7",
          px: "0.5rem",
          pb: "1rem",
          borderRadius: "0.5rem",
        }}
      >
        {videos?.map((video) => {
          return (
            <Typography
              variant="h6"
              sx={{
                textAlign: "justify",
                fontSize: "1rem",
                cursor: "pointer",
                mt: "0.3rem",
                p: "0.2rem",
                px: "0.5rem",
                mb: "0.4rem",
                border: "1px solid #c7c7c7",
                backgroundColor: "#e2e8f075",
                borderRadius: "0.5rem",
              }}
              key={video.contentDetails.videoId}
              onClick={() => handlePlayVideo(video)}
            >
              {video.title}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};

export default PlayerSidebar;
