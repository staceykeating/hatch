import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './DashboardItem.scss'
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Button } from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import axios from 'axios'
import Cookies from 'js-cookie'

export default function DashboardItem(props) {
  const [validation, setValidation] = useState(false)

  function handleOpen() {
    setValidation(true);
  }

  function handleClose() {
    setValidation(false);
  }

  function handleDelete() {
    axios({
      method: 'DELETE',
      url: `api/trips/${props.trip.id}`,
      data: {
        user_id: JSON.parse(Cookies.get('user')).id
      }
    })
    .then(res => {
      setValidation(false)
      props.setTrips(res.data)
    })
  }
    
  return !props.add 
  ? (
    <div id="box-container">
      <div id="slider-box">
          <div class="icon-row">
            <h2>{props.trip.title}</h2>
          </div>
          <h3>{props.trip.description}</h3>
          <div id="destination-container">
            {props.destinations.map(destination => {
              return <span class="destination">{destination.destination.name}</span>
            })}
          </div>
          <div class="button-container">
            <Button variant="outlined" ><Link to={`/trip/${props.trip.id}`}>Edit</Link></Button>
            <Button variant="outlined" onClick={handleOpen}>Delete</Button>
          </div>
      </div>
      <Dialog
        open={validation}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this trip?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete} color="primary">
            Delete
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>)
  : (
    <div id="box-container">
      <div id="slider-box">
      <h2>Create another trip!</h2>
      <Link classname="link" to="/create-trip"><AddCircleIcon /></Link>
      </div>
    </div>
  )
}