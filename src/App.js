import React from "react";
import "./styles.css";
import Weather from "./Weather";
import Forecast from "./Forecast";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div class="weather-app fullForecast">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <a
              class="nav-item nav-link active todayTitle"
              id="nav-home-tab"
              data-toggle="tab"
              href="#nav-home"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Today's Weather
            </a>
            <a
              class="nav-item nav-link"
              id="nav-profile-tab"
              data-toggle="tab"
              href="#nav-hours"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Next 18 hours
            </a>
          </div>
        </nav>
        <div class="tab-content weatherContent" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <Weather />
          </div>
          <div
            class="tab-pane fade nextHours"
            id="nav-hours"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <Forecast />
          </div>
        </div>
      </div>
    </div>
  );
}
