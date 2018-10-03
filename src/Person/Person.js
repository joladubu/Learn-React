import React from 'react';
// importing Radium
// import Radium, {  }from 'radium'; // styleRoot is a named export from
import './Person.css';
// Using ES6 function decalaration  
const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };
    return(
        <div className="Person">
            {/* // Using a CLick listener with the click prop */}
            <p onClick={props.click}>I am {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            {/* creating an input for text and listening to the onChange event.
            onChange event will be fired when the value in the input changes
            */}
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
    // return <p>I am a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
};

//Exporting the function
export default person;