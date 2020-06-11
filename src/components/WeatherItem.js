import React from "react";

export default function WeatherItem(props) {
  const tempShort = Math.floor(parseInt(props.temp)).toString();
  const imgURL = `owf owf-${props.icon} owf-4x`;
  console.log(props);
  return (
    <>
      <article className="weather-card">
        <i className={imgURL}></i>
        <div className="temperature">{tempShort}°C</div>
        <div className="weather-name">{props.weatherName}</div>
      </article>
    </>
  );
}
