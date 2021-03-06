import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
        { name: 'Ji', age: 31 },
        { name: 'Jung', age: 28},
        { name: 'Munji', age: 2}
    ],
    showPersons: false
  };


  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    let persons = this.state.persons;
    persons.splice(personIndex - 1, 1)
    this.setState({
      persons: persons
    })
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    const { persons } = this.state;

    let people = null;
    if (this.state.showPersons) {
      people = (
        <div>
          {this.state.persons.map( (prsn, index) => {
            return <Person 
              name={prsn.name} 
              age={prsn.age}
              key={index}
              click={() => this.deletePersonHandler(index)}/>
          })}
        </div>
      )
    }

    return (
      <div className="App">
          <h1>Hi, Im a react App</h1>
          <button 
            style={style}
            onClick={this.togglePersonHandler}>Toggle showPersons</button>
          {people}
      </div>
      );
  }
}

export default App;
