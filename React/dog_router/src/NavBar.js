import React, { Component } from 'react';
import './NavBar.css';
import {NavLink} from 'react-router-dom';

export default class NavBar extends Component {
    static defaultProps = {
        dogs: "default" //array of objects containing info on dogs
    }
  render() {
    return (
      <div className="NavBar">
            <div id="NavBarTitle">
              <NavLink exact to="/" activeClassName="NavBar_Active">Home</NavLink>
            </div>
          <div className="NavBar_Names">
            {this.props.dogs.map(e=><NavLink exact to={`/${e.name}`} activeClassName="NavBar_Active">{e.name}</NavLink>)}
          </div>
      </div>
    );
  }
}
