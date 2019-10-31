import React from "react";
import { Video } from "../../../utils/ApiClient";

type Props = {
  player: NonNullable<Video["player"]>;
};

const VideoPlayer = (props: Props) => {
  const { player } = props;
  return <div dangerouslySetInnerHTML={{ __html: player.embedHtml! }} />;
};

export default VideoPlayer;
