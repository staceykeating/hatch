import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./HatchMates.scss";
import HatchIcon2 from "./images/hatch-icon-2.png";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ListItemText from '@material-ui/core/ListItemText';
import UserSearch from './UserSearch';
import axios from 'axios';


export default function HatchMates(props) {
  const [mates, setMates] = useState([]);
  const [newMate, setNewMate] = useState("");
  const [collaborators, setCollaborators] = useState([]);

  const addCollaborator = () => {
    console.log("add")
    const newCollaborator = {
      id: Math.random().toString(),
      text: "text",
    };
    setMates([...mates, newCollaborator]);
  };

  const onSubmit = () => {
    axios({
      method: "POST",
      url: "/api/collaborators",
      data: {
        collaborators: collaborators,
      }
    })
    .then(res => {
      console.log(res.data);
    })
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Hatch-Mates
          <AddCircleIcon onClick={addCollaborator}/>
        </Typography>
        <container>
          {mates.map((collab) => {
            return <ListItemText>
              <UserSearch
              setCollaborators={setCollaborators}/>
            </ListItemText>;
          })}
        </container>
        <div>
          {props.collaborators.map((collaborator) => {
            return <ListItemText>
              <img class="user-icon" src={HatchIcon2} />
              {collaborator.name}</ListItemText>
          })}
        </div>
      </CardContent>
    </Card>
  );
}
