import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

function handleResponse(response){
  setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });

}
function search() {
    const apiKey = `13e00c3ef52a0621f285898d17202748`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }


    if (weatherData.ready) {
  return (
    <div className="Weather">
      <div className="currentlocation">
        <div className="row align-items-center">
          <div className="col-6">
            <h1 className="country" id="city-name">
              {weatherData.city}
            </h1>
          </div>
          <div className="col-6">
            <div className="weathertoday">
              <img src={weatherData.icon} alt={weatherData.description} id="icon" />
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
                  {Math.round(weatherData.temperature)}°C{" "}
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
                {weatherData.description}
              </li>
              <li>
                Humidity:{Math.round(weatherData.humidity)}%
              </li>
              <li>
                Wind: {Math.round(weatherData.wind)}km/h
              </li>
              <li className="date" id="currentDate">
               <FormattedDate date ={weatherData.date}/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
   } else {
      search();
   
    return "Loading...";
  }
}
