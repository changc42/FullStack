import React from 'react';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Info from './Info';
import NavBar from './NavBar';
import NotFound from './NotFound';
import whiskey from "./whiskey.jpg";
import tubby from './tubby.jpg';
import hazel from './hazel.png';

class App extends React.Component{
  static defaultProps={
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }
  render(){
    return (
      <BrowserRouter>
        <NavBar dogs={this.props.dogs}/>
        <Switch>
          <Route exact path="/" render={(routerProps)=> <Home {...routerProps} dogs={this.props.dogs}/>} />
          <Route exact path="/:name" render={(routerProps)=> <Info {...routerProps} dogs={this.props.dogs}/>}/>
          
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
