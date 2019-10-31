import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import ApiClint, { Video } from "../../utils/ApiClient";

type Params = {
  id: string;
};

type Props = RouteComponentProps<Params>;

const WatchPage = (props: Props) => {
  const { match } = props;
  const { id: videoId } = match.params;
  const [video, setVideo] = useState<Video>();
  const fetchVideo = async () => {
    try {
      const [result] = await ApiClint.videos(videoId);
      setVideo(result);
    } catch (e) {
      console.log("TODO");
    } finally {
      console.log("TODO");
    }
  };
  useEffect(() => {
    fetchVideo();
  }, []);
  return <h1>{`Watch Page ${videoId}`}</h1>;
};

export default WatchPage;
