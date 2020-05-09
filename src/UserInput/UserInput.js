import React from 'react';
import './UserInput.css';

const userInput = (props) =>{
    return <input type="text" onChange={props.changed} value = {props.currentName} className="input"/>
    
};

export default userInput;