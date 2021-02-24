import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo (props){
    return (
    
    <div className="currentlocation">
        <div className="row align-items-center">
          <div className="col-6">
            <h1 className="country" id="city-name">
              {props.data.city}
            </h1>
          </div>
          <div className="col-6">
            <div className="weathertoday">
              <img src={props.data.icon} alt={props.data.description} id="icon" />
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-6 text-center">
            <div className="todaytemp">
              <span id="temperature"> </span>
              <span className="conversion">
                <a href="#" id="celcius-link" className="active">
                  {" "}
                  {Math.round(props.data.temperature)}°C{" "}
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
              <li>
                {props.data.description}
              </li>
              <li>
                Humidity:{Math.round(props.data.humidity)}%
              </li>
              <li>
                Wind: {Math.round(props.data.wind)}km/h
              </li>
              <li className="date" id="currentDate">
               <FormattedDate date ={props.data.date} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      );
    
}