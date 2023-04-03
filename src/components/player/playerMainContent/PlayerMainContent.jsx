import React from "react";
import DescriptionArea from "../shared/DescriptionArea";
import Notes from "../shared/Notes";
import VideoPlayer from "../shared/VideoPlayer";

const PlayerMainContent = ({ video }) => {
  return (
    <div
      style={{
        paddingRight: "1rem",
      }}
    >
      <VideoPlayer videoId={video?.contentDetails?.videoId} />
      <DescriptionArea description={video?.description} />
      <Notes videoId={video?.contentDetails?.videoId} />
    </div>
  );
};

export default PlayerMainContent;
