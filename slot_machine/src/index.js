import React from 'react';
import ReactDOM from 'react-dom';
import Fruit from './Fruit';

class App extends React.Component{
  render(){
    return(
      <div>
        <h1>Slot Machine</h1>
        <Fruit />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
