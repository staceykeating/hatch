import React, { useState } from "react";
import WeatherCard from "./WeatherCard";
import AddComponentButton from "./AddComponentButton";
import ComponentCard from "./ComponentCard";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";

import "./DestinationTab.scss";

export default function Destination(props) {
  const [newItem, setNewItem] = useState(false);
  console.log("new item", newItem);
  const addComponentBox = () => {
    console.log("adding");
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
        <button onClick={() => addComponentBox()}>
          <AddComponentButton />
        </button>
      </div>
    </>
  );
}
