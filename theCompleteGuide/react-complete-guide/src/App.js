import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState] = useState({
    persons: [
        { name: 'Ji', age: 31 },
        { name: 'Jung', age: 28},
        { name: 'Munji', age: 2}
      ]
  })

  const switchNameHandler = () => {
    console.log('Was clicked')
    setPersonsState({
      persons: [
        { name: 'Jihyun', age: 31 },
        { name: 'Junghyun', age: 28},
        { name: 'Munjidog', age: 2}
      ]
    })
  }
  const { persons } = personsState;
  
  return (
    <div className="App">
        <h1>Hi, Im a react App</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={persons[0].name} age={persons[0].age}>I like cakes</Person>
        <Person name={persons[1].name} age={persons[1].age}>I like chocolate</Person>
        <Person name={persons[2].name} age={persons[2].age}>I like pie</Person>
        <Person name={"Jung"}></Person>
      </div>
    );
}

export default app;
