import React, { Component } from "react"
import ButtonComponent from '../button/buttonComponent'
import "../header/headerComponent.css"

export default class AddComponent extends Component {
    constructor(props) {
        super(props)
        this.state = this.props.state
    }

    render() {
        return(
            <>
            <ButtonComponent
                methodToRun = {this.props.addAnotherDiv}
                name = "Add">
            </ButtonComponent>
            </>);
    }
}

