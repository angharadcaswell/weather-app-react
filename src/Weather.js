import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import WeatherInfo from "./WeatherInfo";

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
      <WeatherInfo data={weatherData} />     
    </div>
  );
   } else {
      search();
   
    return "Loading...";
  }
}
