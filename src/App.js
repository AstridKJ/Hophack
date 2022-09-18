import { shouldSkipGeneratingVar } from '@mui/material';
import React, { useState } from 'react';
import Popup from 'reactjs-popup'
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './App.css';
import { Button } from "@mui/material";
import {GoogleLogin} from 'react-google-login'
import { gapi } from 'gapi-script';
import {useEffect} from 'react'

const clientId = '624977166790-o02at0pfh5uh0slf4ncs4qh56pfogotc.apps.googleusercontent.com'

function App() {
  // const [ profile, setProfile ] = useState([]);

  const sTitle = {
    fontSize: 80,
    width: 1100,
    height: 40,
    paddingTop: '10px',
    paddingBottom: '20px',
    color: 'white'
  }

  const titleStyle = {
    paddingTop: '60px',
    fontFamily: 'Impact',
    fontSize: 100,
    width: 1600,
    color: '#484848',
  }

  const bodyStyle = {
    alignItem: 'center',
    fontStyle: 'normal',
    fontSize: 35,
    color: 'white',
    marginLeft: '100px',
    paddingBottom: '60px'
  }

  const text = {
    alignItem: 'center',
    fontSize: 40,
      fontFamily: 'Impact',
  }

  useEffect(() => {
    const initClient = () => {
          gapi.auth2.init({
          clientId: clientId,
          scope: ''
        });
     };
     gapi.load('client:auth2', initClient);
  });

  let navigate = useNavigate();

  const onSuccess = (res) => {
    // setProfile(res.profileObj);
    // onSuccess = false;
    navigate('/study');
    console.log('success:', res);
  };

  const onFailure = (err) => {
    console.log('failed:', err);
    // alert('Login failed')
  };

  return (
    <div className="App">
      <head>
        <title>Learn_Together</title>
      </head>
      <body class="login-bg"  style={{paddingTop: '10px'}}> 
      <h1 style = {sTitle}>Learn</h1>
      <h1 style = {titleStyle}>Together</h1>

      <GoogleLogin
        clientId={clientId}
        class="btn-login"
        render={renderProps => (
          <button onClick={renderProps.onClick} class="btn-login">Login</button>
        )}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        // isSignedIn={true}
      />

        <p style = {bodyStyle}> find your next study buddy </p>
      </body>
    </div>
  );
}

export default App;
