import React from "react";

const person = (props) => {
    return (
        <div>
            I am a person named {props.name} {props.children}
        </div>
    )
};

export default person;