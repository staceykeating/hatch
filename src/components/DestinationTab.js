import React, { useState, useEffect } from "react";
import useAppData from "../hooks/useAppData.js";
import WeatherCard from "./WeatherCard";
import AddComponentButton from "./AddComponentButton";
import ComponentCard from "./ComponentCard";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";
import "./DestinationTab.scss";

export default function Destination(props) {
  const [components, setComponents] = useState(props.components);
  const [newItem, setNewItem] = useState(false);
  const { state, setState } = useAppData();
  const addComponentBox = () => {
    console.log("adding");
    setNewItem(true);
  };

  const newInput = newItem ? (
    <ComponentCard
      destination_id={props.destination.destination.id}
      getData={props.getData}
    />
  ) : null;
  return (
    <>
      <WeatherCard destination={props.destination.destination} />
      <div>You are on the {props.destination.destination.name} page</div>
      <div class="page-components">
        {components.map((component) => {
          console.log("CARDS:", component);
          return (
            <ComponentCard
              component={component}
              setComponents={setComponents}
              getData={props.getData}
              destination_id={props.destination.destination.id}
            />
          );
        })}

        {newInput}
        <button onClick={() => addComponentBox()}>
          <AddComponentButton />
        </button>
      </div>
    </>
  );
}
