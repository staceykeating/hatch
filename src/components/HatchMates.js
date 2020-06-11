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
    // const newCollaborator = {
    //   colloborator: collaborators
    //};
    // setMates([...mates, newCollaborator]);
  };


  const onSubmit = () => {
    setSearch(false)
    axios({
      method: "POST",
      url: "/api/collaborators",
      data: {
        // user_id: collaborators[0].user.id,
        collaborators: collaborators,
        trip_id: props.tripId
      }
    })
    .then((res) => {
      console.log("stateoftheunion", res.data)
      // setMates([res])
      // console.log(collaborators)
      //  props.setCollaborators([...props.state, collaborators])
      // props.setCollaborators((addUser) => [addUser, ...collaborators])
      // props.setCollaborators(())
    })
  }



  const onDelete = () => {
    // axios.delete("/api/collaborators")
    // .then((res) => {
    // console.log("data", res)
    // })
    // setMates([...mates, newMate])
    // props.setCollaborators((updateUsers) => [...updateUsers])
 }
const searchBar = search ?
(<UserSearch setCollaborators={setCollaborators}/>) :
(<AddCircleIcon onClick={addCollaborator}/>
  )
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Hatch-Mates
          </Typography>
          {searchBar}
        <div>
          {props.collaborators.map((collaborator) => {
            return <ListItemText>
              <img class="user-icon" src={HatchIcon2} />
              {collaborator.name}
              <DeleteIcon onClick={onDelete}/>
              </ListItemText>
          })}
        </div>
        <Button variant="outlined" onClick={() => onSubmit()}>
          Save Collaborator
        </Button>
      </CardContent>
    </Card>
  );
}
