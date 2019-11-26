import React from "react";
import { useYTPlayer } from "../../../organisms/YTPlayerProvider";

type Props = {
  videoId: string;
};

const PlayButton = (props: Props) => {
  const { videoId } = props;
  const { player } = useYTPlayer();
  const handleClick = () => {
    if (player != null) {
      player.loadVideoById(videoId);
    }
  };
  return (
    <button type="button" disabled={player == null} onClick={handleClick}>
      Play
    </button>
  );
};

export default PlayButton;
