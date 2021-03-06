import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserSearch.scss";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";

export default function UserSearch(props) {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [value, setValue] = useState([]);

  useEffect(() => {
    axios.get(`/api/users`)
    .then((res) => {
      const formattedUsers = res.data.map((user) => {
        return user.user;
      });
      setUsers(formattedUsers);
    });
  }, []);

  return (
    <section className="search">
      <Autocomplete
        multiple
        id="tags-standard"
        options={users}
        getOptionLabel={(user) => user.name}
        defaultValue={users}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          props.setCollaborators(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            id="outlined-basic"
            label="Collaborators"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        )}
      />
    </section>
  );
}
