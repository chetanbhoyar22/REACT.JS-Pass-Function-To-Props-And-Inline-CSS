import React, { Component,useState} from 'react';
import Person from './Person.js';

function App() {
  const [my_name,my_name_function] = useState("AUDI");

  const ChangeName = () =>
  {
    my_name_function("BMW");
  }

  /*Using CSS Inline Type - Declare mystyle*/
  const mystyle =
  {
    color:'lightpink',
    backgroundColor:'purple',
    textAlign:'center',
    padding:'20px',
    margin:'10px'

  }

  return (
    <div>
      <h1 style={mystyle}>CSS - Using Inline Type</h1>
      <hr></hr>
    <Person name={my_name} clickable={ChangeName}>
    </Person>
    </div>
  );
}

export default App;
