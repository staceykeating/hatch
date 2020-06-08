import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

function Textbox() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="black">
            Cancel
          </Button>
          <Button onClick={handleClose} color="black">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default Textbox;
