import React from 'react';
import ReactDOM from 'react-dom';
import Click from './Click';

class App extends React.Component{
  render(){
    return(
      <Click />
    )
  }
}


ReactDOM.render(<App />, document.getElementById("root"));
