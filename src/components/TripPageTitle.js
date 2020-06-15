import React from "react";
import "./TripTitlePage.scss";
import Moment from 'react-moment';


export default function TripPageTitle(props) {
  const startDate = props.startDate
  const endDate = props.endDate
  const tripDate =  (startDate || endDate) ?
    ( <>
         Trip Date:
         {" "}
          <Moment format="MMM Do YYYY">
            {startDate}
          </Moment>
          {" "}
          to
          {" "}
          <Moment format="MMM Do YYYY">
            {endDate}
          </Moment>
      </>)
    : null

  return (
    <div id="trip-title-section">
      <h1 id="title">{props.title}</h1>
      <h1 id="date">
       {tripDate}
      </h1>
      <h3 id="description">{props.description}</h3>
    </div>
  );
}
