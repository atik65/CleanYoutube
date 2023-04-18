import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoId }) => {
  const [height, setHeight] = useState("600px");

  useEffect(() => {
    if (screen.width < 350) {
      setHeight("200px");
    } else if (screen.width < 500) {
      setHeight("210px");
    } else if (screen.width < 600) {
      setHeight("300px");
    } else if (screen.width < 700) {
      setHeight("350px");
    } else if (screen.width < 800) {
      setHeight("400px");
    } else if (screen.width < 1100) {
      setHeight("450px");
    } else if (screen.width < 1900) {
      setHeight("550px");
    } else {
      setHeight("600px");
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [videoId]);

  return (
    <div>
      <ReactPlayer
        controls={true}
        playing={false}
        height={height}
        width="100%"
        url={`https://www.youtube.com/watch?v=${videoId}`}
      />
    </div>
  );
};

export default VideoPlayer;
