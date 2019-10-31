import React from "react";
import { Video } from "../../../utils/ApiClient";

type Props = {
  snippet: NonNullable<Video["snippet"]>;
};

const VideoDetails = (props: Props) => {
  const { snippet } = props;
  return (
    <>
      <h1>{snippet.title}</h1>
      <p>{snippet.description}</p>
    </>
  );
};

export default VideoDetails;
