import { shouldSkipGeneratingVar } from '@mui/material';
import React from 'react';
import Popup from 'reactjs-popup'
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
//import { View, Button, StyleSheet } from "react-native";
import './App.css';

function App() {

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
    fontSize: 40,
    color: 'black',
  }

  const button = {
    alignItem: 'center',
    justifyContent: 'center',
    padding: '30px',
    borderRadius: 15,
    backgroundColor: '#f6f051',
  }

  const text = {
    alignItem: 'center',
    fontSize: 50,
      fontFamily: 'Impact',
  }

  let navigate = useNavigate();
  const loginClick = () =>{ 
    navigate('/study');
  }

  return (
    <div className="App">
      <head>
        <title>Learn_Together</title>
      </head>
      <body> 
      <h1 style = {sTitle}>Learn</h1>
      <h1 style = {titleStyle}>Together</h1>

        <Popup trigger = {<pressable style = {button} onClick = {loginClick}>
            <text style = {text}>Login</text>
          </pressable>} position = 'center'>
        </Popup>

        <p style = {bodyStyle}> find your next study buddy </p>
      </body>
    </div>
  );
}

export default App;
