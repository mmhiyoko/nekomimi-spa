import React, { useMemo } from "react";
import styled from "styled-components";
import { useYTPlayer } from "./YTPlayerProvider";
import { PlayerState } from "../constants/PlayerState";
import IconButton from "../molecules/IconButton";

const YTPlayerController = () => {
  const { player, playerState } = useYTPlayer();
  const isPlaying = useMemo<boolean>(
    () => playerState === PlayerState.PLAYING,
    [playerState]
  );
  const handleClick = () => {
    if (player != null) {
      if (isPlaying) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
    }
  };
  return (
    <Wrapper>
      <IconButton
        disabled={playerState === PlayerState.UNSTARTED}
        onClick={handleClick}
      >
        {isPlaying ? "pause" : "play_arrow"}
      </IconButton>
    </Wrapper>
  );
};

export default YTPlayerController;

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 48px;
  z-index: 9999;
  background-color: #eee;
`;
