import React from 'react';
import ReactDOM from 'react-dom';

class Click extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      status: false,
    }
    this.foo = this.foo.bind(this);
  }
  foo(){
    this.state.status? this.setState({status:false}) : this.setState({status:true})
  }

  render(){
    return(
      <button onClick={this.foo}>Click me</button>
    )
  }
}

export default Click;
