import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
    return (
        <div className="UserInput">
            <input type="text" onChange={(e) => props.inputHandler(e)}></input>
        </div>
    );
};

export default UserInput;