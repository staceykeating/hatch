import React, { useState, useEffect } from "react";
import useAppData from "../hooks/useAppData.js";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ComponentItem from "./ComponentItem";
import EditButton from "./EditButton";
import axios from "axios";
import TextField from "@material-ui/core/TextField";

export default function ComponentCard(props) {
  const [text, setText] = useState(
    props.component ? props.component.component.component.title : ""
  );

  function onBlur() {
    axios({
      method: "PATCH",
      url: `/api/components/${props.component.component.component.id}`,
      data: {
        title: text,
        destination_id: 1,
      },
    }).then((res) => {
      props.getData();
      console.log("UPDATE TITLE", res.data);
    });
  }

  function keyPressed(event) {
    if (event.key === "Enter") {
      event.target.blur();
    }
  }

  return (
    <div id="component-box">
      <Card>
        <CardContent>
          <Typography
            id={props.id}
            onKeyPress={keyPressed}
            onBlur={() => onBlur()}
          >
            <TextField
              type="text"
              label={
                props.component.component.component.title ? null : "*Add Title"
              }
              value={text}
              onChange={(event) => {
                setText(event.target.value);
              }}
            />

            <EditButton
              component_id={props.component.component.component.id}
              destination_id={props.destination_id}
              getData={props.getData}
            />
          </Typography>
          {props.component.component_items.map((component_item) => {
            return (
              <ComponentItem
                key={props.component.component.component.id}
                component_item={component_item.component_item}
                component_id={props.component.component.component.id}
                getData={props.getData}
              />
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}
