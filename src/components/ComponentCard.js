import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ComponentItem from "./ComponentItem";
import EditButton from "./EditButton";
import axios from "axios";
import TextField from "@material-ui/core/TextField";

export default function ComponentCard(props) {
  const [text, setText] = useState(props.component ? props.component.component.component.title : "");
  const [newItem, setNewItem] = useState(true);
  const [componentItems, setComponentItems] = useState(props.component.component_items)

  useEffect(() => {
    console.log("CARD",props.component)
  },[props])
  
  function updateTitle() {
    setNewItem(false);
    axios({
      method: "PATCH",
      url: `/api/components/${props.component.component.component.id}`,
      data: {
        title: text,
        destination_id: 1,
      },
    }).then((res) => {
      console.log("UPDATE TITLE", res.data);
    });
  }

  function createTitle() {
    setNewItem(false);
    axios({
      method: "POST",
      url: "/api/components",
      data: {
        title: text,
        destination_id: 1,
      },
    }).then((res) => {
      console.log("NEWTITLE", res.data);
    });
  }

  function onBlur() {
    if (!props.text && !text) {
      setNewItem(false);
    } else if (!props.text) {
      createTitle();
    } else {
      updateTitle();
    }
  }

  function keyPressed(event) {
    if (event.key === "Enter") {
      event.target.blur();
    }
  }

  const title = text ? (
    <Typography id={props.id} onKeyPress={keyPressed} onBlur={() => onBlur()}>
      <TextField
        type="text"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
    </Typography>
  ) : (
    <Typography id={props.id} onKeyPress={keyPressed} onBlur={() => onBlur()}>
      <TextField
        type="text"
        label="*Add Title"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
    </Typography>
  );
      
  return (
    <div id="component-box">
      <Card>
        <CardContent>
          {title}
          <EditButton 
            component_id={props.component.component.component.id}
            destination_id={props.destination_id}
            setComponents={props.setComponents}
          />
          {componentItems.map(component_item => {
            return <ComponentItem 
              component_item={component_item.component_item} 
              component_id={props.component.component.component.id}
              setComponentItems={setComponentItems}/>
          })
          }
        </CardContent>
      </Card>
    </div>
  );
}
