import React from 'react';

const UserOutput = (props) => {
    return (
        <div>
            <p>My name is {props.name}.</p>
            <p>{props.name} is my name.</p>
        </div>
    )
};

export default UserOutput;