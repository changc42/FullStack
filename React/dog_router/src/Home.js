import React, { Component } from 'react';
import Thumbnail from './Thumbnail';
import './Home.css';
import {Link} from 'react-router-dom';

export default class Home extends Component {
    static defaultProps={
        dogs: "default",
    }
  render() {
    return (
      <div className="Home container">
          <div className="row">
            {this.props.dogs.map(e=>
                <Link to={`/${e.name}`} className="col-lg-4">
                    <Thumbnail dog={e}/>
                </Link>
            )}
          </div>
      </div>
    );
  }
}
