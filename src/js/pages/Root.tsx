import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopPage from "./top";
import WatchPage from "./watch";
import SearchContextProvider from "../organisms/SearchContextProvider";

const RootPage = () => {
  return (
    <BrowserRouter>
      <SearchContextProvider>
        <Switch>
          <Route exact path="/" component={TopPage} />
          <Route path="/watch/:id" component={WatchPage} />
          <Route component={() => <h1>404</h1>} />
        </Switch>
      </SearchContextProvider>
    </BrowserRouter>
  );
};

export default RootPage;
