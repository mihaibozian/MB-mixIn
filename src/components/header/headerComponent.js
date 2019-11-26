import React, { Component } from "react"
import './headerComponent.css'

export default class HeaderComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            title: 'To Do list'

        }
    }

    render() {
        return ( 
            <header class="header">
            <h1>{this.state.title}</h1>
            </header>
        ) 
    }
}
