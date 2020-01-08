import React from 'react';
import Food from './Food';
import {Route, NavLink} from 'react-router-dom';

class App extends React.Component{
  render(){
    return (
      <div>
        <Route exact path="/food/:name" render={()=> <Food name="egg" />} />
      </div>
    );
  }
}

export default App;
