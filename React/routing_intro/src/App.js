import React from 'react';
import {Route,NavLink} from 'react-router-dom';
import Hello from './Hello';
import Home from "./Home";
import './App.css';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <NavLink exact activeClassName="active_link" to="/">Home</NavLink>
        <NavLink exact activeClassName="active_link" to="/hello">Hello</NavLink>
        <Route exact path="/" component={Home} />
        <Route exact path="/hello" component={Hello}/>
      </div>
    );
  }
}

export default App;
