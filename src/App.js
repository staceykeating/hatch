import React from "react";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Trip from "./components/Trip.js";
import CreateTrip from "./components/CreateTrip";
<<<<<<< HEAD
=======
import Testpage from "./components/Testpage";
>>>>>>> 11bfda8cc8df1b49d266b31d1291afce8efe134e
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/create-trip" component={CreateTrip} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/trip/:id" component={Trip} />
<<<<<<< HEAD
=======
        <Route path="/add-button" component={Testpage} />
>>>>>>> 11bfda8cc8df1b49d266b31d1291afce8efe134e
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
