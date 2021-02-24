import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import axios from "axios";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="weather-forecast-temperature" id="forecast"></div>
    </div>
  );
}