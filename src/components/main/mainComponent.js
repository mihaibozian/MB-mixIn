import React, {Component} from "react"
import ButtonComponent from '../button/buttonComponent';
import DivComponent from "../divComponents/divComponent";
import AddComponent from "../addButton/addComponent";
import HeaderComponent from "../header/headerComponent"

export default class MainComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showHeader: false,
            items: [{key: 0, item: new DivComponent()}],
            currentItem: {key: 0, item: new DivComponent()},
    }
}

toggleHeader = () => {
    this.setState({ showHeader: !this.state.showHeader});
}



addAnotherDiv = () => {
    const newItem = {key: Date.now(), item: new DivComponent()};
    this.setState({
        items: [...this.state.items, newItem],
        currentItem: null
    })
}

render() {
    return (
        <>
        <ButtonComponent methodToRun={this.toggleHeader} 
                             name = {this.state.showHeader ? 'hide' : 'show'}>
            </ButtonComponent>
            { this.state.showHeader ? <HeaderComponent title="Header"></HeaderComponent> : null}
            
            <DivComponent></DivComponent>
            
            <AddComponent 
            items = {this.state.items}
            addAnotherDiv = {this.addAnotherDiv}>
            </AddComponent>   
        </>);
    
    }
}