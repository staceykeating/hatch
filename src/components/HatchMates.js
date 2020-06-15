import React, { useState } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import HatchIcon2 from "./images/hatch-icon-2.png";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ListItemText from "@material-ui/core/ListItemText";
import UserSearch from "./UserSearch";
import DeleteIcon from "@material-ui/icons/Delete";

import "./HatchMates.scss";

export default function HatchMates(props) {
  const [collaborators, setCollaborators] = useState([]);
  const [search, setSearch] = useState(false);

  const addCollaborator = () => {
    setSearch(true);
  };

  const onSubmit = () => {
    setSearch(false);
    axios({
      method: "POST",
      url: "/api/collaborators",
      data: {
        collaborators: collaborators,
        trip_id: props.tripID,
      },
    })
      .then(() => {
        props.getData();
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onDelete = (id) => {
    axios({
      method: "DELETE",
      url: `/api/collaborators/${id}`,
      data: {
        trip_id: props.tripID,
      },
    }).then(() => {
      props.getData();
    })
    .catch(err => {
      console.log(err);
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

  return (
    <div id="hatch-mates">
      <Card>
        {searchBar}

        <div class="hatch-people">
          {props.collaborators.map((collaborator) => {
            return (
              <ListItemText
                key={collaborator.id}
              >
                <DeleteIcon
                  onClick={() => onDelete(collaborator.id)}
                  alt="profile-icon"
                />
                <img class="user-icon" src={HatchIcon2} alt="profile-icon" />
                {collaborator.name}
              </ListItemText>
            );
          })}
          </div>
      </Card>
    </div>
  );
}
