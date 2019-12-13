import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Ji', age: 31 },
      { name: 'Jung', age: 28},
      { name: 'Munji', age: 2}
    ]
  };

  render() {
    const { persons } = this.state;

    return (
      <div className="App">
        <h1>Hi, Im a react App</h1>
        <button>Switch Name</button>
        <Person name={persons[0].name} age={persons[0].age}>I like cakes</Person>
        <Person name={persons[1].name} age={persons[1].age}>I like chocolate</Person>
        <Person name={persons[2].name} age={persons[2].age}>I like pie</Person>
        <Person name={"Jung"}></Person>
      </div>
    );
  }
}

export default App;
