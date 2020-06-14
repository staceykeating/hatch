import React from "react";
import "./TripTitlePage.scss";
import Moment from 'react-moment';


export default function TripPageTitle(props) {
  const startDate = props.startDate
  const endDate = props.endDate
  return (
    <div id="trip-title-section">
      <h1>{props.title}</h1>
      <h1>
      <Moment format="MMM Do YYYY">
        {startDate}
       </Moment>
        {" "}
       to
        {" "}
       <Moment format="MMM Do YYYY">
        {endDate}
       </Moment>
      </h1>
      <h3>{props.description}</h3>
    </div>
  );
}
