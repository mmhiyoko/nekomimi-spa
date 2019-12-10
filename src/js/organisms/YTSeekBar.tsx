import React, { useState, useEffect } from "react";
import { useYTPlayer } from "./YTPlayerProvider";
import { PlayerState } from "../constants/PlayerState";

const YTSeekBar = () => {
  const { player, playerState } = useYTPlayer();
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  useEffect(() => {
    if (player != null && playerState == PlayerState.PLAYING) {
      setDuration(Math.floor(player.getDuration()));
    }
  }, [playerState]);

  return <h1>{duration}</h1>;
};

export default YTSeekBar;
