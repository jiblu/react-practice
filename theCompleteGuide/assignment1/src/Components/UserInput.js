import React from 'react';

const UserInput = (props) => {
    return (
        <div>
            <input type="text" onChange={(e) => props.inputHandler(e)}></input>
        </div>
    );
};

export default UserInput;