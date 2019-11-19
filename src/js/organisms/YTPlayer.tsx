import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

export const YTPLAYER_ID = "ytplayer";

const targetEl = document.getElementById("player");

const YTPlayer = () => {
  if (targetEl == null) {
    return null;
  }
  return ReactDOM.createPortal(
    <Wrapper>
      <Player id={YTPLAYER_ID} />
    </Wrapper>,
    targetEl
  );
};

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 48px;
  z-index: 9999;
  background-color: #eee;
`;

const Player = styled.div`
  visibility: hidden;
`;

export default YTPlayer;
