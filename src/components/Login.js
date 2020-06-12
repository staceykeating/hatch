import React, {useState, useEffect} from 'react';
import GoogleLogin from "react-google-login";
import axios from 'axios';
import { Redirect } from "react-router-dom";
import { Button, TextField } from '@material-ui/core';
import Nav from './Nav';
import Error from './Error';
import './Login.scss';
import Cookies from 'js-cookie';


function Login() {
  const [users, setUsers] = useState([])
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    emptyPassword: false,
    emptyEmail: false
  });
  const [invalidCred, setInvalidCred] = useState(false)
  const [auth, setAuth] = useState(false)

  const responseGoogle = response => {
    // setEmail(response.profileObj.email);
    // console.log(response)
    // setEmail(response.profileObj.email);
    // setURL(response.profileObj.imageUrl);
      // console.log(response);
  };

  useEffect(() => {
    axios.get('api/users')
    .then(res => {
      const formattedUsers = res.data.map(user => user.user)
      setUsers(formattedUsers);
    })
  }, [])

  function validate() {
    if (email && password) {
      setErrors({...errors, emptyPassword: false, emptyEmail: false})
      let currentUser = users.filter(user => user.email === email)[0];
      console.log("USER",currentUser)
      if (!currentUser || currentUser.password_digest !== password) {
        console.log('We cant find an account with that email');
        setInvalidCred(true)
      } else {
        Cookies.set('user',currentUser)
        setAuth(true); // redirect to dashboard
      }
    } else {
      if(!email && !password) {
        setErrors({errors, emptyEmail: true, emptyPassword: true})
      } else {
        if (!email) {
          setErrors({errors, emptyEmail: true})
        }
        if (!password) {
          setErrors({errors, emptyPassword: true})
        }
      }
    }
  }

  return auth ? (<Redirect to="/dashboard" /> ) : (
    <div>
      <Nav />
      <div id="main">
        <div className="login">
          <h1 className="login-title">Welcome to Hatch!</h1>
          <Error valid={ invalidCred }/>
          <form>
            <TextField
              id="outlined-basic"
              className="login-input"
              label="Email"
              variant="outlined"
              value={ email }
              onChange={ event => setEmail(event.target.value) }
              error={ errors.emptyEmail }
              helperText={ errors.emptyEmail ? "Please enter a valid email." : ""}
              />
            <TextField 
              id="outlined-basic"
              className="login-input"
              label="Password"
              variant="outlined" 
              type="password"
              value={ password }
              onChange={ event => setPassword(event.target.value) }
              error={ errors.emptyPassword }
              helperText={ errors.emptyPassword ? "Please enter a valid password." : ""}
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
