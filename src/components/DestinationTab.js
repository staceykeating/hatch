import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";
import AddComponentButton from "./AddComponentButton";
import ComponentCard from "./ComponentCard";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";

import "./DestinationTab.scss";

export default function Destination(props) {
  const [components, setComponents] = useState(props.components);
  const [newItem, setNewItem] = useState(false);

  const addComponentBox = () => {
    console.log("adding");
    setNewItem(true);
  };

  const newInput = newItem ? <ComponentCard /> : null;
  return (
    <>
      <WeatherCard destination={props.destination.destination} />
      <div>You are on the {props.destination.destination.name} page</div>
      <div class="page-components">
<<<<<<< HEAD
        {components.map(component => {
          return <ComponentCard component={component} setComponents={setComponents} destination_id={props.destination.destination.id}/>
=======
        {components.map((component) => {
          console.log("CARDS:", component);
          return (
            <ComponentCard
              component={component}
              setComponents={setComponents}
              destination_id={props.destination.destination.id}
            />
          );
>>>>>>> stacey-test
        })}

        {newInput}
        <button onClick={() => addComponentBox()}>
          <AddComponentButton />
        </button>
      </div>
    </>
  );
}
