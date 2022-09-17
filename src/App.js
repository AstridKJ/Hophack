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
    fontFamily: 'Abel',
    width: 1100,
    height: 10,
  }

  const titleStyle = {
    fontFamily: 'Impact',
    fontSize: 100,
    width: 1600,
    height: 200,
    color: '#484848',
  }

  const bodyStyle = {
    alignItem: 'center',

    fontFamily: 'Abel',
    fontStyle: 'normal',
    fontSize: 35,
    color: 'black',
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
    console.log('success:', res);
    navigate('/study');
  };

  const onFailure = (err) => {
    console.log('failed:', err);
    alert('Login failed')
  };

  return (
    <div className="App">
      <head>
        <title>Learn_Together</title>
      </head>
      <body> 
      <h1 style = {sTitle}>Learn</h1>
      <h1 style = {titleStyle}>Together</h1>

      <GoogleLogin
        clientId={clientId}
        class="btn-login"
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />

      {/* <Button 
        variant="contained" 
        class="btn-login" 
        clientId={clientId}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}>
          <text style = {text}>Login</text>
        </Button> */}
      

        <p style = {bodyStyle}> find your next study buddy </p>
      </body>
    </div>
  );
}

export default App;
