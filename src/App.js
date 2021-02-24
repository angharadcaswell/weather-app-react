import React from "react";
import "./styles.css";
import Weather from "./Weather";
import Forecast from "./Forecast";

import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app fullForecast">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <a
              className="nav-item nav-link active todayTitle"
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
              className="nav-item nav-link"
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
        <div className="tab-content weatherContent" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <Weather defaultCity="Berlin"/>
          </div>
          <div
            className="tab-pane fade nextHours"
            id="nav-hours"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <Forecast />
            
          </div>
          </div>
      
             <Footer />
      </div>
    </div>
  );
}
