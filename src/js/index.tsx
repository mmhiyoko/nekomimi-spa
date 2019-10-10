import React from "react";
import ReactDOM from "react-dom";
import RootPage from "./pages/Root";

const runApp = () => {
  const targetEl = document.getElementById("app");
  if (targetEl == null) {
    throw new Error("target element is not found.");
  }
  ReactDOM.render(<RootPage />, targetEl);
};

document.addEventListener("DOMContentLoaded", runApp);
