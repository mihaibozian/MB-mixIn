import React, { Component } from "react"
import './headerComponent.css'

export default class HeaderComponent extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }

    render() {
        return ( 
            <header class="header">
            <h1>{this.props.title}</h1>
        </header>
        ) 
    }
}
