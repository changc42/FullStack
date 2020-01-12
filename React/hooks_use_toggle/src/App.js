import React from 'react';
import Counter from './Counter';
import CounterHooks from './CounterHooks.js';
import Toggler from './Toggler';

class App extends React.Component{
  render(){
    return (
      <div>
        <Counter />
        <CounterHooks />
        <Toggler />
      </div>
        
    );
  }
}

export default App;
