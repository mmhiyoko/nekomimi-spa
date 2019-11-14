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
      <div id={YTPLAYER_ID} />
    </Wrapper>,
    targetEl
  );
};

const Wrapper = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 9999;
  line-height: 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);
`;

export default YTPlayer;
