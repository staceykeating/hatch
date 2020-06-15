import React from "react";
import Nav from "./Nav";
import "./TripLoading.scss";
import spinner from './images/earth-light.svg'

export default function TripLoading() {



  return(
    <>
      <div className="center-image">
        <h2> Please wait a moment while we load your trip.</h2>
        <img className="loading" src={spinner} alt="loading" />
      </div>
    </>
  );
}
