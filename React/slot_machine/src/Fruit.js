import React from 'react';
import ReactDOM from 'react-dom';

class Fruit extends React.Component{
  static defaultProps = {
    letter: "X",
  };
  render(){
    return(
      <p>{this.props.letter}</p>
    );
  }
}

export default Fruit;
