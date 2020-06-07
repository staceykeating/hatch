import React, {useState} from 'react';
import GoogleLogin from "react-google-login";
import bcrypt from 'bcryptjs';

import { Button, TextField } from '@material-ui/core';

import Nav from './Nav'
import './Login.scss'


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const responseGoogle = response => {
    // setEmail(response.profileObj.email);
    // console.log(response)
    // setEmail(response.profileObj.email);
    // setURL(response.profileObj.imageUrl);
      // console.log(response);
  };

  function validate() {
   if (email) {
    setEmailError(false)
   } else {
    setEmailError(true)
   }
   if (password) {
    setPasswordError(false)
    // bcrypt.hashSync(password, 10)
   } else {
    setPasswordError(true)
   }
  }

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
              value={ email }
              onChange={ event => setEmail(event.target.value) }
              error={ emailError }
              helperText={ emailError ? "Please enter a valid email." : ""}
              />
            <TextField 
              id="outlined-basic"
              className="login-input"
              label="Password"
              variant="outlined" 
              type="password"
              value={ password }
              onChange={ event => setPassword(event.target.value) }
              error={ passwordError }
              helperText={ passwordError ? "Please enter a valid password." : ""}
              />
            <Button
              className="login-submit"
              color="primary"
              variant="contained"
              onClick={() => validate()}
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
