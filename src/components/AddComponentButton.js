import React from "react";
import Card from "@material-ui/core/Card";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";
import "./ComponentBox.scss";

export default function AddComponentButton() {
  return (
    <div id="component-add-box">
      <Card>
        <AddCircleOutlinedIcon />
      </Card>
    </div>
  );
}
