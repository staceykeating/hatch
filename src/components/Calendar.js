import React, { useState } from "react";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

function Calendar(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DatePicker
          disableToolbar
          variant="inline"
          label="Start Date"
          value={startDate}
          autoOk={true}
          onChange={(date) => {
            setStartDate(date);
            props.setStartDate(date);
          }}
        />
        <DatePicker
          disableToolbar
          variant="inline"
          label="End Date"
          value={endDate}
          autoOk={true}
          onChange={(date) => {
            setEndDate(date);
            props.setEndDate(date);
          }}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
}
export default Calendar;
