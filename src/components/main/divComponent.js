import React, {Component} from "react"
import '../header/headerComponent.css'
import DeleteButtonComponent from "./deleteButtonComponent";

export default class DivComponent extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div id="toDoWrapper">
                <div id="description">
                    <h4>Description</h4>
                </div>
                <div id="check">
                    <input type="checkbox" id="check"/>
                    <DeleteButtonComponent methodToRun={this.props.methodToRun}></DeleteButtonComponent>
                </div>
            </div>
        )
    }
}