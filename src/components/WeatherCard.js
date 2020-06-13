import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherItem from "./WeatherItem";
import Card from "@material-ui/core/Card";
import "./WeatherCard.scss";
import "./owfont-regular.css";

export default function WeatherCard(props) {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${props.destination.lat}&lon=${props.destination.lng}&units=metric&exclude=current,minutely,hourly&appid=04544604356aadd9bdc56f0753d64718`
      )

      .then((res) => {
        const data = res.data;
        setForecast(data.daily);
      })
      .catch((err) => console.log("Error:", err));
  }, [props]);

  return (
    <div>
      <div id="weather-box">
        <Card>
          <h3> This week in {props.destination.name}: </h3>
          {forecast.slice(0, 5).map((item, index) => (
            <WeatherItem
              key={index}
              temp={item.temp.day}
              weatherName={item.weather[0].main}
              icon={item.weather[0].id}
            />
          ))}
        </Card>
      </div>
    </div>
  );
}
