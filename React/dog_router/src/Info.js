import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import NotFound from './NotFound';

export default class Info extends Component {
    static defaultProps={
        match: "",
        history: "",
        thirdProp: "",
        dogs: "default" //an array of objects that contains info about dogs
    }
  render() {
      let {name} = this.props.match.params;
      let {dogs} = this.props;
      let index = dogs.map(e=>e.name).indexOf(name);
    return (
        
        index>=0?(
        <h1>This is {name}'s info page</h1>
        ):(
            <NotFound />
        )
        
    );
  }
}
