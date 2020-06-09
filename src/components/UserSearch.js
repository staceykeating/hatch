import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserSearch.scss";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Button, TextField } from '@material-ui/core';
import InputField from "./InputField";


export default function UserSearch(props) {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [collaborator, setCollaborator] = useState('');

  useEffect(() => {
    axios.get(`/api/users`)
    .then(res => {
      setUsers(res.data);
    })
  }, [])

  function collaborators(){
    let user = users.filter(user => user.email === email)[0]
  setCollaborator(user.name);
  };

  return (
    <>
      <h1>Hatch Mates</h1>
      <section className="search">
      <form>
            <TextField
              id="outlined-basic"
              className="login-input"
              label="Add Collaborator"
              variant="outlined"
              value={ email }
              onChange={ event => setEmail(event.target.value) }
              />
            <Button
              className="submit"
              variant="contained"
              onClick={ () => collaborators() }
              >Add</Button>
            <div>
              {collaborator}
              Added as a collaborator
            </div>
          </form>
          <InputField/>
    </section>
  </>
  );
}