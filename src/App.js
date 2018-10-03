/*
* React is important for rendering anything to the DOM. 
* It must be imported in a file where a component is defined, 
* Its used when the codebase is been compiled by the build tools
*/
//Component is an object or class
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// Importing Radium 
// import Radium, { StyleRoot }from 'radium'; // Radium is the default export and styleRoot is a named export from the radium package
// Importing the JS file Person.js
import Person from './Person/Person';

class App extends Component {

  state = {   
    persons : [
      {id: 'a100', name:'ajibola', age:18},
      {id: 'a200', name : 'Tomi', age: 45},
      {id: 'a300', name : 'Falz', age: 12}
    ], 
    otherState: 'some other vale',
    showPersons: false
  }
  // Declaring a Handler method
  // switchNameHandler = (newName) => {
  //   // console.log ('You clicked me');
  //   this.setState( {
  //     persons : [
  //     w  {name: newName, age: 18},
  //       {name : 'Anita', age: 75},
  //       {name : 'Falz', age: 28}
  //     ]
  //   })
  // }

 

  /* Ceating the nameChangedHandler, which changes state when 
  input text is changed. It takes in an event as argument */
  nameChangedHandler = ( event, id ) => {
    /**
     * To update the state for the person which input field is typed
     * To find the single person
     * findIndex is to find index of element in an array and get index of the element
     * find index takes in a function and execute on every element in the array
     */
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

        // or 

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState( { persons: persons} );

    // this.setState( {
    //   persons : [
    //     { name: 'Max', age: 18 },
    //     { name : event.target.value, age: 75 },
    //     { name : 'Falz', age: 26 }
    //   ]
    // })
  }

  deletePersonHandler = ( personIndex ) => {
    // fetching persons. using the slice method copies the persons array and returns a new one stored in persons
    //  const persons = this.state.persons.slice();
     /**
      * alternatively and equivalent to the slice operator above you can use the spread operator thus
      */
     const persons = [...this.state.persons];

     /* To get a new version of persons and splice one element
     this removes one element from the array*/
     persons.splice(personIndex, 1);

    //  updating the react state setState() with the new array persons
     this.setState({ persons: persons })
  }
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }
  
    // React uses the render() to render components to the screen
  render() {
    /* declaring a variable for inline-styling within the 
    constant method*/
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      borderRadius: '14px',
      padding: '8px', 
      cursor: 'pointer',
      // Using pseudo selectors
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    }; 
    // defining a person variable assigned to null
    let persons = null;
    // checking condition 
    if ( this.state.showPersons ) {
      // reassigning person variable to a JSx code
      persons = (
        <div>    
              {/* Using the map operator on the persons array  */}
              {this.state.persons.map((person, index) => {
                // Mapping the  JS object into a person component
                // Way of outputting list in react
                return <Person 
                // referencing deletePersonHandler()
                  click={() => this.deletePersonHandler(index)}
                  name={ person.name } 
                  age={ person.age } 
                  key={ person.id } 
                  /**
                   * function below gets executed upon the onChanged event
                   */
                  changed={ (event) => this.nameChangedHandler(event, person.id) }/>
              })}
        </div>
      );
         
      style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }
              /* remodified above */
          /* <Person 
            name= {this.state.persons[0].name} 
            age={this.state.persons[0].age} />
          <Person 
            name= {this .state.persons[1].name} 
            age= {this.state.persons[1].age}
            click = {this.switchNameHandler.bind(this, 'Max!')}
            changed= {this.nameChangedHandler}>My Hobbies: Racing </Person>
          <Person 
            name= {this.state.persons[2].name} 
            age= {this.state.persons[2].age} /> */

    /** 
     * .join() joins the strings with an empty space
     */ 
    const classes = [];
    // const classes = ['red', 'bold'].join(' ');// "red bold"
    if (this.state.persons.length <=2) {
      // push the red calss foth array
      classes.push('red'); // classes =  ['red']
    }
    if (this.state.persons.length <=1) {
      classes.push('bold'); // classes =  ['red', 'bold']
    }
 


    return (
      
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working</p> 
          {/* referencing the switchHandleer Method not using the () as to avoid its instant execution upon page rendering*/}
          <button 
          // scoping the inline style declared above to the button
          style={style}
          // using the] switchHandler Method
          // onClick={ () => this.switchNameHandler('Maximillian!!') }>Click to Switch</button>
          // Making a reference to the togglePersonsHandler Method
          onClick={ this.togglePersonsHandler }>Toggle Persons</button>
          {/* returning the evaluated persons variable */}
          {persons} 
        </div>
    );
  }
}

export default App; // THis is and higher order component

