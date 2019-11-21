import React, {Component} from "react"
import './divComponent.css'
import '../button/buttonComponent'
import AddComponent from "../addButton/addComponent"

export default class DivComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        return(
            <>
            <div id="app-container">
            <div id="toDoWrapper">
                <div id="description">
                    <h4>Description</h4>
                </div>
                <div id="check">
                    <input type="checkbox" id="check"/>
                    <button class="delete">Delete</button>
                </div>
            </div>
        </div>        
        </>
        )   
    }
}