import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import axios from "axios";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-form" className="search mb-3">
        <div className="row text-center">
          <div className="offset-2 col-4">
            <input
              type="text"
              placeholder="Search a city"
              className="form-control"
              autoFocus="on"
              autoComplete="off"
              id="city-input"
            />
          </div>
          <div className="col-1">
            <input type="submit" value="🔎" className="btn btn-info searchbutton" />
          </div>
          <div className="col-1">
            <button
              className="btn btn-info"
              type="button"
              id="current-location"
            >
              ⌖
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
