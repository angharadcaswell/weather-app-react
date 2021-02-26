import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";


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
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
    });

}

 function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
function search() {
    const apiKey = `13e00c3ef52a0621f285898d17202748`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }


    if (weatherData.ready) {
  return (
    <div className="Weather">
      
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
              5 Day Forecast
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
             <WeatherInfo data={weatherData} /> 
             <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search 🔎"
                className="btn btn-info w-100"
              />
            </div>
          </div>
        </form>
          </div>
          <div
            className="tab-pane fade"
            id="nav-hours"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <WeatherForecast lat={weatherData.lat} lon={weatherData.lon}/>
            
          </div>
          </div>
    </div>
  );
   } else {
      search();
    return "Loading...";
  }
}
