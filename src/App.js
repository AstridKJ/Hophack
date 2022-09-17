import React from 'react';
//import { View, Button, StyleSheet } from "react-native";
import './App.css';

function App() {

  const sTitle = {
    fontSize: 80,
    fontFamily: 'Abel',
    width: 1000,
    height: 100,
  }

  const titleStyle = {
    fontFamily: 'Impact',
    fontSize: 100,
    width: 1600,
    height: 200,
    color: '#484848',
  }

  const bodyStyle = {
    position: 'absolute',
    width: 461,
    height: 51,

    fontFamily: 'Abel',
    fontStyle: 'normal',
    fontSize: 40,
    color: 'black',
  }

  const buttonStyle = {
    button: {
      alignItem: 'center',
      justifyContent: 'center',
      paddingVertical: 20,
      paddingHorizontal: 40,
      borderRadius: 15,
      elevation: 3,
      backgroundColor: '#f6f051',
    },
    text: {
      fontSize: 25,
      fontFamily: 'Abel',
    }
  }
  return (
    <div className="App">
      <head>
        <title>Learn_Together</title>
      </head>
      <body> 
      <h1 style = {sTitle}>Learn</h1>
      <h1 style = {titleStyle}>Together</h1>
        <pressable style = {buttonStyle.button}>
          <text style = {buttonStyle.text}>Login</text>
        </pressable>
        <p style = {bodyStyle}> find your next study buddy </p>
      </body>
    </div>
  );
}

export default App;
