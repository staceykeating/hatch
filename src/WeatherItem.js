import React from "react";

export default class WeatherItem extends React.Component {
  state = {
    tempShort: Math.floor(parseInt(this.props.temp)).toString(),
  };

  render() {
    return (
      <article className="weather-card">
        <div className="row spaced"></div>
        <div className="row">
          <div className="temperature">{this.state.tempShort}°C</div>
          <div className="weather-name">{this.props.weatherName}</div>
          <div className="icon">
            <img
              src={`http://openweathermap.org/img/w/${this.props.icon}.png`}
              alt="weather icon"
            />
          </div>
        </div>
      </article>
    );
  }
}
