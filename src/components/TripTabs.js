import React, { useState } from "react";
import TripTabsItem from "./TripTabsItem";
import "./TripTabs.scss";

export default function TripTabs(props) {
  const [selected, setSelected] = useState("MAIN");

  const tabs = props.destinations.map((destination) => {
    return (
      <TripTabsItem
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
        name="MAIN"
        transition={props.transition}
        selected={selected}
        setSelected={setSelected}
      />
      {tabs}
    </div>
  );
}
