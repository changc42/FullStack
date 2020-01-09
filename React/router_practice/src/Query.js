import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Query extends Component {
    state={
        query:"",
    }

    handleChange=this.handleChange.bind(this);
    handleChange(e){
        this.setState({query:e.target.value});
    }

    handleClick=this.handleClick.bind(this);
  handleClick(){
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
          <button onClick={this.handleClick}>Go home</button>
          <input type="text" value={this.state.query} onChange={this.handleChange}/>
          <Link to={`/food/${this.state.query}`}>Go!</Link>
      </div>
    );
  }
}
