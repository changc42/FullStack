import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

export default class Food extends Component {
  static defaultProps={
    
  }
  render() {
    const url = `https://source.unsplash.com/1600x900/?${this.props.match.params.foodName}`;
    const url2 = `https://source.unsplash.com/1600x900/?${this.props.match.params.drinkName}`;
    console.log(this.props.stuff)
    return (
      <div>
        {/\d/.test(this.props.match.params.foodName) ? 
          <Redirect to="/" />
          :
          <div>
            <h1>I love to eat {this.props.match.params.foodName} and {this.props.match.params.drinkName}</h1>
            <img src={url} />
            <img src={url2} />
          </div>
        }
      </div>
    );
  }
}
