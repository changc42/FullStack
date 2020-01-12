import React, { Component } from 'react';

export default class Counter extends Component {
    state={
        counter: 0,
    }

    handleClick = this.handleClick.bind(this);
    handleClick(){
        this.setState({counter: this.state.counter+1});
    }
  render() {
    return (
      <div>
          <h1>Normal class component counter</h1>
          <p>{this.state.counter}</p>
          <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}
