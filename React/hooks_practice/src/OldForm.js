import React, { Component } from 'react';

export default class OldForm extends Component {
    state = {
        value: "",
    }

    handleChange = this.handleChange.bind(this);
    handleChange(e){
        this.setState({value: e.target.value});
    }
  render() {
    return (
      <div>
          <h1>Old form says: {this.state.value}</h1>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }
}
