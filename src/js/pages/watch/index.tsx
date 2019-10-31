import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import ApiClint, { Video } from "../../utils/ApiClient";
import VideoPlayer from "./organisms/VideoPlayer";
import VideoDetails from "./organisms/VideoDetails";

type Params = {
  id: string;
};

type Props = RouteComponentProps<Params>;

const WatchPage = (props: Props) => {
  const { match } = props;
  const { id: videoId } = match.params;
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [video, setVideo] = useState<Video>();
  const fetchVideo = async () => {
    try {
      setIsError(false);
      setIsFetching(true);
      const [result] = await ApiClint.videos(videoId);
      setVideo(result);
    } catch (e) {
      setIsError(true);
    } finally {
      setIsFetching(false);
    }
  };
  useEffect(() => {
    fetchVideo();
  }, []);
  if (isFetching || video == null) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return (
      <div>
        Error Occured
        <button type="button" onClick={fetchVideo}>
          再試行
        </button>
      </div>
    );
  }
  console.log(video);
  return (
    <>
      <h1>{`WatchPage: ${videoId}`}</h1>
      <VideoPlayer player={video.player!} />
      <VideoDetails snippet={video.snippet!} />
    </>
  );
};

export default WatchPage;
