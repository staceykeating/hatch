import React, {useState} from "react";
import Moment from 'react-moment';

export default function TripDates(props) {


  return (
    <div>
      <h2>
      <Moment format="D MMM YYYY">
      </Moment>
      </h2>
    </div>
  );
}
