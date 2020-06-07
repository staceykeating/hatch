import React from "react";
import "./App.css";
import Login from "./Login";
import Home from "./Home";
import Dashboard from "./Dashboard";
// import TripForm from "./TripForm";
// import Trip form "./Trip.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
      <Route
      path='/login'
      component={ Login }
      />
      <Route
      path='/create-trip'
      component={ Home }
      />
      <Route
      path='/dashboard'
      component={ Dashboard }
      />
      <Route
      path='/'
      component={ Home }
      />
        <Route path="/login" component={Login} />
        <Route path="/create-trip" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
