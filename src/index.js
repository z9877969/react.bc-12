import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import MainProvider from "./context/MainProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainProvider>
        <App />
      </MainProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
