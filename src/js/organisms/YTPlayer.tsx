import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

export const YTPLAYER_ID = "ytplayer";

const targetEl = document.getElementById("player");

const YTPlayer = () => {
  if (targetEl == null) {
    return null;
  }
  return ReactDOM.createPortal(<Player id={YTPLAYER_ID} />, targetEl);
};

const Player = styled.div`
  /* visibility: hidden; */
`;

export default YTPlayer;
