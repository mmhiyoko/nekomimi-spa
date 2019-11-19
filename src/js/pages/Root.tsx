import React, { useRef, useLayoutEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopPage from "./top";
import WatchPage from "./watch";
import SearchContextProvider from "../organisms/SearchContextProvider";
import YTPlayer, { YTPLAYER_ID } from "../organisms/YTPlayer";

const RootPage = () => {
  const player = useRef<YT.Player | null>(null);

  useLayoutEffect(() => {
    // @ts-ignore
    YT.ready(() => {
      player.current = new YT.Player(YTPLAYER_ID, {
        width: 400,
        height: 225,
        videoId: "lPCiuR2_IR4"
      });
    });
  }, []);
  return (
    <BrowserRouter>
      <SearchContextProvider>
        <Switch>
          <Route exact path="/" component={TopPage} />
          <Route path="/watch/:id" component={WatchPage} />
          <Route component={() => <h1>404</h1>} />
        </Switch>
      </SearchContextProvider>
      <YTPlayer />
    </BrowserRouter>
  );
};

export default RootPage;
