import React, { Component } from 'react';
 
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {     //--> class based component which extends "Component"
  state = {     //--> a property of a class
    persons:[
      {id: 'asfa1', name: 'Max', age: 28 },
      {id: 'vasdf1', name:'Manu', age: 29 },
      {id: 'asdf11', name:'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    //2. Way
    //const person = Object.assign({}, this.state.persons[personIndex]);  --> Assigning to a new empty object

    person.name = event.target.value;

    // Now we need to update the array (persons array) at the position we fetched --> const personIndex

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons:persons} );
  }
  

  deletePersonHandler = (personIndex) =>{
    const persons = this.state.persons;
    persons.splice(personIndex,1);
    this.setState({persons: persons});      // --> Updating the state
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    let persons = null;
    let btnClass = '';

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event,person.id)} />
          })}
        </div>
      );
      
      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);  //assignedClasses = ['red'];
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);   // assignedClasses = ['red', 'bold'];
    }

    return (
      <div className={classes.App}>
        <h5>Hi, I'm a React App</h5>
        <p className={assignedClasses.join(' ')}>This is really working</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
          {persons}
      </div>
    );
  }
}

export default App;  //--> If you import this whole "App" file, you simply import this class --> class App . Because it is a default export.

// this --> refers to the class : class App
