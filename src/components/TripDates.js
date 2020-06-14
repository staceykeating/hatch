import React, {useState} from "react";
// import Typography from "@material-ui/core/Typography";
import Moment from 'react-moment';

export default function TripDates(props) {
  const [startDate, setStartDate] = useState(props.startDate)
  const [endDate, setEndDate] = useState(props.endDate)

  // const tripDate = Moment(startDate, "MM/DD/YYYY");


  return (
    <div>
      <h2>

      <Moment format="D MMM YYYY"> 
        </Moment>

      </h2>
    </div>
  );
}
