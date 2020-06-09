import React from "react";
import Nav from "./Nav";
import "./TripLoading.scss";

export default function TripLoading() {
  return (
    <>
      <Nav />
      <div class="center-image">
        <h2> Please wait a moment while we create your trip.</h2>
        <img class="loading" src="./earth-light.svg" alt="loading" />
      </div>
    </>
  );
}
