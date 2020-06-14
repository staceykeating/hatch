import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

export default function InputField(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <TextField
        id="standard-basic"
        label="*Title"
        multiline
        rowsMax={2}
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
          props.setTitle(event.target.value);
        }}
      />
      <br />
      <TextField
        id="standard-basic"
        label="*Description"
        multiline
        rowsMax={5}
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
          props.setDescription(event.target.value);
        }}
      />
    </div>
  );
}
