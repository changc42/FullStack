import React from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import {getPalette} from './ColorHelpers';
import chroma from 'chroma-js';

class App extends React.Component{
  render(){
    let color = chroma("red").darken(-1).hex();
    console.log(color);
    return (
      <div>
        <div style={{backgroundColor: "red", height:"400px"}}>3</div>
        <div style={{backgroundColor: `${color}`, height:"400px"}}>3</div>
        <Palette palette={getPalette(seedColors[5])} />
        
      </div>
        
    );
  }
}

export default App;
