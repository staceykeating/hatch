import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherItem from "./WeatherItem";

export default function WeatherCard(props) {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&units=metric&exclude=current,minutely,hourly&appid=04544604356aadd9bdc56f0753d64718
        `
      )
      .then((res) => {
        const data = res.data;
        setForecast(data.daily);
      })
      .catch((err) => console.log("Error:", err));
  }, []);

  return (
    <div>
      <h1> Weather</h1>
      <div class="weather-box">
        {forecast.slice(0, 5).map((item, index) => (
          <WeatherItem
            key={index}
            temp={item.temp.day}
            weatherName={item.weather[0].main}
            icon={item.weather[0].icon}
          />
        ))}
      </div>
    </div>
  );
}
