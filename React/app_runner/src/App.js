import React from 'react';
import Counter from './Counter';
import CounterHooks from './CounterHooks.js';

class App extends React.Component{
  render(){
    return (
      <div>
        <Counter />
        <CounterHooks />
      </div>
        
    );
  }
}

export default App;
