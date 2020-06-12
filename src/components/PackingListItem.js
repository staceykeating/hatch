import React, { useState } from "react";
import axios from "axios";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";

export default function PackingListItem(props) {
  const [checked, setChecked] = useState(props.checked);
  const [text, setText] = useState(props.text ? props.text : '');

  function toggleCheck() {
    if (checked) {
      setChecked(false);
      updateCheck(false);
    } else {
      setChecked(true);
      updateCheck(true);
    }

  }

  function updateCheck(status) {
    axios({
      method: "PATCH",
      url: `/api/packing_items/${props.id}`,
      data: {
        description: text,
        trip_id: props.trip_id,
        checked: status
      }
    })
  }

  function deleteItem() {
    props.setNewItem(false)
    axios({
      method: "DELETE",
      url: `/api/packing_items/${props.id}`,
      data: {
        description: text,
        trip_id: props.trip_id
      },
    }).then((res) => {
      props.setPackingList(res.data)
    });
  }

  function updateItem() {
    props.setNewItem(false)
    axios({
      method: "PATCH",
      url: `/api/packing_items/${props.id}`,
      data: {
        description: text,
        trip_id: props.trip_id,
        checked: checked
      },
    })
    .then((res) => {
      props.setPackingList(res.data)
    });
  }

  function createItem() {
    props.setNewItem(false)
      axios({
        method: "POST",
        url: "/api/packing_items",
        data: {
          description: text,
          trip_id: props.trip_id,
          checked: checked
        },
      })
      .then((res) => {
        props.setPackingList(res.data)
      });
  }

  function onBlur() {
    if (!props.text && !text) {
      props.setNewItem(false)
    } else if (!props.text) {
      createItem()
    } else if (!text){
      deleteItem()
    } else {
      updateItem()
    }
  }

  function keyPressed(event) {
    if (event.key === "Enter") {
      event.target.blur();
    }
  }

  return (
    <ListItem key={props.id} role={undefined} dense button>
      <ListItemIcon class="list-item-icons">
        <Checkbox
          edge="start"
          checked={checked}
          tabIndex={props.id}
          disableRipple
          inputProps={{ "aria-labelledby": props.id }}
          onClick={() => toggleCheck()}
        />
      </ListItemIcon>

      <ListItemText id={props.id} onKeyPress={keyPressed} onBlur={() => onBlur()}>
        <TextField
          type="text"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
      </ListItemText>
    </ListItem>
  );
}
