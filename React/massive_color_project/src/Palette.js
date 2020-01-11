import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Slider, {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';

export default class Palette extends Component {
    static defaultProps={
        palette: {
            paletteName: "Material UI Colors",
            id: "material-ui-colors",
            emoji: "🎨",
            colors: [
              { name: "red", color: "#F44336" },
              { name: "pink", color: "#E91E63" },
              { name: "purple", color: "#9C27B0" },
            ]
          }
    }

    state = {
      level: 500,
    }

    changeLevel=this.changeLevel.bind(this);
    changeLevel(level){
      this.setState({level});
    }

  render() {
      let {palette} = this.props;
    return (
      <div className="Palette">
        <div className="Slider">
          <Slider defaultValue={this.state.level} min={100} max={900} onAfterChange={this.changeLevel} step={100}/>
        </div>
        
          {/*Navbar goes here*/}
          <div className="Palette_Colors">
              {palette.colors[this.state.level].map(e=><ColorBox color={e.hex} name={e.name}/>)}
          </div>
          {/*footer goes here*/}
      </div>
    );
  }
}
