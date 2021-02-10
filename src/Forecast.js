import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div class="weather-forecast-temperature" id="forecast"></div>
    </div>
  );
}