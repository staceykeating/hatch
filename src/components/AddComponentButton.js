import React from "react";
import Card from "@material-ui/core/Card";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";
import "./ComponentBox.scss";

export default function AddComponentButton() {
  const onClick = "";

  return (
    <div id="component-box">
      <Card onClick={onClick}>
        <AddCircleOutlinedIcon />
      </Card>
    </div>
  );
}
