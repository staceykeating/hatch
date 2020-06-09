import React from "react";
import Nav from "./Nav";
import Calendar from "./Calendar";
import GoogleMaps from "./placesSearch";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function CreateTrip() {
  return (
    <>
      <Nav />
      <Calendar />
      <GoogleMaps />
    
    </>
  );
}

export default React.memo(CreateTrip);
