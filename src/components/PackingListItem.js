import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function keyPressed(event) {
  if (event.key === "Enter") {
    event.target.blur();
  } //setstate to whatever is typed and also update state on enter
}

export default function PackingListItem() {
  const classes = useStyles();
  const [checked, setChecked] = useState([0]);
  const [text, setText] = useState("hello");

  // const newText = {
  //   ...text,
  //   text: {
  //     ...text.text,
  //     [newText.id]: newText,
  //   },
  // };

  // updateColumnState(newState);

  const handleToggle = (value) => () => {
    //checkboxes func
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
    <List className={classes.root}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            role={undefined}
            dense
            button
            onClick={handleToggle(value)}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": labelId }}
              />
            </ListItemIcon>

            <ListItemText onClick={setText} onKeyPress={keyPressed}>
              <TextField
                id="standard-basic"
                type="text"
                value={text}
                onClick={setText}
              />
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments"></IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}
