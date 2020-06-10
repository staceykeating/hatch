import React from "react";
import Nav from "./Nav";
import PackingList from "./PackingList";
import HatchMates from "./HatchMates";
import TripLoading from "./TripLoading";
import CreateTrip from "./CreateTrip";
import Button from "@material-ui/core/Button";

export default function Trip() {
  return (
    <>
      <Nav />
      <div class="trip-page">
        <PackingList />
        <HatchMates />
      </div>
    </>
  );
}
