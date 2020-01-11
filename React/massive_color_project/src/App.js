import React from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import {getPalette} from './ColorHelpers';

class App extends React.Component{
  render(){
    return (
      <Palette palette={getPalette(seedColors[5])}/>
    );
  }
}

export default App;
