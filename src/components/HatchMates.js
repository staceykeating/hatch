import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import HatchIcon2 from "./images/hatch-icon-2.png";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import UserSearch from "./UserSearch";
import DeleteIcon from "@material-ui/icons/Delete";

import "./HatchMates.scss";

export default function HatchMates(props) {
  const [mates, setMates] = useState([]);
  const [newMate, setNewMate] = useState("");
  const [collaborators, setCollaborators] = useState([]);
  const [search, setSearch] = useState(false);
  // const [tripId, setTrip] = useState('2');

  const addCollaborator = () => {
    console.log("add");
    setSearch(true);
  };

  const onSubmit = () => {
    setSearch(false);
    console.log("PREPOST", collaborators);
    axios({
      method: "POST",
      url: "/api/collaborators",
      data: {
        // user_id: collaborators[0].user.id,
        collaborators: collaborators,
        trip_id: props.tripID,
      },
    })
      .then((res) => {
        console.log("POST", res.data);
        setMates(res.data);
      })
      .catch(() => {
        console.log("ERROR from post");
      });
  };

  const onDelete = (id) => {
    axios({
      method: "DELETE",
      url: `/api/collaborators/${id}`,
      data: {
        trip_id: props.tripID,
      },
    }).then((res) => {
      console.log("DELETE", res.data);
      setMates(res.data);
    });
  };

  const searchBar = search ? (
    <div id="hatch-search">
      <UserSearch setCollaborators={setCollaborators} />
      <AddCircleIcon onClick={() => onSubmit()} />
      <DeleteIcon onClick={() => setSearch(false)} />
    </div>
  ) : (
    <div id="hatch-row">
      <h2>Hatch Mates</h2>
      <AddCircleIcon onClick={addCollaborator} />
    </div>
  );

  const users =
    mates.length > 0
      ? mates.map((collaborator) => {
          console.log("MATES:", collaborator);
          return (
            <ListItemText>
              <DeleteIcon onClick={() => onDelete(collaborator.id)} />
              <img class="user-icon" src={HatchIcon2} />
              {collaborator.name}
            </ListItemText>
          );
        })
      : props.collaborators.map((collaborator) => {
          console.log("PROPS:", collaborator);
          return (
            <ListItemText>
              <DeleteIcon onClick={() => onDelete(collaborator.id)} />
              <img class="user-icon" src={HatchIcon2} />
              {collaborator.name}
            </ListItemText>
          );
        });

  return (
    <div id="hatch-mates">
      <Card>
        {searchBar}

        <div class="hatch-people">{users}</div>
      </Card>
    </div>
  );
}
