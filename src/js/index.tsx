import React from "react";
import ReactDOM from "react-dom";

const runApp = () => {
  const targetEl = document.getElementById("app");
  if (targetEl == null) {
    throw new Error("target element is not found.");
  }
  ReactDOM.render(<h1>hello react!</h1>, targetEl);
};

document.addEventListener("DOMContentLoaded", runApp);
