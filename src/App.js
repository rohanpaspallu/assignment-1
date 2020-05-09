import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
class App extends Component {
  
  state = {
    username : 'Rohan Deepak Paspallu'
  }


  nameChangedHandler = (event) =>{
    this.setState({username : event.target.value})
  }
  
  render() {
    return (
      <div>
        <UserInput changed={this.nameChangedHandler} currentName = {this.state.username}></UserInput>
        <UserOutput userName = "Rohan">This is a hard-coded username.</UserOutput>
        <UserOutput userName = {this.state.username}>this is a dynamic username using state.</UserOutput>
      </div>
      
    );
  }
}

export default App;
