import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class ApplePage extends Component {
  render() {
    return (
      <div>
          <h1>This is the Apple page!</h1>
          <NavLink to="/">Go back</NavLink>
      </div>
    );
  }
}
