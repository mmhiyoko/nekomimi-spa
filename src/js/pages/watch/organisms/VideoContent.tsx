import React from "react";
import { Video } from "../../../utils/ApiClient";
import VideoPlayer from "./VideoPlayer";
import VideoDetails from "./VideoDetails";

type Props = {
  video: Video | null;
  isLoading: boolean;
  isError: boolean;
  onRequestRetry: () => void;
};

const VideoContent = (props: Props) => {
  const { video, isLoading, isError, onRequestRetry } = props;
  if (isLoading || video == null) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return (
      <div>
        Error Occured
        <button type="button" onClick={onRequestRetry}>
          再試行
        </button>
      </div>
    );
  }
  console.log(video);
  return (
    <>
      <VideoPlayer player={video.player!} />
      <VideoDetails snippet={video.snippet!} />
    </>
  );
};

export default VideoContent;
