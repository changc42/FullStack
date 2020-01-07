import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import VendingMachine from './VendingMachine';
import './App.css';

class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <VendingMachine />
      </BrowserRouter>
    );
  }
}

export default App;
