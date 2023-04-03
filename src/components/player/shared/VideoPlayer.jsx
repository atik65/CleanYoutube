import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoId }) => {
  return (
    <div>
      <ReactPlayer
        controls={true}
        playing={false}
        height={"600px"}
        width="100%"
        url={`https://www.youtube.com/watch?v=${videoId}`}
      />
    </div>
  );
};

export default VideoPlayer;
