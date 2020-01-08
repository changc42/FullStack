import React, { Component } from 'react';

export default class Food extends Component {
  render() {
    const url = `https://source.unsplash.com/1600x900/?${this.props.name}`;
    return (
      <div>
        <h1>I love to eat {this.props.name}</h1>
        <img src={url} />
      </div>
    );
  }
}
