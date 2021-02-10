import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="currentlocation">
        <div className="row align-items-center">
          <div className="col-6">
            <h1 className="country" id="city-name">
              Lisbon
            </h1>
          </div>
          <div className="col-6">
            <div className="weathertoday">
              <img src="" alt="Clear" id="icon" />
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-6 text-center">
            <div className="todaytemp">
              <span id="temperature"> </span>
              <span className="conversion">
                <a href="#" id="celcius-link" class="active">
                  {" "}
                  °C{" "}
                </a>{" "}
                |
                <a href="#" id="fahrenheit-link">
                  {" "}
                  °F{" "}
                </a>
              </span>
            </div>
          </div>
          <div className="col-6">
            <ul className="weathertoday">
              <li className="weathertype" id="description">
                Mist
              </li>
              <li>
                Humidity: <span id="humidity"></span>%
              </li>
              <li>
                Wind: <span id="wind"></span> km/h
              </li>
              <li className="date" id="currentDate">
                Monday 2nd October
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
