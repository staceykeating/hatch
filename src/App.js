import React from "react";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
// import TripForm from "./TripForm";
import Trip from "./components/Trip.js";
import CreateTrip from "./components/CreateTrip";
import UserSearch from "./components/UserSearch";
import Collapsable from "./components/Collapsable";
import Testpage from "./components/Testpage"
// import Trip form "./Trip.js";
import ComponentCard from './components/ComponentCard';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/create-trip" component={CreateTrip} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/trip/:id" component={Trip} />
        <Route path="/user-search" component={Testpage} />
        <Route path="/collapsable" component={ComponentCard} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
