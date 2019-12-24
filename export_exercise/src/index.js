import React from 'react';
import ReactDOM from 'react-dom';
import {increment, helpful, x} from './StuffToImport';

class App extends React.Component{
  render(){;
    increment(x);
    helpful();
    return(
      x
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
