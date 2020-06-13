import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";
import AddComponentButton from "./AddComponentButton";
import ComponentCard from "./ComponentCard";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";

import "./DestinationTab.scss";

export default function Destination(props) {
  const [components, setComponents] = useState(props.components)
  const [newItem, setNewItem] = useState(false);

  useEffect(() => {
    console.log("DEST", props.destination)
     console.log("COMP", props.components)
  },[props])

  const addComponentBox = () => {
    console.log("adding");
    setNewItem(true);
  };

  const newInput = newItem ? <ComponentCard /> : null;
  return (
    <>
      <WeatherCard destination={props.destination.destination} />
      <div>You are on the {props.destination.name} page</div>
      <div class="page-components">
        {components.map(component => 
          <ComponentCard component={component} setComponents={setComponents} />
        )}

        {newInput}
        <button onClick={() => addComponentBox()}>
          <AddComponentButton />
        </button>
      </div>
    </>
  );
}
