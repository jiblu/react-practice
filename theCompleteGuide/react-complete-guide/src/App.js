import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, Im a react App</h1>
        <Person name={"Ji"}>
          <div>I Like cakes</div>
        </Person>
        {/* <Person name={"Jung"}>My Hobbies: Racing</Person> */}
      </div>
    );
  }
}

export default App;
