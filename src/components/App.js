import React from "react";
import "./App.css";
import Login from "./Login";
import Home from "./Home";
// import Dashboard from "./Dashboard";
// import TripForm from "./TripForm";
// import Trip form "./Trip.js";
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
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
      component={ Home }
      />
      <Route 
      exact 
      path='/'
      component={ Home }
      />
    </Router>
  );
}

export default App;


