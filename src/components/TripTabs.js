import React, { useState } from "react";
import TripTabsItem from "./TripTabsItem";
import "./TripTabs.scss";

export default function TripTabs(props) {
  const [selected, setSelected] = useState("MAIN");

  const tabs = props.destinations.map((destination) => {
    return (
      <TripTabsItem
        key={destination.destination.destination.id}
        id={destination.destination.destination.id}
        name={destination.destination.destination.name}
        transition={props.transition}
        selected={selected}
        setSelected={setSelected}
      />
    );
  });

  return (
    <div id="tabs-container">
      <TripTabsItem
        key="MAIN"
        id="MAIN"
        name={props.title}
        transition={props.transition}
        selected={selected}
        setSelected={setSelected}
      />
      {tabs}
    </div>
  );
}
