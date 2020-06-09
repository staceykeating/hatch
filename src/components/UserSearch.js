import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserSearch.scss";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Button, TextField } from '@material-ui/core';
import InputField from "./InputField";


export default function UserSearch(props) {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  // const [collaborator, setCollaborator] = useState('');
  const [value, setValue] = useState([]);

  useEffect(() => {
    axios.get(`/api/users`)
    .then(res => {
      setUsers(res.data);
    })
  }, [])

  // function collaborators(){
  //   let user = users.filter(user => user.email === email)[0]
  // setCollaborator(user.name);
  // };

  return (
      <section className="search">
            {/* <TextField
              mulitple
              id="outlined-basic"
              className="login-input"
              label="Add Collaborator"
              variant="outlined"
              value={ email }
              onChange={ event => setEmail(event.target.value) }
              /> */}
        <Autocomplete
          multiple
          id="tags-standard"
          options={users}
          getOptionLabel={(user) => user.name}
          defaultValue={users}
          value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
        }}
        renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          id="outlined-basic"
          label="Add Collaborator"
          variant="outlined"
          value={ email }
          onChange={ event => setEmail(event.target.value) }
        />
        )}
      />
       <InputField/>
    </section>
  );
}