import React from "react";
import DescriptionArea from "../shared/DescriptionArea";
import Notes from "../shared/Notes";
import VideoPlayer from "../shared/VideoPlayer";
import { Typography } from "@mui/material";
import ChannelInfo from "../shared/ChannelInfo";

const PlayerMainContent = ({ video, playlist }) => {
  return (
    <div>
      <VideoPlayer videoId={video?.contentDetails?.videoId} />
      <ChannelInfo playlist={playlist} />

      <DescriptionArea description={video?.description} />
      <Notes videoId={video?.contentDetails?.videoId} />
    </div>
  );
};

export default PlayerMainContent;
