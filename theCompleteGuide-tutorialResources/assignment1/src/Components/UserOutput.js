import React from 'react';

const UserOutput = (props) => {
    const styles = {
        color: 'blue'
    }
    return (
        <div style={styles}>
            <p>My name is {props.name}.</p>
            <p>{props.name} is my name.</p>
        </div>
    )
};

export default UserOutput;