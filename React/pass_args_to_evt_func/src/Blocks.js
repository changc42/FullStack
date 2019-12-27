import React from 'react';
import SingleBlock from './SingleBlock';
import './Blocks.css';

class Blocks extends React.Component{
    state = {
        backgroundColor: "cyan"
    }

    static defaultProps = {
        colors: ["red","blue","yellow","green"],
    }
    
    changeColor(c){
        this.setState({backgroundColor: c});
    }

    render(){
        return(
            <div className="Blocks" style={{backgroundColor: this.state.backgroundColor}}>
                {this.props.colors.map( color => <button onClick={() => this.changeColor(color)} style={{backgroundColor: color}}>Click me!</button>)}
            </div>
        )
    }
}

export default Blocks;