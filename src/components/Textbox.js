import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';

function Textbox() {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [savedData, setSavedData] = useState("")

  ///component id later when created


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSave = () => {
    handleClose()
    console.log("title", title)
    console.log("descripto", description)
    axios({
      method: "POST",
      url: `/api/component_items`,
      data: {
        title: title,
        description: description,
      }
    })
    .then(res => {
      setSavedData(res.data);
    })
    .then(() =>{
      setIsSaved(true)
    })
  };

  return (
    <div>
      <Button variant="outlined" color="Black" onClick={handleClickOpen}>
        Add An Idea
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Idea Bank</DialogTitle>
        <DialogContent>
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
