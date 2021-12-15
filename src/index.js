import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import MainProvider from "./context/MainProvider";

ReactDOM.render(
  <React.StrictMode>
    <MainProvider>
      <App />
    </MainProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
