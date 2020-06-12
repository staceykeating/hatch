import React, { useState, useEffect } from "react";
import TripTabs from "./TripTabs";
import Nav from "./Nav";
import DestinationTab from "./DestinationTab";
import useVisualMode from "../hooks/useVisualMode.js";
import Cookies from "js-cookie";
import Trip from "./Trip";

export default function Testpage() {
  const [modes] = useState({ MAIN: "MAIN" });

  const { mode, transition } = useVisualMode();

  console.log("Current Mode:", mode);

  const propsDestinations = [
    {
      destination: {
        id: 1,
        name: "Paris",
        lat: 48.8566,
        lng: -2.3522,
      },
    },
    {
      destination: {
        id: 2,
        name: "Vancouver",
        lat: 49.2827,
        lng: -123.1207,
      },
    },
    {
      destination: {
        id: 2,
        name: "New York",
        lat: 40.7128,
        lng: -74.006,
      },
    },
  ];

  useEffect(() => {
    const user = Cookies.get("user");
    console.log("USER", user);
  });

  propsDestinations.forEach((destination) => {
    modes[destination.destination.name] = destination.destination;
  });

  return (
    <>
      <TripTabs destinations={propsDestinations} transition={transition} />
      {mode === "MAIN" && <></>}
      {mode !== "MAIN" && <DestinationTab destination={modes[mode]} />}
    </>
  );
}
