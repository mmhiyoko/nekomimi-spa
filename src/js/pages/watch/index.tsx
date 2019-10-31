import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import ApiClint, { Video } from "../../utils/ApiClient";
import VideoContent from "./organisms/VideoContent";

type Params = {
  id: string;
};

type Props = RouteComponentProps<Params>;

const WatchPage = (props: Props) => {
  const { match } = props;
  const { id: videoId } = match.params;
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [video, setVideo] = useState<Video | null>(null);
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
  return (
    <>
      <h1>{`WatchPage: ${videoId}`}</h1>
      <VideoContent
        video={video}
        isLoading={isFetching}
        isError={isError}
        onRequestRetry={fetchVideo}
      />
    </>
  );
};

export default WatchPage;
