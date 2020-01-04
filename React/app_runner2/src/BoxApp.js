import React from 'react';
import BoxForm from './BoxForm';
import BoxList from './BoxList';

class BoxApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            boxes: [
                {
                    height: 100,
                    width: 100,
                    color: 'red',
                },
                {
                    height: 200,
                    width: 200,
                    color: 'yellow',
                },
                {
                    height:150,
                    width:150,
                    color:"purple",
                }
            ],
        };
        this.addBox = this.addBox.bind(this);
        this.removeBox = this.removeBox.bind(this);
    }

    addBox(box){
        this.setState(state => ({boxes: [...state.boxes, box]}))
    }

    removeBox(box){
        console.log(this.state.boxes.splice( this.state.boxes.indexOf(box),1 ));
        this.setState(state => ({boxes: state.boxes.splice(state.boxes.indexOf(box), 1)}))
    }

    render(){
        return(
            <div>
                <h1>Box maker thingy</h1>
                <BoxForm addBox={this.addBox}/>
                <BoxList boxes={this.state.boxes} removeBox={this.removeBox}/>
            </div>
        );
    }
}

export default BoxApp;