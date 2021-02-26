import React from "react";

import Weather from "./Weather";


import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app fullForecast">
        <Weather defaultCity="Berlin"/>     
        <Footer />
      </div>
    </div>
  );
}
