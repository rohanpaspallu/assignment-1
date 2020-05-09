import React from 'react';
import './UserOutput.css'

const userOutput = (props) =>{

    return(
        <div className="output">
            <p>Hello World.</p>
            <p>{props.children}</p>
            <p>My name is {props.userName} and I am learning React.</p>
        </div>
    );
};

export default userOutput;