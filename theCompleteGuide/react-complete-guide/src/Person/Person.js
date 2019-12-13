import React from "react";

const person = (props) => {
    return (
        <div>
            <p>I am a person named {props.name} - {props.age}</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;