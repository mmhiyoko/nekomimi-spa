import React, { useState, useEffect, useCallback, useRef } from "react";
import { useYTPlayer } from "./YTPlayerProvider";
import { PlayerState } from "../constants/PlayerState";

const YTSeekBar = () => {
  const { player, playerState } = useYTPlayer();
  const rafId = useRef<number | null>(null);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const updateCurrentTime = useCallback(
    (ytp: YT.Player) => () => {
      setCurrentTime(Math.floor(ytp.getCurrentTime()) ?? 0);
      requestAnimationFrame(updateCurrentTime(ytp));
    },
    []
  );
  useEffect(() => {
    if (player != null) {
      if (playerState === PlayerState.PLAYING) {
        // 再生中は毎フレーム現在の再生時間を取得
        if (rafId.current == null) {
          rafId.current = requestAnimationFrame(updateCurrentTime(player));
        }
      }
      if (playerState === PlayerState.PAUSED) {
        // 一時停止中は再生時間を取得しない
        if (rafId.current != null) {
          cancelAnimationFrame(rafId.current);
          rafId.current = null;
        }
      }
    }
  }, [player, playerState]);
  useEffect(() => {
    if (player != null && playerState == PlayerState.PLAYING) {
      setDuration(Math.floor(player.getDuration()));
    }
  }, [player, playerState]);

  return <h1>{`${currentTime}/${duration}`}</h1>;
};

export default YTSeekBar;
