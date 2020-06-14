import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";
import AddComponentButton from "./AddComponentButton";
import ComponentCard from "./ComponentCard";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";
import axios from 'axios'

import "./DestinationTab.scss";

export default function Destination(props) {

  const addComponentBox = () => {
    axios({
      method: 'POST',
      url: '/api/components',
      data: {
        destination_id: props.destination.destination.id
      }
    })
    .then(() => {
      props.getData()
    })
  };

  // const newInput = newItem ? <ComponentCard getData={props.getData}/> : null;
  return (
    <>
      <WeatherCard destination={props.destination.destination} />
      <div>You are on the {props.destination.destination.name} page</div>
      <div class="page-components">
        {props.components.map((component) => {
          console.log("CARDS:", component);
          return (
            <ComponentCard
              component={component}
              getData={props.getData}
              destination_id={props.destination.destination.id}
            />
          );
        })}
        <button onClick={() => addComponentBox()}>
          <AddComponentButton />
        </button>
      </div>
    </>
  );
}
