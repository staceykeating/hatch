import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { Redirect } from 'react-router-dom'
import "./TripLoading.scss";

export default function TripLoading(props) {
  const [redirect, setRedirect] = useState(false)

  setTimeout(() => {
    setRedirect(true)
  }, 3000);

  return redirect ? (
    <Redirect to={`/trip/${props.currentTripID}`}/>
    ) : (
    <>
      <Nav />
      <div class="center-image">
        <h2> Please wait a moment while we create your trip.</h2>
        <img class="loading" src="./earth-light.svg" alt="loading" />
      </div>
    </>
  );
}
