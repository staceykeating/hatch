import React from "react";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
// import TripForm from "./TripForm";
import Trip from "./components/Trip.js";
import CreateTrip from "./components/CreateTrip";
// import Trip form "./Trip.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/create-trip" component={CreateTrip} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/trip" component={Trip} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
