import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastPreview.css";


export default function WeatherForecastPreview(props) {
  function formatDay() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let dayIndex = new Date(props.data.dt * 1000).getDay();
    let day = days[dayIndex];
    return day;
  }

  return (




<div className="weather-forecast-temperature" id="forecast">
  <div className="row forecastRow align-items-center">
                    <div className="col-4">
                     {formatDay()}
                    </div>
                    <div className="col-4">
                        <strong>{Math.round(props.data.temp.min)}</strong>° / {Math.round(props.data.temp.max)}°{" "}
                    </div>
                    <div className="col-4">
                        <WeatherIcon code={props.data.weather[0].icon} />
                    </div>
                </div>
                 </div> 
                 
  );
}