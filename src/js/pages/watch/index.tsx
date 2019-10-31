import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import ApiClint, { Video } from "../../utils/ApiClient";
import VideoContent from "./organisms/VideoContent";
import useFetchData from "../../utils/react/useFetchData";

type Params = {
  id: string;
};

type Props = RouteComponentProps<Params>;

const WatchPage = (props: Props) => {
  const { match } = props;
  const { id: videoId } = match.params;
  const [video, setVideo] = useState<Video | null>(null);
  const { isFetching, isError, fetchData: fetchVideo } = useFetchData(
    async () => {
      const [result] = await ApiClint.videos(videoId);
      setVideo(result);
    }
  );
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
