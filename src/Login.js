import React, {useState} from 'react';
import GoogleLogin from "react-google-login";


function Login() {
  const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [url, setURL] = useState("");

  const responseGoogle = response => {
    setName(response.profileObj.name);
    // setEmail(response.profileObj.email);
    // setURL(response.profileObj.imageUrl);
      console.log(response);
  };

  return (
    <div className="Login">
    <h1>Login with Google</h1>
    <h2> Welcome: {name}</h2>
    <GoogleLogin
      clientId="570246861484-7fqc25skk6ad3u29n6l1kr5a4slme7si.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  </div>
  );
}
export default Login;
