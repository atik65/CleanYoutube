import React from "react";

const PlayerSidebar = ({ videos, handlePlayVideo }) => {
  return (
    <div
      style={{
        maxHeight: "600px",
        overflowY: "scroll",
        paddingBottom: "1rem",
      }}
    >
      <h1>---All Videos---</h1>
      {videos?.map((video) => {
        return (
          <h3
            style={{
              cursor: "pointer",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
            }}
            key={video.contentDetails.videoId}
            onClick={() => handlePlayVideo(video)}
          >
            {video.title}
          </h3>
        );
      })}
    </div>
  );
};

export default PlayerSidebar;
