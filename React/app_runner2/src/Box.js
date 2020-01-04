import React from 'react';

class Box extends React.Component{
    static defaultProps={
        height: 100,
        width: 100,
        color: "blue",
        removeBox: ()=>{alert("default function")},
    }

    handleRemove = this.handleRemove.bind(this);
    handleRemove(){
        let {height,width,color} = this.props
        this.props.removeBox({
            height: 100,
            width: 100,
            color: 'red',
        });
    }

    render(){
        return(
            <div>
                <div className="Box" style={{
                    height: `${this.props.height}px`,
                    width: `${this.props.width}px`,
                    backgroundColor: `${this.props.color}`,
                }}></div>
                <button onClick={this.handleRemove}>remove</button>
            </div>
        );
    }
}
export default Box;