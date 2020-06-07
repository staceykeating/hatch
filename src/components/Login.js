import React, {useState} from 'react';
import GoogleLogin from "react-google-login";

import { Button, TextField } from '@material-ui/core';

import Nav from './Nav'
import './Login.scss'


function Login() {
  const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [url, setURL] = useState("");

  const responseGoogle = response => {
    setName(response.profileObj.name);
    console.log(response)
    // setEmail(response.profileObj.email);
    // setURL(response.profileObj.imageUrl);
      console.log(response);
  };

  return (
    <div>
      <Nav />
      <div className="main">
        <div className="login">
          <h1 className="login-header">Welcome to Hatch!</h1>
          <form>
            <TextField
              id="outlined-basic"
              className="login-input"
              label="Email"
              variant="outlined" 
              color=""/>
            <TextField 
              id="outlined-basic"
              className="login-input"
              label="Password"
              variant="outlined" />
            <Button
              className="login-submit"
              color="primary"
              variant="contained"
              >Submit</Button>
          </form>
          <span class="login-or">- OR -</span>
          <GoogleLogin
            className="google-login"
            clientId="570246861484-7fqc25skk6ad3u29n6l1kr5a4slme7si.apps.googleusercontent.com"
            buttonText="Continue with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    </div>
  );
}
export default Login;
