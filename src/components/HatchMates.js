import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./HatchMates.scss";
import HatchIcon2 from "./images/hatch-icon-2.png";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ListItemText from '@material-ui/core/ListItemText';
import Button from "@material-ui/core/Button";
import UserSearch from './UserSearch';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';


export default function HatchMates(props) {
  const [mates, setMates] = useState([]);
  const [newMate, setNewMate] = useState("");
  const [collaborators, setCollaborators] = useState([]);
  const [search, setSearch] = useState(false);
  // const [tripId, setTrip] = useState('2');
  

  const addCollaborator = () => {
    console.log("add")
    setSearch(true);
  };
  
  const onSubmit = () => {
    setSearch(false)
    axios({
      method: "POST",
      url: "/api/collaborators",
      data: {
        // user_id: collaborators[0].user.id,
        collaborators: collaborators,
        trip_id: props.tripID
      }
    })
    .then((res) => {
      setMates(res.data);
    })
  }

  const onDelete = (id) => {
    axios({
      method: "DELETE",
      url: `/api/collaborators/${id}`,
      data: {
        trip_id: props.tripID
      }
    })
    .then((res) => {
      setMates(res.data);
    })
  }


  const searchBar = search ?
  (<div>
    <UserSearch setCollaborators={setCollaborators}/>
    <Button variant="outlined" onClick={() => onSubmit()}>
      Save Collaborator
    </Button>
    <Button variant="outlined" onClick={() => setSearch(false)}>
      Cancel
    </Button>
  </div>) :
  (<AddCircleIcon onClick={addCollaborator}/>)

  console.log(mates)

  const users = mates.length > 0
    ? (mates.map(collaborator => {
        return <ListItemText>
          <img class="user-icon" src={HatchIcon2} />
          {collaborator.name}
          <DeleteIcon onClick={() => onDelete(collaborator.id)}/>
          </ListItemText>
      })) 
    : (props.collaborators.map((collaborator) => {
        console.log('PROPS');
        return <ListItemText>
          <img class="user-icon" src={HatchIcon2} />
          {collaborator.name}
          <DeleteIcon onClick={() => onDelete(collaborator.id)}/>
          </ListItemText>
      })
    )

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Hatch-Mates
          </Typography>
          {searchBar}
        <div>
          { users }
        </div>
      </CardContent>
    </Card>
  );
}
