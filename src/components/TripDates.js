import React, {useState} from "react";
import MomentUtils from "@date-io/moment";
import Typography from "@material-ui/core/Typography";


export default function TripDates(props) {


  return (
    <div>
      <h2>
      {props.startDate} - {props.endDate}
      </h2>
    </div>
  );
}
