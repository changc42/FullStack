import React from 'react';
import ReactDOM from 'react-dom';
import Fruit from './Fruit';
import Compare from './Compare';

class App extends React.Component{
  render(){
    return(
      <div>
        <h1>Slot Machine</h1>
        <Compare />
        <Compare />
        <Compare />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
