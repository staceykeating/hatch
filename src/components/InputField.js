import React from "react";
import TextField from '@material-ui/core/TextField';



export default function InputField() {
  return (
    <form noValidate autoComplete="off">
      <TextField
      id="standard-basic"
      label="Title"
      autoFocus
      />
      <br />
      <TextField
      id="standard-basic"
      label="Description"
      autoFocus
      multiline
      rowsMax={5}
      />
    </form>
  );
}
