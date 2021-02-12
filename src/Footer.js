import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        <a
          href="https://github.com/angharadcaswell/weather-app-react"
          target="_blank"
        >
          Open-source code{" "}
        </a>
        by Angharad Caswell
      </p>
    </div>
  );
}