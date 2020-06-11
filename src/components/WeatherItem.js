import React from "react";
import "./WeatherCard.scss";
import "./owfont-regular.css";
import "./bootstrap.min.css";
import "./font-awesome.min.css";
import "./style.css";

export default function WeatherItem(props) {
  const tempShort = Math.floor(parseInt(props.temp)).toString();
  const imgURL = `owf owf-${props.icon} owf-5x`;

  return (
    <>
      <article className="weather-card">
        <i className={imgURL}></i>
        <img
          src={`http://openweathermap.org/img/w/${props.icon}.png`}
          alt="weather icon"
        />
        <div className="temperature">{tempShort}°C</div>
        <div className="weather-name">{props.weatherName}</div>
      </article>
    </>
  );
}
