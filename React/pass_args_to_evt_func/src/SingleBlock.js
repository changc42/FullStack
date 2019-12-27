import React from 'react';
import "./SingleBlock.css";

class SingleBlock extends React.Component{
    static defaultProps ={
        backgroundColor: "white",
    }

    render(){
        return(
            <div className="SingleBlock" style={{backgroundColor: this.props.backgroundColor}}>
                <h1 style={{textAlign: 'center',}}>Click me!</h1>
            </div>
        )
    }
}

export default SingleBlock;