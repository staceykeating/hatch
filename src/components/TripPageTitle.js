import React from "react";
import "./TripTitlePage.scss";

export default function TripPageTitle(props) {
  return (
    <div id="trip-title-section">
      <h1>{props.title}</h1>
      <h1>
        {props.startDate} to {props.endDate}
      </h1>
      <h3>{props.description}</h3>
    </div>
  );
}
