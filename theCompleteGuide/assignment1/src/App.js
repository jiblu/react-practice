import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

class App extends Component {
  state = {
    userName: 'Ji'
  }

  // this.inputHandler() = this.inputHandler.bind(this);

  inputHandler(e) {
    console.log(e.target.value)
  }

  render() {
    return (
      <div className="App">
        <UserInput inputHandler={this.inputHandler}/>
        <UserOutput name={this.state.userName}/>
        <UserOutput name={"Jung"}/>
      </div>
    );
  }

}

export default App;
