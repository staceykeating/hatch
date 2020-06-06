import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import WeatherCard from "./WeatherCard";
import Login from "./Login.js";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component ={Home}/>
      </BrowserRouter>

      <Login></Login>

      <WeatherCard />
    </div>
  );
}

export default App;
