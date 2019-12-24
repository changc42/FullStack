import React from 'react';
import ReactDOM from 'react-dom';

class Fruit extends React.Component{
  static defaultProps = {
    letter: "Ahh",
  };
  render(){
    console.log(this)
    return(
      <div>{this.props.letter}</div>
    );
  }
}

export default Fruit;
