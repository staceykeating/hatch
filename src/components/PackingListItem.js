import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";

function keyPressed(event) {
  if (event.key === "Enter") {
    event.target.blur();
  } //setstate to whatever is typed and also update state on enter
}

export default function PackingListItem(props) {
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
