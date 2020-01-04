import React from 'react';
import Box from './Box';
import uuid from 'uuid/v4';

class BoxList extends React.Component{
    static defaultProps ={
        boxes: [],
        removeBox: ()=>{alert("default function")},
    }

    createBoxes(){
        let boxArray= [];
        this.props.boxes.forEach(box => {
            boxArray.push(<Box key={uuid()} height={box.height} width={box.width} color={box.color} removeBox={this.props.removeBox}/>)
        });
        return boxArray;
    }

    render(){
        return(
            <div>
                {this.createBoxes()}
            </div>
        );
    }
}

export default BoxList;