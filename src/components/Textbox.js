import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PlaceSearch from "./PlaceSearch";
import axios from 'axios';

function Textbox(props) {
  const [open, setOpen] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const onSave = () => {
    axios({
      method: "POST",
      url: `/api/component_items`,
      data: {
        title: title,
        description: description,
        component_id: props.component_id
      }
    })
    .then(res => {
      props.getData()
      handleClose()
    })
  };

  const input = props.mode === "TEXT" 
  ? (
    <>
      <TextField
        id="name"
        autoFocus
        margin="dense"
        label="Title"
        type="text"
        fullWidth
        value={title}
        onChange= {(event) => setTitle(event.target.value)}
      />
      <TextField
        id="description"
        autoFocus
        margin="dense"
        multiline
        rowsMax={10}
        label="Description"
        type="text"
        fullWidth
        value={description}
        onChange= {(event) => setDescription(event.target.value)}
      />
    </>
  )
  : (<PlaceSearch />)

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Idea Bank</DialogTitle>
        <DialogContent>
          {input}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={onSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default Textbox;
