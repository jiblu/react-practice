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

  switchNameHandler = (newName) => {
    console.log('Was clicked')
    this.setState({
      persons: [
        { name: newName, age: 31 },
        { name: 'Junghyun', age: 28},
        { name: 'Munjidog', age: 2}
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
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
    return (
      <div className="App">
          <h1>Hi, Im a react App</h1>
          <button 
            style={style}
            onClick={this.togglePersonHandler}>Switch Name</button>
        
        { this.state.showPersons ? 
          <div>
            <Person name={persons[0].name} age={persons[0].age}>I like cakes</Person>
            <Person 
              name={persons[1].name} 
              age={persons[1].age}
              click={this.switchNameHandler.bind(this, 'bound!')}>I like chocolate</Person>
            <Person name={persons[2].name} age={persons[2].age}>I like pie</Person>
            <Person name={"Jung"}></Person>
          </div> : null
        }  
      </div>
      );
  }
}

export default App;
