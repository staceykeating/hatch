import React from "react";
export default function TripDates(props) {
  console.log("props", props);
  return (
    <div>
      <h2>
        {" "}
        {props.startDate} - {props.endDate}{" "}
      </h2>
    </div>
  );
}
