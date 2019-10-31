import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopPage from "./top";
import WatchPage from "./watch";

const RootPage = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={TopPage} />
        <Route path="/watch/:id" component={WatchPage} />
        <Route component={() => <h1>404</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default RootPage;
