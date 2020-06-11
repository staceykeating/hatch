import React, { useState } from "react";
import axios from "axios";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";

export default function PackingListItem(props) {
  console.log("props text", props.text);
  let value = 0;
  let labelId = 0;
  const [checked, setChecked] = useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  function keyPressed(event) {
    if (event.key === "Enter") {
      axios({
        method: "POST",
        url: "/api/packing_items",
        data: {
          description: "new item", ///what goes here
          trip_id: "1", ///how do we get this
        },
      }).then((res) => {
        console.log("resdata", res.data);
      });
    } //setstate to whatever is typed and also update state on enter
  }

  return (
    <ListItem key={value} role={undefined} dense button>
      <ListItemIcon class="list-item-icons">
        <Checkbox
          edge="start"
          checked={checked.indexOf(value) !== -1}
          tabIndex={-1}
          disableRipple
          inputProps={{ "aria-labelledby": labelId }}
          onClick={handleToggle(value)}
        />
      </ListItemIcon>

      <ListItemText id={props.id} onKeyPress={keyPressed}>
        <TextField type="text" value={props.text} onChange={(event) => {}} />
      </ListItemText>
    </ListItem>
  );
}
