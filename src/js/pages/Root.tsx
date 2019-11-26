import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopPage from "./top";
import WatchPage from "./watch";
import SearchContextProvider from "../organisms/SearchContextProvider";
import YTPlayerProvider from "../organisms/YTPlayerProvider";
import YTPlayerController from "../organisms/YTPlayerController";

const RootPage = () => {
  return (
    <BrowserRouter>
      <YTPlayerProvider>
        <SearchContextProvider>
          <Switch>
            <Route exact path="/" component={TopPage} />
            <Route path="/watch/:id" component={WatchPage} />
            <Route component={() => <h1>404</h1>} />
          </Switch>
        </SearchContextProvider>
        <YTPlayerController />
      </YTPlayerProvider>
    </BrowserRouter>
  );
};

export default RootPage;
