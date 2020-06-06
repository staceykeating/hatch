import React from "react";
import logo from "./logo.svg";
import "./App.css";
import WeatherCard from "./WeatherCard";
import Login from './Login.js';


function App() {


  return (
    <div className="App">
      <Login>

      </Login>

      <WeatherCard />
   </div>
  );
}

export default App;
