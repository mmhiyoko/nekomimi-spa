import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopPage from "./Top";

const RootPage = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={TopPage} />
        <Route path="/watch/:id" component={() => <h1>Watch Page</h1>} />
        <Route component={() => <h1>404</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default RootPage;
