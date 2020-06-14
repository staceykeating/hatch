import React, {useState} from "react";
// import Typography from "@material-ui/core/Typography";
import Moment from 'react-moment';

export default function TripDates(props) {
  const [startDate, setStartDate] = useState(props.startDate)
  const [endDate, setEndDate] = useState(props.endDate)

  const tripDate = startDate


  return (
    <div>
      <h2>

        {props.startDate} - {props.endDate}
        

      </h2>
    </div>
  );
}
