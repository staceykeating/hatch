import React, { useState } from "react";
import WeatherCard from "./WeatherCard";
import AddComponentButton from "./AddComponentButton";
import ComponentCard from "./ComponentCard";
import "./DestinationTab.scss";

export default function Destination(props) {
  const [newItem, setNewItem] = useState(false);

  const addComponentBox = () => {
    setNewItem(true);
  };

  const newInput = newItem ? <ComponentCard /> : null;
  return (
    <>
      <WeatherCard destination={props.destination} />
      <div>You are on the {props.destination.name} page</div>
      <div class="page-components">
        <ComponentCard />
        {newInput}
        <AddComponentButton onClick={addComponentBox} />
      </div>
    </>
  );
}
