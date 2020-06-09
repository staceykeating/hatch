import React from "react";
import Nav from "./Nav";
import "./TripLoading.scss";

export default function TripLoading() {
  return (
    <>
      <Nav />
      <div class="center-image">
        <img class="loading" src="./earth-light.svg" />
      </div>
    </>
  );
}
