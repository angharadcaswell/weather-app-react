import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
import WeatherForecastPreview from "./WeatherForecastPreview";




export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState({ ready: false });

  function handleForecastResponse(response) {
    setForecastData(response.data);
    setLoaded(true);
  }

  function getForecast() {
    let apiKey = `13e00c3ef52a0621f285898d17202748`;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
  }

  if (loaded && props.lat === forecastData.lat) {
    return (
      <div className="WeatherForecast row">

        <WeatherForecastPreview data={forecastData.daily[1]} />
        <WeatherForecastPreview data={forecastData.daily[2]} />
        <WeatherForecastPreview data={forecastData.daily[3]} />
        <WeatherForecastPreview data={forecastData.daily[4]} />
        <WeatherForecastPreview data={forecastData.daily[5]} />
      </div>
    );
  } else {
    getForecast();
    return "Loading forecast...";
  }
}