import React, { Component } from 'react';
import './Thumbnail.css';

export default class Thumbnail extends Component {
    static defaultProps={
        dog: "default",//not same as "dogs". this is only one object which contains info on one dog
    }
  render() {
    return (
      <div className="Thumbnail">
          <img className="Thumbnail_Image" src={this.props.dog.src} />
            <h1>{this.props.dog.name}</h1>
      </div>
    );
  }
}
