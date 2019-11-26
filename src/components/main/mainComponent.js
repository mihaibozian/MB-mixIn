import React, {Component} from "react"
import DivComponent from "../main/divComponent";
import AddButton from "../main/addComponent";



export default class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
           Elements: [
            {id:0, description : 'Description'},
            {id:1, description : 'Description'},
            {id:2, description : 'Description'},
            {id:3, description : 'Description'},
        ],
        nextElementId: 4,
    }

    this.addComponent = this.addComponent.bind(this);
    this.deleteComponent = this.deleteComponent.bind(this);
    
}

    addComponent() {
        this.state.Elements.push({
            id:this.state.nextElementId,
            description: 'Description'
        })
        this.setState({nextElementId: (this.state.nextElementId + 1)});
    }

    deleteComponent(id){
        this.setState(state => ({
            Elements: state.Elements.filter(element => element.id !== id)
        }));
    }

    render(){
        return (
        <>
            <AddButton
            methodToRun={this.addComponent}
            ></AddButton>
            {this.state.Elements.map((element)=> {
                return <DivComponent
                    key={element.id} 
                    description={element.description} 
                    methodToRun={() => this.deleteComponent(element.id)}>
                    </DivComponent> 
            })}     
        </>
        );
    }
}

