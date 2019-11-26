import React, { Component } from "react";
import '../header/headerComponent';

const AddButton = ({methodToRun}) => {
    return (
            <button id="addElement" onClick={methodToRun}>Add</button>
    );
}

export default AddButton; 



