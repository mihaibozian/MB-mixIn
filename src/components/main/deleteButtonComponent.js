import React, {Component} from "react";

function DeleteButtonComponent(props) {
    return (<button id={props.id} class='delete' onClick={props.methodToRun}>Delete</button>)
} 

export default DeleteButtonComponent;


