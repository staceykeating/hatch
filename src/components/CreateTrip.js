import React from "react";
import Nav from "./Nav";
import Calendar from "./Calendar";
import Search from "./Search";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function CreateTrip() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAlNz_VzfRUMEfZgsQK0noHXmRQ3YV6OqY"
      libraries={["places"]}
    >
      <div>
        <Nav />
        <Calendar />
        <Search />
      </div>
    </LoadScript>
  );
}
