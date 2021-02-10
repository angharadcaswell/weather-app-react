import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import Search from "./Search";
import Forecast from "./Forecast";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Search />
    <Footer />
    <Forecast />
  </React.StrictMode>,
  rootElement
);