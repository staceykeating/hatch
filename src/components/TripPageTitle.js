import React from "react";

export default function TripPageTitle(props) {
  return (
    <div class="trip-title-section">
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
    </div>
  );
}
