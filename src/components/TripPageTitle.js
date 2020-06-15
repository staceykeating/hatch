import React from "react";
import "./TripTitlePage.scss";
import Moment from "react-moment";
import NavigationIcon from "@material-ui/icons/Navigation";

export default function TripPageTitle(props) {
  const startDate = props.startDate;
  const endDate = props.endDate;
  const tripDate =
    startDate || endDate ? (
      <>
        <Moment format="MMM Do YYYY">{startDate}</Moment> <NavigationIcon />{" "}
        <Moment format="MMM Do YYYY">{endDate}</Moment>
      </>
    ) : null;

  return (
    <div id="trip-title-section">
      <h1 id="date">{tripDate}</h1>
      <h3 id="description">{props.description}</h3>
    </div>
  );
}
